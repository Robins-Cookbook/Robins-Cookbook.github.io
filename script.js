const RECIPES = window.RECIPES || [];

const state = {
  category: "All",
  query: "",
  sort: "favorite"
};

const categories = ["All", ...new Set(RECIPES.map((recipe) => recipe.category))];

function getDisplayRecipe(recipe) {
  return typeof localizeRecipe === "function" ? localizeRecipe(recipe) : recipe;
}

function recipeUrl(recipe) {
  return `recipes/${recipe.id}.html`;
}

function formatAmount(value) {
  if (value === null || value === undefined) return "";
  if (Number.isInteger(value)) return String(value);
  const formatted = String(value).replace(/^0\./, ".");
  return typeof getLanguage === "function" && getLanguage() === "de"
    ? formatted.replace(".", ",")
    : formatted;
}

function ingredientText(ingredient) {
  if (typeof ingredient === "string") return ingredient;
  const amount = formatAmount(ingredient.amount);
  return [amount, ingredient.unit, ingredient.item].filter(Boolean).join(" ");
}

function recipeMatches(recipe) {
  const displayRecipe = getDisplayRecipe(recipe);
  const haystack = [
    displayRecipe.title,
    displayRecipe.categoryLabel || displayRecipe.category,
    displayRecipe.seasonLabel || displayRecipe.season,
    displayRecipe.description,
    ...displayRecipe.tags,
    ...displayRecipe.ingredients.map(ingredientText)
  ].join(" ").toLowerCase();

  const matchesCategory = state.category === "All" || recipe.category === state.category;
  const matchesQuery = !state.query || haystack.includes(state.query.toLowerCase());
  return matchesCategory && matchesQuery;
}

function getVisibleRecipes() {
  return RECIPES
    .filter(recipeMatches)
    .sort((a, b) => {
      const recipeA = getDisplayRecipe(a);
      const recipeB = getDisplayRecipe(b);
      if (state.sort === "time") return a.time - b.time || recipeA.title.localeCompare(recipeB.title);
      if (state.sort === "name") return recipeA.title.localeCompare(recipeB.title);
      if (a.favorite !== b.favorite) return a.favorite ? -1 : 1;
      return recipeA.title.localeCompare(recipeB.title);
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
    button.textContent = category === "All" ? t("categories.All") : t(`categories.${category}`);
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
  const displayRecipe = getDisplayRecipe(recipe);
  const card = document.createElement("a");
  card.className = "recipe-card reveal";
  card.href = recipeUrl(recipe);
  card.setAttribute("aria-label", `${t("openRecipe")} ${displayRecipe.title}`);
  const media = displayRecipe.image
    ? `<img src="${displayRecipe.image}" alt="${displayRecipe.title}" loading="lazy" />`
    : `<div class="recipe-card-placeholder" aria-hidden="true"><span>${displayRecipe.categoryLabel}</span></div>`;
  card.innerHTML = `
    ${media}
    <div class="recipe-card-body">
      <div class="recipe-meta-row">
        <span class="recipe-category">${displayRecipe.categoryLabel}</span>
        <span class="recipe-time">${displayRecipe.time} min</span>
        ${displayRecipe.favorite ? `<span class="recipe-favorite">${t("favorite")}</span>` : ""}
      </div>
      <h3>${displayRecipe.title}</h3>
      <p>${displayRecipe.description}</p>
      <div class="recipe-tags">
        ${displayRecipe.tags.map((tag) => `<span>${tag}</span>`).join("")}
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
    empty.textContent = t("noMatches");
    grid.appendChild(empty);
    return;
  }

  recipes.forEach((recipe) => grid.appendChild(buildRecipeCard(recipe)));
  initReveal();
}

function setHomePageText() {
  const description = t("siteDescription");
  document.title = SITE_NAME;
  document.querySelector("meta[name='description']")?.setAttribute("content", description);
  document.querySelector("meta[property='og:title']")?.setAttribute("content", SITE_NAME);
  document.querySelector("meta[property='og:description']")?.setAttribute("content", description);
  document.querySelector("meta[name='twitter:title']")?.setAttribute("content", SITE_NAME);
  document.querySelector("meta[name='twitter:description']")?.setAttribute("content", description);

  const schema = document.querySelector("script[type='application/ld+json']");
  if (schema) {
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: "https://robins-cookbook.github.io/",
      description
    }, null, 2);
  }

  document.querySelector(".hero-search")?.setAttribute("aria-label", t("findRecipe"));
  document.querySelector("label[for='recipeSearch']").textContent = t("findRecipe");
  document.getElementById("recipeSearch")?.setAttribute("placeholder", t("searchPlaceholder"));
  document.querySelector(".search-row .btn").textContent = t("browse");
  document.querySelector(".section-title").textContent = t("recipes");
  document.querySelector(".sort-control span").textContent = t("sort");
  document.getElementById("recipeSort")?.setAttribute("aria-label", t("sortRecipes"));
  document.querySelector("#recipeSort option[value='favorite']").textContent = t("favoritesFirst");
  document.querySelector("#recipeSort option[value='time']").textContent = t("fastestFirst");
  document.getElementById("categoryFilters")?.setAttribute("aria-label", t("filterRecipes"));
  setCommonPageText();
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
  setHomePageText();
  initFooterYear();
  initHeader();
  initLanguageToggle();
  initSearchAndSort();
  renderFilters();
  renderRecipes();
});
