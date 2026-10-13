---
name: "Ian Jerônimo · Advocacia Criminal"
description: "Identidade institucional com preto, dourado e prata, leitura clara e presença pessoal."
colors:
  ink: "#090d0e"
  ink-soft: "#505650"
  ivory: "#f6f6f3"
  paper: "#ffffff"
  brand-50: "#f1f1ec"
  brand-100: "#e5e4dc"
  brand-200: "#f1d58f"
  brand-300: "#dfc172"
  brand-400: "#d6b557"
  brand-500: "#e1b64d"
  brand-600: "#bd8c27"
  brand-700: "#76581c"
  brand-800: "#56431c"
  brand-900: "#282820"
  brand-950: "#090d0e"
  silver: "#92938e"
  marble: "#e3e2db"
  hero-muted: "#c9ccca"
  review-stars: "#9a711d"
typography:
  display:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "2.45rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.07
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "1.8rem"
    fontWeight: 700
    lineHeight: 1.25
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.75rem"
  label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "10px"
    fontWeight: 600
    letterSpacing: "0.13em"
rounded:
  square: "0"
  sm: "0.25rem"
  modal-mobile: "1rem"
  full: "9999px"
spacing:
  icon-gap: "0.5rem"
  card-gap: "1rem"
  gutter-mobile: "1.25rem"
  gutter-tablet: "2rem"
  gutter-desktop: "3rem"
  card-mobile: "1.75rem"
  card-desktop: "2rem"
  section-mobile: "5rem"
  section-tablet: "7rem"
  section-desktop: "8rem"
components:
  button-primary-sm:
    backgroundColor: "{colors.brand-500}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "0.75rem 1.25rem"
  button-primary-md:
    backgroundColor: "{colors.brand-500}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "0.875rem 1.5rem"
  button-primary-lg:
    backgroundColor: "{colors.brand-500}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "1rem 1.75rem"
  button-primary-hover:
    backgroundColor: "{colors.brand-400}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
  button-outline:
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "0.75rem 1.25rem"
  button-inverse:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.brand-800}"
    rounded: "{rounded.full}"
    padding: "1rem 1.5rem"
  area-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "{spacing.card-mobile}"
  dialog:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.ink}"
    rounded: "{rounded.modal-mobile}"
    padding: "1.75rem"
---

# Design System: Ian Jerônimo · Advocacia Criminal

## Overview

**Creative North Star: "Clareza e presença"**

A identidade usa o logo IJ fornecido como referência e coloca a presença real de Ian Jerônimo em destaque. O hero preto contrasta com títulos brancos e dourado; as seções de leitura usam branco e neutros próximos da prata. O dourado vivo também identifica as ações com texto preto.

Montserrat em peso forte dá aos títulos um caráter geométrico próximo à assinatura da marca; Manrope mantém a leitura clara. O logo permanece íntegro. O favicon ICO, o PNG e o ícone Apple são derivados do emblema IJ recortado do logo fornecido, sem reconstrução tipográfica.

**Key Characteristics:**
- Identidade IJ preservada com preto, dourado e prata.
- Títulos geométricos em Montserrat bold e leitura em Manrope.
- Hero preto e ações douradas com texto preto.
- Superfícies brancas e neutras para leitura.
- Fotografia real e avaliações completas com autor e fonte.

## Colors

A paleta combina preto profundo, dourado vivo e neutros claros com caráter prateado. O frontmatter registra os valores normativos extraídos de app/globals.css e dos componentes da página.

### Primary

- **Dourado vivo**: brand-500 e o alias gold identificam os botões principais, a ênfase no hero e o encerramento da página. brand-400 é o hover do botão; o foco usa dourado profundo nas superfícies claras e dourado vivo no hero e rodapé.
- **Dourado profundo**: brand-700 serve a texto e links sobre superfícies claras; brand-800 aparece nas ações auxiliares.
- **Dourado claro**: brand-200 destaca títulos auxiliares sobre preto.
- **Escala de apoio**: brand-50 e brand-100 compõem fundos neutros e suportes de imagem. brand-600 aparece em detalhes lineares. brand-300 e brand-900 permanecem declarados na escala, sem exigir nova aplicação visual.
- **Dourado das estrelas**: review-stars dá contraste às cinco estrelas dos cartões de avaliações.

