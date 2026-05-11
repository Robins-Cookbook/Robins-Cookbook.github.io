const RECIPES = window.RECIPES || [];

function getDisplayRecipe(recipe) {
  return typeof localizeRecipe === "function" ? localizeRecipe(recipe) : recipe;
}

function formatAmount(value) {
  if (value === null || value === undefined) return "";
  const whole = Math.floor(value);
  const fraction = Math.round((value - whole) * 100) / 100;
  const fractions = {
    0.25: "1/4",
    0.33: "1/3",
    0.5: "1/2",
    0.67: "2/3",
    0.75: "3/4"
  };
  if (fractions[fraction]) {
    return whole > 0 ? `${whole} ${fractions[fraction]}` : fractions[fraction];
  }
  const rounded = Math.round(value * 100) / 100;
  if (Number.isInteger(rounded)) return String(rounded);
  const formatted = String(rounded).replace(/^0\./, ".");
  return typeof getLanguage === "function" && getLanguage() === "de"
    ? formatted.replace(".", ",")
    : formatted;
}

function formatIngredient(ingredient, scale = 1) {
  if (typeof ingredient === "string") return ingredient;
  if (ingredient.amount === null || ingredient.amount === undefined) {
    return [ingredient.unit, ingredient.item].filter(Boolean).join(" ");
  }
  return [formatAmount(ingredient.amount * scale), ingredient.unit, ingredient.item]
    .filter(Boolean)
    .join(" ");
}

function getRecipeUrl(recipe) {
  return `${recipe.id}.html`;
}

function getRatioIngredient(ingredient, ratioState) {
  if (!ratioState || !ingredient.role) return ingredient;
  if (ingredient.role === "ratioLiquid") {
    return { ...ingredient, amount: ratioState.liquidAmount, unit: ratioState.liquidUnit };
  }
  if (ingredient.role === "ratioButter") {
    return { ...ingredient, amount: ratioState.liquidAmount * ratioState.ratio, unit: ratioState.butterUnit };
  }
  if (ingredient.role === "yieldWater") {
    return { ...ingredient, amount: ratioState.waterAmount, unit: "ml" };
  }
  if (ingredient.role === "yieldButterTotal") {
    return { ...ingredient, amount: ratioState.butterAmount, unit: "g" };
  }
  if (ingredient.role === "yieldButterFirst") {
    return { ...ingredient, amount: ratioState.firstButterAmount, unit: "g" };
  }
  if (ingredient.role === "yieldButterSecond") {
    return { ...ingredient, amount: ratioState.secondButterAmount, unit: "g" };
  }
  return ingredient;
}

function getRecipe() {
  const id = document.body.dataset.recipeId;
  return RECIPES.find((recipe) => recipe.id === id);
}

function getInitialTarget(recipe) {
  if (!recipe.calculator) return recipe.baseServings || 1;
  if (recipe.calculator.type === "pan") return recipe.calculator.basePan;
  if (recipe.calculator.type === "ratio") return recipe.calculator.value;
  if (recipe.calculator.type === "yieldRatio") return recipe.calculator.value;
  return recipe.baseServings || recipe.calculator.min || 1;
}

function formatRatio(value) {
  return Number.isInteger(value) ? String(value) : String(value).replace(".5", " 1/2");
}

function getScale(recipe, target) {
  if (!recipe.calculator) return 1;
  if (recipe.calculator.type === "pan") {
    return Math.pow(target / recipe.calculator.basePan, 2);
  }
  return target / recipe.baseServings;
}

function roundTo(value, interval = 1) {
  return Math.round(value / interval) * interval;
}

