# hmbrimpact-site — instructions for Claude

This is the **hmbrimpact.org** static site. README.md holds the full rationale, design system, and maintenance guide for humans. **This file is the rule-set for you.** Read both before making changes — README explains *why*, this file tells you *what to do and what never to touch*.

## Backlog index

Every meaningful unit of work on this site has a ticket in the hmbr-starter backlog at `/admin/backlog`. Search by `#NN` to read the full design history, decisions, and constraints behind each section. **Before editing a section, open its ticket** — the description fields capture editorial constants, structural rules, and "do not violate" decisions that are NOT obvious from reading the markup.

| Section / concern | Ticket | Editor lookup |
|---|---|---|
| **META** | [#209](http://localhost:59051/admin/backlog?q=%23209) | Full build + .ORG submission + SEO foundation wrapper |
| Hero | [#210](http://localhost:59051/admin/backlog?q=%23210) | "One humidifier. Three returns: trees, birdies, futures." |
| Impact So Far | [#211](http://localhost:59051/admin/backlog?q=%23211) | 6 counter cards, de-rounded values |
| Story / Duality | [#212](http://localhost:59051/admin/backlog?q=%23212) | Sustainability green + affordability gold |
| The Loop | [#213](http://localhost:59051/admin/backlog?q=%23213) | Buy → Play → Convert; precedes Rewards |
| Rewards | [#214](http://localhost:59051/admin/backlog?q=%23214) | Gear / co-equal travel / scholarship — precedes Engine |
| Engine / PERA | [#215](http://localhost:59051/admin/backlog?q=%23215) | Auditable rigor; references store.hmbrsports.com/pera-rating-system |
| Live Fund (Bold.org) | [#216](http://localhost:59051/admin/backlog?q=%23216) | $595 / 19 contributors; **5 sync points** — see ticket |
| Field Evidence | [#217](http://localhost:59051/admin/backlog?q=%23217) | Table + paired charts; UC Baddy outlier stays |
| Endorsements / Voices | [#218](http://localhost:59051/admin/backlog?q=%23218) | 4-tier credibility; privacy constants locked |
| Beyond the Equipment Bill | [#219](http://localhost:59051/admin/backlog?q=%23219) | Three-paths frame |
| Scale | [#220](http://localhost:59051/admin/backlog?q=%23220) | Forward-looking projections |
| Honest Truth | [#221](http://localhost:59051/admin/backlog?q=%23221) | Business-not-charity + founder note (Hari Gunupudi) |
| Global Reach | [#222](http://localhost:59051/admin/backlog?q=%23222) | 12 active + UK/EU pilots (dashed border) |
| CTA | [#223](http://localhost:59051/admin/backlog?q=%23223) | Brand voice: calm + evidence-led |
| Brand identity | [#224](http://localhost:59051/admin/backlog?q=%23224) | Logomark favicon + palette + font stack |
| SEO foundation | [#225](http://localhost:59051/admin/backlog?q=%23225) | OG + Twitter + sitemap + JSON-LD; render pipeline documented |
| Editorial rules + memory | [#226](http://localhost:59051/admin/backlog?q=%23226) | This file + README; ranges, privacy, "contribute" not "donate" |
| Vercel + DNS | [#227](http://localhost:59051/admin/backlog?q=%23227) | Squarespace DNS; preserve Workspace MX + verification TXT |

**Open follow-ups (accepted, not shipped):**

- [#228](http://localhost:59051/admin/backlog?q=%23228) — Automate Bold.org 5-sync-point burden
- [#229](http://localhost:59051/admin/backlog?q=%23229) — Phase 2 migration into hmbr-starter monolith (after Oct 6)
- [#230](http://localhost:59051/admin/backlog?q=%23230) — Tournament admin app (defer to Phase 2)
- [#231](http://localhost:59051/admin/backlog?q=%23231) — Replace tournamentsoftware.com placeholder URLs with specific event links
- [#232](http://localhost:59051/admin/backlog?q=%23232) — Continued WhatsApp testimonial intake → From-the-Field grid

**Inline-edit follow-ups (separate META, broader pattern):**

- [#206](http://localhost:59051/admin/backlog?q=%23206) — META: inline-edit via rendered preview
- [#207](http://localhost:59051/admin/backlog?q=%23207) — hmbrimpact.org inline content edit mode (`?edit=1`)
- [#208](http://localhost:59051/admin/backlog?q=%23208) — hmbr-starter `/admin/drafts` route (the bigger long-term win)

When logging new tickets for this repo: use seed script at `hmbr-starter/scripts/seed-backlog-hmbrimpact-build.ts` as the template.

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
