# Site BAIAÊ

Site estático (HTML + CSS + JavaScript), sem build e sem dependências.

## Estrutura
- index.html — páginas (início e subpáginas de serviços)
- style.css — estilos
- script.js — navegação entre subpáginas
- favicon.svg — ícone da aba
- assets/fundo.jpg — imagem de fundo do topo
- vercel.json — configuração da Vercel (URLs limpas, cache e cabeçalhos)

O layout é responsivo: celular (até 768px), tablet e desktop usam o mesmo código (regras em "Versão mobile" no final do style.css).

## Publicar na Vercel

### Opção A — pelo GitHub
1. Suba estes arquivos para um repositório no GitHub (index.html na raiz).
2. Na Vercel: Add New > Project > importe o repositório.
3. Framework Preset: Other. Deixe Build Command e Output Directory em branco.
4. Deploy.

### Opção B — pelo terminal
```
npm i -g vercel
cd pasta-do-site
vercel --prod
```

Depois, em Settings > Domains, adicione seu domínio.

Contato: o botão "Entre em contato" usa links wa.me no index.html.
