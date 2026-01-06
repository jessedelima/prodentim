# ProDentim 2.0 — Landing Page Responsiva

## Visão Geral
- Este projeto é uma landing page estática focada em conversão para ProDentim.
- Estrutura simples: um arquivo HTML principal e um arquivo JavaScript para interação e responsividade.
- Pronta para visualização em celular, tablet, notebook e desktop.

## Arquivos Principais
- `index.html`: markup e estilos básicos, componentes de navegação, seções de produto, depoimentos e FAQ.
- `script.js`: controla menu hambúrguer, acordeão do FAQ, rolagem suave entre seções e comportamento de imagens clicáveis.

## Como Visualizar Localmente
- Requisitos: Python instalado (qualquer versão com `http.server`).
- Passos no Windows:

```bash
cd C:\Users\User\Documents\Projets\prodentim2.0
python -m http.server 5500
```

- Abra no navegador:
- http://localhost:5500/index.html

## Responsividade
- Em telas pequenas (celular/tablet) aparece um botão hambúrguer ☰.
- O botão abre um menu lateral com links para About, Ingredients, FAQ e Order Now.
- O overlay fecha o menu ao clicar fora; ao clicar em um link, o menu também se fecha.
- Em telas grandes (notebook/desktop) o menu superior fica sempre visível.

## Links de Afiliado
- Editar no `script.js` as constantes com seus links:
- `LNK1` (2 frascos), `LNK2` (6 frascos, maior conversão), `LNK3` (3 frascos).
- Imagens sem estar dentro de um `<a>` redirecionam para `LNK2` ao clicar.

## Navegação Suave
- Anchors do tipo `href="#section"` fazem rolagem suave até a seção correspondente.
- O histórico é atualizado para permitir compartilhamento do link com âncora.

## Estrutura do Menu Móvel
- Elementos esperados no HTML:
  - Botão: `#mobileMenuBtn`
  - Menu: `#mobileMenu`
  - Overlay: `#mobileOverlay`
- O CSS mínimo está em `index.html` (classes `.mobile-menu`, `.mobile-menu-btn`, `.mobile-overlay`).

## SEO e Performance (Opcional)
- Adicionar `alt` em imagens (já aplicado nas principais).
- Aplicar `loading="lazy"` em imagens não críticas.
- Preconnect para fontes Google pode reduzir latência.
- Ajustar `meta robots` conforme intenção de indexação (atualmente bloqueia snippets/imagens).

## Deploy
- Por ser estático, pode ser publicado em qualquer serviço de hospedagem de arquivos:
  - GitHub Pages, Netlify, Vercel, Firebase Hosting, S3 + CloudFront, etc.
- Basta enviar `index.html` e `script.js` (e quaisquer ativos locais, se houver).

## Solução de Problemas
- Tela branca ao acessar raiz `/`: use o caminho direto `.../index.html`.
- Cache antigo: force um reload (Ctrl+F5) ou abra em modo anônimo.
- Menu não abre: confirme que existem os elementos `#mobileMenuBtn`, `#mobileMenu`, `#mobileOverlay` no HTML.

## Licença
- Uso livre para fins de landing/marketing relacionados a ProDentim. Ajuste conforme necessidade do seu projeto.

