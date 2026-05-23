# hmbrimpact.org

The official impact site for HmBr Sports — telling the story of how a single
shuttlecock humidifier saves trees, saves birdies, and makes badminton more
affordable, then turns every match played into gear, travel, or scholarship
funding.

## Project structure

```
hmbrimpact-site/
├── index.html        # the page itself (markup + content)
├── styles.css        # all styling — design tokens, layout, responsive rules
├── script.js         # impact-counter scroll animation
├── netlify.toml      # one-file Netlify deploy config (optional)
├── .gitignore
└── README.md         # this file
```

Everything is plain HTML, CSS, and a tiny bit of vanilla JavaScript — no
build step, no npm install, no framework. Open `index.html` in a browser and
it works. That's by design: the lower the maintenance burden, the more time
goes into the mission and not the website.

## Local preview

To preview locally before deploying:

```bash
# Python (almost always already installed)
python3 -m http.server 8000

# OR Node
npx serve .
```

Then open http://localhost:8000 in a browser.

## Updating the numbers (most common maintenance task)

The site has a handful of live data points that change over time. To keep
the page honest, update them in lockstep:

### Bold.org scholarship fund — three places to keep in sync
When the Bold.org fund moves, search `index.html` for `$595` and update:

1. **The counter card** in *Impact So Far*:
   ```html
   <div class="counter-card gold" data-target="595" data-format="usd">
   ```
   Change `data-target="595"` to the new amount.

2. **The Live Fund section** stats card:
   ```html
   <div class="fund-amount">$595</div>
   <div class="fund-amount-label">Raised toward <strong>$50,000</strong> goal</div>
   ```

3. **The progress bar fill width** in `styles.css`:
   ```css
   .fund-progress-fill {
     width: 1.19%; /* 595/50000 */
     ...
   }
   ```
   New width = (new amount / 50000) × 100. Update the comment too.

4. **The contributor count and "% funded" line** in the Live Fund section:
   ```html
   <div class="fund-progress-meta">
     <span>1.2% funded</span>
     <span>19 contributors</span>
   </div>
   ```

5. **The Path 03 rewards card** also mentions the live fund:
   ```html
   <p class="path-example">Live fund: $595 raised toward $50,000 goal · 19 contributors · see below</p>
   ```

### Impact counters
The big animated counters at the top of the page are driven by `data-target`
attributes:

```html
<div class="counter-card" data-target="12500" data-format="number">
```

Six counters total:
- Shuttlecocks saved
- Birds & birdies spared
- Trees of cork & CO₂ saved
- Players & academies reached
- Equipment & travel funded ($)
- Bold.org scholarship fund raised ($)

`data-format` accepts `"number"` (12,500) or `"usd"` ($12,500).

### Tournament dataset
The full data table in the *Field Evidence* section is hand-written HTML.
When a new tournament's data is available, copy an existing `<tr>` row in
the `<tbody>` of `table.data-table` and edit the values.

Also update the stat strip above the table:
```html
<div class="evidence-strip">
  <div class="strip-cell">
    <div class="strip-num">11</div>       <!-- tournaments tracked -->
    <div class="strip-num">13,425</div>   <!-- games played -->
    <div class="strip-num">399,228</div>  <!-- points counted -->
    ...
```

### UK and Eastern Europe pilots
When pilots graduate to fully active markets, they should move from the
*Expansion Track* sub-block into the main `.global-grid` as full region
cards (and the pilot badges removed).

## Deployment

This is a static site. Any static host works. Three good options:

### Option A — Cloudflare Pages (recommended)
1. Push this folder to a GitHub repo.
2. Go to https://pages.cloudflare.com → "Create a project" → connect the repo.
3. Build settings: leave build command empty, output directory = `/`.
4. Add custom domain `hmbrimpact.org` in the project settings.
5. Update DNS to point at Cloudflare (one CNAME record).

Pros: Free, fast global CDN, free HTTPS, no build step needed.

### Option B — Netlify (fastest first-time deploy)
1. Go to https://app.netlify.com/drop
2. Drag this entire folder onto the page.
3. You'll get a `*.netlify.app` URL in seconds.
4. Add custom domain `hmbrimpact.org` in site settings.
5. Update DNS.

The `netlify.toml` file in this repo handles the build config automatically.

### Option C — GitHub Pages
1. Push to a GitHub repo.
2. In repo settings → Pages → source = `main` branch, folder = `/`.
3. Site goes live at `https://<username>.github.io/<reponame>`.
4. Custom domain configurable in the same settings page.

## Working with Claude Code

This project is structured to be easy to evolve with Claude Code. From the
project folder:

```bash
claude
```

Useful prompts:
- "Update the Bold.org fund total from $595 to $X — change it everywhere."
- "Add a new tournament row to the data table: [tournament name, brand,
  status, games, sh/game, pts/sh, performance %]."
- "Move the UK pilot card from the Expansion Track block into the main
  Global Reach grid as a fully active market."
- "Refresh the Impact So Far counters with these new totals: [...]."
- "Initialize a Git repo and push to a new GitHub repository called
  hmbrimpact-site."
- "Deploy this to Cloudflare Pages using wrangler."

## Credits

Design and content authored in collaboration with Claude (Anthropic).
Tournament dataset, founder narrative, and operational observations
supplied by HmBr Sports (Hari Gunupudi, founder).

## License

© HmBr Sports. All rights reserved.
