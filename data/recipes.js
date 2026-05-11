window.RECIPES = [
  {
    id: "grain-bowls",
    title: "Roasted Vegetable Grain Bowls",
    category: "Mains",
    time: 40,
    season: "Spring",
    favorite: true,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
    description: "A flexible bowl with lemon tahini, crisp chickpeas, and roasted vegetables.",
    tags: ["bowls", "chickpeas", "tahini"],
    baseServings: 2,
    calculator: {
      type: "servings",
      title: "Bowl builder",
      label: "Bowls",
      min: 1,
      max: 8,
      note: "Scale the grains, vegetables, chickpeas, and tahini sauce together."
    },
    ingredients: [
      { amount: 1, unit: "cup", item: "cooked grains" },
      { amount: 2, unit: "cups", item: "seasonal vegetables" },
      { amount: 1, unit: "can", item: "chickpeas" },
      { amount: 2, unit: "tbsp", item: "tahini" },
      { amount: 1, unit: "", item: "lemon" },
      { amount: 1, unit: "clove", item: "garlic" },
      { amount: null, unit: "", item: "Olive oil, salt, and pepper" }
    ],
    steps: [
      "Roast the vegetables and chickpeas at 210C until browned.",
      "Whisk tahini, lemon juice, garlic, salt, and enough water to make a sauce.",
      "Serve over warm grains with herbs and extra lemon."
    ]
  },
  {
    id: "miso-noodles",
    title: "Ginger Miso Noodles",
    category: "Mains",
    time: 25,
    season: "Anytime",
    favorite: true,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    description: "Glossy noodles with sesame, ginger, tofu, and crunchy cucumber.",
    tags: ["noodles", "tofu", "quick"],
    baseServings: 2,
    feature: {
      type: "timing",
      title: "Fast dinner rhythm",
      text: "Start the tofu first, mix the sauce while it browns, then cook the noodles last so they stay springy."
    },
    ingredients: [
      { amount: 200, unit: "g", item: "noodles" },
      { amount: 200, unit: "g", item: "firm tofu" },
      { amount: 1, unit: "tbsp", item: "miso" },
      { amount: 1, unit: "tbsp", item: "soy sauce" },
      { amount: 1, unit: "tbsp", item: "sesame oil" },
      { amount: 1, unit: "thumb", item: "ginger" },
      { amount: null, unit: "", item: "Cucumber and spring onions" }
    ],
    steps: [
      "Cook noodles, then rinse briefly so they stay springy.",
      "Pan-fry tofu until golden on the edges.",
      "Stir miso, soy, sesame oil, grated ginger, and noodle water into a sauce, then toss everything together."
    ]
  },
  {
    id: "bean-chili",
    title: "Smoky Bean Chili",
    category: "Mains",
    time: 45,
    season: "Autumn",
    favorite: false,
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=1200&q=80",
    description: "A dependable pot of beans, tomato, paprika, and dark chocolate.",
    tags: ["beans", "one-pot", "freezer"],
    baseServings: 4,
    calculator: {
      type: "batch",
      title: "Batch and freezer planner",
      label: "Portions",
      min: 2,
      max: 12,
      note: "Plan dinner plus leftovers. One freezer box is roughly two portions."
    },
    ingredients: [
      { amount: 2, unit: "cans", item: "mixed beans" },
      { amount: 1, unit: "", item: "onion" },
      { amount: 2, unit: "cloves", item: "garlic" },
      { amount: 1, unit: "tin", item: "tomatoes" },
      { amount: 1, unit: "tsp", item: "smoked paprika" },
      { amount: 1, unit: "tsp", item: "cumin" },
      { amount: 1, unit: "square", item: "dark chocolate" }
    ],
    steps: [
      "Cook onion and garlic until soft.",
      "Add spices, tomatoes, beans, and a splash of water.",
      "Simmer until thick, then finish with dark chocolate and lime."
    ]
  },
  {
    id: "green-soup",
    title: "Pea, Mint, and Potato Soup",
    category: "Soups",
    time: 30,
    season: "Spring",
    favorite: false,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
    description: "Bright, simple soup with enough potato to feel comforting.",
    tags: ["soup", "peas", "mint"],
    baseServings: 4,
    feature: {
      type: "note",
      title: "Texture note",
      text: "Blend most of the soup smooth, then stir through a handful of whole peas at the end if you want more texture."
    },
    ingredients: [
      { amount: 500, unit: "g", item: "peas" },
      { amount: 2, unit: "", item: "potatoes" },
      { amount: 1, unit: "", item: "onion" },
      { amount: 750, unit: "ml", item: "vegetable stock" },
      { amount: 1, unit: "handful", item: "mint" },
      { amount: null, unit: "", item: "Lemon juice" },
      { amount: null, unit: "", item: "Olive oil" }
    ],
    steps: [
      "Soften onion in olive oil.",
      "Add diced potatoes and stock, then simmer until tender.",
      "Add peas and mint, cook briefly, blend, and sharpen with lemon."
    ]
  },
  {
    id: "socca",
    title: "Chickpea Socca with Herb Salad",
    category: "Sides",
    time: 35,
    season: "Summer",
    favorite: true,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
    description: "Crisp-edged chickpea flatbread with a lemony herb salad.",
    tags: ["chickpea flour", "gluten-free", "herbs"],
    baseServings: 2,
    calculator: {
      type: "pan",
      title: "Pan-size scaler",
      label: "Pan diameter",
      min: 18,
      max: 34,
      basePan: 24,
      unit: "cm",
      note: "Socca thickness depends on pan area, so this scales the batter by diameter."
    },
    sourceLink: {
      label: "Traditional socca background",
      url: "https://en.wikipedia.org/wiki/Socca_(food)"
    },
    ingredients: [
      { amount: 1, unit: "cup", item: "chickpea flour" },
      { amount: 1, unit: "cup", item: "water" },
      { amount: 2, unit: "tbsp", item: "olive oil" },
      { amount: 0.5, unit: "tsp", item: "salt" },
      { amount: null, unit: "", item: "Parsley" },
      { amount: null, unit: "", item: "Rocket" },
      { amount: null, unit: "", item: "Lemon" }
    ],
    steps: [
      "Rest chickpea flour, water, oil, and salt for 20 minutes.",
      "Heat an oiled pan until very hot and bake or broil until crisp.",
      "Top with herbs, rocket, lemon, and black pepper."
    ]
  },
  {
    id: "overnight-oats",
    title: "Apple Cinnamon Overnight Oats",
    category: "Breakfast",
    time: 10,
    season: "Autumn",
    favorite: false,
    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=1200&q=80",
    description: "Creamy oats with grated apple, toasted seeds, and cinnamon.",
    tags: ["oats", "make-ahead", "breakfast"],
    baseServings: 1,
    sourceLink: {
      label: "Overnight oats guide",
      url: "https://www.bbcgoodfood.com/howto/guide/how-make-overnight-oats"
    },
    feature: {
      type: "prep",
      title: "Make-ahead note",
      text: "Best eaten within two days. Keep the seeds and any crunchy topping separate until the morning."
    },
    ingredients: [
      { amount: 0.5, unit: "cup", item: "oats" },
      { amount: 0.5, unit: "cup", item: "oat milk" },
      { amount: 1, unit: "", item: "grated apple" },
      { amount: 1, unit: "tbsp", item: "chia seeds" },
      { amount: 0.5, unit: "tsp", item: "cinnamon" },
      { amount: null, unit: "", item: "Pumpkin seeds" },
      { amount: null, unit: "", item: "Maple syrup" }
    ],
    steps: [
      "Stir oats, oat milk, apple, chia, cinnamon, and maple syrup.",
      "Chill overnight.",
      "Top with toasted seeds in the morning."
    ]
  },
  {
    id: "berry-cake",
    title: "Almond Berry Cake",
    category: "Sweets",
    time: 55,
    season: "Summer",
    favorite: true,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80",
    description: "A tender vegan cake with almond, berries, and a crisp sugar top.",
    tags: ["cake", "berries", "almond"],
    baseServings: 8,
    calculator: {
      type: "pan",
      title: "Cake tin scaler",
      label: "Tin diameter",
      min: 16,
      max: 28,
      basePan: 20,
      unit: "cm",
      note: "Cake batter scales by tin area. Baking time may change slightly."
    },
    ingredients: [
      { amount: 180, unit: "g", item: "flour" },
      { amount: 70, unit: "g", item: "ground almonds" },
      { amount: 120, unit: "g", item: "sugar" },
      { amount: 1, unit: "tsp", item: "baking powder" },
      { amount: 180, unit: "ml", item: "oat milk" },
      { amount: 80, unit: "ml", item: "neutral oil" },
      { amount: 150, unit: "g", item: "berries" }
    ],
    steps: [
      "Whisk dry ingredients in one bowl and wet ingredients in another.",
      "Fold together gently, then scatter berries over the batter.",
      "Bake at 180C until golden and a skewer comes out clean."
    ]
  },
  {
    id: "tofu-scramble",
    title: "Turmeric Tofu Scramble",
    category: "Breakfast",
    time: 20,
    season: "Anytime",
    favorite: false,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=80",
    description: "Soft tofu, turmeric, black salt, greens, and toast.",
    tags: ["tofu", "brunch", "protein"],
    baseServings: 2,
    sourceVideo: {
      label: "Tofu scramble technique video",
      url: "https://www.masalaherb.com/vegan-scrambled-eggs-recipe-tofu/"
    },
    feature: {
      type: "serving",
      title: "Serving idea",
      text: "Make it softer with a splash of oat milk at the end, or cook it drier for breakfast sandwiches."
    },
    ingredients: [
      { amount: 250, unit: "g", item: "firm tofu" },
      { amount: 0.5, unit: "tsp", item: "turmeric" },
      { amount: 1, unit: "tbsp", item: "nutritional yeast" },
      { amount: 1, unit: "pinch", item: "black salt" },
      { amount: null, unit: "", item: "Spinach" },
      { amount: null, unit: "", item: "Cherry tomatoes" },
      { amount: null, unit: "", item: "Toast" }
    ],
    steps: [
      "Crumble tofu into a warm pan.",
      "Add turmeric, nutritional yeast, black salt, and a splash of water.",
      "Fold in spinach and tomatoes, then serve on toast."
    ]
  },
  {
    id: "butter-emulsion",
    title: "Butter Emulsion Sauce",
    category: "Sauces",
    time: 10,
    season: "Anytime",
    favorite: true,
    image: "",
    description: "A glossy butter sauce made by whisking cold butter into a small amount of hot liquid until it turns smooth and spoonable.",
    tags: ["sauce", "butter", "emulsion"],
    baseServings: 4,
    calculator: {
      type: "ratio",
      title: "Butter-to-liquid ratio",
      label: "Butter : liquid",
      min: 1,
      max: 4,
      value: 2,
      liquidAmount: 60,
      liquidUnit: "ml",
      butterUnit: "g",
      note: "The base is 2:1 by weight/volume: 120 g butter to 60 ml liquid. Move the slider for a lighter or richer sauce."
    },
    relatedRecipes: [
      {
        label: "Extend this into Sriracha Butter Emulsion",
        recipeId: "sriracha-butter-emulsion"
      }
    ],
    sourceVideo: {
      label: "Technique source video",
      url: "https://www.youtube.com/watch?v=TLInSH3iJww"
    },
    feature: {
      type: "technique",
      title: "Emulsion cue",
      text: "If the sauce looks greasy, take it off the heat and whisk in a small splash of hot water before adding more butter."
    },
    ingredients: [
      { amount: 60, unit: "ml", item: "water or light vegetable stock", role: "ratioLiquid" },
      { amount: 120, unit: "g", item: "cold butter, cubed", role: "ratioButter" },
      { amount: 0.5, unit: "tsp", item: "lemon juice or vinegar" },
      { amount: 1, unit: "pinch", item: "salt" }
    ],
    steps: [
      "Bring the water or stock to a simmer in a small pan, then lower the heat.",
      "Whisk in the cold butter a few cubes at a time, letting each addition melt into the sauce before adding more.",
      "Season with lemon juice or vinegar and salt, then keep warm over very low heat and serve immediately."
    ]
  },
  {
    id: "sriracha-butter-emulsion",
    title: "Sriracha Butter Emulsion Sauce",
    category: "Sauces",
    time: 12,
    season: "Anytime",
    favorite: true,
    image: "",
    description: "A spicy, glossy extension of the butter emulsion sauce with sriracha, lime, and a little sweetness.",
    tags: ["sauce", "sriracha", "butter"],
    baseServings: 4,
    relatedRecipes: [
      {
        label: "Based on Butter Emulsion Sauce",
        recipeId: "butter-emulsion"
      }
    ],
    sourceVideo: {
      label: "Technique source video",
      url: "https://www.youtube.com/watch?v=TLInSH3iJww"
    },
    feature: {
      type: "heat note",
      title: "Adjust the spice",
      text: "Start with less sriracha if you want a rounder butter sauce. Add more at the end once the emulsion is stable."
    },
    ingredients: [
      { amount: 45, unit: "ml", item: "water or light vegetable stock" },
      { amount: 120, unit: "g", item: "cold butter, cubed" },
      { amount: 2, unit: "tbsp", item: "sriracha" },
      { amount: 1, unit: "tsp", item: "lime juice" },
      { amount: 1, unit: "tsp", item: "maple syrup or honey" },
      { amount: 1, unit: "pinch", item: "salt" }
    ],
    steps: [
      "Warm the water or stock with the sriracha over low heat until steaming.",
      "Whisk in cold butter a few cubes at a time, keeping the heat low so the sauce stays emulsified.",
      "Finish with lime juice, maple syrup or honey, and salt. Taste and add more sriracha only after the sauce is glossy."
    ]
  }
];
