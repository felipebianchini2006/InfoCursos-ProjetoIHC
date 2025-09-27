# 🚀 Guia Completo para Deploy no GitHub Pages

## ✅ Configurações já aplicadas:

### 1. **Vite Config**
- ✅ `base: '/InfoCursos-ProjetoIHC/'` - Configurado para o caminho correto do GitHub Pages
- ✅ `outDir: 'docs'` - Build gera na pasta docs (padrão do GitHub Pages)
- ✅ Assets organizados na pasta assets/

### 2. **Scripts do Package.json**
- ✅ `npm run build:gh-pages` - Script específico para GitHub Pages
- ✅ Criação automática do arquivo `.nojekyll`

### 3. **GitHub Actions**
- ✅ Workflow automático em `.github/workflows/deploy.yml`
- ✅ Deploy automático quando fizer push na branch main

### 4. **Arquivos do Build**
- ✅ Pasta `docs/` com todos os assets
- ✅ Arquivo `.nojekyll` para evitar processamento Jekyll
- ✅ Caminhos corretos para GitHub Pages

## 📋 Próximos passos:

### **Opção 1: Deploy Manual (Recomendado para primeira vez)**

1. **Fazer commit e push:**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

2. **Configurar GitHub Pages:**
   - Vá para: `https://github.com/felipebianchini2006/InfoCursos-ProjetoIHC/settings/pages`
   - Em "Source", selecione: **"Deploy from a branch"**
   - Em "Branch", selecione: **"main"**
   - Em "Folder", selecione: **"/docs"**
   - Clique em **"Save"**

3. **Aguardar deploy:**
   - O GitHub levará alguns minutos para processar
   - O site ficará disponível em: `https://felipebianchini2006.github.io/InfoCursos-ProjetoIHC/`

### **Opção 2: Deploy Automático (Futuro)**

Após configurar uma vez manualmente, o GitHub Actions fará deploys automáticos sempre que você fizer push na branch main.

## 🔧 Comandos úteis:

```bash
# Desenvolvimento local
npm run dev

# Build para GitHub Pages
npm run build:gh-pages

# Preview do build localmente
npm run preview
```

## 🌐 URL Final:
Após o deploy: **https://felipebianchini2006.github.io/InfoCursos-ProjetoIHC/**

## ⚠️ Possíveis problemas e soluções:

1. **404 na página inicial:** Verifique se o `base` no vite.config.js está correto
2. **Assets não carregam:** Certifique-se que o `.nojekyll` existe na pasta docs
3. **Roteamento não funciona:** GitHub Pages não suporta SPA routing por padrão (esse projeto usa hash routing para resolver isso)
4. **Erro "echo. not found":** ✅ CORRIGIDO - Agora usa comando Node.js multiplataforma
5. **Aviso sobre Node.js 18:** O GitHub Actions usa Node.js 20+ automaticamente

## 🎉 Funcionalidades incluídas:
- ✅ Site responsivo e moderno
- ✅ Plugin VLibras funcionando
- ✅ Tema claro/escuro
- ✅ Controles de acessibilidade
- ✅ Todas as páginas funcionais
