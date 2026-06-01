# REMY Marketing — Marketing Site

Single-page marketing site (French) for REMY.marketing, a Quebec digital marketing agency focused on real estate brokers. Next.js 16 + React 19 + Tailwind v4. Heavy scroll-driven animation: desktop uses a GSAP-pinned section stack; mobile falls back to static flow.

## Stack
- `next 16.1.4` (App Router), `react 19.2.3`, TypeScript
- `framer-motion` — section animations, transitions
- `gsap` + ScrollTrigger — desktop section pinning/stacking
- Tailwind v4 (via `@tailwindcss/postcss`)
- Fonts: `Inria_Serif`, `Outfit` (next/font)

## Structure
- `src/app/page.tsx` — composes all sections inside `ScrollStack`
- `src/app/layout.tsx` — root layout, metadata, font setup
- `src/components/ScrollStack.tsx` — pins each `.section-panel` so sections stack vertically while scrolling (desktop only; bailed on mobile via `useIsMobile`)
- `src/components/{Hero,About,Services,Portfolio,Testimonials,Contact,Footer,Header,TrustLogos}.tsx` — sections
- `src/components/icons.tsx` — inline SVG icon set
- `src/hooks/useIsMobile.ts` — `matchMedia`-based breakpoint hook (default 768px)
- `public/images/` — all assets (logos, founders, testimonials, realisations)

## Sections
1. **Hero** — fullscreen background video + CTA
2. **About** — 3 founder cards; desktop slides cards in via scroll-driven transforms, mobile is a stacked list
3. **Services** — 6 service cards; desktop has 3 base + 3 sliding overlay cards, mobile is a 2-col grid with tap-to-flip
4. **Portfolio** — 6 client showcases with logo overlay → image on hover
5. **TrustLogos** — marquee strip (CSS `animate-marquee`)
6. **Testimonials** — auto-rotating carousel (4s interval) with dot nav
7. **Contact** — heading with glass-bubble refraction effect (SVG filter + radial mask), contact form (form submit currently `console.log` only — no backend), Footer nested inside

## Conventions
- All animated components are `"use client"`.
- Each top-level section root carries class `section-panel` so `ScrollStack` can find and pin it.
- Mobile branches are inlined in each component, gated by `useIsMobile()`. Don't add a separate mobile route.
- Content is French — preserve language when editing copy.
- Form has no backend wired up yet (`Contact.tsx` `handleSubmit` logs only).

## Dev
```bash
pnpm dev      # next dev
pnpm build    # next build
pnpm lint
```
