# Design — Location Science

A locked design system for location-science.com. Every page redesign reads this
file before emitting code. Do not regenerate per page — extend or amend this file
when the system needs to grow. Built with the Hallmark skill (v1.1.0), custom
theme route, on 2026-10-19; amended the same day from editorial to modern-minimal.

## Genre
modern-minimal (amended 2026-10-19: the editorial/cartographic first pass read too map-heavy;
the company is a software and data company and wanted a fresher, technical look)

## Positioning
Company first. The homepage leads with eight competencies (application development,
software engineering, database engineering and data pipelines, GeoAI, data science,
spatial intelligence, mobile engineering, navigation) and the three founders' backgrounds;
Consulting (digitalisation, software engineering, AI services adoption, spatial data management)
is a third offer. StoryMapp is the proof point and lives on its own secondary page.

## Macrostructure family
- Marketing pages (home):         problem-first narrative — two-column hero (title left, lede right),
                                  "Kommt Ihnen das bekannt vor?" list, three focus areas on heavy
                                  rules + one-line essentials, a full-width highlight image with a
                                  display line, four case studies (status · title · problem · result ·
                                  real screenshot), the graphite founders band with the managing
                                  director's portrait, offers with published rates. The earlier
                                  bento of 12 tiles lives on as "Was wir für Sie tun" pillars on the
                                  service pages only.
- Product pages (StoryMapp):      Narrative Workflow — numbered stages 1.0 → 4.0 (mono numerals),
                                  F4 step sequence, numeral stacked above the heading.
- Service pages (Behörden /
  Unternehmen, both languages):   two-column hero (title left, lede + actions right), `.pillars`
                                  (hairline-top items, 3-up), `.facts` (term/description rows),
                                  the graphite band for the one list of promises, a 4-step
                                  `.facts` process, one primary CTA.
- Content pages (about, legal,
  the four SEO landing pages):    Long Document — single column, 65ch measure, left-aligned to
                                  the same gutter as the bar. Nothing on the site is centred.

## Languages
German is the default and lives at the root with German slugs (/behoerden/, /ueber-uns/,
/datenschutz/ …). English lives under /en/ with English slugs; the old English URLs redirect
there (jekyll-redirect-from). Every page carries `lang:` and `translation:` in its front
matter; head.html emits hreflang (x-default = German), header.html the EN/DE switch, and
lang-hint.html a dismissible bar when the browser language differs from the page language.
There is no automatic redirect by browser language: search engines crawl with an English
locale and would be bounced off the German pages. Chrome strings live in _data/i18n.yml.
German legal pages are binding; English ones carry a courtesy note. The terms of use and the
withdrawal instruction are copied verbatim from the legal_docs repository (end_user_terms).

## Theme (custom · vibe: "engineered, cool, precise, fresh")
- `--color-paper`          oklch(98.5% 0.004 250)  — cool engineered near-white
- `--color-paper-2`        oklch(96.5% 0.006 250)
- `--color-ink`            oklch(24% 0.02 258)     — cool charcoal
- `--color-ink-2`          oklch(34% 0.018 257)    — body text
- `--color-muted`          oklch(48% 0.016 257)
- `--color-rule`           oklch(89% 0.008 250)    — every border
- `--color-graphite`       oklch(21% 0.016 260)    — the one dark band per page
- `--color-accent`         oklch(55% 0.11 195)     — teal, taken from the logo; the only accent
- `--color-accent-bright`  oklch(74% 0.12 195)     — the accent on graphite
- `--color-focus`          oklch(58% 0.15 195)

Axes: light / grotesk-sans / chromatic-teal (~195°). Differs from the first pass
(light / roman-serif / sienna) on two axes.
Accent footprint: the one primary button, links, focus rings, the live edges in the node
diagram, stage numerals, degree labels on the band. Never a section fill. Never a gradient.
The logo's orange and pink stay inside the logo.

## Typography
- Display: Space Grotesk, weight 600, tracking -0.025em (h1 -0.035em), line-height 1.02–1.1.
  Headings are always roman.
- Body:    Geist, weight 400 (500 for buttons, nav, strong); no italic anywhere in the UI.
- Mono:    JetBrains Mono, weight 400/500, uppercase 0.06em. Outlier register, used for
           tiny labels only: node-diagram labels, degree labels, stage numerals.
- Type scale: 1.25 from a 17px body. `--text-display` = clamp(2.5rem, 4.2vw + 0.5rem, 4.5rem).
- Hero headlines ≤ 50 characters.
- Source: Google Fonts, one `<link>` in `_includes/head.html`, `display=swap`.

## Spacing
4-point named scale, `--space-3xs` … `--space-4xl`, in `assets/css/tokens.css`.
Pages use named tokens (`var(--space-md)`), never raw values. Radii are drawn with a
ruler: 6px on controls, 10px on tiles, nothing else rounded.

## Motion
- Easings: `--ease-out` cubic-bezier(0.16, 1, 0.3, 1), `--ease-in`, `--ease-in-out`.
- Reveal pattern: none. The page is still; that is the brand.
- Only transitions: link underline colour (120ms), chip fill (220ms), chip press.
- Reduced-motion: everything collapses to 0.01ms.

## Microinteractions stance
- Silent success; no toasts.
- Focus rings appear instantly, 2px, `--color-focus`, 3px offset, on every
  interactive element via `:focus-visible`.
