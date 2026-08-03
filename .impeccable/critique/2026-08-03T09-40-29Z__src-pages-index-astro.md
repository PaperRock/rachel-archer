---
target: homepage (src/pages/index.astro)
total_score: 21
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 4
p2_count: 1
timestamp: 2026-08-03T09-40-29Z
slug: src-pages-index-astro
---
# Design Critique — Rachel Archer Counselling homepage

Method: dual-agent (A: ses_0390a37c7ffeWApDrcZc8y2wG5 · B: ses_0390a21caffeCdK2pBTYC2ydHw)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Nav active states + validation fine; mailto claims "Thanks for reaching out" before anything is sent |
| 2 | Match System / Real World | 3 | Warm first-person copy; "Humanistic & integrative" / "IFS-informed" jargon on the first viewport with no gloss |
| 3 | User Control and Freedom | 3 | After submit the form hides and is unrecoverable even if the mailto fails |
| 4 | Consistency and Standards | 2 | DESIGN.md documents pink/blue, shipped tokens are lime/forest, ::selection is pink, header comment says sage — three conflicting sources of truth |
| 5 | Error Prevention | 2 | Native validation good; mailto falsely succeeds, no fallback for webmail/in-app browsers, Phone pre-checked commits users silently |
| 6 | Recognition Rather Than Recall | 3 | Issue chips recognition-friendly; nav "About Counselling"/"Approach" ambiguous; fee only discoverable on Contact |
| 7 | Flexibility and Efficiency | n/a | Persuade surface; no expert/repeat workflow |
| 8 | Aesthetic and Minimalist Design | 3 | Genuinely disciplined; dragged down by full-bleed forest hero + lime marker blob |
| 9 | Help with Errors | 2 | Errors are raw browser bubbles; a failed mailto is undetectable to the user |
| 10 | Help and Documentation | n/a | Persuade surface; the site is the shopfront |
| **Total** | | **21/32** | **Acceptable (65.6%)** |

## Design Specificity Verdict

**LLM assessment:** Partly authored for this product, leaning category-interchangeable on the surface. What is genuinely bespoke: the copy ("I appreciate how daunting it is to take the first step", "Let's talk about it", the 48-hour promise), the two-journey architecture (in-person vs online, with rare specificity for housebound/childcare-constrained clients), and trust markers woven in rather than spray-painted. What is category-interchangeable: the standard counselling landing template (empathy hero → serif pull-quote → presenting-issues chip list → two service cards → CTA band) — the chip list is the single most generic element in the industry — and a visual world that is literally the "cream + serif + saturated accent" template DESIGN.md claims to refuse. The one genuinely distinctive fact (IFS-informed parts work) is buried as two opaque credential words instead of used as a narrative hook ("part of you wants help, part doesn't").

**Deterministic scan:** Detector ran clean over all 10 .astro targets (0 findings, exit 0; verified the detector genuinely fires on synthetic violations). Two coverage caveats mean the clean result understates reality: (1) the DESIGN.md palette rules never executed because DESIGN.md uses `<!-- impeccable:design-system 1 -->` + tables rather than YAML frontmatter, so design-system color/font checks silently did not run; (2) page-level text analyzers were gated off because pages defer to `<BaseLayout>` and carry no full-page marker. The real palette issue was in `global.css`, which the CLI target list did not include. A manual grep of src/ and dist/ found the sage `#44503d` focus ring still shipped (`global.css:944`, `rgba(68, 80, 61, 0.4)`).

**Visual overlays:** Browser inspection was attempted but skipped — no browser automation tool is exposed in this harness, so no rendered-DOM overlay or console capture exists and none is fabricated.

## Overall Impression

The copy is the product and it's excellent; the structure is the therapy-site template; and the current palette state is the loudest problem — three different palettes coexist in the source of truth, and the undecided full-bleed forest hero is a contrast regression sitting exactly where the site needs to feel calmest.

## What's Working

1. **Empathy-first copy + human presence.** The real portrait, location tag, and "I appreciate how daunting it is to take the first step" open with legitimacy before any persuasion; the 48-hour promise recurs at hero, CTA band, contact page, and success state.
2. **The two-journey IA.** "Two ways to work together" gives in-person/online equal honest weight, and online-counselling speaks with unusual specificity to the housebound audience.
3. **Editorial restraint in the system.** One motion moment, `prefers-reduced-motion` honored, 68ch measure, balanced headings, one consistent CTA voice.

## Priority Issues