### Neutral

- **Preto profundo**: ink e brand-950 compartilham o mesmo valor. Compõem hero, rodapé, seção de destaque, texto e sobreposições.
- **Cinza de leitura**: ink-soft organiza parágrafos e navegação claros; hero-muted mantém o texto de apoio legível sobre preto.
- **Neutro claro**: ivory aproxima as superfícies de leitura da prata da identidade.
- **Papel**: paper separa cartões e seções claras.
- **Prata discreta e mármore**: silver e marble são neutros declarados; o logo fornecido expressa o detalhe prateado.

**The Contrast Rule.** Use dourado vivo com texto preto nas ações; mantenha branco e dourado claro sobre preto, reservando dourado profundo para texto sobre superfícies claras.

## Typography

**Display Font:** Montserrat, com system-ui e sans-serif como alternativas.
**Body Font:** Manrope, com system-ui e sans-serif como alternativas.

Os títulos usam Montserrat em peso 700, com geometria firme. A leitura e as ações usam Manrope; navegação e botões combinam peso semibold, caixa alta e tracking. O layout carrega Montserrat nos pesos 500, 600, 700 e 800, e Manrope nos pesos 300 a 700. A classe histórica font-serif aplica Montserrat e recebe peso 700; a classe italic é normalizada para font-style normal.

### Hierarchy

- **Display**: o título principal parte da definição do frontmatter, sobe para 3rem a partir de sm e 3.65rem a partir de lg.
- **Headline**: títulos de seção sobem de 2.25rem para 3rem em sm e 3.55rem em lg. O título biográfico tem line-height 1.08 e chega a 3.45rem.
- **Title**: cartões de atuação usam a definição do frontmatter; outros títulos de apoio usam 1.5rem ou 1.875rem.
- **Body**: leitura principal usa a definição do frontmatter em blocos de até 36rem; no hero cresce para 1rem com line-height 2rem em sm. Descrições compactas usam 13px e line-height 1.5rem; avaliações usam 15px e line-height 1.75rem.
- **Label**: botões pequenos e legendas usam a definição do frontmatter em caixa alta. Botões médios e grandes usam 12px e tracking 0.14em; navegação usa 0.68rem, peso 600 e tracking 0.08em.

**The Emphasis Rule.** Preserve Montserrat bold e estilo normal nos títulos; destaque expressões curtas pela cor, sem itálico.

## Layout

O conteúdo central usa largura máxima de 80rem, com gutters definidos no frontmatter. A navegação permanece fixa no topo; mede 76px no mobile e 88px a partir de sm. Os links de navegação desktop aparecem em lg; abaixo disso, um botão abre a lista móvel.

As grades empilham no mobile. Cartões de atuação passam a duas colunas em sm e três em lg. Blocos editoriais alternam texto e imagem em duas colunas em lg; a peça de conteúdo jurídico divide imagem e texto em md. O ritmo de seção usa a escala do frontmatter, com intervalos mais amplos no desktop.

O hero preto mantém texto e retrato lado a lado em lg, com proporção de colunas 1.05:0.95. Seu retrato tem proporção 0.82 e limite de 460px; a foto biográfica usa 3:4 e limite de 560px. A foto de plenário é contida em 16:9, preservando o conteúdo. Cada uma das três fotografias aparece uma vez: retrato no hero, atendimento na biografia e plenário no conteúdo. Essa distribuição descreve a página atual e não impõe composição a futuras telas.

## Elevation & Depth

A profundidade vem principalmente da alternância tonal, bordas finas e sobreposição de pequenas placas nas fotografias. A sombra card, registrada no sidecar, serve a essas placas, ao modal e ao hover dos cartões; os cartões permanecem planos no estado de repouso. A moldura girada do retrato e círculos lineares pontuais mantêm o detalhe visual discreto.

**The Resting Surface Rule.** Preserve cartões informativos planos no repouso e use a sombra card na interação ou nas peças sobrepostas.

O conteúdo das seções é visível desde a primeira renderização, inclusive fora da viewport; os elementos editoriais usam initial=false. As variantes de revelação permanecem declaradas, mas não devem ocultar a leitura inicial. Menu e modal mantêm animações de interação; MotionConfig respeita a preferência do usuário por movimento reduzido. A rolagem suave também é desativada nessa preferência.

