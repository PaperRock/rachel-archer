# Design — Rachel Archer Counselling

<!-- impeccable:design-system 1 -->

## World

**Calm, warm, editorial — with a lime highlight and deep-forest grounding.** A rebuild (not a Wix port) of the incumbent therapy site, committed to putting an anxious visitor at ease first. The visual voice is a warm, bookish editorial practice — human, honest, generous — in deliberate contrast to clinical or corporate therapy templates. The direction was pinned by the brief (the user chose it); no concept roll. The palette — warm cream ground, near-black ink, a single lime highlight used as a marker behind the hero accent word, and a deep-forest tone for links, focus rings, the sticky header and the full-bleed hero band — was pinned by the user at the first critique round, superseding the earlier hot-pink/blue reference.

## Tokens

### Palette
| Token | Value | Role |
|---|---|---|
| `--paper` | `#f6f0e2` | warm cream ground |
| `--paper-deep` | `#ede8d6` | alternating section band |
| `--surface` | `#ffffff` | cards, panels, inputs |
| `--ink` | `#141414` | near-black text + primary buttons + dark panels |
| `--ink-soft` | `#484848` | secondary text (≈8:1 on paper) |
| `--accent` | `#a7d49b` | lime highlight — heading emphasis marker, divider seeds, dot separators, form-success border, hover fills (ink ≥11:1) |
| `--accent-deep` | `#92ac86` | deep forest — links, focus rings, sticky header band, hero band, button hover fills (ink ≥7:1 on forest) |
| `--clay` | `#fd5622` | warm note, used only in tiny marks |
| `--line` | `rgba(20,20,20,0.12)` | hairlines |
| `--line-strong` | `rgba(20,20,20,0.22)` | decorative borders (content chips) |
| `--control-border` | `#6f695e` | input/radio/toggle borders (≥5.4:1) |
| `--on-dark-text` | `rgba(255,255,255,0.66)` | secondary text on ink (≈8.2:1) |
| `--on-dark-muted` | `rgba(255,255,255,0.5)` | labels and notes on ink |
| `--on-dark-link` | `rgba(255,255,255,0.85)` | links on ink |
| `--on-dark-line` | `rgba(255,255,255,0.14)` | hairlines on ink |
| `--on-dark-line-strong` | `rgba(255,255,255,0.4)` | ghost-button borders on ink |

### Type
- Display: **Alegreya** (500, 700, 700 italic), self-hosted via `@fontsource`. Serif display with an italic accent word in the hero.
- Body/UI: **Karla** (400, 500, 700), self-hosted.
- Scale: `h1` `clamp(2.5rem, 5.5vw, 4.25rem)`, `h2` `clamp(1.9rem, 3.6vw, 2.9rem)`, `h3` `clamp(1.3rem, 2vw, 1.65rem)`. Body 17px/1.7, prose measure 68ch. `text-wrap: balance` on headings; tracking floor −0.01em.

### Shape & depth
- Radii: `10 / 16 / 24px`. Photos and panels get the large radius.
- Shadows carry offset + blur: `--shadow-soft` (0 26px 60px −28px), `--shadow-card` (0 18px 44px −26px). No hard offset blocks.

### Motion
One authored moment: a soft page crossfade via Astro View Transitions, with header/footer persisted. The CTA band carries a slow, near-imperceptible gradient drift — a "living ember" sweeping espresso through muted forest, sage, and warm-soil sub-tones of the palette (28s ease-in-out) that reads as depth, not motion; it pauses offscreen via IntersectionObserver. Plus gentle hover lifts on buttons, a slow image scale on the hero photo, and underline reveals in the nav. Everything honors `prefers-reduced-motion`.

### Spacing
Quarter-rem scale, 4px steps at 16px: `--space-1` 0.25rem … `--space-14` 4rem, plus `--space-section` for the page rhythm and `--gutter` for horizontal page padding. Content margins use the scale (mdx heading/intro gaps use `var(--space-3)` / `var(--space-9)`).

## Layout

- Max width `1140px`, gutter `clamp(1.25rem, 4vw, 2.5rem)`, section rhythm `clamp(4.5rem, 10vw, 8rem)`.
- Sections contribute a single rhythm step: every `.section` starts with `margin-block-start: var(--space-section)`. Alternating bands (`.section-alt`) carry their own internal padding; a section that follows a band keeps the same standard margin as any other, so its content never touches the band's border and the band's spacing stays symmetric.
- Headings open blocks with `margin-bottom: 1.4rem`; a heading followed by an intro line drops to `var(--space-3)` and the intro leads with `var(--space-9)`.
- `.split` two-column for interior prose pages (photo/heading left, prose right); collapses below 820px. Sticky photo rail on Approach. The heavier column takes the wider slot — use `<Split wideLeft>` when the form or prose leads (contact).
- Hero: full-bleed deep-forest band; two-column grid (copy left, portrait right with a location tag); single column on mobile, photo below copy.
- Editorial rhythm: generous whitespace, more space above a heading than below; prose sections over icon-card grids.

## Components

- **Header**: sticky, translucent deep-forest band with backdrop blur; serif wordmark + tracked sub-line; desktop underline nav; pill CTA "Let's talk about it"; mobile hamburger → full-height menu under the header bar with big serif links, contact block, scroll lock.
- **Footer**: espresso band; brand + practice/contact/professional columns; social round icons; BACP badge linking out; dynamic copyright year.
- **Buttons**: pill; primary near-black, ghost with control-border, on-dark variants; deep-forest hover fill with ink text; 1px lift on hover.
- **CTA band**: near-black rounded panel with a slow animated gradient drift, heading + reassurance line, contact actions.
- **Issues chips**: surface pills enumerating presenting issues (content, non-interactive).
- **FAQ**: surface panels, one open question + an invitation to ask more.
- **Fee panel**: big serif fee, reduced-fee note, contact details, BACP badge.
- **Contact form**: native validation (no `novalidate`), custom radios, mailto delivery that opens the visitor's email app, then shows an honest handoff panel — it never claims the message was sent — with a direct `mailto:` fallback and the 48-hour reply promise retained only in that fallback.

## Trust markers (non-negotiable)

BACP registration, BACP Ethical Framework, five years' experience, ongoing training, phone 07915 101 997, email rachelarchertherapy@gmail.com, Loose, Anglesey Avenue, Maidstone ME15 6DX, £55/hour, reduced fee (students / low-income / NHS staff), 48-hour reply promise.

## Accessibility

High bar per PRODUCT.md: the audience lives with anxiety and panic attacks, so the surface is calm and low-friction. Skip link, semantic landmarks (`main`, `nav` for desktop and mobile), visible focus rings (≥3:1), control borders ≥3:1, text contrast ≥4.5:1, `prefers-reduced-motion` honored, no autoplay or flashing. On the deep-forest band (sticky header, hero) text is near-black ink (≥7:1) to hold the 4.5:1 floor. Three FAQ answers beyond the fee item are intentionally omitted because they were client-rendered and unrecoverable from the incumbent site — the section ships the fee Q/A plus an invitation to ask.

## Delivery

Static Astro 5 build, output `static`, site `https://www.rachelarcher.com`. Run `npm run dev` to develop; `npm run build` to ship; `npx astro check` for type/lint.
