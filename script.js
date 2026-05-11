const RECIPES = window.RECIPES || [];

const state = {
  category: "All",
  query: "",
  sort: "favorite"
};

const categories = ["All", "Breakfast", "Mains", "Soups", "Sides", "Sauces", "Sweets"];

function recipeUrl(recipe) {
  return `recipes/${recipe.id}.html`;
}

function formatAmount(value) {
  if (value === null || value === undefined) return "";
  if (Number.isInteger(value)) return String(value);
  return String(value).replace(/^0\./, ".");
}

function ingredientText(ingredient) {
  if (typeof ingredient === "string") return ingredient;
  const amount = formatAmount(ingredient.amount);
  return [amount, ingredient.unit, ingredient.item].filter(Boolean).join(" ");
}

function recipeMatches(recipe) {
  const haystack = [
    recipe.title,
    recipe.category,
    recipe.season,
    recipe.description,
    ...recipe.tags,
    ...recipe.ingredients.map(ingredientText)
  ].join(" ").toLowerCase();

  const matchesCategory = state.category === "All" || recipe.category === state.category;
  const matchesQuery = !state.query || haystack.includes(state.query.toLowerCase());
  return matchesCategory && matchesQuery;
}

function getVisibleRecipes() {
  return RECIPES
    .filter(recipeMatches)
    .sort((a, b) => {
      if (state.sort === "time") return a.time - b.time || a.title.localeCompare(b.title);
      if (state.sort === "name") return a.title.localeCompare(b.title);
      if (a.favorite !== b.favorite) return a.favorite ? -1 : 1;
      return a.title.localeCompare(b.title);
    });
}

function renderFilters() {
  const wrap = document.getElementById("categoryFilters");
  if (!wrap) return;

  wrap.innerHTML = "";
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-btn${category === state.category ? " active" : ""}`;
    button.textContent = category;
    button.setAttribute("aria-pressed", String(category === state.category));
    button.addEventListener("click", () => {
      state.category = category;
      renderFilters();
      renderRecipes();
    });
    wrap.appendChild(button);
  });
}

function buildRecipeCard(recipe) {
  const card = document.createElement("a");
  card.className = "recipe-card reveal";
  card.href = recipeUrl(recipe);
  card.setAttribute("aria-label", `Open recipe for ${recipe.title}`);
  const media = recipe.image
    ? `<img src="${recipe.image}" alt="${recipe.title}" loading="lazy" />`
    : `<div class="recipe-card-placeholder" aria-hidden="true"><span>${recipe.category}</span></div>`;
  card.innerHTML = `
    ${media}
    <div class="recipe-card-body">
      <div class="recipe-meta-row">
        <span class="recipe-category">${recipe.category}</span>
        <span class="recipe-time">${recipe.time} min</span>
        ${recipe.favorite ? '<span class="recipe-favorite">Favorite</span>' : ""}
      </div>
      <h3>${recipe.title}</h3>
      <p>${recipe.description}</p>
      <div class="recipe-tags">
        ${recipe.tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
    </div>
  `;
  return card;
}

function renderRecipes() {
  const grid = document.getElementById("recipeGrid");
  if (!grid) return;

  const recipes = getVisibleRecipes();
  grid.innerHTML = "";

  if (!recipes.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "No matching recipes yet.";
    grid.appendChild(empty);
    return;
  }

  recipes.forEach((recipe) => grid.appendChild(buildRecipeCard(recipe)));
  initReveal();
}

function initSearchAndSort() {
  const search = document.getElementById("recipeSearch");
  const sort = document.getElementById("recipeSort");

  if (search) {
    search.addEventListener("input", () => {
      state.query = search.value.trim();
      renderRecipes();
    });
  }

  if (sort) {
    sort.addEventListener("change", () => {
      state.sort = sort.value;
      renderRecipes();
    });
  }
}

function initHeader() {
  const header = document.getElementById("site-header");
  const setScrolled = () => {
    if (header) header.classList.toggle("scrolled", window.scrollY > 8);
  };

  setScrolled();
  window.addEventListener("scroll", setScrolled, { passive: true });
}

function initReveal() {
  const items = document.querySelectorAll(".reveal:not(.visible)");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  items.forEach((item) => observer.observe(item));
}

function initFooterYear() {
  const year = document.getElementById("footerYear");
  if (year) year.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  initFooterYear();
  initHeader();
  initSearchAndSort();
  renderFilters();
  renderRecipes();
});
