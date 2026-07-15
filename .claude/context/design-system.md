# NVHO Tech Design System — "Palm & Marigold" (2026-07)

> TEMPORARY (2026-07): a palette-preview picker is live — `src/components/PalettePicker.tsx`
> (header drawer, next to ThemeToggle) applies `data-palette="<id>"` on `<html>`, persisted in
> localStorage (`nvho-palette`, restored in `src/main.tsx`). 5 alternate palettes override the
> color tokens in `index.css` via `:root[data-palette=X]` (light) and `:root[data-palette=X].dark`
> (dark; higher specificity than `.dark` is required — keep that selector shape). Palm & Marigold
> is the attribute-free default. 11 palettes total: palm-marigold, inkwell-ember,
> porcelain-oxblood, slate-citron, fig-honey, noir-scarlet, navy-champagne, espresso-crema,
> graphite-blush, ultramarine-sand, verdigris-copper (last 5 from the 2026-07 research round —
> classic luxury/editorial directions). The drawer is portaled to document.body (header
> backdrop-filter would clip a fixed overlay — do not un-portal it). All palettes AA-validated (script: scratchpad palettes.py pattern —
> fg/bg, primary/bg, accent-fg/accent, muted/bg, white/cta-band, footer pairs).
> Colors are fully var-routed: gradients (`--g1/--g2`, `--cta1/--cta2` → `--gradient-primary`/`--gradient-cta`),
> categorical accents (`--cat-a..d`), footer (`--footer-*`), `--cta-deep`, and the stepwell motif
> (CSS mask over var fills, no baked SVG colors). Once a winner is picked: strip the picker,
> hardcode the chosen palette's values into `:root`/`.dark`, delete the other blocks.

Identity: engineering-studio green + Indian marigold accent. Dark mode is designed (green-cast near-black), not inverted. Signature motif: the **stepwell** (concentric stepped squares).

## Color tokens (HSL triplets in `src/index.css`, consumed as `hsl(var(--x))`)

| Token | Light | Dark | Usage |
|---|---|---|---|
| `--background` (Paper) | `140 18% 97%` (#F7F8F4) | `158 22% 7%` (#0E1613) | page bg |
| `--card` (Surface) | `0 0% 100%` | `147 20% 11%` (#16211B) | cards, inputs, popovers |
| `--foreground` (Ink) | `147 16% 11%` (#17201B) | `100 27% 94%` (#EDF3EA) | text — 15.3:1 / 15.9:1 |
| `--muted-foreground` (Mist) | `148 8% 36%` (#55645C) | `147 10% 60%` (#8FA398) | muted text — 5.7:1 / 6.9:1 |
| `--primary` (Palm/Jade) | `159 51% 24%` (#1E5C46) | `155 43% 60%` (#6CC5A0) | links, focus ring, secondary buttons — 7.3:1 / 8.6:1 |
| `--accent` (Marigold) | `38 86% 55%` (#EFA727) | `39 87% 59%` (#F2B33D) | CTA fills ONLY with Ink text (8.1:1) |
| `--accent-strong` (Ochre) | `42 100% 28%` (#8F6400) | `39 87% 59%` | text-safe marigold (4.9:1 light) |

HARD RULE: raw Marigold is never text or thin strokes on light Paper (1.9:1). Text-level accent in light mode = `--accent-strong` or Palm. Focus ring = `--ring` (Palm/Jade).

Legacy Tailwind aliases re-pointed (do not reintroduce blue/purple): `neon-blue`→Palm, `neon-cyan`→Palm-mid, `neon-purple`→Ochre/Marigold, `space-blue`→Palm tint, `deep-space`→Ink.

Categorical accent hexes for icon/data arrays (decorative): `#2F8C69` palm-mid, `#9A6A1B` brass, `#2E8F85` jade-teal, `#71862B` olive, `#B07C1F` amber-brass, `#21A05F` WhatsApp green (WhatsApp entries only). Tint bgs = same rgb at 0.12 alpha.

## Typography

- **Display: Bricolage Grotesque** (600/700/800) — h1, h2, stat numbers (`.font-display`). Sparingly.
- **Body: Hanken Grotesk** (400/500/600/700) — everything else, h3–h6.
- Loaded via one Google Fonts `<link>` in `index.html` (non-blocking). No `@import` in CSS. Do NOT add Inter/Space Grotesk/Plus Jakarta back.

## Signature element — stepwell

- `.grid-pattern` — stepwell SVG tile (concentric stepped squares + staircase diagonal), Palm strokes at 10%.
- `.btn-gradient` — the primary CTA (legacy name): solid Marigold, Ink text, stepped notch clipped into bottom-right corner (em-scaled). Shadows/focus use `filter: drop-shadow` (box-shadow is clipped by clip-path). Doubled selector `.btn-gradient.btn-gradient` intentionally beats Button-variant utilities.
- `.step-underline` — stepped underline on section-header accent spans, drawn on `::after` (never as bg on the element — `.gradient-text`'s `background-clip:text` clips element backgrounds).
- `.stepwell-mark` — small staircase mark, top-right of featured cards (Services badge cards, hero stats strip).

## Component classes (all in `src/index.css`, legacy names kept)

`.icon-chip` — the single knob for icon containers inside cards: `border-radius: 30%`,
bg = `color-mix(chip-hue 12%, Surface)` light / `22%` dark; per-instance hue via inline
`--chip-tint` (defaults to primary); `.dark .icon-chip > *` gets `brightness(1.35)` so
mid-tone glyphs stay visible on dark chips. Used in ServicesSection, AboutSection,
ProjectsSection, ContactSection, ServiceAgileProcessSection, pages/Services,
pages/SoftwareDevelopment. New icon boxes must use it — no ad-hoc rounded-xl tints.


`.glass`, `.badge-blue` (now Palm eyebrow badge), `.gradient-text` (Palm→Ochre light / Jade→Marigold dark, all stops AA), `.card-light`, `.section-divider`, scrollbar (solid Palm).

## Rules

- Radius stays `--radius: 0.75rem`. Spacing scale unchanged.
- Dark CTA-band panels use inline `linear-gradient(135deg, hsl(159 51% 22%), hsl(159 45% 30%))` with `text-white` / `text-white/85`.
- Theme toggle: next-themes, class strategy (`.dark`), `src/components/ThemeToggle.tsx`. Don't fork stylesheets — CSS variables only.
- Footer is always-dark palm-black `#0B120F` with jade icons `#6CC5A0`.
