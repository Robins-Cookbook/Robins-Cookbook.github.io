window.RECIPES = window.RECIPES || [];

window.RECIPES.push({
  id: 'butter-emulsion',
  title: 'Butter Emulsion Sauce',
  category: 'Sauces',
  time: 10,
  season: 'Anytime',
  favorite: true,
  image: '',
  description: 'A glossy butter sauce made by whisking cold butter into a small amount of hot liquid until it turns smooth and spoonable.',
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
    note: 'The emulsion uses a fixed 5:2 ratio of butter to water. Three quarters of the butter starts the emulsion; the final quarter is whisked in as the second batch.'
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
    text: 'Keep the total ratio at 5 parts butter to 2 parts water. Separate three quarters of the butter for the first batch and the remaining quarter for the second batch.'
  },
  ingredients: [
    {
      amount: 28.5,
      unit: 'ml',
      item: 'water or light vegetable stock',
      role: 'yieldWater'
    },
    {
      amount: 53.5,
      unit: 'g',
      item: 'cold butter, cubed, first batch',
      role: 'yieldButterFirst'
    },
    {
      amount: 18,
      unit: 'g',
      item: 'cold butter, cubed, second batch',
      role: 'yieldButterSecond'
    },
    {
      amount: 0.5,
      unit: 'tsp',
      item: 'lemon juice or vinegar'
    },
    {
      amount: 1,
      unit: 'pinch',
      item: 'salt'
    }
  ],
  steps: [
    'Weigh the butter, then separate three quarters for the first batch and the remaining quarter for the second batch.',
    'Bring the water or stock to a simmer in a small pan, then lower the heat.',
    'Whisk in the first batch of cold butter a few cubes at a time, letting each addition melt into the sauce before adding more.',
    'Whisk in the second batch of butter at the end to finish and tighten the emulsion.',
    'Season with lemon juice or vinegar and salt, then keep warm over very low heat and serve immediately.'
  ]
});
