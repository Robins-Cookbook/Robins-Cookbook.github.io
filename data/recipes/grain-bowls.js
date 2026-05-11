window.RECIPES = window.RECIPES || [];

window.RECIPES.push({
  id: 'grain-bowls',
  title: 'Roasted Vegetable Grain Bowls',
  category: 'Mains',
  time: 40,
  season: 'Spring',
  favorite: true,
  image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
  description: 'A flexible bowl with lemon tahini, crisp chickpeas, and roasted vegetables.',
  tags: [
    'bowls',
    'chickpeas',
    'tahini'
  ],
  baseServings: 2,
  calculator: {
    type: 'servings',
    title: 'Bowl builder',
    label: 'Bowls',
    min: 1,
    max: 8,
    note: 'Scale the grains, vegetables, chickpeas, and tahini sauce together.'
  },
  ingredients: [
    {
      amount: 1,
      unit: 'cup',
      item: 'cooked grains'
    },
    {
      amount: 2,
      unit: 'cups',
      item: 'seasonal vegetables'
    },
    {
      amount: 1,
      unit: 'can',
      item: 'chickpeas'
    },
    {
      amount: 2,
      unit: 'tbsp',
      item: 'tahini'
    },
    {
      amount: 1,
      unit: '',
      item: 'lemon'
    },
    {
      amount: 1,
      unit: 'clove',
      item: 'garlic'
    },
    {
      amount: null,
      unit: '',
      item: 'Olive oil, salt, and pepper'
    }
  ],
  steps: [
    'Roast the vegetables and chickpeas at 210C until browned.',
    'Whisk tahini, lemon juice, garlic, salt, and enough water to make a sauce.',
    'Serve over warm grains with herbs and extra lemon.'
  ]
});
