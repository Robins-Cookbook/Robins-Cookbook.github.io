window.RECIPES = window.RECIPES || [];

window.RECIPE_FILES = [
  "butter-emulsion.js",
  "sriracha-butter-emulsion.js",
  "vegan-rouladen.js"
];

(function loadRecipeFiles() {
  if (typeof document === "undefined") return;

  const currentScript = document.currentScript;
  if (!currentScript || !currentScript.src) return;

  const recipeBase = new URL("recipes/", currentScript.src);
  const scripts = window.RECIPE_FILES
    .map((file) => `<script src="${new URL(file, recipeBase).href}"><\/script>`)
    .join("") + `<script src="${new URL("translations-de.js", currentScript.src).href}"><\/script>`;

  document.write(scripts);
})();
