const SITE_NAME = "Robin's Recipes";
const SUPPORTED_LANGUAGES = ["en", "de"];

const UI_TRANSLATIONS = {
  en: {
    siteDescription: "A personal recipe collection for everyday meals, comfort food, and reliable home cooking.",
    findRecipe: "Find a recipe",
    searchPlaceholder: "Search lentils, tofu, pasta...",
    browse: "Browse",
    recipes: "Recipes",
    sort: "Sort",
    sortRecipes: "Sort recipes",
    favoritesFirst: "Favorites first",
    fastestFirst: "Fastest first",
    filterRecipes: "Filter recipes by category",
    noMatches: "No matching recipes yet.",
    openRecipe: "Open recipe for",
    favorite: "Favorite",
    backToRecipes: "Back to recipes",
    recipeNotFound: "Recipe not found",
    ingredients: "Ingredients",
    method: "Method",
    calculator: "Calculator",
    sourceVideo: "Source video",
    openVideoSource: "Open video source",
    reference: "Reference",
    openReference: "Open reference",
    relatedRecipe: "Related recipe",
    howThisConnects: "How this connects",
    categories: {
      All: "All",
      Breakfast: "Breakfast",
      Mains: "Mains",
      Soups: "Soups",
      Sides: "Sides",
      Sauces: "Sauces",
      Sweets: "Sweets"
    },
    seasons: {
      Anytime: "Anytime",
      Spring: "Spring",
      Summer: "Summer",
      Autumn: "Autumn",
      Winter: "Winter"
    }
  },
  de: {
    siteDescription: "Robins persönliche Rezeptsammlung für Alltag, Wohlfühlessen und zuverlässige Küche.",
    findRecipe: "Rezept suchen",
    searchPlaceholder: "Linsen, Tofu, Pasta suchen...",
    browse: "Stöbern",
    recipes: "Rezepte",
    sort: "Sortieren",
    sortRecipes: "Rezepte sortieren",
    favoritesFirst: "Favoriten zuerst",
    fastestFirst: "Schnellste zuerst",
    filterRecipes: "Rezepte nach Kategorie filtern",
    noMatches: "Noch keine passenden Rezepte.",
    openRecipe: "Rezept öffnen:",
    favorite: "Favorit",
    backToRecipes: "Zurück zu den Rezepten",
    recipeNotFound: "Rezept nicht gefunden",
    ingredients: "Zutaten",
    method: "Zubereitung",
    calculator: "Rechner",
    sourceVideo: "Quellvideo",
    openVideoSource: "Videoquelle öffnen",
    reference: "Referenz",
    openReference: "Referenz öffnen",
    relatedRecipe: "Verwandtes Rezept",
    howThisConnects: "So hängt es zusammen",
    categories: {
      All: "Alle",
      Breakfast: "Frühstück",
      Mains: "Hauptgerichte",
      Soups: "Suppen",
      Sides: "Beilagen",
      Sauces: "Saucen",
      Sweets: "Süßes"
    },
    seasons: {
      Anytime: "Jederzeit",
      Spring: "Frühling",
      Summer: "Sommer",
      Autumn: "Herbst",
      Winter: "Winter"
    }
  }
};

function getLanguage() {
  const stored = localStorage.getItem("recipeLanguage");
  return SUPPORTED_LANGUAGES.includes(stored) ? stored : "en";
}

function setLanguage(language) {
  if (!SUPPORTED_LANGUAGES.includes(language)) return;
  localStorage.setItem("recipeLanguage", language);
  window.location.reload();
}

function t(key) {
  const dictionary = UI_TRANSLATIONS[getLanguage()] || UI_TRANSLATIONS.en;
  return key.split(".").reduce((value, part) => value && value[part], dictionary) || key;
}

function deepMerge(base, override) {
  if (!override) return base;
  const merged = Array.isArray(base) ? [...base] : { ...base };
  Object.entries(override).forEach(([key, value]) => {
    if (value && typeof value === "object" && !Array.isArray(value)) {
      merged[key] = deepMerge(base[key] || {}, value);
    } else {
      merged[key] = value;
    }
  });
  return merged;
}

function localizeRecipe(recipe) {
  const language = getLanguage();
  const translation = window.RECIPE_TRANSLATIONS?.[language]?.[recipe.id];
  const localized = deepMerge(recipe, translation);
  localized.categoryLabel = localized.categoryLabel || t(`categories.${recipe.category}`);
  localized.seasonLabel = localized.seasonLabel || t(`seasons.${recipe.season}`);
  return localized;
}

function initLanguage() {
  document.documentElement.lang = getLanguage();
}

function initLanguageToggle() {
  const nav = document.querySelector(".nav-container");
  if (!nav || nav.querySelector(".language-toggle")) return;

  const currentLanguage = getLanguage();
  const wrap = document.createElement("div");
  wrap.className = "language-toggle";
  wrap.setAttribute("aria-label", "Language");
  wrap.innerHTML = SUPPORTED_LANGUAGES
    .map((language) => `
      <button
        type="button"
        class="${language === currentLanguage ? "active" : ""}"
        aria-pressed="${language === currentLanguage}"
        data-language="${language}"
      >${language.toUpperCase()}</button>
    `)
    .join("");

  wrap.addEventListener("click", (event) => {
    const button = event.target.closest("[data-language]");
    if (!button) return;
    setLanguage(button.dataset.language);
  });

  nav.appendChild(wrap);
}

function setCommonPageText() {
  document.querySelectorAll(".nav-logo").forEach((logo) => {
    logo.textContent = SITE_NAME;
  });
  document.querySelectorAll("[data-site-name]").forEach((item) => {
    item.textContent = SITE_NAME;
  });
}

initLanguage();
