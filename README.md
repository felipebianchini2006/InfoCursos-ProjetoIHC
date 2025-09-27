# InfoCursos

Aplicaçã## Como executar localmente
```bash
npm install
npm run dev
```

## Deploy para GitHub Pages
```bash
npm run build:gh-pages
```

Depois:
1. Faça commit e push dos arquivos
2. Vá para Settings > Pages no seu repositório GitHub
3. Selecione "Deploy from a branch"
4. Escolha "main" branch e "/docs" folder
5. Clique em "Save"

## GitHub Actions (Deploy Automático)
O projeto inclui workflow do GitHub Actions que faz deploy automático quando você faz push para a branch main.nvolvida em React para a plataforma InfoCursos. O projeto moderniza o site original com uma interface atual, responsiva e totalmente componentizada.

## 🌐 Demo
Acesse o site: [https://felipebianchini2006.github.io/InfoCursos-ProjetoIHC/](https://felipebianchini2006.github.io/InfoCursos-ProjetoIHC/)

## Funcionalidades
- Landing page com hero interativo, métricas e destaques de cursos
- Catálogo filtrável de trilhas de tecnologia
- Sessão de novidades com cards editoriais
- Páginas institucionais (Sobre, Contato) com formulário funcional
- Fluxo de autenticação (Login, Cadastro, Recuperar senha)
- Suporte a tema claro/escuro com persistência em localStorage
- Plugin VLibras integrado para acessibilidade
- Controles de acessibilidade (tamanho da fonte, contraste, daltonismo)

## Tecnologias
- React 19 + Vite
- React Router 7
- React Icons
- CSS moderno com variáveis e design responsivo
- VLibras (plugin do governo para tradução em Libras)

## Como executar
`ash
npm install
npm run dev
`

Para gerar a versão de produção:
`ash
npm run build
`

As páginas originais em HTML foram preservadas em legacy/ como referência.
