# OSRS Leagues VI — Demonic Pacts Planner

An interactive skill tree planner for the **Demonic Pacts** system in Old School RuneScape Leagues VI.

**[Live demo →](https://luunae.github.io/osrs-leagues6-pacts/)**

## Features

- **Interactive SVG tree** — scroll to zoom, drag to pan, click nodes to select/deselect
- **Point tracking** — 40 pact points budget with a live progress bar
- **Connectivity enforcement** — paths must remain connected; the app prevents illegal deselections
- **Tag filtering** — filter nodes by combat style (Melee, Ranged, Magic) or mechanic (Echo, Blindbag, Thorns, etc.)
- **Sidebar summary** — live list of selected pacts and remaining points

## Usage

No build step required. Open `index.html` directly in a browser, or host the directory as a static site.

```
index.html        # entry point
app.js            # tree logic, rendering, interaction
tree-data.js      # node graph (positions, links, categories)
tags-data.js      # tag definitions and implications
pacts-data.js     # pact descriptions and metadata
style.css         # layout and theme
```

## License

[The Unlicense](UNLICENSE) — public domain. I generally believe this should be the default state for code. I feel extra strongly about this for LLM-authored code.

## Changes?

If something needs fixed, let me know. It's currently GoodEnoughTM.
Want a tag added? Also let me know.
Want world peace? Same. :(

## AI Disclaimer

~Everything in the initial commit (except for the UNLICENSE) is Claude output.
