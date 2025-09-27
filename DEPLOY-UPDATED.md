# 🚀 Guia de Deploy GitHub Pages - ATUALIZADO

## ❌ Problemas encontrados:
```
1. Permission to felipebianchini2006/InfoCursos-ProjetoIHC.git denied to github-actions[bot]
2. Error: This request has been automatically failed because it uses a deprecated version of actions/upload-artifact: v3
```

## ✅ Correções aplicadas:
- Atualizadas todas as actions para versões mais recentes (v4)
- Criado workflow separado para build e deploy
- Adicionado workflow_dispatch para execução manual

## ✅ Soluções implementadas:

### **Opção 1: Deploy Manual (MAIS SIMPLES - RECOMENDADO)**

1. **Fazer commit e push dos arquivos:**
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

2. **Configurar GitHub Pages manualmente:**
   - Vá para: `https://github.com/felipebianchini2006/InfoCursos-ProjetoIHC/settings/pages`
   - Em "Source", selecione: **"Deploy from a branch"**
   - Em "Branch", selecione: **"main"**
   - Em "Folder", selecione: **"/docs"**
   - Clique em **"Save"**

3. **Sempre que quiser atualizar o site:**
   ```bash
   npm run build
   git add docs/
   git commit -m "Update site"
   git push origin main
   ```

### **Opção 2: GitHub Actions (Método Novo)**

Agora temos 3 workflows disponíveis:
- `deploy.yml` - Método oficial atualizado
- `deploy-alternative.yml` - Método clássico 
- `build-deploy.yml` - Separação build/deploy (RECOMENDADO)

**Para configurar:**

1. Vá para Settings > Pages
2. Em "Source", selecione: **"GitHub Actions"**
3. O workflow `build-deploy.yml` rodará automaticamente
4. Você também pode executar manualmente em Actions > Build and Deploy to GitHub Pages > Run workflow

### **Opção 3: GitHub Actions (Método Clássico)**

Use o arquivo `deploy-alternative.yml` se a Opção 2 não funcionar.

## 🎯 **RECOMENDAÇÃO:**

**Use a Opção 1 (Deploy Manual)** - É mais simples e confiável:

1. ✅ Sem problemas de permissões
2. ✅ Você controla quando fazer deploy
3. ✅ Funciona em qualquer repositório
4. ✅ Mais rápido para configurar

## 🔧 **Comandos para deploy manual:**

```bash
# 1. Build do projeto
npm run build

# 2. Commit e push
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

## 🌐 **URL do seu site:**
**https://felipebianchini2006.github.io/InfoCursos-ProjetoIHC/**

## ⚠️ **Importante:**
- O site só fica online depois de configurar nas Settings > Pages
- Leva alguns minutos para processar após o primeiro deploy
- Sempre rode `npm run build` antes de fazer commit se mudou algum código