- Hover is an underline change or a chip fill, nothing else. No lifts, no scales.
- Hit targets ≥ 44px (chips, nav links, badges, menu toggle, checkboxes' labels).

## CTA voice
- Primary CTA: one solid teal button (`.btn--primary`), 6px radius, Geist 500 at 14px,
  44px tall. One per viewport at most. Label names the action: Write to us.
- Secondary: outlined button (`.btn--outline`, rule-coloured border) or a typographic link
  with a trailing arrow (`.link`). Verbs: See StoryMapp · Share your tours · Ask about the API ·
  Become a partner · Start a conversation.

## Navigation and footer (shared by every page)
- Nav: N1b bordered bar, left-grouped. Logo (assets/images/logo_512_transp.png, 30px) + wordmark
  in Space Grotesk, three links beside it, one solid CTA at the right edge. Single hairline
  below, not sticky. Below 48rem the links sit behind a CSS-only "Menu" disclosure and the CTA
  hides (Contact is in the list). The bar's left edge is the page's left edge: every page's
  content starts on that line.
- Footer: Ft2 inline single line. Two small muted lines: identity + register, then the nine
  legal links, middot-separated with real spaces so they wrap but never break mid-link.

## Per-page allowances
- Home MAY carry one inline SVG node diagram inside a single tile (tier A). Nothing else.
- Home carries the site's one graphite band (founders). No other page gets a dark band.
- Product page: typography plus real assets only (app icon, vendor store badges).
- Content pages: typography only.
- Section eyebrows are OFF everywhere. Stage numerals on the product page are content.

## What pages MUST share
- The wordmark, masthead and colophon.
- The accent colour and its placement (≤ 5% of any viewport).
- The display + body + mono faces and their roles.
- The CTA voice (6px radius, 44px height, one solid teal button).
- 1px `--color-rule` borders on every surface; no shadows, no fills.

## What pages MAY differ on
- Macrostructure within the page-type family.
- Tile spans and the tint on at most two tiles.

## Case studies and rates (2026-10-21)
Four cases on home and both service pages via `_includes/cases.{de,en}.html`: tour planner
(in development), SkiApp (in development), StoryMapp (in operation: >8 million stories,
six languages, users in 58 countries, partner Art Hop Silver Lake, Los Angeles), emergency
map for disaster response (in development, no image yet). Status is always labelled.
Published rate: 900 € net per day for development and consulting, fixed price for specified
work, first conversation free. Portrait: only the managing director, Tobias Neumann, with
degrees and career stations as supplied by him; the other founders stay unnamed. The photo
slot (`.portrait__photo`) shows initials until a photo is delivered.

## Honest copy
No invented metrics. Numbers on the site come from existing company claims:
8 million+ places, six languages (EN, DE, FR, ES, PT, ZH), founding 2023, the register
and VAT numbers. The founders' backgrounds (geography and geoinformatics, cartography, information and communication technology; no degrees named, no names) and work domains were supplied by the user. The former schema.org
aggregateRating (4.8 / 1,500) was removed as unverifiable.

## Files
- Tokens: `assets/css/tokens.css` (plain CSS, linked first).
- Styles: `assets/css/style.scss` (Jekyll SCSS; references tokens only).
- Chrome: `_includes/header.html`, `_includes/footer.html`, `_includes/head.html`.
- Layouts: `_layouts/default.html` (shell), `home.html` (full-width sections),
  `page.html` (Long Document `.prose` wrapper).
- Memory: `.hallmark/log.json`, `.hallmark/preflight.json`.

## Exports

### tokens.css
See `assets/css/tokens.css` (canonical; the full file).

### Tailwind v4 `@theme`
```css
@theme {
  --color-paper:   oklch(98.5% 0.004 250);
  --color-ink:     oklch(24% 0.02 258);
  --color-accent:  oklch(55% 0.11 195);
  --font-display:  "Space Grotesk", sans-serif;
  --font-body:     "Geist", sans-serif;
  --font-mono:     "JetBrains Mono", monospace;
  --spacing-md:    1rem;
  --text-md:       1.25rem;
  --ease-out:      cubic-bezier(0.16, 1, 0.3, 1);
}
```

### DTCG `tokens.json`
```json
{
  "color": {
    "paper":  { "$value": "oklch(98.5% 0.004 250)", "$type": "color" },
    "ink":    { "$value": "oklch(24% 0.02 258)",    "$type": "color" },
    "accent": { "$value": "oklch(55% 0.11 195)",    "$type": "color" }
  },
  "font": {
    "display": { "$value": "Space Grotesk",  "$type": "fontFamily" },
    "body":    { "$value": "Geist",          "$type": "fontFamily" },
    "mono":    { "$value": "JetBrains Mono", "$type": "fontFamily" }
  },
  "space": { "md": { "$value": "1rem", "$type": "dimension" } }
}
```

### shadcn/ui CSS variables
```css
:root {
  --background:         98.5% 0.004 250;
  --foreground:         24%  0.02  258;
  --primary:            55%  0.11  195;
  --primary-foreground: 98.5% 0.004 250;
  --muted:              96.5% 0.006 250;
  --muted-foreground:   48%  0.016 257;
  --border:             89%  0.008 250;
  --input:              89%  0.008 250;
  --ring:               58%  0.15  195;
  --radius:             6px;
}
```
