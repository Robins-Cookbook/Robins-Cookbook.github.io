# Agent Guide

This is Robin's personal recipe site, published with GitHub Pages at `https://robins-cookbook.github.io/`. Keep changes simple, static, and easy to maintain.

## Site Structure

- `index.html` is the homepage shell: header, search, filters, recipe grid, footer.
- `data/recipes.js` initializes `window.RECIPES`, keeps the `window.RECIPE_FILES` manifest, and loads the individual recipe files.
- `data/recipes/*.js` are the source of truth for recipe content. Each file pushes exactly one recipe object into `window.RECIPES`.
- `script.js` renders the homepage search, category filters, sorting, and recipe cards.
- `recipes/*.html` are small dedicated recipe page shells. Each one sets `data-recipe-id` on the `<body>`.
- `recipe-page.js` renders a recipe detail page from the matching recipe object.
- `style.css` contains all layout and visual styling.
- `sitemap.xml` and `robots.txt` should stay aligned with public URLs.

## Design Preferences

- The site name is `Personal Recipes`.
- Keep the interface calm, practical, and personal. Avoid marketing copy, big landing-page sections, and explanatory feature text.
- Recipe detail pages should not feel like everything is inside cards. Prefer a clear editorial layout: top context first, then ingredients, then method.
- Use cards only where they make sense, such as recipe tiles on the homepage or a specific interactive tool.
- Do not add placeholder food photos. If a recipe has no real image yet, leave `image: ""`; the homepage handles that cleanly.
- Recipe pages can be individual. Some recipes may have a calculator, some may have a source video, some may have a reference link, and some may just be plain recipes.
- Verification does not need screenshots every time. Run code/static checks and use screenshots only when a visual change is risky or requested.

## Adding A Recipe

1. Create `data/recipes/<id>.js`.
2. Give it a stable kebab-case `id`, for example `butter-emulsion`.
3. In that file, initialize and push one recipe:

```js
window.RECIPES = window.RECIPES || [];

window.RECIPES.push({
  id: "butter-emulsion"
});
```

4. Include the standard fields:
   - `title`
   - `category`
   - `time`
   - `season`
   - `favorite`
   - `image`
   - `description`
   - `tags`
   - `baseServings`
   - `ingredients`
   - `steps`
5. Add `<id>.js` to `window.RECIPE_FILES` in `data/recipes.js`. Keep the order intentional; it affects default display order when favorites tie.
6. Create `recipes/<id>.html` using an existing recipe page as the template, and set `<body data-recipe-id="<id>">`.
7. Add the new page URL to `sitemap.xml`.
8. Run a basic check before committing:

```bash
node --check data/recipes.js && node --check script.js && node --check recipe-page.js
python3 -m http.server 8080
```

Then confirm the homepage and the new recipe URL return `200`.

## Recipe Data Patterns

Ingredients can be strings or structured objects. Prefer structured objects when quantities matter:

```js
{ amount: 120, unit: "g", item: "cold butter, cubed" }
```

Use `amount: null` for flexible items:

```js
{ amount: null, unit: "", item: "Fresh herbs" }
```

Optional recipe extras:

- `calculator`: interactive scaling or ratio tools.
- `feature`: a top-of-page technique, timing, heat, or serving note.
- `sourceVideo`: a video inspiration/source link.
- `sourceLink`: a non-video reference link.
- `relatedRecipes`: links to recipes that extend, depend on, or pair with the current recipe.

For related recipes:

```js
relatedRecipes: [
  { label: "Extend this into Sriracha Butter Emulsion", recipeId: "sriracha-butter-emulsion" }
]
```

## Interactive Recipe Tools

Do not force every recipe to have a tool. Add one only when it is genuinely useful.

Existing calculator types:

- `servings`: scales ingredients by serving count.
- `pan`: scales ingredients by pan diameter.
- `ratio`: keeps one ingredient fixed and adjusts another by ratio, used by butter emulsion.
- `yieldRatio`: scales a fixed-ratio formula to a target yield, used by butter emulsion.

If adding a new tool type, update `recipe-page.js` narrowly and keep the data shape readable in the individual recipe file.

## Deployment

Pushes to `main` deploy automatically through GitHub Actions Pages. The repository is `Robins-Cookbook/Robins-Cookbook.github.io`, and the canonical site URL is `https://robins-cookbook.github.io/`.
