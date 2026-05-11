const RECIPES = [
  {
    id: "grain-bowls",
    title: "Roasted Vegetable Grain Bowls",
    category: "Mains",
    time: 40,
    season: "Spring",
    favorite: true,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
    description: "A flexible bowl with lemon tahini, crisp chickpeas, and roasted vegetables.",
    tags: ["bowls", "chickpeas", "tahini"],
    ingredients: ["1 cup cooked grains", "2 cups seasonal vegetables", "1 can chickpeas", "2 tbsp tahini", "1 lemon", "1 garlic clove", "Olive oil, salt, pepper"],
    steps: ["Roast the vegetables and chickpeas at 210C until browned.", "Whisk tahini, lemon juice, garlic, salt, and enough water to make a sauce.", "Serve over warm grains with herbs and extra lemon."]
  },
  {
    id: "miso-noodles",
    title: "Ginger Miso Noodles",
    category: "Mains",
    time: 25,
    season: "Anytime",
    favorite: true,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80",
    description: "Glossy noodles with sesame, ginger, tofu, and crunchy cucumber.",
    tags: ["noodles", "tofu", "quick"],
    ingredients: ["200g noodles", "200g firm tofu", "1 tbsp miso", "1 tbsp soy sauce", "1 tbsp sesame oil", "1 thumb ginger", "Cucumber and spring onions"],
    steps: ["Cook noodles, then rinse briefly so they stay springy.", "Pan-fry tofu until golden on the edges.", "Stir miso, soy, sesame oil, grated ginger, and noodle water into a sauce, then toss everything together."]
  },
  {
    id: "bean-chili",
    title: "Smoky Bean Chili",
    category: "Mains",
    time: 45,
    season: "Autumn",
    favorite: false,
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=900&q=80",
    description: "A dependable pot of beans, tomato, paprika, and dark chocolate.",
    tags: ["beans", "one-pot", "freezer"],
    ingredients: ["2 cans mixed beans", "1 onion", "2 garlic cloves", "1 tin tomatoes", "1 tsp smoked paprika", "1 tsp cumin", "1 square dark chocolate"],
    steps: ["Cook onion and garlic until soft.", "Add spices, tomatoes, beans, and a splash of water.", "Simmer until thick, then finish with dark chocolate and lime."]
  },
  {
    id: "green-soup",
    title: "Pea, Mint, and Potato Soup",
    category: "Soups",
    time: 30,
    season: "Spring",
    favorite: false,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
    description: "Bright, simple soup with enough potato to feel comforting.",
    tags: ["soup", "peas", "mint"],
    ingredients: ["500g peas", "2 potatoes", "1 onion", "750ml vegetable stock", "A handful of mint", "Lemon juice", "Olive oil"],
    steps: ["Soften onion in olive oil.", "Add diced potatoes and stock, then simmer until tender.", "Add peas and mint, cook briefly, blend, and sharpen with lemon."]
  },
  {
    id: "socca",
    title: "Chickpea Socca with Herb Salad",
    category: "Sides",
    time: 35,
    season: "Summer",
    favorite: true,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
    description: "Crisp-edged chickpea flatbread with a lemony herb salad.",
    tags: ["chickpea flour", "gluten-free", "herbs"],
    ingredients: ["1 cup chickpea flour", "1 cup water", "2 tbsp olive oil", "1/2 tsp salt", "Parsley", "Rocket", "Lemon"],
    steps: ["Rest chickpea flour, water, oil, and salt for 20 minutes.", "Heat an oiled pan until very hot and bake or broil until crisp.", "Top with herbs, rocket, lemon, and black pepper."]
  },
  {
    id: "overnight-oats",
    title: "Apple Cinnamon Overnight Oats",
    category: "Breakfast",
    time: 10,
    season: "Autumn",
    favorite: false,
    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=900&q=80",
    description: "Creamy oats with grated apple, toasted seeds, and cinnamon.",
    tags: ["oats", "make-ahead", "breakfast"],
    ingredients: ["1/2 cup oats", "1/2 cup oat milk", "1 grated apple", "1 tbsp chia seeds", "1/2 tsp cinnamon", "Pumpkin seeds", "Maple syrup"],
    steps: ["Stir oats, oat milk, apple, chia, cinnamon, and maple syrup.", "Chill overnight.", "Top with toasted seeds in the morning."]
  },
  {
    id: "berry-cake",
    title: "Almond Berry Cake",
    category: "Sweets",
    time: 55,
    season: "Summer",
    favorite: true,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
    description: "A tender vegan cake with almond, berries, and a crisp sugar top.",
    tags: ["cake", "berries", "almond"],
    ingredients: ["180g flour", "70g ground almonds", "120g sugar", "1 tsp baking powder", "180ml oat milk", "80ml neutral oil", "150g berries"],
    steps: ["Whisk dry ingredients in one bowl and wet ingredients in another.", "Fold together gently, then scatter berries over the batter.", "Bake at 180C until golden and a skewer comes out clean."]
  },
  {
    id: "tofu-scramble",
    title: "Turmeric Tofu Scramble",
    category: "Breakfast",
    time: 20,
    season: "Anytime",
    favorite: false,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80",
    description: "Soft tofu, turmeric, black salt, greens, and toast.",
    tags: ["tofu", "brunch", "protein"],
    ingredients: ["250g firm tofu", "1/2 tsp turmeric", "1 tbsp nutritional yeast", "A pinch of black salt", "Spinach", "Cherry tomatoes", "Toast"],
    steps: ["Crumble tofu into a warm pan.", "Add turmeric, nutritional yeast, black salt, and a splash of water.", "Fold in spinach and tomatoes, then serve on toast."]
  }
];

