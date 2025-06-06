# 🚀 GUIA DE DEPLOY COMPLETO - TENZING.COM.BR

## ✅ Preparação Concluída:
- ✅ Imagens da equipe integradas
- ✅ MongoDB Atlas configurado
- ✅ Build do frontend funcionando
- ✅ Variáveis de ambiente preparadas

## 📋 PRÓXIMOS PASSOS:

### 1. DEPLOY BACKEND (Railway)
1. Acesse: https://railway.app/
2. Faça login com sua conta
3. Clique em "New Project" → "Deploy from GitHub repo"
4. Conecte este repositório
5. Configure as variáveis:
   - `MONGO_URL`: mongodb+srv://EmergentTenzing@admin:PassEmergTenz987@mongoclusteremergent.1zh6lmp.mongodb.net/
   - `DB_NAME`: tenzing_production
   - `PORT`: 8000
6. Anote a URL do backend gerada (ex: https://backend-production-xxx.up.railway.app)

### 2. ATUALIZAR FRONTEND COM URL DO BACKEND
Edite `/app/frontend/.env`:
```
REACT_APP_BACKEND_URL=https://SEU-BACKEND-RAILWAY.up.railway.app
```

### 3. DEPLOY FRONTEND (Vercel)
1. Acesse: https://vercel.com/
2. Faça login
3. Clique em "New Project"
4. Importe este repositório
5. Configure:
   - Root Directory: `frontend`
   - Build Command: `yarn build`
   - Output Directory: `build`
6. Anote a URL do frontend (ex: https://tenzing-xxx.vercel.app)

### 4. CONFIGURAR DOMÍNIO NA VERCEL
1. No projeto Vercel, vá em "Settings" → "Domains"
2. Adicione: `tenzing.com.br` e `www.tenzing.com.br`
3. Vercel mostrará os DNS necessários

### 5. CONFIGURAR DNS NO GODADDY
1. Acesse o painel GoDaddy
2. Vá em "DNS Management" para tenzing.com.br
3. Configure:
   - Tipo A: `@` → IP da Vercel (será fornecido)
   - Tipo CNAME: `www` → `tenzing-xxx.vercel.app`
   - Ou use CNAME: `@` → `cname.vercel-dns.com`

### 6. SSL E CERTIFICADOS
- Vercel configura SSL automaticamente
- Railway também tem SSL automático

## 🔧 ARQUIVOS IMPORTANTES CRIADOS:
- `/app/frontend/src/teamImages.js` - Imagens da equipe em base64
- `/app/requirements.txt` - Dependências Python
- `/app/main.py` - Entry point para Railway
- `/app/railway.json` - Configuração Railway

## 🎯 CUSTOS ESTIMADOS:
- Railway: ~$5-10/mês
- MongoDB Atlas: Grátis (até 512MB)
- Vercel: Grátis (domínio personalizado incluído)
- **Total: ~$5-10/mês**

## 📱 FUNCIONALIDADES ATIVAS:
- ✅ Site responsivo completo
- ✅ Imagens reais da equipe
- ✅ WhatsApp integrado
- ✅ Múltiplos idiomas (PT/EN)
- ✅ SEO otimizado
- ✅ Performance otimizada

## 🚀 PRÓXIMA FASE (CMS + Blog):
- Sistema de blog para artigos
- Integração Medium/LinkedIn
- Painel admin para edições
- SEO automático para artigos

---

**Quer que eu continue com alguma etapa específica ou prefere seguir este guia?**