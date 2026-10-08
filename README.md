# Sebastian M. David — FIDE Elo progression

A small static site charting the FIDE ratings of Sebastian M. David
(FIDE ID [42271835](https://ratings.fide.com/profile/42271835), Romania, born 2014),
starting from his first rating on the October 2026 list.

Open `index.html` in a browser. It has no build step and no dependencies besides
Google Fonts, so it works straight from disk or on GitHub Pages.

## Live site (GitHub Pages)

Published at **https://ghosty52w.github.io/Sebastian-SDavid.elo/**.

One-time setup: in the repo go to **Settings → Pages**, and under
**Build and deployment → Source** choose **GitHub Actions**. That's all.

The workflow in `.github/workflows/pages.yml` publishes the site on every push
to `main` (for example a new month in `data/ratings.js`). You can also run it
by hand from the **Actions** tab → *Deploy site to GitHub Pages* → *Run workflow*.

## What's on the page

- Standard, rapid and blitz cards (unrated time controls show "Not rated")
- Score with White and Black from FIDE's Stats tab (replaced by national,
  European and world ranks once FIDE shows them and they're added to `ranks`)
- Stepped rating chart for every rated time control, with rated games per list
  underneath; the 1Y / 2Y range buttons appear once there are enough lists
- Milestones worked out from the data (first ratings, new hundreds, biggest swings)
- The full list-by-list table

## Where things stand (October 2026 list)

| | Rating | Games rated |
|---|---|---|
| Standard | Not rated | 0 |
| Rapid | **1569** (first rating) | 5 |
| Blitz | Not rated | 0 |

Score so far: 3½ / 6 (White 2 won, 1 lost; Black 1 won, 1 drawn, 1 lost).

## Updating

Each month, add the new FIDE list as one row in `data/ratings.js` and set
`asOf` to that month:

```js
//  period,   std, std games, rapid, rapid games, blitz, blitz games
["2026-11", null, null, 1569, 0, null, null],
```

Use `null` where FIDE shows no rating. Everything else (cards, chart, summary,
milestones, table) is calculated from these rows. Also refresh `record` from
the FIDE Stats tab, and fill in `ranks` from the Info tab once FIDE shows them.

To add a photo, put a square crop at `images/sebastian.jpg` and set
`photo: "images/sebastian.jpg"` in `data/ratings.js`. For link previews,
replace `images/sebastian-share.jpg` (1200×630).

Data source: FIDE ratings profile, Info, Progress and Stats tabs, transcribed
from the October 2026 list.