const state = {
  category: "All",
  query: "",
  sort: "favorite"
};

const categories = ["All", "Breakfast", "Mains", "Soups", "Sides", "Sweets"];

function recipeMatches(recipe) {
  const haystack = [
    recipe.title,
    recipe.category,
    recipe.season,
    recipe.description,
    ...recipe.tags,
    ...recipe.ingredients
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
  const card = document.createElement("button");
  card.type = "button";
  card.className = "recipe-card reveal";
  card.setAttribute("aria-label", `Open recipe for ${recipe.title}`);
  card.innerHTML = `
    <img src="${recipe.image}" alt="${recipe.title}" loading="lazy" />
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
  card.addEventListener("click", () => openRecipe(recipe));
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

function openRecipe(recipe) {
  const modal = document.getElementById("recipeModal");
  const modalImage = document.getElementById("modalImage");
  const modalMeta = document.getElementById("modalMeta");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalIngredients = document.getElementById("modalIngredients");
  const modalSteps = document.getElementById("modalSteps");

  modalImage.src = recipe.image;
  modalImage.alt = recipe.title;
  modalMeta.innerHTML = `
    <span class="recipe-category">${recipe.category}</span>
    <span class="recipe-time">${recipe.time} min</span>
    <span class="recipe-season">${recipe.season}</span>
    ${recipe.favorite ? '<span class="recipe-favorite">Favorite</span>' : ""}
  `;
  modalTitle.textContent = recipe.title;
  modalDescription.textContent = recipe.description;
  modalIngredients.innerHTML = recipe.ingredients.map((item) => `<li>${item}</li>`).join("");
  modalSteps.innerHTML = recipe.steps.map((item) => `<li>${item}</li>`).join("");

  modal.hidden = false;
  document.body.classList.add("modal-open");
  modal.querySelector(".modal-close").focus();
}

function closeRecipe() {
  const modal = document.getElementById("recipeModal");
  if (!modal || modal.hidden) return;
  modal.hidden = true;
  document.body.classList.remove("modal-open");
}

function initSearchAndSort() {
  const search = document.getElementById("recipeSearch");
  const sort = document.getElementById("recipeSort");
  const count = document.getElementById("recipeCount");

  if (count) count.textContent = RECIPES.length;

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

function initModal() {
  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-modal]")) closeRecipe();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeRecipe();
  });
}

function initNav() {
  const header = document.getElementById("site-header");
  const burger = document.getElementById("navBurger");
  const links = document.getElementById("siteNavLinks");
  const navLinks = document.querySelectorAll(".nav-links a[href^='#']");
  const sections = Array.from(navLinks)
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const setScrolled = () => {
    if (header) header.classList.toggle("scrolled", window.scrollY > 8);
  };

  setScrolled();
  window.addEventListener("scroll", setScrolled, { passive: true });

  if (burger && links) {
    burger.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      burger.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", String(open));
    });

    links.addEventListener("click", (event) => {
      if (!event.target.closest("a")) return;
      links.classList.remove("open");
      burger.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    });
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    }, { rootMargin: "-40% 0px -50% 0px", threshold: 0.01 });

    sections.forEach((section) => observer.observe(section));
  }
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
  initNav();
  initSearchAndSort();
  initModal();
  renderFilters();
  renderRecipes();
});
