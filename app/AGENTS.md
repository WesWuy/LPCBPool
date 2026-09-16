# LPCB — Luna Pool Care Bermuda

## Brand

| | |
|---|---|
| Name | Luna Pool Care Bermuda |
| Tagline | Crystal Clear, Every Day. |
| Website | lpcb.bermuda |
| Colors | Navy `#011d42` · Cream `#fdf3da` · Teal `#77bdbb` |

## Stack

- **Framework:** TanStack Router (file-based routing)
- **Styling:** Tailwind CSS v4 + custom CSS layers in `lpcb-styles.css`
- **Fonts:** Georgia/serif for headings, system sans for body
- **Media:** Scroll-scrub journey (4 scenes, `/assets/world/`)
- **Build:** Bun + Vite

## Key files

| File | Purpose |
|---|---|
| `src/routes/index.tsx` | Full landing page (hero + all sections) |
| `src/scroll-scrub-scenes.ts` | Journey scenes, theme tokens |
| `src/lpcb-styles.css` | Brand CSS layer, component classes |
| `src/app-meta.json` | OG tags, title, favicon |
| `public/assets/world/` | 4 hero MP4s + posters |
| `public/assets/board-*.png` | Reference boards |
| `design-brief.md` | Full design specification |

## Sections

1. **Nav** — Fixed, glass-blur dark navy. Logo + CTA.
2. **Hero** — Scroll-scrub journey (4 scenes). Full-viewport, scroll-as-playhead.
3. **Services** — 6-card grid on cream background.
4. **Why LPCB** — 2-col layout on navy, brand pillars.
5. **Bermuda** — Full-bleed editorial image on cream.
6. **Contact** — Teal band, phone + email CTAs.
7. **Footer** — Minimal navy, logo + copyright.

## Deployment

```
git add . && git commit -m "feat: LPCB landing site"
git push origin main
```

Higgsfield auto-builds on push to main. Deploy URL is in the dashboard.

## Adding content

- Hero film scenes: replace MP4s in `public/assets/world/`, update `scroll-scrub-scenes.ts`
- Contact info: edit `src/routes/index.tsx` contact section
- New sections: append to the `<main>` in `index.tsx`

## Preview locally

```bash
cd app
bun install
bun run dev
```
