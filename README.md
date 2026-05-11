# Personal Recipes

A static GitHub Pages cookbook site adapted from the portfolio design language: soft green surfaces, Lora headings, compact cards, and gentle interaction.

## Editing Recipes

Recipes currently live in `data/recipes.js` inside the `RECIPES` array. Each recipe has:

- `title`, `category`, `time`, `season`, and `favorite`
- `image`, `description`, and `tags`
- `ingredients` and `steps`

The site renders cards automatically, supports search, category filters, sorting, and links each card to a dedicated page in `recipes/`.

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
