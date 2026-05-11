window.RECIPE_TRANSLATIONS = window.RECIPE_TRANSLATIONS || {};

window.RECIPE_TRANSLATIONS.de = {
  'grain-bowls': {
    title: 'Geröstete Gemüse-Getreide-Bowls',
    description: 'Eine flexible Bowl mit Zitronen-Tahini, knusprigen Kichererbsen und geröstetem Gemüse.',
    tags: ['Bowls', 'Kichererbsen', 'Tahini'],
    calculator: {
      title: 'Bowl-Baukasten',
      label: 'Bowls',
      note: 'Skaliert Getreide, Gemüse, Kichererbsen und Tahini-Sauce zusammen.'
    },
    ingredients: [
      { amount: 1, unit: 'Tasse', item: 'gekochtes Getreide' },
      { amount: 2, unit: 'Tassen', item: 'saisonales Gemüse' },
      { amount: 1, unit: 'Dose', item: 'Kichererbsen' },
      { amount: 2, unit: 'EL', item: 'Tahini' },
      { amount: 1, unit: '', item: 'Zitrone' },
      { amount: 1, unit: 'Zehe', item: 'Knoblauch' },
      { amount: null, unit: '', item: 'Olivenöl, Salz und Pfeffer' }
    ],
    steps: [
      'Gemüse und Kichererbsen bei 210C rösten, bis sie gebräunt sind.',
      'Tahini, Zitronensaft, Knoblauch, Salz und genug Wasser zu einer Sauce verrühren.',
      'Auf warmem Getreide mit Kräutern und extra Zitrone servieren.'
    ]
  },
  'miso-noodles': {
    title: 'Ingwer-Miso-Nudeln',
    description: 'Glänzende Nudeln mit Sesam, Ingwer, Tofu und knackiger Gurke.',
    tags: ['Nudeln', 'Tofu', 'schnell'],
    feature: {
      type: 'Timing',
      title: 'Schneller Abendessen-Rhythmus',
      text: 'Erst den Tofu starten, währenddessen die Sauce mischen und die Nudeln zuletzt kochen, damit sie elastisch bleiben.'
    },
    ingredients: [
      { amount: 200, unit: 'g', item: 'Nudeln' },
      { amount: 200, unit: 'g', item: 'fester Tofu' },
      { amount: 1, unit: 'EL', item: 'Miso' },
      { amount: 1, unit: 'EL', item: 'Sojasauce' },
      { amount: 1, unit: 'EL', item: 'Sesamöl' },
      { amount: 1, unit: 'Daumenstück', item: 'Ingwer' },
      { amount: null, unit: '', item: 'Gurke und Frühlingszwiebeln' }
    ],
    steps: [
      'Nudeln kochen und kurz abspülen, damit sie elastisch bleiben.',
      'Tofu in der Pfanne goldbraun braten.',
      'Miso, Sojasauce, Sesamöl, geriebenen Ingwer und etwas Nudelwasser zu einer Sauce rühren, dann alles vermengen.'
    ]
  },
  'bean-chili': {
    title: 'Rauchiges Bohnen-Chili',
    description: 'Ein zuverlässiger Topf aus Bohnen, Tomate, Paprika und dunkler Schokolade.',
    tags: ['Bohnen', 'Eintopf', 'Freezer'],
    calculator: {
      title: 'Portions- und Gefrierplaner',
      label: 'Portionen',
      note: 'Plant Abendessen plus Reste. Eine Gefrierdose entspricht ungefähr zwei Portionen.'
    },
    ingredients: [
      { amount: 2, unit: 'Dosen', item: 'gemischte Bohnen' },
      { amount: 1, unit: '', item: 'Zwiebel' },
      { amount: 2, unit: 'Zehen', item: 'Knoblauch' },
      { amount: 1, unit: 'Dose', item: 'Tomaten' },
      { amount: 1, unit: 'TL', item: 'geräuchertes Paprikapulver' },
      { amount: 1, unit: 'TL', item: 'Kreuzkümmel' },
      { amount: 1, unit: 'Stück', item: 'dunkle Schokolade' }
    ],
    steps: [
      'Zwiebel und Knoblauch weich anschwitzen.',
      'Gewürze, Tomaten, Bohnen und einen Schuss Wasser hinzufügen.',
      'Einkochen, bis es dick ist, dann mit dunkler Schokolade und Limette abschmecken.'
    ]
  },
  'green-soup': {
    title: 'Erbsen-Minz-Kartoffel-Suppe',
    description: 'Eine helle, einfache Suppe mit genug Kartoffel, um gemütlich zu wirken.',
    tags: ['Suppe', 'Erbsen', 'Minze'],
    feature: {
      type: 'Hinweis',
      title: 'Texturhinweis',
      text: 'Den Großteil der Suppe glatt pürieren und am Ende eine Handvoll ganze Erbsen unterrühren, wenn du mehr Textur möchtest.'
    },
    ingredients: [
      { amount: 500, unit: 'g', item: 'Erbsen' },
      { amount: 2, unit: '', item: 'Kartoffeln' },
      { amount: 1, unit: '', item: 'Zwiebel' },
      { amount: 750, unit: 'ml', item: 'Gemüsebrühe' },
      { amount: 1, unit: 'Handvoll', item: 'Minze' },
      { amount: null, unit: '', item: 'Zitronensaft' },
      { amount: null, unit: '', item: 'Olivenöl' }
    ],
    steps: [
      'Zwiebel in Olivenöl weich anschwitzen.',
      'Gewürfelte Kartoffeln und Brühe hinzufügen und köcheln, bis sie weich sind.',
      'Erbsen und Minze hinzufügen, kurz kochen, pürieren und mit Zitrone abschmecken.'
    ]
  },
  'socca': {
    title: 'Kichererbsen-Socca mit Kräutersalat',
    description: 'Knuspriges Kichererbsen-Fladenbrot mit zitronigem Kräutersalat.',
    tags: ['Kichererbsenmehl', 'glutenfrei', 'Kräuter'],
    calculator: {
      title: 'Pfannengrößen-Rechner',
      label: 'Pfannendurchmesser',
      unit: 'cm',
      note: 'Die Dicke der Socca hängt von der Pfannenfläche ab, deshalb skaliert dieser Rechner den Teig nach Durchmesser.'
    },
    sourceLink: {
      label: 'Hintergrund zu traditioneller Socca'
    },
    ingredients: [
      { amount: 1, unit: 'Tasse', item: 'Kichererbsenmehl' },
      { amount: 1, unit: 'Tasse', item: 'Wasser' },
      { amount: 2, unit: 'EL', item: 'Olivenöl' },
      { amount: 0.5, unit: 'TL', item: 'Salz' },
      { amount: null, unit: '', item: 'Petersilie' },
      { amount: null, unit: '', item: 'Rucola' },
      { amount: null, unit: '', item: 'Zitrone' }
    ],
    steps: [
      'Kichererbsenmehl, Wasser, Öl und Salz 20 Minuten ruhen lassen.',
      'Eine geölte Pfanne sehr heiß werden lassen und die Socca backen oder grillen, bis sie knusprig ist.',
      'Mit Kräutern, Rucola, Zitrone und schwarzem Pfeffer belegen.'
    ]
  },
  'overnight-oats': {
    title: 'Apfel-Zimt-Overnight-Oats',
    description: 'Cremige Haferflocken mit geriebenem Apfel, gerösteten Kernen und Zimt.',
    tags: ['Hafer', 'Meal Prep', 'Frühstück'],
    sourceLink: {
      label: 'Overnight-Oats-Anleitung'
    },
    feature: {
      type: 'Vorbereitung',
      title: 'Meal-Prep-Hinweis',
      text: 'Am besten innerhalb von zwei Tagen essen. Kerne und knusprige Toppings bis zum Morgen separat aufbewahren.'
    },
    ingredients: [
      { amount: 0.5, unit: 'Tasse', item: 'Haferflocken' },
      { amount: 0.5, unit: 'Tasse', item: 'Hafermilch' },
      { amount: 1, unit: '', item: 'geriebener Apfel' },
      { amount: 1, unit: 'EL', item: 'Chiasamen' },
      { amount: 0.5, unit: 'TL', item: 'Zimt' },
      { amount: null, unit: '', item: 'Kürbiskerne' },
      { amount: null, unit: '', item: 'Ahornsirup' }
    ],
    steps: [
      'Haferflocken, Hafermilch, Apfel, Chia, Zimt und Ahornsirup verrühren.',
      'Über Nacht kalt stellen.',
      'Morgens mit gerösteten Kernen toppen.'
    ]
  },
  'berry-cake': {
    title: 'Mandel-Beeren-Kuchen',
    description: 'Ein zarter veganer Kuchen mit Mandeln, Beeren und knuspriger Zuckerkruste.',
    tags: ['Kuchen', 'Beeren', 'Mandel'],
    calculator: {
      title: 'Kuchenform-Rechner',
      label: 'Formdurchmesser',
      unit: 'cm',
      note: 'Kuchenteig skaliert nach Formfläche. Die Backzeit kann sich leicht verändern.'
    },
    ingredients: [
      { amount: 180, unit: 'g', item: 'Mehl' },
      { amount: 70, unit: 'g', item: 'gemahlene Mandeln' },
      { amount: 120, unit: 'g', item: 'Zucker' },
      { amount: 1, unit: 'TL', item: 'Backpulver' },
      { amount: 180, unit: 'ml', item: 'Hafermilch' },
      { amount: 80, unit: 'ml', item: 'neutrales Öl' },
      { amount: 150, unit: 'g', item: 'Beeren' }
    ],
    steps: [
      'Trockene Zutaten in einer Schüssel und feuchte Zutaten in einer zweiten Schüssel verrühren.',
      'Vorsichtig zusammenheben und die Beeren über dem Teig verteilen.',
      'Bei 180C backen, bis der Kuchen goldbraun ist und ein Holzstäbchen sauber herauskommt.'
    ]
  },
  'tofu-scramble': {
    title: 'Kurkuma-Tofu-Scramble',
    description: 'Weicher Tofu mit Kurkuma, Kala Namak, Grünzeug und Toast.',
    tags: ['Tofu', 'Brunch', 'Protein'],
    sourceVideo: {
      label: 'Tofu-Scramble-Technikvideo'
    },
    feature: {
      type: 'Servieren',
      title: 'Servieridee',
      text: 'Mit einem Schuss Hafermilch am Ende wird es weicher; trockener gegart passt es gut in Frühstückssandwiches.'
    },
    ingredients: [
      { amount: 250, unit: 'g', item: 'fester Tofu' },
      { amount: 0.5, unit: 'TL', item: 'Kurkuma' },
      { amount: 1, unit: 'EL', item: 'Nährhefe' },
      { amount: 1, unit: 'Prise', item: 'Kala Namak' },
      { amount: null, unit: '', item: 'Spinat' },
      { amount: null, unit: '', item: 'Kirschtomaten' },
      { amount: null, unit: '', item: 'Toast' }
    ],
    steps: [
      'Tofu in eine warme Pfanne bröseln.',
      'Kurkuma, Nährhefe, Kala Namak und einen Schuss Wasser hinzufügen.',
      'Spinat und Tomaten unterheben und auf Toast servieren.'
    ]
  },
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
  'orange-cream-pasta': {
    title: 'Orangen-Cremepasta',
    description: 'Eine glänzende Orangen-Version von Pasta al Limone mit Sahne, Butter, Parmesan, Orangenzeste und etwas frischem Orangensaft.',
    tags: ['Pasta', 'Orange', 'schnell'],
    sourceLink: {
      label: 'Adaptiert von Bon Appetit Pasta al Limone'
    },
    feature: {
      type: 'Adaption',
      title: 'Orange statt Zitrone',
      text: 'Orange ist süßer und weicher als Zitrone. Diese Version setzt deshalb auf viel Zeste für Aroma und nur genug Saft, um die Sahnesauce aufzuhellen.'
    },
    ingredients: [
      { amount: 1, unit: '', item: 'große Orange' },
      { amount: 340, unit: 'g', item: 'Spaghetti oder andere lange Pasta' },
      { amount: null, unit: '', item: 'Koscheres Salz' },
      { amount: 180, unit: 'ml', item: 'Sahne' },
      { amount: 85, unit: 'g', item: 'ungesalzene Butter, in Esslöffelstücke geschnitten' },
      { amount: 85, unit: 'g', item: 'Parmesan, fein gerieben' },
      { amount: null, unit: '', item: 'frisch gemahlener schwarzer Pfeffer' }
    ],
    steps: [
      'Mit einem Sparschäler ein paar breite Streifen Orangenzeste abziehen und für das Servieren in dünne Streifen schneiden.',
      'Die restliche Orangenschale fein in einen breiten Topf oder Bräter reiben. Orange auspressen und 2 Esslöffel Saft beiseitestellen.',
      'Pasta in kräftig gesalzenem kochendem Wasser sehr al dente kochen. Mindestens 1 1/2 Tassen Pastawasser aufbewahren.',
      'Während die Pasta kocht, Sahne mit der geriebenen Orangenschale bei mittlerer Hitze erwärmen, bis sie gerade zu simmern beginnt.',
      'Hitze reduzieren und die Butter Stück für Stück einrühren, bis jedes Stück in der Sahne geschmolzen ist.',
      'Etwa 3/4 Tasse Pastawasser zur Orangencreme geben, dann die Pasta hinzufügen und bei mittlerer Hitze schwenken.',
      'Parmesan nach und nach einarbeiten, bis die Sauce glänzt und die Pasta überzieht. Mit mehr Pastawasser lockern, falls sie zu stark anzieht.',
      'Topf vom Herd nehmen und den beiseitegestellten Orangensaft einrühren. Abschmecken und bei Bedarf salzen.',
      'Mit schwarzem Pfeffer und den feinen Orangen-Zestenstreifen servieren.'
    ]
  }
};
