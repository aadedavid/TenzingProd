from fastapi import FastAPI, APIRouter
from starlette.middleware.cors import CORSMiddleware
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List
import uuid
from datetime import datetime

# Fallback sem MongoDB para deploy inicial
MONGO_AVAILABLE = False

try:
    from motor.motor_asyncio import AsyncIOMotorClient
    from dotenv import load_dotenv
    
    ROOT_DIR = Path(__file__).parent
    load_dotenv(ROOT_DIR / '.env')
    
    # MongoDB connection
    mongo_url = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
    client = AsyncIOMotorClient(mongo_url)
    db = client[os.environ.get('DB_NAME', 'tenzing_production')]
    MONGO_AVAILABLE = True
    
except Exception as e:
    print(f"MongoDB não disponível: {e}")
    print("Rodando em modo demo...")

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# In-memory storage for demo
demo_storage = []

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {
        "message": "Tenzing API - Sherpas Digitais", 
        "status": "running",
        "mongodb": "connected" if MONGO_AVAILABLE else "demo_mode"
    }

@api_router.get("/health")
async def health():
    return {"status": "healthy", "mongodb": MONGO_AVAILABLE}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    
    if MONGO_AVAILABLE:
        try:
            _ = await db.status_checks.insert_one(status_obj.dict())
        except Exception as e:
            print(f"MongoDB error: {e}")
            demo_storage.append(status_obj.dict())
    else:
        demo_storage.append(status_obj.dict())
    
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    if MONGO_AVAILABLE:
        try:
            status_checks = await db.status_checks.find().to_list(1000)
            return [StatusCheck(**status_check) for status_check in status_checks]
        except Exception as e:
            print(f"MongoDB error: {e}")
            return [StatusCheck(**item) for item in demo_storage]
    else:
        return [StatusCheck(**item) for item in demo_storage]

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("startup")
async def startup():
    logger.info("🚀 Tenzing API iniciada!")
    logger.info(f"MongoDB: {'✅ Conectado' if MONGO_AVAILABLE else '⚠️ Demo mode'}")

@app.on_event("shutdown")
async def shutdown_db_client():
    if MONGO_AVAILABLE:
        client.close()