# Personal Recipes

A static GitHub Pages cookbook site adapted from the portfolio design language: soft green surfaces, Lora headings, compact cards, and gentle interaction.

## Editing Recipes

Recipes currently live in `script.js` inside the `RECIPES` array. Each recipe has:

- `title`, `category`, `time`, `season`, and `favorite`
- `image`, `description`, and `tags`
- `ingredients` and `steps`

The site renders cards automatically, supports search, category filters, sorting, and opens each recipe in a modal.

## Local Preview

This site can be opened directly in a browser, or served locally:

```bash
python3 -m http.server 8080
```

Then open `http://127.0.0.1:8080/`.
