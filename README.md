# Allons — Landing Page

Landing page para organizadores de eventos de **ALLONS**, la plataforma de ticketing y descubrimiento de eventos en Honduras.

## Stack

- **Next.js 16** (App Router, static export)
- **Tailwind CSS v4**
- **Tipografías:** Urbanist · DM Sans · JetBrains Mono (via `next/font/google`)

## Estructura

```
src/
├── app/
│   ├── layout.tsx       # Fuentes + metadata global
│   ├── page.tsx         # Composición de secciones
│   └── globals.css      # Design tokens (@theme), animaciones
└── components/
    ├── Navbar.tsx        # Nav sticky con backdrop blur
    ├── Hero.tsx          # Grid hero + floating stat cards
    ├── LogoStrip.tsx     # Trust strip de venues
    ├── Features.tsx      # Bento grid 6-col
    ├── HowItWorks.tsx    # Dark card con 4 pasos
    ├── Reviews.tsx       # Quote grid de testimonios
    ├── Pricing.tsx       # 3 planes con toggle anual/evento
    ├── FAQ.tsx           # Accordion interactivo
    ├── CTA.tsx           # Dark CTA final
    └── Footer.tsx        # Footer 4-col + social links
```

## Design tokens

| Token | Valor |
|---|---|
| Brand orange | `#F67010` |
| Orange hover | `#E46208` |
| Background | `#FAF9F7` |
| Ink 900 | `#131516` |
| Line | `#EAE8E4` |

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Deploy

El proyecto genera páginas completamente estáticas (`○ Static`). Se puede desplegar en Vercel, Netlify, o cualquier CDN.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/FNDRS/allons-landing)