function getCalculatorIngredientState(recipe, target = getInitialTarget(recipe)) {
  if (!recipe.calculator) return null;
  if (recipe.calculator.type === "ratio") {
    return {
      ratio: target,
      liquidAmount: recipe.calculator.liquidAmount,
      liquidUnit: recipe.calculator.liquidUnit,
      butterUnit: recipe.calculator.butterUnit
    };
  }
  if (recipe.calculator.type === "yieldRatio") {
    const totalParts = recipe.calculator.butterParts + recipe.calculator.waterParts;
    const waterAmount = target * recipe.calculator.waterParts / totalParts;
    const butterAmount = target * recipe.calculator.butterParts / totalParts;
    const firstButterAmount = butterAmount * recipe.calculator.firstButterShare;
    const secondButterAmount = butterAmount - firstButterAmount;
    const roundInterval = recipe.calculator.roundTo || 1;

    return {
      waterAmount: roundTo(waterAmount, roundInterval),
      butterAmount: roundTo(butterAmount, roundInterval),
      firstButterAmount: roundTo(firstButterAmount, roundInterval),
      secondButterAmount: roundTo(secondButterAmount, roundInterval)
    };
  }
  return null;
}

function renderIngredientList(recipe, scale = 1, ratioState = null) {
  const list = document.getElementById("ingredientList");
  if (!list) return;
  list.innerHTML = recipe.ingredients
    .map((ingredient) => `<li>${formatIngredient(getRatioIngredient(ingredient, ratioState), scale)}</li>`)
    .join("");
}

function getRelatedLinks(recipe) {
  return (recipe.relatedRecipes || [])
    .map((related) => {
      const target = RECIPES.find((item) => item.id === related.recipeId);
      if (!target) return "";
      return `<a class="related-recipe-link" href="${getRecipeUrl(target)}">${related.label}</a>`;
    })
    .filter(Boolean)
    .join("");
}

function renderTopInfo(recipe) {
  const panel = document.getElementById("recipeTopInfo");
  if (!panel) return;

  const blocks = [];

  if (recipe.feature) {
    blocks.push(`
      <section class="recipe-info-block">
        <span class="tool-kicker">${recipe.feature.type}</span>
        <h2>${recipe.feature.title}</h2>
        <p>${recipe.feature.text}</p>
      </section>
    `);
  }

  if (recipe.sourceVideo) {
    blocks.push(`
      <section class="recipe-info-block">
        <span class="tool-kicker">${t("sourceVideo")}</span>
        <h2>${recipe.sourceVideo.label}</h2>
        <a class="text-link" href="${recipe.sourceVideo.url}" target="_blank" rel="noopener">${t("openVideoSource")}</a>
      </section>
    `);
  }

  if (recipe.sourceLink) {
    blocks.push(`
      <section class="recipe-info-block">
        <span class="tool-kicker">${t("reference")}</span>
        <h2>${recipe.sourceLink.label}</h2>
        <a class="text-link" href="${recipe.sourceLink.url}" target="_blank" rel="noopener">${t("openReference")}</a>
      </section>
    `);
  }

  const relatedLinks = getRelatedLinks(recipe);
  if (relatedLinks) {
    blocks.push(`
      <section class="recipe-info-block">
        <span class="tool-kicker">${t("relatedRecipe")}</span>
        <h2>${t("howThisConnects")}</h2>
        <div class="related-recipe-list">${relatedLinks}</div>
      </section>
    `);
  }

  panel.innerHTML = blocks.join("");
  panel.hidden = !blocks.length;
}

