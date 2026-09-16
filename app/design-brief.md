# LPCB — Luna Pool Care Bermuda: Website Design Brief

## Design read
A premium pool care brand serving Bermuda homeowners and hospitality businesses. The site should feel like a luxury property brochure — trustworthy, calm, and aspirational. The emotional register: "your pool is always ready, so you can just enjoy it."

## Concept spine
The site is a **crystal-clear journey** — scroll moves through water the way a swimmer enters: from surface sheen → depth → full submersion → emergence refreshed. Every section is a different water state.

## Delivery tier
**cinema** — Lenis + GSAP scroll scrub, Tier-1 hero, scroll chapters. The animated website is the primary vehicle.

## Locked palette
| Role | Hex | Defense |
|---|---|---|
| Primary (navy) | `#011d42` | Brand anchor; deep, trustworthy, pool-at-night depth |
| Background (cream) | `#fdf3da` | Warm Bermuda light; stands apart from generic blue pool sites |
| Accent (teal) | `#77bdbb` | The shimmer on water surface; links navy to cream |
| Ink | `#0a1f3c` | Softer navy for body copy |
| Muted | `#8ba3b8` | Secondary text, dividers |

**Hard bans:** generic bright-blue pool gradients, graphite/gray schemes, AI-purple glow.

## Locked type
- **Display:** `Playfair Display` — serif authority, pool-classic
- **Body:** `DM Sans` — clean, modern, readable on cream
- **Accent/Label:** `DM Sans` medium weight, teal, all-caps for eyebrows

## Animation mode
**animated-website** — single continuous ~15s scroll-scrub journey through 4 scenes. Scroll is the playhead; visitor controls pacing.

### Journey (4 scenes)
1. **Surface Shine** — extreme close-up: water surface catching Bermuda sunlight, refracted light patterns. Kicker: "LPCB · Bermuda"
2. **The Ready Pool** — medium shot: a perfectly maintained pool in late-afternoon light, turquoise water, stone deck, palm shadow. Kicker: "Crystal clear, every day."
3. **The Care in Action** — close-up: gloved hands testing water, chemical vials, digital meter. Kicker: "Professional maintenance, worry-free."
4. **Sunset Dip** — wide: a family stepping into a pool at golden hour, Bermuda villa backdrop. Kicker: "Your pool. Your family. Pure joy."

### Camera architecture
**Type B** — lateral dolly (tracking shot along the pool), slight downward angle, anchored horizon line.

### Seam direction
Left-to-right world travel; scene 1→2→3→4 flows right.

### Mobile framing
Square crop, center-weighted, no lateral movement (vertical pan instead).

## Section plan
1. **Hero** — full-viewport scroll-scrub chapter (scene 01). Eyebrow + H1 + subline overlaid.
2. **Services** — 3-column card grid, icon + title + one-line, on cream. Icons: custom generated set.
3. **Why LPCB** — alternating image/text rows (2 rows), navy background.
4. **Bermuda-First** — full-bleed image section, cream bg, quote callout.
5. **Contact / CTA** — teal band, phone + email + inquiry form link.
6. **Footer** — minimal, navy, logo + copyright.

## Asset plan
- **Hero film:** 4 scene MP4 chain (scroll-scrub)
- **Poster frames:** 4 PNG posters (one per scene)
- **Section imagery:** 3 service icons (generated), 2 why-LPCB photos, 1 Bermuda full-bleed
- **Logo:** provided file, used in hero + footer
- **OG card:** branded 3:2 image
- **Icon set:** 6 custom icons (skimmer, chemical drop, thermometer, brush, filter, checkmark)
- **Favicon:** monogram "L" from logo, navy on transparent

## CTA inventory
- **Primary CTA (hero):** "Get a Free Quote" — teal pill button, hover: navy→cream
- **Secondary CTA (services):** "Learn More" — text link with teal underline
- **Contact CTA:** "Call Us" + "Email" — both as teal buttons
- Each CTA has its own interaction identity — no shared button utility class

## Content
- **Company:** LPCB — Luna Pool Care Bermuda
- **Tagline:** "Crystal Clear, Every Day."
- **Services:** Weekly Maintenance, Chemical Balancing, Filter & Pump Service, Opening & Closing, Pre-Event Prep,水质检测 (Water Testing)
- **Phone:** +1 (441) XXX-XXXX (Bermuda)
- **Email:** info@lpcb.bermuda
- **Service Area:** All of Bermuda
