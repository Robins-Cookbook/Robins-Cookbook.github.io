window.RECIPES = window.RECIPES || [];

window.RECIPES.push({
  id: 'bean-chili',
  title: 'Smoky Bean Chili',
  category: 'Mains',
  time: 45,
  season: 'Autumn',
  favorite: false,
  image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=1200&q=80',
  description: 'A dependable pot of beans, tomato, paprika, and dark chocolate.',
  tags: [
    'beans',
    'one-pot',
    'freezer'
  ],
  baseServings: 4,
  calculator: {
    type: 'batch',
    title: 'Batch and freezer planner',
    label: 'Portions',
    min: 2,
    max: 12,
    note: 'Plan dinner plus leftovers. One freezer box is roughly two portions.'
  },
  ingredients: [
    {
      amount: 2,
      unit: 'cans',
      item: 'mixed beans'
    },
    {
      amount: 1,
      unit: '',
      item: 'onion'
    },
    {
      amount: 2,
      unit: 'cloves',
      item: 'garlic'
    },
    {
      amount: 1,
      unit: 'tin',
      item: 'tomatoes'
    },
    {
      amount: 1,
      unit: 'tsp',
      item: 'smoked paprika'
    },
    {
      amount: 1,
      unit: 'tsp',
      item: 'cumin'
    },
    {
      amount: 1,
      unit: 'square',
      item: 'dark chocolate'
    }
  ],
  steps: [
    'Cook onion and garlic until soft.',
    'Add spices, tomatoes, beans, and a splash of water.',
    'Simmer until thick, then finish with dark chocolate and lime.'
  ]
});
