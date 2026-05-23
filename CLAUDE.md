# hmbrimpact-site — instructions for Claude

This is the **hmbrimpact.org** static site. README.md holds the full rationale, design system, and maintenance guide for humans. **This file is the rule-set for you.** Read both before making changes — README explains *why*, this file tells you *what to do and what never to touch*.

## What this site is

A single static page (HTML + CSS + tiny vanilla JS) at `hmbrimpact.org`. It exists to make three .ORG Impact Awards submissions credible:

1. **Environment & Sustainability** — trees, birdies, freight CO₂
2. **Education** — Bold.org scholarship loop
3. **Community Strengthening** — PERA + HmBr Mela events

The 2026 submission deadline is **May 27**. The portal caps written answers at **500 words per question**. Awards platform: `enter.orgimpactawards.org`.

## Editorial rules — do not violate without asking

These are the credibility backbone. Breaking them looks dishonest to judges.

- **Ranges, never point estimates in body copy.** Always `3–9×` (lifespan) and `67–89%` (cost reduction). The `5× midpoint` and `~75%` only appear in *methodology footnotes* explicitly labeled as midpoints.
- **Bold.org fund is `$595` from `19 contributors`.** Do not round up. Do not estimate. If the number changes, update all five locations together (see *Bold.org sync points* below).
- **The 2025 UC Baddy outlier (96% performance) stays in the data table.** Hiding it would be more flattering but less credible.
- **Founder is named: Hari Gunupudi.** The 2020 → November 2025 personal-investment period is the credibility backbone — preserve any reference to it (Field Evidence footnote, Live Fund footnote, Honest Truth founder's note).
- **Never use the word "donate."** Use "contribute," "convert points to scholarship funding," or "support the fund." This is what distinguishes business-that-is-an-impact-engine from charity-with-a-store.
- **UK and Eastern Europe are pilots, not active markets.** They live in the Expansion Track sub-block with dashed gold borders and `Pilot · 2025` badges. Only move them into `.global-grid` as full region cards when adoption is genuinely complete.
- **Tournament travel is a co-equal Path 02**, not a footnote to gear and scholarship. For junior families, travel often exceeds equipment cost.

## Structural rules — do not reorder

- **Rewards section precedes Engine/PERA.** The Loop's *Convert* step opens into Rewards (what points become), then Engine/PERA follows as the auditable rigor underneath. Don't put PERA before Rewards.
- **Field Evidence has two charts above the footnote** — sustainability (green eyebrow) on left, affordability (gold eyebrow) on right. They visually argue the dual identity. Keep them paired.

## Bold.org fund sync points (five files to update together)

When the fund total changes from `$595` to a new amount, search `index.html` and `styles.css` and update all five:

1. **Counter card** in *Impact So Far*: `data-target="595"` → new amount
2. **Live Fund stats card**: `<div class="fund-amount">$595</div>` → new amount
3. **Progress bar fill width** in `styles.css`: `.fund-progress-fill { width: 1.19%; /* 595/50000 */ }` → recompute as `(new / 50000) × 100`
4. **`fund-progress-meta`**: `1.2% funded` and `19 contributors` → updated
5. **Path 03 card** `path-example`: `Live fund: $595 raised toward $50,000 goal · 19 contributors · see below`

Update all five in one commit — never leave them out of sync.

## Design system

- Brand colors (CSS custom properties, defined at top of `styles.css`):
  - `--green: #1a6b3c`, `--green-deep: #0d3d22` (sustainability)
  - `--gold: #c9a227`, `--gold-light: #f0d06a` (community / affordability)
  - `--ink: #0f1a14`, `--ink-soft: #2a3530` (rigor / data)
- Fonts: Bebas Neue (numerals), Newsreader (editorial headlines), DM Sans (UI/body), DM Mono (tags/data labels). Never hardcode colors or font names — reference the existing tokens.
- Three visual layers alternate throughout: editorial → data → action. Preserve the rhythm.

## File layout

```
hmbrimpact-site/
├── index.html        # all markup
├── styles.css        # design system + every component
├── script.js         # impact-counter scroll animation only
├── favicon.svg       # three-rays impact mark (green square, gold rays, light-gold origin dot)
├── README.md         # human-facing rationale + maintenance guide
├── CLAUDE.md         # this file
├── netlify.toml      # legacy Netlify config (harmless, kept for reference)
└── .claude/
    ├── launch.json   # preview server config (committed)
    └── settings.local.json  # local permissions (gitignored, never commit)
```

## Local preview and deploy

- **Local preview:** `python3 -m http.server 8000` from the project root, then open `http://localhost:8000`.
- **Live site:** hosted on Vercel, auto-deploys from `main` branch push.
- **DNS:** Squarespace Domains. `A` record on `@` → `76.76.21.21`, `CNAME` on `www` → `cname.vercel-dns.com`. Do not touch the existing `MX` (Google Workspace) or `google-site-verification` TXT records.

## Common asks and how to handle them

- **"Update Bold.org to $X"** → all five sync points in one commit. Run the math for the progress-bar width.
- **"Add a new tournament row"** → copy an existing `<tr>` in the data table tbody, set `class="is-hum"` for humidified, use `pill pill-hum` / `pill pill-non` for the status pill. Update the stat strip (tournaments tracked, games played, points counted) and recompute the chart averages if the new data changes them.
- **"Graduate UK / Eastern Europe to active"** → only when adoption is genuinely complete. Move the card from `.expansion-grid` into `.global-grid`, drop the `pilot-badge`, switch styling from dashed border to solid.
- **"Refresh Impact So Far counters"** → update `data-target` attributes on the six `.counter-card` elements. `data-format` is `"number"` or `"usd"`.

## Verification

After non-trivial changes, take a screenshot of the affected section via the preview server before declaring done. Don't trust that the edit succeeded just because the tool returned a success message.
