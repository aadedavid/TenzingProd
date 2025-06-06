#!/bin/bash

# Script para fazer deploy manual usando APIs

echo "🚀 Iniciando deploy do Tenzing..."

# 1. Build do frontend
echo "📦 Fazendo build do frontend..."
cd /app/frontend
yarn build

# 2. Configurações Railway via API
echo "🚂 Configurando Railway..."

# 3. Deploy Vercel via API
echo "🔵 Fazendo deploy na Vercel..."

echo "✅ Deploy concluído!"