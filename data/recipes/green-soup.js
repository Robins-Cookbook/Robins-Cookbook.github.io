window.RECIPES = window.RECIPES || [];

window.RECIPES.push({
  id: 'green-soup',
  title: 'Pea, Mint, and Potato Soup',
  category: 'Soups',
  time: 30,
  season: 'Spring',
  favorite: false,
  image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80',
  description: 'Bright, simple soup with enough potato to feel comforting.',
  tags: [
    'soup',
    'peas',
    'mint'
  ],
  baseServings: 4,
  feature: {
    type: 'note',
    title: 'Texture note',
    text: 'Blend most of the soup smooth, then stir through a handful of whole peas at the end if you want more texture.'
  },
  ingredients: [
    {
      amount: 500,
      unit: 'g',
      item: 'peas'
    },
    {
      amount: 2,
      unit: '',
      item: 'potatoes'
    },
    {
      amount: 1,
      unit: '',
      item: 'onion'
    },
    {
      amount: 750,
      unit: 'ml',
      item: 'vegetable stock'
    },
    {
      amount: 1,
      unit: 'handful',
      item: 'mint'
    },
    {
      amount: null,
      unit: '',
      item: 'Lemon juice'
    },
    {
      amount: null,
      unit: '',
      item: 'Olive oil'
    }
  ],
  steps: [
    'Soften onion in olive oil.',
    'Add diced potatoes and stock, then simmer until tender.',
    'Add peas and mint, cook briefly, blend, and sharpen with lemon.'
  ]
});
