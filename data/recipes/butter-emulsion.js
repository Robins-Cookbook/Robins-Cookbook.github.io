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
    type: 'ratio',
    title: 'Butter-to-liquid ratio',
    label: 'Butter : liquid',
    min: 1,
    max: 4,
    value: 2,
    liquidAmount: 60,
    liquidUnit: 'ml',
    butterUnit: 'g',
    note: 'The base is 2:1 by weight/volume: 120 g butter to 60 ml liquid. Move the slider for a lighter or richer sauce.'
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
    title: 'Emulsion cue',
    text: 'If the sauce looks greasy, take it off the heat and whisk in a small splash of hot water before adding more butter.'
  },
  ingredients: [
    {
      amount: 60,
      unit: 'ml',
      item: 'water or light vegetable stock',
      role: 'ratioLiquid'
    },
    {
      amount: 120,
      unit: 'g',
      item: 'cold butter, cubed',
      role: 'ratioButter'
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
    'Bring the water or stock to a simmer in a small pan, then lower the heat.',
    'Whisk in the cold butter a few cubes at a time, letting each addition melt into the sauce before adding more.',
    'Season with lemon juice or vinegar and salt, then keep warm over very low heat and serve immediately.'
  ]
});
