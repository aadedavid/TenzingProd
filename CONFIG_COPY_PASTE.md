# 🔧 CONFIGURAÇÕES PRONTAS PARA COPY/PASTE

## 🚂 RAILWAY - Variáveis de Ambiente:
```
MONGO_URL=mongodb+srv://EmergentTenzing@admin:PassEmergTenz987@mongoclusteremergent.1zh6lmp.mongodb.net/
DB_NAME=tenzing_production
PORT=8000
```

## 🔵 VERCEL - Configurações:
```
Framework: Create React App
Root Directory: frontend
Build Command: yarn build
Output Directory: build
Install Command: yarn install
```

## 🌐 DOMÍNIOS:
```
Primary: tenzing.com.br
Alias: www.tenzing.com.br
```

## 📋 RAILWAY START COMMAND:
```
python main.py
```

## 🔄 AFTER RAILWAY DEPLOY:
1. Copie a URL gerada (ex: https://tenzing-backend-production-xxx.up.railway.app)
2. Atualize em `/frontend/.env`:
   ```
   REACT_APP_BACKEND_URL=https://SUA-URL-RAILWAY-AQUI.up.railway.app
   ```
3. Commit e push as mudanças
4. Deploy no Vercel

## ✅ CHECKLIST FINAL:
- [ ] Railway backend funcionando
- [ ] Vercel frontend funcionando  
- [ ] Domínio configurado
- [ ] SSL ativo
- [ ] Teste: imagens da equipe
- [ ] Teste: botão WhatsApp
- [ ] Teste: mobile responsivo

## 🎯 URLs IMPORTANTES:
- Railway: https://railway.app/new
- Vercel: https://vercel.com/new  
- GoDaddy DNS: https://dcc.godaddy.com/manage/dns