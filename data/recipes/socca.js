window.RECIPES = window.RECIPES || [];

window.RECIPES.push({
  id: 'socca',
  title: 'Chickpea Socca with Herb Salad',
  category: 'Sides',
  time: 35,
  season: 'Summer',
  favorite: true,
  image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
  description: 'Crisp-edged chickpea flatbread with a lemony herb salad.',
  tags: [
    'chickpea flour',
    'gluten-free',
    'herbs'
  ],
  baseServings: 2,
  calculator: {
    type: 'pan',
    title: 'Pan-size scaler',
    label: 'Pan diameter',
    min: 18,
    max: 34,
    basePan: 24,
    unit: 'cm',
    note: 'Socca thickness depends on pan area, so this scales the batter by diameter.'
  },
  sourceLink: {
    label: 'Traditional socca background',
    url: 'https://en.wikipedia.org/wiki/Socca_(food)'
  },
  ingredients: [
    {
      amount: 1,
      unit: 'cup',
      item: 'chickpea flour'
    },
    {
      amount: 1,
      unit: 'cup',
      item: 'water'
    },
    {
      amount: 2,
      unit: 'tbsp',
      item: 'olive oil'
    },
    {
      amount: 0.5,
      unit: 'tsp',
      item: 'salt'
    },
    {
      amount: null,
      unit: '',
      item: 'Parsley'
    },
    {
      amount: null,
      unit: '',
      item: 'Rocket'
    },
    {
      amount: null,
      unit: '',
      item: 'Lemon'
    }
  ],
  steps: [
    'Rest chickpea flour, water, oil, and salt for 20 minutes.',
    'Heat an oiled pan until very hot and bake or broil until crisp.',
    'Top with herbs, rocket, lemon, and black pepper.'
  ]
});
