window.RECIPES = window.RECIPES || [];

window.RECIPES.push({
  id: 'berry-cake',
  title: 'Almond Berry Cake',
  category: 'Sweets',
  time: 55,
  season: 'Summer',
  favorite: true,
  image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80',
  description: 'A tender vegan cake with almond, berries, and a crisp sugar top.',
  tags: [
    'cake',
    'berries',
    'almond'
  ],
  baseServings: 8,
  calculator: {
    type: 'pan',
    title: 'Cake tin scaler',
    label: 'Tin diameter',
    min: 16,
    max: 28,
    basePan: 20,
    unit: 'cm',
    note: 'Cake batter scales by tin area. Baking time may change slightly.'
  },
  ingredients: [
    {
      amount: 180,
      unit: 'g',
      item: 'flour'
    },
    {
      amount: 70,
      unit: 'g',
      item: 'ground almonds'
    },
    {
      amount: 120,
      unit: 'g',
      item: 'sugar'
    },
    {
      amount: 1,
      unit: 'tsp',
      item: 'baking powder'
    },
    {
      amount: 180,
      unit: 'ml',
      item: 'oat milk'
    },
    {
      amount: 80,
      unit: 'ml',
      item: 'neutral oil'
    },
    {
      amount: 150,
      unit: 'g',
      item: 'berries'
    }
  ],
  steps: [
    'Whisk dry ingredients in one bowl and wet ingredients in another.',
    'Fold together gently, then scatter berries over the batter.',
    'Bake at 180C until golden and a skewer comes out clean.'
  ]
});
