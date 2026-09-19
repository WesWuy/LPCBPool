# Luna Pool Co. — Project Handover

**Live site:** https://weswuy.github.io/LPCBPool/
**Repo:** https://github.com/WesWuy/LPCBPool

---

## What was built

A polished static marketing site for **Luna Pool Co.**, a pool-care business in Bermuda. Brand colours: deep navy `#011d42`, cream `#fdf3da`, teal `#77bdbb`.

Stack: React + TanStack Router + Vite → static HTML/CSS/JS → GitHub Pages via GitHub Actions.

---

## Sections & Status

| Section | Status | Notes |
|---|---|---|
| Navigation | Live | Fixed, backdrop-blur, Luna brand logo (approved artwork) |
| Hero | Live | WebP image, headline + two CTAs |
| Services (5 cards) | Live | Cleaning, water testing, filter/pump, pre-event, troubleshooting |
| How We Work (4 steps) | Live | Live — no approval box pending |
| Enquiry Form | Live | Env-configured contact details + form endpoint |
| Footer | Live | Luna Pool Co. · Bermuda |

---

## Before Launch — Required Setup

The enquiry form and contact chips pull from environment variables. Create `app/.env` (copy `.env.example` if one exists, or create from scratch):

```bash
cd LPCBPool/app
touch .env
```

Add these three variables:

```env
VITE_CONTACT_EMAIL=your@email.com
VITE_CONTACT_PHONE=+1 441 XXX XXXX
VITE_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

**Form endpoint options (both free):**
- **Formspree:** formspree.io → New Form → copy the `https://formspree.io/f/YOUR_ID` URL
- **Web3Forms:** web3forms.com → Get API Key (no account needed, 250 submissions/month free) → endpoint: `https://api.web3forms.com/submit`

After creating `.env`, rebuild and commit:
```bash
cd app
bun run build        # or npm run build
git add dist/ -f    # force-add dist (it's in .gitignore)
git add .env
git commit -m "chore: add env config for contact details and form"
git push
```

---

## Decisions Still Needed

### 1. Bermuda silhouette accuracy
The SVG island silhouette in `luna-logo.svg` and `favicon.svg` was AI-generated stylistically. Verify it resembles an accurate aerial outline of Bermuda. If not, provide a precise SVG path or reference image and it will be replaced.

### 2. Approved claims (previously flagged — not yet reinstated)
These were in the original brief but held pending confirmation. Reinstate by editing service card descriptions in `src/routes/index.tsx`:
- Certified pool technicians
- Comprehensive liability insurance
- Same-week response
- Island-wide coverage
- Heater servicing capability

### 3. Favicon
`favicon.svg` is an AI-generated placeholder moon/ Bermuda silhouette. Replace with a clean, approved favicon SVG before launch.

---

## Project Structure

```
LPCBPool/
├── app/
│   ├── index.html              # HTML shell + SEO meta + OG tags
│   ├── .env                    # CONTACT_EMAIL, CONTACT_PHONE, FORM_ENDPOINT (not committed)
│   ├── vite.config.ts          # base: "/LPCBPool/"
│   ├── src/
│   │   ├── app-meta.json       # OG tags for social sharing
│   │   ├── router.tsx          # TanStack Router (hash: false for static)
│   │   ├── routes/
│   │   │   ├── index.tsx       # Single-page app — all sections
│   │   │   └── client-entry.tsx
│   │   ├── lpcb-styles.css    # All Luna-specific styles
│   │   └── styles.css          # Base/global styles
│   └── public/assets/
│       ├── hero.webp           # Hero background (replace with real photo)
│       ├── luna-pool-co-approved.jpg  # Approved logo (in use)
│       ├── luna-logo.svg       # Logo SVG (placeholder — replace before launch)
│       └── favicon.svg         # Favicon (placeholder — replace before launch)
└── .github/workflows/
    └── deploy.yml              # Uploads committed app/dist to GitHub Pages
```

---

## Deployment

### How it works
Every push to `main` triggers `.github/workflows/deploy.yml` which:
1. Uses `git archive` on `app/dist/`
2. Uploads as a GitHub Pages artifact
3. Serves at `https://weswuy.github.io/LPCBPool/`

### Build and deploy locally
```bash
cd app
bun install              # or npm install
bun run build           # outputs to app/dist/
git add dist/ -f        # force-add dist (in .gitignore)
git commit -m "chore: build"
git push
```

> **Important:** `app/dist/` is force-added to Git even though it's in `.gitignore`. The CI uploads the committed dist artifact, not the working-tree version. Always rebuild and commit after editing source.

### Routing
`base: "/LPCBPool/"` in both `vite.config.ts` and `router.tsx` (`hash: false`). All asset paths are root-relative `/assets/...` and work under the subdirectory deployment path.

---

## Tech Notes

- **Router:** TanStack Router with file-based routes. `tsr generate` auto-creates `routeTree.gen.ts`. Static hosting compatible (`hash: false`).
- **CSS:** Vanilla CSS with custom properties. No Tailwind. Luna styles in `lpcb-styles.css`.
- **No SSR:** Pure client-side SPA.
- **Fonts:** IBM Plex Mono and Space Grotesk from Google Fonts.
- **Images:** Hero is WebP (~306 KB). Logo uses the approved `luna-pool-co-approved.jpg` (JPEG).
- **Reduced motion:** Respected via `prefers-reduced-motion` media query.
- **Form spam:** Honeypot `_gotcha` field included. Backend (Formspree/Web3Forms) adds additional spam filtering.
- **OG image:** `app/public/assets/board-hero.png` — the social sharing preview image. Replace with a proper 1200×630 PNG before launch.

---

## Env / Secrets

| Variable | Required | Purpose |
|---|---|---|
| `VITE_CONTACT_EMAIL` | Yes | Shown in enquiry contact chips and `mailto:` link |
| `VITE_CONTACT_PHONE` | Yes | Shown in enquiry contact chips and `tel:` link |
| `VITE_FORM_ENDPOINT` | Yes | Form submission URL (Formspree or Web3Forms) |

No secrets or API keys needed — all env vars are public-facing site config.
