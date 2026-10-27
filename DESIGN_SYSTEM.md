# 🏎️ Lando Norris (LN4) Design System

> **Design System Oficial extraído de [landonorris.com](https://landonorris.com/)**  
> Identidade visual de alta performance: automobilismo moderno, brutalismo aerodinâmico e tipografia geométrica expressiva.

---

## 📑 Sumário

1. [Visão Geral & Filosofia de Design](#-visão-geral--filosofia-de-design)
2. [Paleta de Cores & Tokens](#-paleta-de-cores--tokens)
3. [Tipografia & Fontes Variáveis](#-tipografia--fontes-variáveis)
4. [Escalonamento Fluido (Fluid Scaling Formula)](#-escalonamento-fluido-fluid-scaling-formula)
5. [Espaçamento & Grid](#-espaçamento--grid)
6. [Bordas, Raios & Efeitos](#-bordas-raios--efeitos)
7. [Movimento & Animações](#-movimento--animações)
8. [Componentes Principais](#-componentes-principais)
   - [Botões (Primary, Tertiary, Icon-Only, Nav)](#botões)
   - [Pills, Tags & Eyebrows](#pills-tags--eyebrows)
   - [Cards & Helmet Frames](#cards--helmet-frames)
   - [Header & Navegação](#header--navegação)
   - [Marquee / Ticker Infinito](#marquee--ticker-infinito)
   - [Footer Mascarado com Contorno SVG](#footer-mascarado)
9. [Temas (Dark, Light, Lime)](#-temas-dark-light-lime)
10. [Instruções de Uso & Integração](#-instruções-de-uso--integração)

---

## 🏁 Visão Geral & Filosofia de Design

O design system de **Lando Norris** é projetado para transmitir velocidade, alta tecnologia e irreverência.  
Elementos marcantes:
- **Neon Fluorescente (`#d2ff00`):** O lendário amarelo/verde limão característico do capacete e merchandising do piloto.
- **Dark Green & Carbon Black (`#282c20` e `#111112`):** Tons profundos e terrosos inspirados na pista e na fibra de carbono dos carros de Fórmula 1.
- **Tipografia Brutalista & Escultural:** Headlines maciças em caixa alta combinando a fonte display condensada **Brier** com a flexibilidade moderna da **Mona Sans Variable**.
- **Contornos Dinâmicos:** Recortes aerodinâmicos nos cantos de cards e máscaras SVG que simulam o fluxo de ar de um monoposto.

---

## 🎨 Paleta de Cores & Tokens

### Cores de Marca (Brand)

| Nome do Token | CSS Variable | Hex | Amostra | Função / Aplicação |
|---|---|---|---|---|
| **LN Lime** | `--color--lime` | `#d2ff00` | ![#d2ff00](https://placehold.co/15x15/d2ff00/d2ff00.png) | Cor primária de destaque, botões CTA, seleções e realces |
| **LN Lime Off** | `--color--lime-off` | `#b2c73a` | ![#b2c73a](https://placehold.co/15x15/b2c73a/b2c73a.png) | Estado hover de botões e tags secundárias |
| **McLaren Papaya Orange** | `--color--orange` | `#ff6b00` | ![#ff6b00](https://placehold.co/15x15/ff6b00/ff6b00.png) | Detalhes de corrida, vitórias e badges oficiais |
| **Lime Zero** | `--color--lime-zero` | `rgba(210, 255, 0, 0)` | Transparente | Transições de gradientes sem artefatos cinzentos |

### Neutros & Superfícies (Neutrals & Dark Green)

| Nome do Token | CSS Variable | Hex | Função / Aplicação |
|---|---|---|---|
| **Dark Green** | `--color--dark-green` | `#282c20` | Fundo principal (Dark Theme), superfícies sólidas |
| **Dark Green Tint 1** | `--color--dark-green-tint-1` | `#3b3c38` | Bordas de cards, divisores e linhas estruturais |
| **Dark Green Tint 2** | `--color--dark-green-tint-2` | `#535450` | Superfícies elevadas e hovers sutis |
| **Carbon Black** | `--color--black` | `#111112` | Preto profundo, fundo de seções de alta densidade |
| **Warm White** | `--color--white` | `#f4f4ed` | Tipografia primária sobre fundos escuros |
| **Cream** | `--color--cream` | `#efefe5` | Fundo do modo Light |
| **Grey On-Track** | `--color--grey-on-track` | `#b9bbad` | Informações de telemetria, legendas e metadados |
| **Grey 2** | `--color--grey-2` | `#c8cbbd` | Bordas secundárias e ícones inativos |
| **Green Off-White 1** | `--color--green-off-white-1` | `#dde1d2` | Tipografia secundária |
| **Green Off-White 2** | `--color--green-off-white-2` | `#b4b8a5` | Textos de apoio e parágrafos |

---

## ✍️ Tipografia & Fontes Variáveis

O sistema utiliza 2 famílias tipográficas principais:

1. **Brier Bold** (Display):
   - Estilo: Grotesco condensado de impacto, caixa alta agressiva.
   - Aplicação: Títulos hero, pontuações de corrida, numerais de campeonato (LN4), cabeçalhos principais.
   - Arquivo local: `assets/fonts/Brier-Bold.woff2`

2. **Mona Sans Variable** (UI & Body):
   - Estilo: Sans-serif moderna e técnica com eixos variáveis de peso (`wght` 200–900) e largura (`wdth` 75–125).
   - Aplicação: Textos corridos, botões, navegação, cards e legendas.
   - Arquivo local: `assets/fonts/MonaSans-VariableFont_wdth,wght.woff2`

### Escala de Tamanhos Tipográficos

| Token | CSS Variable | Valor em Rem | Aprox. em Px | Aplicação Principal |
|---|---|---|---|---|
| **Impact** | `--text--impact` | `7.9375rem` | ~127px | Números gigantes, hero visual |
| **H1** | `--text--h1` | `4rem` | 64px | Títulos principais de página |
| **H2** | `--text--h2` | `4.5rem` | 72px | Títulos de seção de grande destaque |
| **Medium Display** | `--text--med` | `2.76rem` | ~44px | Subtítulos de impacto |
| **H3** | `--text--h3` | `2rem` | 32px | Cabeçalhos de blocos e cards |
| **Regular Title** | `--text--reg` | `1.6rem` | 25.6px | Textos destacados |
| **H4** | `--text--h4` | `1.5rem` | 24px | Títulos de componentes |
| **H5** | `--text--h5` | `1.2rem` | 19.2px | Subcabeçalhos |
| **H6 / Body** | `--text--h6` | `1rem` | 16px | Corpo de texto padrão |
| **Btn Primary** | `--text--btn-primary` | `1rem` | 16px | Botões principais (`wdth: 86`, peso 800) |
| **Btn Nav** | `--text--btn-nav` | `1.7rem` | ~27px | Links de navegação expandida |
| **Btn Tertiary** | `--text--btn-tertiary`| `0.875rem` | 14px | Botões compactos de apoio |
| **Eyebrow** | `--text--eyebrow` | `0.578125rem` | ~9.25px | Mini etiquetas de categoria, rastreamento aberto |

---

## 📐 Escalonamento Fluido (Fluid Scaling Formula)

O site adota uma fórmula matemática avançada de escalonamento responsivo baseada na largura de referência de design de **1728px**:

```css
:root {
  --min-width: 992px;      /* Ponto de partida do escalonamento */
  --max-width: 1920px;     /* Limite máximo onde o zoom trava */
  --design-width: 1728;    /* Resolução do layout Figma/Design */
  --design-unit: 16;       /* Base em px sem unidade */
  --scale-factor: 1;

  --fluid-container: clamp(var(--min-width), 100vw, var(--max-width));
  --fluid-font: calc(var(--fluid-container) / var(--design-width) * var(--design-unit) * var(--scale-factor));
}

html {
  font-size: var(--fluid-font);
}
```

### Breakpoints Adaptativos:
- **Desktop (>= 992px):** `design-unit: 16`
- **Tablet (768px – 991px):** `design-unit: 20`
- **Mobile Landscape (480px – 767px):** Escala base adaptada
- **Mobile Portrait (320px – 479px):** `design-unit: 48`

---

## 📏 Espaçamento & Grid

- `--gap`: `1.25rem` (20px)
- `--padding--container`: `1rem` a `2rem`
- `--padding--mini`: `1rem` (16px)
- `--padding--small`: `2rem` (32px)
- `--padding--med`: `3rem` (48px)
- `--padding--large`: `4rem` (64px)
- `--padding--xlarge`: `5rem` (80px)
- `--on-t-nav-spacer`: `6.375rem` (102px)
- `--grid-col`: `25.4375rem` (407px)

---

## 🔘 Bordas, Raios & Efeitos

- `--radius--btn-tertiary`: `0.411875rem` (~6.6px)
- `--radius--btn`: `0.54rem` (~8.6px)
- `--radius--small`: `1rem` (16px)
- `--radius--med`: `3rem` (48px)
- `--radius--large`: `6.25rem` (100px)
- `--radius--full`: `9999px` (Pills)

---

## ⚡ Movimento & Animações

O site utiliza uma curva cúbica bezier proprietária para acelerar e frear elementos com sensação de física de alta inércia:

```css
--cubic-default: cubic-bezier(0.65, 0.05, 0, 1);
--duration-default: 0.75s;
--duration-fast: 0.3s;
--animation-default: var(--duration-default) var(--cubic-default);
```

---

## 🧩 Componentes Principais

### Botões

#### 1. Botão Primário (Lime)
```html
<button class="btn-primary">
  <span>Explore Drops</span>
  <svg width="12" height="12" viewBox="0 0 17 18" fill="none">
    <path d="M4 7l4.5 4.5L13 7" stroke="currentColor" stroke-width="2"/>
  </svg>
</button>
```

#### 2. Botão Terciário (Ghost Outline)
```html
<button class="btn-tertiary">
  <span>Race Schedule</span>
</button>
```

#### 3. Botão Ícone Quadrado
```html
<button class="btn-icon-only" aria-label="Abrir Menu">
  <svg width="20" height="20" viewBox="0 0 8.51 8.51">...</svg>
</button>
```

### Pills & Tags
```html
<span class="pill pill-lime">F1 Season 2026</span>
<span class="pill pill-orange">P1 Winner</span>
<span class="pill">Monaco GP</span>
```

### Cards de Capacete & Galeria
```html
<div class="helmet-card">
  <div class="card-image-wrap">
    <img src="..." alt="Helmet 2026 Edition" />
  </div>
  <div class="card-info">
    <span class="text-eyebrow">Round 01 • Bahrain</span>
    <h3 class="text-h4">Special Edition Lid</h3>
  </div>
</div>
```

### Marquee / Ticker Infinito
```html
<div class="marquee-container">
  <div class="marquee-content">
    <div class="marquee-item">LANDO NORRIS <span class="highlight">LN4</span></div>
    <div class="marquee-item">WORLD CHAMPIONSHIP CONTENDER <span class="highlight">•</span></div>
    <div class="marquee-item">MCLAREN F1 TEAM <span class="highlight">#4</span></div>
  </div>
</div>
```

---

## 🌓 Temas (Dark, Light, Lime)

O design system conta com 3 esquemas cromáticos controlados via atributo `data-theme`:

- `[data-theme="dark"]` (Padrão): Fundo Dark Green com textos Warm White e acentos Lime.
- `[data-theme="light"]`: Fundo Cream com textos Carbon Black e acentos Lime.
- `[data-theme="lime"]`: Fundo total Lime Fluorescente com elementos Carbon Black.

Para alternar no HTML:
```html
<body data-theme="dark">
  <!-- Conteúdo -->
</body>
```

---

## 🚀 Instruções de Uso & Integração

### 1. Usando CSS Puro
Importe `tokens.css` e `components.css` no seu projeto:
```html
<link rel="stylesheet" href="./tokens.css">
<link rel="stylesheet" href="./components.css">
```

### 2. Usando Tailwind CSS
O arquivo `tailwind.config.js` incluso no diretório mapeia todas as cores, fontes, tamanhos e raios diretamente para classes utilitárias como:
- `bg-ln-lime`
- `text-ln-white`
- `font-display`
- `rounded-btn`
- `p-padding-sm`

### 3. Visualizar o Showcase Interativo
Abra o arquivo `preview.html` no seu navegador para ver o Style Guide completo e testar todos os componentes em tempo real.