- **[P1] Palette drift — three sources of truth.** DESIGN.md + BaseLayout.astro:42 document hot pink `#ffb4f9` / electric blue `#0217fe`; `global.css:20-21` ships lime `#a7d49b` / forest `#92ac86`; `::selection` still hard-codes pink; the sage `#44503d` focus ring survives; the CSS header comment still says "sage accent." The full-bleed forest hero (`global.css:464`) and translucent forest sticky header (`:302`) are the largest visual commitments on the site and are undocumented. No one can tell what the design is. **Fix:** pick one palette — either revert tokens to the documented pink/blue or formally re-pin the lime/forest in DESIGN.md — then fix the pink selection, the sage ring, and the stale comments. Suggested: `/impeccable document` then `/impeccable polish`.
- **[P1] Contrast regressions on the forest bands (verified).** `#484848` ink-soft on forest `#92ac86` = 3.69:1 (hero trust line, hero sub-line, nav labels on the translucent header — all fail 4.5:1); white on forest = 2.48:1 (`.btn-primary:hover` fails); lime marker on forest = 1.48:1 (the `.em` highlight reads as a blurry blob). WCAG AA violations introduced by the green swap. **Fix:** recolor the hero/header text for the band (paper text on forest), or pull the hero back to the paper ground. Suggested: `/impeccable adapt` then `/impeccable polish`.
- **[P1] Mailto handoff claims success it cannot prove.** On submit the site fires `mailto:`, hides the form, and shows "Thanks for reaching out… within 48 hours" regardless of whether the email app opens or the message is ever sent; on some browsers the page navigates away and the success message is never seen; webmail-only / in-app-browser users get nothing. The reassurance is delivered before anything is true — the most anxiety-hostile moment on the site. **Fix:** only show success when it's true; keep the form; add a visible "if nothing opens, email me directly at rachelarchertherapy@gmail.com" fallback; consider a server-backed form. Suggested: `/impeccable harden`.
- **[P1] No privacy policy.** PRODUCT.md mandates carrying the incumbent's privacy policy over; grep finds zero privacy mentions in src/. Riley-type users are asked to type name, email, phone, and a deeply personal message into a form with no privacy document or data-handling statement. **Fix:** restore a privacy policy page and link it at the form and footer. Suggested: `/impeccable harden`.
- **[P2] "Preferred method of contact" with Phone pre-checked, at peak anxiety.** The audience explicitly includes people who can't or won't take a call (housebound, panic-prone, phone-averse); a pre-selected Phone is a commitment the visitor never made, and the mailto body silently records "Preferred contact: Phone." **Fix:** default to Email, soften wording to "How should I get back to you?", add reassurance. Suggested: `/impeccable clarify` then `/impeccable polish`.

## Persona Red Flags

- **Jordan (confused first-timer):** reads "Humanistic & integrative • IFS-informed" on the first viewport and decodes nothing; can't tell "About Counselling" from "Approach"; price only reachable via Contact; FAQ has one real answer and the three client-rendered answers (sessions needed, how to choose a counsellor, qualifications) are absent; on a work computer the mailto may navigate away and show a false success.
- **Riley (deliberate stress tester):** BACP badge links to the generic bacp.co.uk homepage, not the membership register; no privacy policy before a deeply personal form; three palettes (green page, pink selection, "sage" comment) read as incoherence; never told what a first session feels like or how sessions get booked.
- **Casey (distracted mobile user):** the mobile hero is a full-bleed forest band carrying headline + subtitle + two intro sentences + two CTAs + trust line with the photo below; side-by-side CTAs invite mis-taps; `theme-color` cream conflicts with the green header; in-app-browser mailto claims success and sends nothing.
- **Project persona — anxious adult, possibly housebound/panic-prone (from PRODUCT.md):** the online-counselling page is written for them and is the strongest page; the journey then fails in sequence — Phone-defaulted radio (their worst fear assumed), a weak "A 2013 study found…" effectiveness claim (reads as puffery), and the mailto ejection at the very moment they've gathered courage.

## Minor Observations

- `site.experience` (`site.ts:31`) is defined and never used.
- Both `<nav>` landmarks use `aria-label="Main"`; mobile menu lacks Escape-to-close and focus return/trap.
- `.issues` ul carries `aria-label="Issues I can help with"` implying interactivity that doesn't exist.
- Fee panel stacks below the form on mobile Contact — the price question sits below the fold where the visitor decides.
- Hero first viewport = headline + subtitle + 2 intro sentences + 2 CTAs + 3 trust items; the 8-chip issue list exceeds the 4-option guideline.
- dist `flat-type-hierarchy` finding is a false positive (static-HTML cascade couldn't resolve the root-relative CSS path); actual scale is not flat.

## Questions to Consider

1. What would the site be without the accent at all — would the client still recognise their brand in a cream/ink/type-only world?
2. If the accent must be the reference-template colour (pink or lime), can it live as a small marker instead of a full-bleed band, so it doesn't fight "calm" or the contrast rules?
3. Could IFS parts work be taught in plain language on the homepage ("you might feel two ways about this — that's parts of you") as the hook that makes the practice distinct?
4. Price is usually the first question an anxious visitor asks; what if £55 + the 48-hour promise moved to the homepage and the nav simplified?
5. Is "preferred method of contact" the visitor's decision or the practice's convenience — what is lost if the default flips to Email?
