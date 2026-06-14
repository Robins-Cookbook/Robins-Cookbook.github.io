window.RECIPES = window.RECIPES || [];

window.RECIPES.push({
  id: 'butter-emulsion',
  title: 'Butter Emulsion Sauce',
  category: 'Sauces',
  style: 'Fancy',
  time: 10,
  season: 'Anytime',
  favorite: true,
  image: '',
  description: 'A glossy butter-water sauce made by heating water with most of the butter, then blending in the final cold butter to emulsify.',
  tags: [
    'sauce',
    'butter',
    'emulsion'
  ],
  baseServings: 4,
  calculator: {
    type: 'yieldRatio',
    title: 'Sauce size scaler',
    label: 'Target sauce',
    min: 50,
    max: 300,
    step: 25,
    value: 100,
    unit: 'ml sauce',
    butterParts: 5,
    waterParts: 2,
    firstButterShare: 0.75,
    roundTo: 0.5,
    note: 'The source batch is 800 g water to 2 kg butter: 1.5 kg butter in the pan first, then 500 g cold butter blended in at the end.'
  },
  relatedRecipes: [
    {
      label: 'Extend this into Sriracha Butter Emulsion',
      recipeId: 'sriracha-butter-emulsion'
    }
  ],
  sourceVideo: {
    label: 'Technique source video',
    url: 'https://www.youtube.com/watch?v=TLInSH3iJww'
  },
  feature: {
    type: 'technique',
    title: '5:2 butter emulsion',
    text: 'Keep the total ratio at 5 parts butter to 2 parts water. Heat the water with three quarters of the butter first, then blend in the remaining cold butter to stabilize the emulsion.'
  },
  macros: {
    basis: 'per 100 ml sauce',
    calories: '515 kcal',
    protein: '1 g',
    carbs: '0 g',
    fat: '58 g',
    perYield: 100,
    note: 'Calculated from the 5:2 butter-water ratio; salt is not included.'
  },
  ingredients: [
    {
      amount: 28.5,
      unit: 'ml',
      item: 'water',
      role: 'yieldWater'
    },
    {
      amount: 71.5,
      unit: 'g',
      item: 'butter, diced, total',
      role: 'yieldButterTotal'
    },
    {
      amount: 53.5,
      unit: 'g',
      item: 'butter, diced, first batch',
      role: 'yieldButterFirst'
    },
    {
      amount: 18,
      unit: 'g',
      item: 'cold butter, diced, second batch',
      role: 'yieldButterSecond'
    },
    {
      amount: null,
      unit: '',
      item: 'salt, to taste'
    }
  ],
  steps: [
    'Weigh the butter, then separate three quarters for the first batch and the remaining quarter for the second cold batch.',
    'Add the water and first butter batch to a pan and heat over medium until the butter has melted into the water.',
    'Season with salt for a base layer of seasoning.',
    'Take the pan off the heat, add the second cold butter batch, and blend with a stick blender for 20 to 30 seconds until smooth and emulsified.',
    'Keep warm over very low heat and use as a base sauce.'
  ]
});
