# Robin's Recipes

A static GitHub Pages cookbook site adapted from the portfolio design language: soft green surfaces, Lora headings, compact cards, and gentle interaction.

## Editing Recipes

Each recipe lives in its own file in `data/recipes/`. The tiny `data/recipes.js` loader initializes `window.RECIPES`, lists the recipe files, and loads them for the homepage and detail pages.

The site supports English and German. English recipe files are the canonical source; German recipe text lives in `data/translations-de.js`. Shared UI labels and the language toggle live in `i18n.js`.

Each recipe has:

- `title`, `category`, `time`, `season`, and `favorite`
- `image`, `description`, and `tags`
- `ingredients` and `steps`

The site renders cards automatically, supports search, category filters, sorting, and links each card to a dedicated page in `recipes/`.

When adding a recipe, create `data/recipes/<id>.js`, add that filename to `window.RECIPE_FILES` in `data/recipes.js`, create `recipes/<id>.html`, and add the URL to `sitemap.xml`.

Individual recipe pages can optionally include extras:

- `calculator` for serving or pan-size scaling
- `feature` for prep notes, timing notes, or serving ideas
- `sourceVideo` or `sourceLink` for external inspiration/reference links

## Local Preview

This site can be opened directly in a browser, or served locally:

```bash
python3 -m http.server 8080
```

Then open `http://127.0.0.1:8080/`.