function renderCalculator(recipe) {
  const panel = document.getElementById("recipeFeature");
  if (!panel) return;

  const blocks = [];

  if (recipe.calculator) {
    const target = getInitialTarget(recipe);
    const unit = recipe.calculator.unit ? ` ${recipe.calculator.unit}` : "";
    const value = recipe.calculator.type === "ratio" ? `${formatRatio(target)}:1` : `${target}${unit}`;
    const step = recipe.calculator.step || (recipe.calculator.type === "ratio" ? ".5" : "1");
    blocks.push(`
      <section class="recipe-tool">
        <span class="tool-kicker">${t("calculator")}</span>
        <h2>${recipe.calculator.title}</h2>
        <label class="range-control" for="recipeScale">
          <span>${recipe.calculator.label}</span>
          <strong id="scaleValue">${value}</strong>
        </label>
        <input
          id="recipeScale"
          type="range"
          min="${recipe.calculator.min}"
          max="${recipe.calculator.max}"
          value="${target}"
          step="${step}"
        />
        <p>${recipe.calculator.note}</p>
      </section>
    `);
  }

  panel.innerHTML = blocks.join("");
  panel.hidden = !blocks.length;

  const slider = document.getElementById("recipeScale");
  if (!slider) return;
  const value = document.getElementById("scaleValue");
  const unit = recipe.calculator.unit ? ` ${recipe.calculator.unit}` : "";

  slider.addEventListener("input", () => {
    const target = Number(slider.value);
    if (recipe.calculator.type === "ratio") {
      value.textContent = `${formatRatio(target)}:1`;
      renderIngredientList(recipe, 1, getCalculatorIngredientState(recipe, target));
    } else if (recipe.calculator.type === "yieldRatio") {
      value.textContent = `${target}${unit}`;
      renderIngredientList(recipe, 1, getCalculatorIngredientState(recipe, target));
    } else {
      value.textContent = `${target}${unit}`;
      renderIngredientList(recipe, getScale(recipe, target));
    }
  });
}

function renderRecipePage() {
  const recipe = getRecipe();
  const displayRecipe = recipe ? getDisplayRecipe(recipe) : null;
  const page = document.getElementById("recipePage");
  if (!page) return;

  if (!recipe) {
    page.innerHTML = `
      <div class="section-inner recipe-not-found">
        <h1>${t("recipeNotFound")}</h1>
        <a class="btn btn-primary" href="../index.html">${t("backToRecipes")}</a>
      </div>
    `;
    return;
  }

  document.title = `${displayRecipe.title} | ${SITE_NAME}`;
  const description = document.querySelector("meta[name='description']");
  if (description) description.setAttribute("content", displayRecipe.description);

  const heroClass = displayRecipe.image ? "recipe-hero-grid" : "recipe-hero-grid recipe-hero-grid-no-image";
  const imageHtml = displayRecipe.image ? `<img src="${displayRecipe.image}" alt="${displayRecipe.title}" />` : "";

  page.innerHTML = `
    <section class="recipe-hero-detail">
      <div class="section-inner ${heroClass}">
        <div>
          <a class="back-link" href="../index.html">${t("backToRecipes")}</a>
          <div class="recipe-meta-row">
            <span class="recipe-category">${displayRecipe.categoryLabel}</span>
            <span class="recipe-time">${displayRecipe.time} min</span>
            <span class="recipe-season">${displayRecipe.seasonLabel}</span>
            ${displayRecipe.favorite ? `<span class="recipe-favorite">${t("favorite")}</span>` : ""}
          </div>
          <h1>${displayRecipe.title}</h1>
          <p>${displayRecipe.description}</p>
          <div class="recipe-tags">
            ${displayRecipe.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </div>
        ${imageHtml}
      </div>
    </section>

    <section class="section-inner recipe-body">
      <div class="recipe-top-info" id="recipeTopInfo" hidden></div>
      <div class="recipe-detail-grid">
        <article class="recipe-panel">
        <h2>${t("ingredients")}</h2>
        <ul id="ingredientList"></ul>
        </article>
        <article class="recipe-panel">
        <h2>${t("method")}</h2>
        <ol>
          ${displayRecipe.steps.map((step) => `<li>${step}</li>`).join("")}
        </ol>
        </article>
        <aside class="recipe-feature-stack" id="recipeFeature" hidden></aside>
      </div>
    </section>
  `;

  renderIngredientList(displayRecipe, 1, getCalculatorIngredientState(displayRecipe));
  renderTopInfo(displayRecipe);
  renderCalculator(displayRecipe);
}

function initFooterYear() {
  const year = document.getElementById("footerYear");
  if (year) year.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  setCommonPageText();
  initLanguageToggle();
  initFooterYear();
  renderRecipePage();
});