## Shapes

Painéis, fotografias e cartões têm cantos retos. Pílulas e círculos distinguem ações, ícones e controles. O modal móvel usa apenas os cantos superiores arredondados; a partir de sm muda para o raio sm em todos os cantos. Bordas são de 1px, normalmente com ink em 10% ou 15% de opacidade; detalhes dourados usam opacidade reduzida.

## Components

### Buttons

As ações são compactas, claras e arredondadas, com fundo dourado vivo. O botão primário usa os três tamanhos do frontmatter, texto preto, peso 600 e caixa alta. No hover, muda para brand-400 e sobe 2px em 200ms. Seu foco usa outline de 2px em brand-700 e offset de 3px.

O botão outline usa borda ink com 15% de opacidade; no hover, borda e texto mudam para brand-700. O botão inverse é branco com texto brand-800 sobre o encerramento dourado vivo, com subida de 2px no hover. Controles circulares usam a mesma linguagem de borda fina. O foco global usa brand-700 com outline de 2px e offset de 4px; no hero e no rodapé, a cor do outline muda para brand-500.

### Cards / Containers

Cartões de atuação usam papel, borda ink em 10%, cantos retos e o padding do frontmatter, ampliado no tablet. No hover sobem 4px, recebem borda brand-600 em 40% e sombra card, com transição de 300ms. Ícones ficam em círculos de 48px sobre brand-50, com traço dourado profundo. O título é geométrico e forte e o comando auxiliar permanece pequeno, em caixa alta.

Painéis de localização e Google mantêm borda leve e hierarquia simples: ícone circular, título em Montserrat e texto secundário. Não há campos de formulário no produto atual.

### Navigation

A barra usa ivory em 95% de opacidade, blur de fundo e borda inferior ink em 10%. Os links desktop são pequenos e espaçados; no hover, o texto escurece e uma linha de 1px se expande da esquerda em 180ms. A lista móvel abre com animação de altura e opacidade em 220ms. Links do rodapé usam branco translúcido, mudando para brand-200 no hover.

### Review Cards

Seis avaliações fornecidas aparecem integralmente em cartões de fundo ivory e borda ink em 10%. A grade usa uma coluna no mobile, duas em md e três em lg. Cada cartão apresenta cinco estrelas de 17px, texto da avaliação em ink, nome do autor, avatar circular com inicial dourada sobre preto e link para a fonte no Google. O padding é 1.5rem e sobe para 1.75rem em sm. A contagem de 12 avaliações permanece uma informação estática do material fornecido.

### Area Dialog

O modal aparece como folha inferior no mobile e painel central no tablet, com limite de altura de 90vh e largura máxima de 36rem. Uma sobreposição ink em 55% com blur separa a tarefa. O painel usa neutro claro, título em Montserrat, texto com respiro e botão primário. Abertura e fechamento animam opacidade, deslocamento e escala em 240ms. Escape, retorno do foco, contenção de Tab e bloqueio de rolagem fazem parte do comportamento implementado.

### Portrait Frame

O retrato real é acompanhado por moldura dourada fina girada em 2 graus, degradê inferior preto para legibilidade da assinatura e uma placa clara com sombra. O nome do advogado permanece legível sem substituir o logo.

## Do's and Don'ts

### Do:
- **Do** preservar o logo IJ fornecido e usar seu emblema original nos favicons.
- **Do** combinar Montserrat bold e estilo normal em títulos com Manrope na leitura e nas ações.
- **Do** usar dourado vivo com texto preto nas ações e contraste branco/dourado no hero preto.
- **Do** manter foco visível, leitura confortável e respeito à preferência por movimento reduzido.
- **Do** preservar fotografias reais e avaliações completas com autor e fonte.

### Don't:
- **Don't** substituir a identidade IJ por outro nome, logo, emblema genérico ou paleta.
- **Don't** reintroduzir títulos serifados ou itálicos nesta identidade.
- **Don't** usar dourado vivo como texto longo sobre branco.
- **Don't** aplicar o arredondamento de botões a todos os painéis informativos.
- **Don't** abreviar avaliações fornecidas ou retirar seus nomes e fontes.

