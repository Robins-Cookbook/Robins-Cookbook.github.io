window.RECIPE_TRANSLATIONS = window.RECIPE_TRANSLATIONS || {};

window.RECIPE_TRANSLATIONS.de = {
  'butter-emulsion': {
    title: 'Butteremulsionssauce',
    description: 'Eine glänzende Butter-Wasser-Sauce, bei der Wasser mit dem Großteil der Butter erhitzt und die restliche kalte Butter zum Emulgieren eingemixt wird.',
    tags: ['Sauce', 'Butter', 'Emulsion'],
    calculator: {
      title: 'Saucenmenge skalieren',
      label: 'Zielmenge Sauce',
      unit: 'ml Sauce',
      note: 'Die Ausgangsmenge aus dem Video ist 800 g Wasser auf 2 kg Butter: 1,5 kg Butter zuerst in die Pfanne, danach 500 g kalte Butter einmixen.'
    },
    relatedRecipes: [
      { label: 'Zur Sriracha-Butteremulsion erweitern', recipeId: 'sriracha-butter-emulsion' }
    ],
    sourceVideo: {
      label: 'Technikvideo'
    },
    feature: {
      type: 'Technik',
      title: '5:2-Butteremulsion',
      text: 'Das Verhältnis bleibt 5 Teile Butter zu 2 Teilen Wasser. Wasser mit drei Vierteln der Butter erhitzen, dann die restliche kalte Butter einmixen, um die Emulsion zu stabilisieren.'
    },
    ingredients: [
      { amount: 28.5, unit: 'ml', item: 'Wasser', role: 'yieldWater' },
      { amount: 71.5, unit: 'g', item: 'Butter, gewürfelt, gesamt', role: 'yieldButterTotal' },
      { amount: 53.5, unit: 'g', item: 'Butter, gewürfelt, erste Charge', role: 'yieldButterFirst' },
      { amount: 18, unit: 'g', item: 'kalte Butter, gewürfelt, zweite Charge', role: 'yieldButterSecond' },
      { amount: null, unit: '', item: 'Salz, nach Geschmack' }
    ],
    steps: [
      'Butter wiegen und drei Viertel für die erste Charge sowie das restliche Viertel als kalte zweite Charge trennen.',
      'Wasser und die erste Buttercharge in eine Pfanne geben und bei mittlerer Hitze erwärmen, bis die Butter im Wasser geschmolzen ist.',
      'Mit Salz als Basis würzen.',
      'Pfanne vom Herd nehmen, die zweite kalte Buttercharge hinzufügen und mit dem Stabmixer 20 bis 30 Sekunden glatt und emulgiert mixen.',
      'Bei sehr niedriger Hitze warm halten und als Basissauce verwenden.'
    ]
  },
  'sriracha-butter-emulsion': {
    title: 'Sriracha-Butteremulsionssauce',
    description: 'Eine scharfe Butteremulsionssauce aus dem Video, gelockert mit Sriracha, Knoblauchconfit, Salz, Zitronensaft und Petersilie.',
    tags: ['Sauce', 'Sriracha', 'Butter'],
    relatedRecipes: [
      { label: 'Basiert auf der Butteremulsionssauce', recipeId: 'butter-emulsion' }
    ],
    sourceVideo: {
      label: 'Technikvideo'
    },
    feature: {
      type: 'Video-Anwendung',
      title: 'Sriracha-Muschelsauce',
      text: 'Im Video entsteht diese Sauce in der Muschelpfanne: Weißwein öffnet die Muscheln, dann verbinden sich Butteremulsion und Sriracha zu einer glänzenden Sauce.'
    },
    ingredients: [
      { amount: null, unit: '', item: 'Butteremulsionssauce' },
      { amount: null, unit: '', item: 'Sriracha, nach Geschmack' },
      { amount: null, unit: '', item: 'Knoblauchconfit oder geröstete Knoblauchpaste' },
      { amount: null, unit: '', item: 'frischer Zitronensaft' },
      { amount: null, unit: '', item: 'Salz' },
      { amount: null, unit: '', item: 'Petersilie, gehackt' }
    ],
    steps: [
      'Mit heißer Butteremulsionssauce in der Pfanne starten.',
      'Sriracha nach Geschmack hinzufügen und rühren, bis die Emulsion daraus eine glatte Sauce macht.',
      'Knoblauchconfit oder geröstete Knoblauchpaste, eine gute Prise Salz und frischen Zitronensaft hinzufügen.',
      'Am Ende gehackte Petersilie unterheben.',
      'Sofort servieren, solange die Sauce glänzt und gut überzieht.'
    ]
  },
  'vegan-rouladen': {
    title: 'Vegane Rouladen mit Bratensoße',
    description: 'Zarte vegane Rouladen aus Räuchertofu, Kidneybohnen, Roter Bete und Weizengluten in dunkler Röstgemüsesoße.',
    tags: ['Rouladen', 'Seitan', 'Bratensoße'],
    sourceVideo: {
      label: 'Veganes-Gold-Video'
    },
    feature: {
      type: 'Texturhinweis',
      title: 'Abkühlen für mehr Biss',
      text: 'Im Video wird empfohlen, die gebackenen Rouladen abkühlen zu lassen und danach in der Soße zu köcheln, damit die Textur besonders fleischig wird.'
    },
    ingredients: [
      { amount: 200, unit: 'g', item: 'geräucherter Tofu' },
      { amount: 120, unit: 'g', item: 'Kidneybohnen, abgespült und abgetropft' },
      { amount: 120, unit: 'g', item: 'Rote Bete aus dem Glas, abgetropft' },
      { amount: 120, unit: 'g', item: 'Weizengluten' },
      { amount: 1, unit: 'leicht gehäufter TL', item: 'Salz für den Rouladenteig' },
      { amount: null, unit: '', item: 'Senf' },
      { amount: null, unit: '', item: 'Zwiebel, in halbe Ringe geschnitten' },
      { amount: null, unit: '', item: 'Gewürzgurken, in Scheiben' },
      { amount: null, unit: '', item: 'schwarzer Pfeffer' },
      { amount: null, unit: '', item: 'Öl zum Braten' },
      { amount: 2, unit: 'große', item: 'Möhren, gehackt' },
      { amount: 1, unit: 'große Stange', item: 'Lauch, gehackt' },
      { amount: 0.5, unit: '', item: 'Knollensellerie, gehackt' },
      { amount: 1, unit: 'große', item: 'Zwiebel, gehackt, für die Soße' },
      { amount: 1, unit: 'leicht gehäufter TL', item: 'Zucker' },
      { amount: 300, unit: 'ml', item: 'kräftige Gemüsebrühe' },
      { amount: 500, unit: 'ml', item: 'Rotwein oder mehr Gemüsebrühe' },
      { amount: 60, unit: 'ml', item: 'Gurkensud' },
      { amount: 1, unit: 'leicht gehäufter TL', item: 'Salz für die Soße' },
      { amount: 1, unit: 'TL', item: 'schwarzer Pfeffer für die Soße' },
      { amount: null, unit: '', item: 'pflanzliche Sahne, optional' }
    ],
    steps: [
      'Rote Bete, Kidneybohnen und Räuchertofu grob pürieren oder zerdrücken.',
      'Weizengluten und Salz in einer Schüssel mischen, die Rote-Bete-Masse dazugeben und von Hand kneten, bis alles gleichmäßig verbunden ist.',
      'Den Teig in vier Stücke teilen, zu Kugeln formen, flach drücken und länglich zu Rouladen ausrollen oder drücken.',
      'Jede Roulade mit Senf bestreichen und mit Zwiebelringen, Gewürzgurken und schwarzem Pfeffer füllen.',
      'Rouladen unter leichtem Druck fest aufrollen und mit Küchengarn binden.',
      'In Öl von allen vier Seiten kross und braun anbraten.',
      'Jede Roulade zuerst in Backpapier und dann in Alufolie wickeln. Die Pakete fest zusammendrücken und bei 180C Ober-/Unterhitze etwa 40 Minuten backen.',
      'Für die Soße das Öl aus der Rouladenpfanne verwenden. Gehackte Zwiebel darin scharf anbraten, bis sie tief goldbraun ist.',
      'Zucker hinzufügen und etwa 2 Minuten bei mittelhoher Hitze karamellisieren lassen, dabei häufig rühren.',
      'Möhren, Lauch und Sellerie hinzufügen und das Gemüse etwa 10 Minuten dunkel anrösten.',
      'Einen kleinen Schuss Rotwein zugeben, nur so viel, dass der Pfannenboden bedeckt ist. Ohne Rühren köcheln lassen, bis der Wein verkocht und der Boden fast trocken ist.',
      'Das Ablöschen mit kleinen Rotweinschüben wiederholen, bis das Gemüse dunkel ist und der Wein aufgebraucht ist.',
      'Gemüsebrühe, Gurkensud, Salz und Pfeffer hinzufügen. Abdecken und 1 Stunde köcheln lassen.',
      'Die Soße durch ein Sieb passieren und das Gemüse kräftig ausdrücken, damit etwas Gemüsekörper in die Soße gelangt.',
      'Mit Salz, Pfeffer, Rotwein, Gurkensud und optional pflanzlicher Sahne abschmecken.',
      'Die gebackenen Rouladen in die Soße geben und 20 Minuten köcheln lassen, nach 10 Minuten wenden.'
    ]
  },
  'vegan-protein-pancakes': {
    title: 'Vegane High-Protein-Pancakes',
    description: 'Schnelle vegane Pancakes mit Dinkelmehl, Weizengluten, Proteinpulver, Sojamilch und Mineralwasser für ein proteinreiches Frühstück.',
    tags: ['Pancakes', 'Protein', 'Frühstück'],
    sourceVideo: {
      label: 'Instagram-Reel von vegan_high_protein'
    },
    feature: {
      type: 'Nährwerte',
      title: 'Makros aus der Caption',
      text: 'Das Reel nennt pro 100 g ungefähr 150 kcal, 2 g Fett, 19 g Kohlenhydrate und 12 g Eiweiß. Die Werte variieren je nach verwendeten Produkten.'
    },
    ingredients: [
      { amount: 150, unit: 'g', item: 'Dinkelmehl' },
      { amount: 25, unit: 'g', item: 'Weizengluten' },
      { amount: 25, unit: 'g', item: 'veganes Proteinpulver' },
      { amount: 15, unit: 'g', item: 'brauner Zucker oder Süße deiner Wahl' },
      { amount: 15, unit: 'g', item: 'Backpulver' },
      { amount: 1, unit: 'Prise', item: 'Salz' },
      { amount: 150, unit: 'g', item: 'vegane Skyr-Alternative' },
      { amount: 250, unit: 'ml', item: 'Sojamilch' },
      { amount: 50, unit: 'ml', item: 'Mineralwasser' }
    ],
    steps: [
      'Alle Zutaten bis auf das Mineralwasser in einer Schüssel vermischen, bis ein klumpenfreier Teig entsteht.',
      'Dann das Mineralwasser vorsichtig einrühren.',
      'Eine beschichtete Pfanne bei mittlerer Hitze erwärmen.',
      'Die Pancakes portionsweise von beiden Seiten goldbraun ausbacken.',
      'Warm mit deinen liebsten Toppings genießen.'
    ]
  }
};
