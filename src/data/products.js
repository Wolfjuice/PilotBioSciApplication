const products = [
  // {
  //   "id": "prod-1",
  //   "title": "Statues of Augustus",
  //   "emperor": "augustus",
  //   "description": "Statues of Augustus: Historically-informed reproduction or print related to Emperor Augustus.",
  //   "price": 198.74,
  //   "image": "/product-images/prod-1.jpg",
  //   "timePeriod": "earlyEmpire"
  // },
  {
    id: "prod-1",
    title: "Statues of Augustus",
    emperor: "augustus",
    description: "Statues of Augustus: Historically-informed reproduction or print related to Emperor Augustus.",
    price: 198.74,
    image: "/product-images/prod-1.jpg",
    timePeriod: "earlyEmpire",
    variants: [
      {
        sku: "A00186-100", 
        size: "100 μg",
        price: 198.74,
        inStock: true,
      },
      {
        sku: "A00186-200",
        size: "200 μg",
        price: 385.00,
        inStock: true,
      },
      {
        sku: "A00186-300",
        size: "300 μg",
        price: 444.00,
        inStock: true,
      },
      {
        sku: "A00186-BULK",
        size: "Custom / Bulk",
        price: null,  
        inStock: true,
        isQuote: true,
      }
    ]
  },
  {
    "id": "prod-2",
    "title": "Coins of Augustus",
    "emperor": "augustus",
    "description": "Coins of Augustus: Historically-informed reproduction or print related to Emperor Augustus.",
    "price": 183.1,
    "image": "/product-images/prod-2.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-3",
    "title": "Busts of Augustus",
    "emperor": "augustus",
    "description": "Busts of Augustus: Historically-informed reproduction or print related to Emperor Augustus.",
    "price": 150.7,
    "image": "/product-images/prod-3.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-4",
    "title": "Artifacts from Augustus's Reign",
    "emperor": "augustus",
    "description": "Artifacts from Augustus's Reign: Historically-informed reproduction or print related to Emperor Augustus.",
    "price": 231.42,
    "image": "/product-images/prod-4.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-5",
    "title": "Portraits of Augustus",
    "emperor": "augustus",
    "description": "Portraits of Augustus: Historically-informed reproduction or print related to Emperor Augustus.",
    "price": 244.89,
    "image": "/product-images/prod-5.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-6",
    "title": "Inscriptions of Augustus",
    "emperor": "augustus",
    "description": "Inscriptions of Augustus: Historically-informed reproduction or print related to Emperor Augustus.",
    "price": 186.41,
    "image": "/product-images/prod-6.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-7",
    "title": "Reliefs of Augustus",
    "emperor": "augustus",
    "description": "Reliefs of Augustus: Historically-informed reproduction or print related to Emperor Augustus.",
    "price": 129.8,
    "image": "/product-images/prod-7.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-8",
    "title": "Temples Built by Augustus",
    "emperor": "augustus",
    "description": "Temples Built by Augustus: Historically-informed reproduction or print related to Emperor Augustus.",
    "price": 64.2,
    "image": "/product-images/prod-8.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-9",
    "title": "Augustus's War Campaigns",
    "emperor": "augustus",
    "description": "Augustus's War Campaigns: Historically-informed reproduction or print related to Emperor Augustus.",
    "price": 198.28,
    "image": "/product-images/prod-9.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-10",
    "title": "Augustus Family Tree",
    "emperor": "augustus",
    "description": "Augustus Family Tree: Historically-informed reproduction or print related to Emperor Augustus.",
    "price": 297.06,
    "image": "/product-images/prod-10.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-11",
    "title": "Augustus in Roman Art",
    "emperor": "augustus",
    "description": "Augustus in Roman Art: Historically-informed reproduction or print related to Emperor Augustus.",
    "price": 150.79,
    "image": "/product-images/prod-11.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-12",
    "title": "Augustus Correspondence",
    "emperor": "augustus",
    "description": "Augustus Correspondence: Historically-informed reproduction or print related to Emperor Augustus.",
    "price": 80.57,
    "image": "/product-images/prod-12.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-13",
    "title": "Augustus Cultural Impact",
    "emperor": "augustus",
    "description": "Augustus Cultural Impact: Historically-informed reproduction or print related to Emperor Augustus.",
    "price": 61.76,
    "image": "/product-images/prod-13.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-14",
    "title": "Augustus Biographies",
    "emperor": "augustus",
    "description": "Augustus Biographies: Historically-informed reproduction or print related to Emperor Augustus.",
    "price": 150.05,
    "image": "/product-images/prod-14.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-15",
    "title": "Augustus Era Maps",
    "emperor": "augustus",
    "description": "Augustus Era Maps: Historically-informed reproduction or print related to Emperor Augustus.",
    "price": 236.13,
    "image": "/product-images/prod-15.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-16",
    "title": "Statues of Nero",
    "emperor": "nero",
    "description": "Statues of Nero: Historically-informed reproduction or print related to Emperor Nero.",
    "price": 295.91,
    "image": "/product-images/prod-16.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-17",
    "title": "Coins of Nero",
    "emperor": "nero",
    "description": "Coins of Nero: Historically-informed reproduction or print related to Emperor Nero.",
    "price": 269.83,
    "image": "/product-images/prod-17.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-18",
    "title": "Busts of Nero",
    "emperor": "nero",
    "description": "Busts of Nero: Historically-informed reproduction or print related to Emperor Nero.",
    "price": 95.42,
    "image": "/product-images/prod-18.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-19",
    "title": "Nero's Palaces",
    "emperor": "nero",
    "description": "Nero's Palaces: Historically-informed reproduction or print related to Emperor Nero.",
    "price": 208.4,
    "image": "/product-images/prod-19.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-20",
    "title": "Nero in Literature",
    "emperor": "nero",
    "description": "Nero in Literature: Historically-informed reproduction or print related to Emperor Nero.",
    "price": 93.88,
    "image": "/product-images/prod-20.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-21",
    "title": "Nero's Performances",
    "emperor": "nero",
    "description": "Nero's Performances: Historically-informed reproduction or print related to Emperor Nero.",
    "price": 273.46,
    "image": "/product-images/prod-21.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-22",
    "title": "Nero Cultural Festivals",
    "emperor": "nero",
    "description": "Nero Cultural Festivals: Historically-informed reproduction or print related to Emperor Nero.",
    "price": 46.93,
    "image": "/product-images/prod-22.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-23",
    "title": "Nero Family Tree",
    "emperor": "nero",
    "description": "Nero Family Tree: Historically-informed reproduction or print related to Emperor Nero.",
    "price": 35.34,
    "image": "/product-images/prod-23.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-24",
    "title": "Roman Fire of 64 AD",
    "emperor": "nero",
    "description": "Roman Fire of 64 AD: Historically-informed reproduction or print related to Emperor Nero.",
    "price": 125.59,
    "image": "/product-images/prod-24.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-25",
    "title": "Nero's Music",
    "emperor": "nero",
    "description": "Nero's Music: Historically-informed reproduction or print related to Emperor Nero.",
    "price": 206.4,
    "image": "/product-images/prod-25.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-26",
    "title": "Nero Coins Collection",
    "emperor": "nero",
    "description": "Nero Coins Collection: Historically-informed reproduction or print related to Emperor Nero.",
    "price": 176.34,
    "image": "/product-images/prod-26.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-27",
    "title": "Nero Tombs",
    "emperor": "nero",
    "description": "Nero Tombs: Historically-informed reproduction or print related to Emperor Nero.",
    "price": 223.18,
    "image": "/product-images/prod-27.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-28",
    "title": "Nero Literature",
    "emperor": "nero",
    "description": "Nero Literature: Historically-informed reproduction or print related to Emperor Nero.",
    "price": 60.13,
    "image": "/product-images/prod-28.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-29",
    "title": "Nero Era Maps",
    "emperor": "nero",
    "description": "Nero Era Maps: Historically-informed reproduction or print related to Emperor Nero.",
    "price": 278.96,
    "image": "/product-images/prod-29.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-30",
    "title": "Nero's Advisor Seneca",
    "emperor": "nero",
    "description": "Nero's Advisor Seneca: Historically-informed reproduction or print related to Emperor Nero.",
    "price": 142.2,
    "image": "/product-images/prod-30.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-31",
    "title": "Statues of Trajan",
    "emperor": "trajan",
    "description": "Statues of Trajan: Historically-informed reproduction or print related to Emperor Trajan.",
    "price": 299.61,
    "image": "/product-images/prod-31.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-32",
    "title": "Coins of Trajan",
    "emperor": "trajan",
    "description": "Coins of Trajan: Historically-informed reproduction or print related to Emperor Trajan.",
    "price": 236.19,
    "image": "/product-images/prod-32.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-33",
    "title": "Busts of Trajan",
    "emperor": "trajan",
    "description": "Busts of Trajan: Historically-informed reproduction or print related to Emperor Trajan.",
    "price": 20.75,
    "image": "/product-images/prod-33.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-34",
    "title": "Trajan's Market",
    "emperor": "trajan",
    "description": "Trajan's Market: Historically-informed reproduction or print related to Emperor Trajan.",
    "price": 285.23,
    "image": "/product-images/prod-34.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-35",
    "title": "Trajan Columns",
    "emperor": "trajan",
    "description": "Trajan Columns: Historically-informed reproduction or print related to Emperor Trajan.",
    "price": 75.31,
    "image": "/product-images/prod-35.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-36",
    "title": "Trajan's Forts",
    "emperor": "trajan",
    "description": "Trajan's Forts: Historically-informed reproduction or print related to Emperor Trajan.",
    "price": 156.21,
    "image": "/product-images/prod-36.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-37",
    "title": "Trajan's Conquests",
    "emperor": "trajan",
    "description": "Trajan's Conquests: Historically-informed reproduction or print related to Emperor Trajan.",
    "price": 142.52,
    "image": "/product-images/prod-37.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-38",
    "title": "Trajan's Forum",
    "emperor": "trajan",
    "description": "Trajan's Forum: Historically-informed reproduction or print related to Emperor Trajan.",
    "price": 156.85,
    "image": "/product-images/prod-38.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-39",
    "title": "Trajan Archive",
    "emperor": "trajan",
    "description": "Trajan Archive: Historically-informed reproduction or print related to Emperor Trajan.",
    "price": 164.67,
    "image": "/product-images/prod-39.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-40",
    "title": "Trajan Cultural Artifacts",
    "emperor": "trajan",
    "description": "Trajan Cultural Artifacts: Historically-informed reproduction or print related to Emperor Trajan.",
    "price": 217.93,
    "image": "/product-images/prod-40.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-41",
    "title": "Trajan Inscriptions",
    "emperor": "trajan",
    "description": "Trajan Inscriptions: Historically-informed reproduction or print related to Emperor Trajan.",
    "price": 231.59,
    "image": "/product-images/prod-41.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-42",
    "title": "Trajan Relief Sculptures",
    "emperor": "trajan",
    "description": "Trajan Relief Sculptures: Historically-informed reproduction or print related to Emperor Trajan.",
    "price": 231.72,
    "image": "/product-images/prod-42.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-43",
    "title": "Trajan Era Maps",
    "emperor": "trajan",
    "description": "Trajan Era Maps: Historically-informed reproduction or print related to Emperor Trajan.",
    "price": 171.24,
    "image": "/product-images/prod-43.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-44",
    "title": "Trajan\u2019s Dacian Wars",
    "emperor": "trajan",
    "description": "Trajan\u2019s Dacian Wars: Historically-informed reproduction or print related to Emperor Trajan.",
    "price": 127.62,
    "image": "/product-images/prod-44.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-45",
    "title": "Trajan's Family Records",
    "emperor": "trajan",
    "description": "Trajan's Family Records: Historically-informed reproduction or print related to Emperor Trajan.",
    "price": 147.95,
    "image": "/product-images/prod-45.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-46",
    "title": "Statues of Hadrian",
    "emperor": "hadrian",
    "description": "Statues of Hadrian: Historically-informed reproduction or print related to Emperor Hadrian.",
    "price": 167.6,
    "image": "/product-images/prod-46.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-47",
    "title": "Coins of Hadrian",
    "emperor": "hadrian",
    "description": "Coins of Hadrian: Historically-informed reproduction or print related to Emperor Hadrian.",
    "price": 81.64,
    "image": "/product-images/prod-47.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-48",
    "title": "Busts of Hadrian",
    "emperor": "hadrian",
    "description": "Busts of Hadrian: Historically-informed reproduction or print related to Emperor Hadrian.",
    "price": 80.81,
    "image": "/product-images/prod-48.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-49",
    "title": "Hadrian's Wall Artifacts",
    "emperor": "hadrian",
    "description": "Hadrian's Wall Artifacts: Historically-informed reproduction or print related to Emperor Hadrian.",
    "price": 218.66,
    "image": "/product-images/prod-49.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-50",
    "title": "Hadrian\u2019s Diary",
    "emperor": "hadrian",
    "description": "Hadrian\u2019s Diary: Historically-informed reproduction or print related to Emperor Hadrian.",
    "price": 280.06,
    "image": "/product-images/prod-50.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-51",
    "title": "Temple of Hadrian",
    "emperor": "hadrian",
    "description": "Temple of Hadrian: Historically-informed reproduction or print related to Emperor Hadrian.",
    "price": 217.84,
    "image": "/product-images/prod-51.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-52",
    "title": "Hadrian Palaces",
    "emperor": "hadrian",
    "description": "Hadrian Palaces: Historically-informed reproduction or print related to Emperor Hadrian.",
    "price": 253.87,
    "image": "/product-images/prod-52.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-53",
    "title": "Hadrianic Year Commemoration",
    "emperor": "hadrian",
    "description": "Hadrianic Year Commemoration: Historically-informed reproduction or print related to Emperor Hadrian.",
    "price": 24.19,
    "image": "/product-images/prod-53.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-54",
    "title": "Hadrian's Villa Artefacts",
    "emperor": "hadrian",
    "description": "Hadrian's Villa Artefacts: Historically-informed reproduction or print related to Emperor Hadrian.",
    "price": 167.08,
    "image": "/product-images/prod-54.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-55",
    "title": "Hadrian Coins Collection",
    "emperor": "hadrian",
    "description": "Hadrian Coins Collection: Historically-informed reproduction or print related to Emperor Hadrian.",
    "price": 41.64,
    "image": "/product-images/prod-55.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-56",
    "title": "Hadrian Era Maps",
    "emperor": "hadrian",
    "description": "Hadrian Era Maps: Historically-informed reproduction or print related to Emperor Hadrian.",
    "price": 55.3,
    "image": "/product-images/prod-56.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-57",
    "title": "Hadrian Biographies",
    "emperor": "hadrian",
    "description": "Hadrian Biographies: Historically-informed reproduction or print related to Emperor Hadrian.",
    "price": 13.76,
    "image": "/product-images/prod-57.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-58",
    "title": "Hadrian Inscriptions",
    "emperor": "hadrian",
    "description": "Hadrian Inscriptions: Historically-informed reproduction or print related to Emperor Hadrian.",
    "price": 274.23,
    "image": "/product-images/prod-58.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-59",
    "title": "Hadrian Artwork",
    "emperor": "hadrian",
    "description": "Hadrian Artwork: Historically-informed reproduction or print related to Emperor Hadrian.",
    "price": 79.23,
    "image": "/product-images/prod-59.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-60",
    "title": "Hadrian Architectural Plans",
    "emperor": "hadrian",
    "description": "Hadrian Architectural Plans: Historically-informed reproduction or print related to Emperor Hadrian.",
    "price": 39.8,
    "image": "/product-images/prod-60.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-61",
    "title": "Statues of Marcus Aurelius",
    "emperor": "marcus",
    "description": "Statues of Marcus Aurelius: Historically-informed reproduction or print related to Emperor Marcus.",
    "price": 104.36,
    "image": "/product-images/prod-61.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-62",
    "title": "Coins of Marcus Aurelius",
    "emperor": "marcus",
    "description": "Coins of Marcus Aurelius: Historically-informed reproduction or print related to Emperor Marcus.",
    "price": 262.57,
    "image": "/product-images/prod-62.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-63",
    "title": "Busts of Marcus Aurelius",
    "emperor": "marcus",
    "description": "Busts of Marcus Aurelius: Historically-informed reproduction or print related to Emperor Marcus.",
    "price": 246.55,
    "image": "/product-images/prod-63.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-64",
    "title": "Meditations Manuscripts",
    "emperor": "marcus",
    "description": "Meditations Manuscripts: Historically-informed reproduction or print related to Emperor Marcus.",
    "price": 156.78,
    "image": "/product-images/prod-64.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-65",
    "title": "Marcus\u2019s Campaigns",
    "emperor": "marcus",
    "description": "Marcus\u2019s Campaigns: Historically-informed reproduction or print related to Emperor Marcus.",
    "price": 85.45,
    "image": "/product-images/prod-65.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-66",
    "title": "Marcus's Rome Statue",
    "emperor": "marcus",
    "description": "Marcus's Rome Statue: Historically-informed reproduction or print related to Emperor Marcus.",
    "price": 197.04,
    "image": "/product-images/prod-66.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-67",
    "title": "Marcus Aurelius Relics",
    "emperor": "marcus",
    "description": "Marcus Aurelius Relics: Historically-informed reproduction or print related to Emperor Marcus.",
    "price": 236.19,
    "image": "/product-images/prod-67.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-68",
    "title": "Marcus Aurelius Artworks",
    "emperor": "marcus",
    "description": "Marcus Aurelius Artworks: Historically-informed reproduction or print related to Emperor Marcus.",
    "price": 261.53,
    "image": "/product-images/prod-68.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-69",
    "title": "Marcus Era Maps",
    "emperor": "marcus",
    "description": "Marcus Era Maps: Historically-informed reproduction or print related to Emperor Marcus.",
    "price": 122.01,
    "image": "/product-images/prod-69.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-70",
    "title": "Marcus Family Tree",
    "emperor": "marcus",
    "description": "Marcus Family Tree: Historically-informed reproduction or print related to Emperor Marcus.",
    "price": 153.39,
    "image": "/product-images/prod-70.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-71",
    "title": "Marcus Aurelius Archive",
    "emperor": "marcus",
    "description": "Marcus Aurelius Archive: Historically-informed reproduction or print related to Emperor Marcus.",
    "price": 118.08,
    "image": "/product-images/prod-71.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-72",
    "title": "Marcus Aurelius Inscriptions",
    "emperor": "marcus",
    "description": "Marcus Aurelius Inscriptions: Historically-informed reproduction or print related to Emperor Marcus.",
    "price": 267.95,
    "image": "/product-images/prod-72.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-73",
    "title": "Marcus Aurelius Philosophies",
    "emperor": "marcus",
    "description": "Marcus Aurelius Philosophies: Historically-informed reproduction or print related to Emperor Marcus.",
    "price": 276.0,
    "image": "/product-images/prod-73.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-74",
    "title": "Marcus Aurelius Frescoes",
    "emperor": "marcus",
    "description": "Marcus Aurelius Frescoes: Historically-informed reproduction or print related to Emperor Marcus.",
    "price": 224.96,
    "image": "/product-images/prod-74.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-75",
    "title": "Marcus Aurelius Statues Worldwide",
    "emperor": "marcus",
    "description": "Marcus Aurelius Statues Worldwide: Historically-informed reproduction or print related to Emperor Marcus.",
    "price": 279.45,
    "image": "/product-images/prod-75.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "svc-1",
    "title": "Consultation \u2014 Private Session",
    "emperor": "consultations",
    "description": "Consultation \u2014 Private Session: A professional consultation service related to Roman antiquities and emperor artifacts.",
    "price": 117.64,
    "image": "/product-images/svc-1.jpg",
    "type": "service"
  },
  {
    "id": "svc-2",
    "title": "Consultation \u2014 Conservation Assessment",
    "emperor": "consultations",
    "description": "Consultation \u2014 Conservation Assessment: A professional consultation service related to Roman antiquities and emperor artifacts.",
    "price": 511.65,
    "image": "/product-images/svc-2.jpg",
    "type": "service"
  },
  {
    "id": "svc-3",
    "title": "Consultation \u2014 Artifact Handling",
    "emperor": "consultations",
    "description": "Consultation \u2014 Artifact Handling: A professional consultation service related to Roman antiquities and emperor artifacts.",
    "price": 184.34,
    "image": "/product-images/svc-3.jpg",
    "type": "service"
  },
  {
    "id": "svc-4",
    "title": "Consultation \u2014 On-site Visit",
    "emperor": "consultations",
    "description": "Consultation \u2014 On-site Visit: A professional consultation service related to Roman antiquities and emperor artifacts.",
    "price": 242.8,
    "image": "/product-images/svc-4.jpg",
    "type": "service"
  },
  {
    "id": "svc-5",
    "title": "Consultation \u2014 Artifact Handling",
    "emperor": "consultations",
    "description": "Consultation \u2014 Artifact Handling: A professional consultation service related to Roman antiquities and emperor artifacts.",
    "price": 1085.39,
    "image": "/product-images/svc-5.jpg",
    "type": "service"
  },
  {
    "id": "svc-6",
    "title": "Consultation \u2014 Curatorial Talk",
    "emperor": "consultations",
    "description": "Consultation \u2014 Curatorial Talk: A professional consultation service related to Roman antiquities and emperor artifacts.",
    "price": 932.61,
    "image": "/product-images/svc-6.jpg",
    "type": "service"
  },
  {
    "id": "svc-7",
    "title": "Consultation \u2014 Expert Review",
    "emperor": "consultations",
    "description": "Consultation \u2014 Expert Review: A professional consultation service related to Roman antiquities and emperor artifacts.",
    "price": 1158.47,
    "image": "/product-images/svc-7.jpg",
    "type": "service"
  },
  {
    "id": "svc-8",
    "title": "Consultation \u2014 Conservation Assessment",
    "emperor": "consultations",
    "description": "Consultation \u2014 Conservation Assessment: A professional consultation service related to Roman antiquities and emperor artifacts.",
    "price": 458.94,
    "image": "/product-images/svc-8.jpg",
    "type": "service"
  },
  {
    "id": "svc-9",
    "title": "Consultation \u2014 Educational Program",
    "emperor": "consultations",
    "description": "Consultation \u2014 Educational Program: A professional consultation service related to Roman antiquities and emperor artifacts.",
    "price": 707.79,
    "image": "/product-images/svc-9.jpg",
    "type": "service"
  },
  {
    "id": "svc-10",
    "title": "Consultation \u2014 Conservation Assessment",
    "emperor": "consultations",
    "description": "Consultation \u2014 Conservation Assessment: A professional consultation service related to Roman antiquities and emperor artifacts.",
    "price": 460.63,
    "image": "/product-images/svc-10.jpg",
    "type": "service"
  },
  {
    "id": "svc-11",
    "title": "Restoration \u2014 Provenance Research",
    "emperor": "restorations",
    "description": "Restoration \u2014 Provenance Research: A professional restoration service related to Roman antiquities and emperor artifacts.",
    "price": 551.81,
    "image": "/product-images/svc-11.jpg",
    "type": "service"
  },
  {
    "id": "svc-12",
    "title": "Restoration \u2014 Expert Review",
    "emperor": "restorations",
    "description": "Restoration \u2014 Expert Review: A professional restoration service related to Roman antiquities and emperor artifacts.",
    "price": 538.23,
    "image": "/product-images/svc-12.jpg",
    "type": "service"
  },
  {
    "id": "svc-13",
    "title": "Restoration \u2014 Private Session",
    "emperor": "restorations",
    "description": "Restoration \u2014 Private Session: A professional restoration service related to Roman antiquities and emperor artifacts.",
    "price": 837.19,
    "image": "/product-images/svc-13.jpg",
    "type": "service"
  },
  {
    "id": "svc-14",
    "title": "Restoration \u2014 Artifact Handling",
    "emperor": "restorations",
    "description": "Restoration \u2014 Artifact Handling: A professional restoration service related to Roman antiquities and emperor artifacts.",
    "price": 864.93,
    "image": "/product-images/svc-14.jpg",
    "type": "service"
  },
  {
    "id": "svc-15",
    "title": "Restoration \u2014 Private Session",
    "emperor": "restorations",
    "description": "Restoration \u2014 Private Session: A professional restoration service related to Roman antiquities and emperor artifacts.",
    "price": 148.42,
    "image": "/product-images/svc-15.jpg",
    "type": "service"
  },
  {
    "id": "svc-16",
    "title": "Restoration \u2014 On-site Visit",
    "emperor": "restorations",
    "description": "Restoration \u2014 On-site Visit: A professional restoration service related to Roman antiquities and emperor artifacts.",
    "price": 298.63,
    "image": "/product-images/svc-16.jpg",
    "type": "service"
  },
  {
    "id": "svc-17",
    "title": "Restoration \u2014 Expert Review",
    "emperor": "restorations",
    "description": "Restoration \u2014 Expert Review: A professional restoration service related to Roman antiquities and emperor artifacts.",
    "price": 483.7,
    "image": "/product-images/svc-17.jpg",
    "type": "service"
  },
  {
    "id": "svc-18",
    "title": "Restoration \u2014 Conservation Assessment",
    "emperor": "restorations",
    "description": "Restoration \u2014 Conservation Assessment: A professional restoration service related to Roman antiquities and emperor artifacts.",
    "price": 212.97,
    "image": "/product-images/svc-18.jpg",
    "type": "service"
  },
  {
    "id": "svc-19",
    "title": "Restoration \u2014 Scholarly Consultation",
    "emperor": "restorations",
    "description": "Restoration \u2014 Scholarly Consultation: A professional restoration service related to Roman antiquities and emperor artifacts.",
    "price": 186.96,
    "image": "/product-images/svc-19.jpg",
    "type": "service"
  },
  {
    "id": "svc-20",
    "title": "Restoration \u2014 Provenance Research",
    "emperor": "restorations",
    "description": "Restoration \u2014 Provenance Research: A professional restoration service related to Roman antiquities and emperor artifacts.",
    "price": 971.61,
    "image": "/product-images/svc-20.jpg",
    "type": "service"
  },
  {
    "id": "svc-21",
    "title": "Guided Tour \u2014 Curatorial Talk",
    "emperor": "tours",
    "description": "Guided Tour \u2014 Curatorial Talk: A professional guided tour service related to Roman antiquities and emperor artifacts.",
    "price": 242.13,
    "image": "/product-images/svc-21.jpg",
    "type": "service"
  },
  {
    "id": "svc-22",
    "title": "Guided Tour \u2014 Scholarly Consultation",
    "emperor": "tours",
    "description": "Guided Tour \u2014 Scholarly Consultation: A professional guided tour service related to Roman antiquities and emperor artifacts.",
    "price": 820.1,
    "image": "/product-images/svc-22.jpg",
    "type": "service"
  },
  {
    "id": "svc-23",
    "title": "Guided Tour \u2014 Expert Review",
    "emperor": "tours",
    "description": "Guided Tour \u2014 Expert Review: A professional guided tour service related to Roman antiquities and emperor artifacts.",
    "price": 261.13,
    "image": "/product-images/svc-23.jpg",
    "type": "service"
  },
  {
    "id": "svc-24",
    "title": "Guided Tour \u2014 Expert Review",
    "emperor": "tours",
    "description": "Guided Tour \u2014 Expert Review: A professional guided tour service related to Roman antiquities and emperor artifacts.",
    "price": 120.52,
    "image": "/product-images/svc-24.jpg",
    "type": "service"
  },
  {
    "id": "svc-25",
    "title": "Guided Tour \u2014 On-site Visit",
    "emperor": "tours",
    "description": "Guided Tour \u2014 On-site Visit: A professional guided tour service related to Roman antiquities and emperor artifacts.",
    "price": 647.02,
    "image": "/product-images/svc-25.jpg",
    "type": "service"
  },
  {
    "id": "svc-26",
    "title": "Guided Tour \u2014 On-site Visit",
    "emperor": "tours",
    "description": "Guided Tour \u2014 On-site Visit: A professional guided tour service related to Roman antiquities and emperor artifacts.",
    "price": 1123.18,
    "image": "/product-images/svc-26.jpg",
    "type": "service"
  },
  {
    "id": "svc-27",
    "title": "Guided Tour \u2014 Scholarly Consultation",
    "emperor": "tours",
    "description": "Guided Tour \u2014 Scholarly Consultation: A professional guided tour service related to Roman antiquities and emperor artifacts.",
    "price": 838.15,
    "image": "/product-images/svc-27.jpg",
    "type": "service"
  },
  {
    "id": "svc-28",
    "title": "Guided Tour \u2014 Scholarly Consultation",
    "emperor": "tours",
    "description": "Guided Tour \u2014 Scholarly Consultation: A professional guided tour service related to Roman antiquities and emperor artifacts.",
    "price": 1166.14,
    "image": "/product-images/svc-28.jpg",
    "type": "service"
  },
  {
    "id": "svc-29",
    "title": "Guided Tour \u2014 Curatorial Talk",
    "emperor": "tours",
    "description": "Guided Tour \u2014 Curatorial Talk: A professional guided tour service related to Roman antiquities and emperor artifacts.",
    "price": 343.99,
    "image": "/product-images/svc-29.jpg",
    "type": "service"
  },
  {
    "id": "svc-30",
    "title": "Guided Tour \u2014 Scholarly Consultation",
    "emperor": "tours",
    "description": "Guided Tour \u2014 Scholarly Consultation: A professional guided tour service related to Roman antiquities and emperor artifacts.",
    "price": 1070.07,
    "image": "/product-images/svc-30.jpg",
    "type": "service"
  },
  {
    "id": "prod-76",
    "title": "Coins of Tiberius",
    "emperor": "tiberius",
    "description": "Coins of Tiberius: Authentic-style reproduction coins themed around Emperor Tiberius.",
    "price": 293.32,
    "image": "/product-images/prod-76.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-77",
    "title": "Busts of Tiberius",
    "emperor": "tiberius",
    "description": "Busts of Tiberius: Museum-inspired bust reproduction honoring Emperor Tiberius.",
    "price": 77.48,
    "image": "/product-images/prod-77.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-78",
    "title": "Reliefs of Tiberius",
    "emperor": "tiberius",
    "description": "Reliefs of Tiberius: Wall relief artwork featuring symbols of Emperor Tiberius.",
    "price": 37.03,
    "image": "/product-images/prod-78.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-79",
    "title": "Seals of Tiberius",
    "emperor": "tiberius",
    "description": "Seals of Tiberius: Replica wax-seal set inspired by imperial motifs of Tiberius.",
    "price": 106.47,
    "image": "/product-images/prod-79.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-80",
    "title": "Scrolls of Tiberius",
    "emperor": "tiberius",
    "description": "Scrolls of Tiberius: Decorative scroll print recounting key moments of Tiberius's reign.",
    "price": 265.89,
    "image": "/product-images/prod-80.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-81",
    "title": "Standards of Tiberius",
    "emperor": "tiberius",
    "description": "Standards of Tiberius: Banner/standard print styled after legions under Tiberius.",
    "price": 32.67,
    "image": "/product-images/prod-81.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-82",
    "title": "Mosaics of Tiberius",
    "emperor": "tiberius",
    "description": "Mosaics of Tiberius: Mosaic-style art panel inspired by the era of Tiberius.",
    "price": 229.04,
    "image": "/product-images/prod-82.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-83",
    "title": "Cameos of Tiberius",
    "emperor": "tiberius",
    "description": "Cameos of Tiberius: Cameo-style medallion honoring Emperor Tiberius.",
    "price": 70.44,
    "image": "/product-images/prod-83.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-84",
    "title": "Maps of Tiberius",
    "emperor": "tiberius",
    "description": "Maps of Tiberius: Cartographic print highlighting campaigns during Tiberius.",
    "price": 258.94,
    "image": "/product-images/prod-84.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-85",
    "title": "Chronicles of Tiberius",
    "emperor": "tiberius",
    "description": "Chronicles of Tiberius: Collector booklet with curated stories from Tiberius's time.",
    "price": 206.19,
    "image": "/product-images/prod-85.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-86",
    "title": "Coins of Septimius Severus",
    "emperor": "septimiusSeverus",
    "description": "Coins of Septimius Severus: Authentic-style reproduction coins themed around Emperor Septimius Severus.",
    "price": 71.52,
    "image": "/product-images/prod-86.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-87",
    "title": "Busts of Septimius Severus",
    "emperor": "septimiusSeverus",
    "description": "Busts of Septimius Severus: Museum-inspired bust reproduction honoring Emperor Septimius Severus.",
    "price": 117.06,
    "image": "/product-images/prod-87.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-88",
    "title": "Reliefs of Septimius Severus",
    "emperor": "septimiusSeverus",
    "description": "Reliefs of Septimius Severus: Wall relief artwork featuring symbols of Emperor Septimius Severus.",
    "price": 170.08,
    "image": "/product-images/prod-88.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-89",
    "title": "Seals of Septimius Severus",
    "emperor": "septimiusSeverus",
    "description": "Seals of Septimius Severus: Replica wax-seal set inspired by imperial motifs of Septimius Severus.",
    "price": 119.47,
    "image": "/product-images/prod-89.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-90",
    "title": "Scrolls of Septimius Severus",
    "emperor": "septimiusSeverus",
    "description": "Scrolls of Septimius Severus: Decorative scroll print recounting key moments of Septimius Severus's reign.",
    "price": 29.14,
    "image": "/product-images/prod-90.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-91",
    "title": "Standards of Septimius Severus",
    "emperor": "septimiusSeverus",
    "description": "Standards of Septimius Severus: Banner/standard print styled after legions under Septimius Severus.",
    "price": 114.76,
    "image": "/product-images/prod-91.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-92",
    "title": "Mosaics of Septimius Severus",
    "emperor": "septimiusSeverus",
    "description": "Mosaics of Septimius Severus: Mosaic-style art panel inspired by the era of Septimius Severus.",
    "price": 67.81,
    "image": "/product-images/prod-92.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-93",
    "title": "Cameos of Septimius Severus",
    "emperor": "septimiusSeverus",
    "description": "Cameos of Septimius Severus: Cameo-style medallion honoring Emperor Septimius Severus.",
    "price": 76.11,
    "image": "/product-images/prod-93.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-94",
    "title": "Maps of Septimius Severus",
    "emperor": "septimiusSeverus",
    "description": "Maps of Septimius Severus: Cartographic print highlighting campaigns during Septimius Severus.",
    "price": 72.25,
    "image": "/product-images/prod-94.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-95",
    "title": "Chronicles of Septimius Severus",
    "emperor": "septimiusSeverus",
    "description": "Chronicles of Septimius Severus: Collector booklet with curated stories from Septimius Severus's time.",
    "price": 134.7,
    "image": "/product-images/prod-95.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-96",
    "title": "Coins of Aurelian",
    "emperor": "aurelian",
    "description": "Coins of Aurelian: Authentic-style reproduction coins themed around Emperor Aurelian.",
    "price": 168.2,
    "image": "/product-images/prod-96.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-97",
    "title": "Busts of Aurelian",
    "emperor": "aurelian",
    "description": "Busts of Aurelian: Museum-inspired bust reproduction honoring Emperor Aurelian.",
    "price": 115.16,
    "image": "/product-images/prod-97.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-98",
    "title": "Reliefs of Aurelian",
    "emperor": "aurelian",
    "description": "Reliefs of Aurelian: Wall relief artwork featuring symbols of Emperor Aurelian.",
    "price": 210.12,
    "image": "/product-images/prod-98.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-99",
    "title": "Seals of Aurelian",
    "emperor": "aurelian",
    "description": "Seals of Aurelian: Replica wax-seal set inspired by imperial motifs of Aurelian.",
    "price": 181.3,
    "image": "/product-images/prod-99.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-100",
    "title": "Scrolls of Aurelian",
    "emperor": "aurelian",
    "description": "Scrolls of Aurelian: Decorative scroll print recounting key moments of Aurelian's reign.",
    "price": 272.6,
    "image": "/product-images/prod-100.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-101",
    "title": "Standards of Aurelian",
    "emperor": "aurelian",
    "description": "Standards of Aurelian: Banner/standard print styled after legions under Aurelian.",
    "price": 276.13,
    "image": "/product-images/prod-101.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-102",
    "title": "Mosaics of Aurelian",
    "emperor": "aurelian",
    "description": "Mosaics of Aurelian: Mosaic-style art panel inspired by the era of Aurelian.",
    "price": 255.4,
    "image": "/product-images/prod-102.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-103",
    "title": "Cameos of Aurelian",
    "emperor": "aurelian",
    "description": "Cameos of Aurelian: Cameo-style medallion honoring Emperor Aurelian.",
    "price": 62.59,
    "image": "/product-images/prod-103.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-104",
    "title": "Maps of Aurelian",
    "emperor": "aurelian",
    "description": "Maps of Aurelian: Cartographic print highlighting campaigns during Aurelian.",
    "price": 31.7,
    "image": "/product-images/prod-104.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-105",
    "title": "Chronicles of Aurelian",
    "emperor": "aurelian",
    "description": "Chronicles of Aurelian: Collector booklet with curated stories from Aurelian's time.",
    "price": 34.0,
    "image": "/product-images/prod-105.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-106",
    "title": "Coins of Diocletian",
    "emperor": "diocletian",
    "description": "Coins of Diocletian: Authentic-style reproduction coins themed around Emperor Diocletian.",
    "price": 118.02,
    "image": "/product-images/prod-106.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-107",
    "title": "Busts of Diocletian",
    "emperor": "diocletian",
    "description": "Busts of Diocletian: Museum-inspired bust reproduction honoring Emperor Diocletian.",
    "price": 112.67,
    "image": "/product-images/prod-107.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-108",
    "title": "Reliefs of Diocletian",
    "emperor": "diocletian",
    "description": "Reliefs of Diocletian: Wall relief artwork featuring symbols of Emperor Diocletian.",
    "price": 52.71,
    "image": "/product-images/prod-108.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-109",
    "title": "Seals of Diocletian",
    "emperor": "diocletian",
    "description": "Seals of Diocletian: Replica wax-seal set inspired by imperial motifs of Diocletian.",
    "price": 205.17,
    "image": "/product-images/prod-109.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-110",
    "title": "Scrolls of Diocletian",
    "emperor": "diocletian",
    "description": "Scrolls of Diocletian: Decorative scroll print recounting key moments of Diocletian's reign.",
    "price": 50.8,
    "image": "/product-images/prod-110.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-111",
    "title": "Standards of Diocletian",
    "emperor": "diocletian",
    "description": "Standards of Diocletian: Banner/standard print styled after legions under Diocletian.",
    "price": 267.17,
    "image": "/product-images/prod-111.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-112",
    "title": "Mosaics of Diocletian",
    "emperor": "diocletian",
    "description": "Mosaics of Diocletian: Mosaic-style art panel inspired by the era of Diocletian.",
    "price": 209.09,
    "image": "/product-images/prod-112.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-113",
    "title": "Cameos of Diocletian",
    "emperor": "diocletian",
    "description": "Cameos of Diocletian: Cameo-style medallion honoring Emperor Diocletian.",
    "price": 144.73,
    "image": "/product-images/prod-113.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-114",
    "title": "Maps of Diocletian",
    "emperor": "diocletian",
    "description": "Maps of Diocletian: Cartographic print highlighting campaigns during Diocletian.",
    "price": 71.89,
    "image": "/product-images/prod-114.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-115",
    "title": "Chronicles of Diocletian",
    "emperor": "diocletian",
    "description": "Chronicles of Diocletian: Collector booklet with curated stories from Diocletian's time.",
    "price": 78.98,
    "image": "/product-images/prod-115.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-116",
    "title": "Coins of Constantine",
    "emperor": "constantine",
    "description": "Coins of Constantine: Authentic-style reproduction coins themed around Emperor Constantine.",
    "price": 200.57,
    "image": "/product-images/prod-116.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-117",
    "title": "Busts of Constantine",
    "emperor": "constantine",
    "description": "Busts of Constantine: Museum-inspired bust reproduction honoring Emperor Constantine.",
    "price": 62.95,
    "image": "/product-images/prod-117.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-118",
    "title": "Reliefs of Constantine",
    "emperor": "constantine",
    "description": "Reliefs of Constantine: Wall relief artwork featuring symbols of Emperor Constantine.",
    "price": 182.51,
    "image": "/product-images/prod-118.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-119",
    "title": "Seals of Constantine",
    "emperor": "constantine",
    "description": "Seals of Constantine: Replica wax-seal set inspired by imperial motifs of Constantine.",
    "price": 21.03,
    "image": "/product-images/prod-119.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-120",
    "title": "Scrolls of Constantine",
    "emperor": "constantine",
    "description": "Scrolls of Constantine: Decorative scroll print recounting key moments of Constantine's reign.",
    "price": 235.19,
    "image": "/product-images/prod-120.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-121",
    "title": "Standards of Constantine",
    "emperor": "constantine",
    "description": "Standards of Constantine: Banner/standard print styled after legions under Constantine.",
    "price": 185.23,
    "image": "/product-images/prod-121.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-122",
    "title": "Mosaics of Constantine",
    "emperor": "constantine",
    "description": "Mosaics of Constantine: Mosaic-style art panel inspired by the era of Constantine.",
    "price": 228.5,
    "image": "/product-images/prod-122.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-123",
    "title": "Cameos of Constantine",
    "emperor": "constantine",
    "description": "Cameos of Constantine: Cameo-style medallion honoring Emperor Constantine.",
    "price": 144.03,
    "image": "/product-images/prod-123.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-124",
    "title": "Maps of Constantine",
    "emperor": "constantine",
    "description": "Maps of Constantine: Cartographic print highlighting campaigns during Constantine.",
    "price": 54.61,
    "image": "/product-images/prod-124.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-125",
    "title": "Chronicles of Constantine",
    "emperor": "constantine",
    "description": "Chronicles of Constantine: Collector booklet with curated stories from Constantine's time.",
    "price": 97.47,
    "image": "/product-images/prod-125.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-126",
    "title": "Coins of Julius Caesar",
    "emperor": "caesar",
    "description": "Coins of Julius Caesar: Reproduction coin set themed around Julius Caesar.",
    "price": 129.19,
    "image": "/product-images/prod-1.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-127",
    "title": "Busts of Julius Caesar",
    "emperor": "caesar",
    "description": "Busts of Julius Caesar: Museum-style bust honoring Julius Caesar.",
    "price": 61.35,
    "image": "/product-images/prod-10.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-128",
    "title": "Reliefs of Julius Caesar",
    "emperor": "caesar",
    "description": "Reliefs of Julius Caesar: Wall relief artwork featuring symbols of Julius Caesar's era.",
    "price": 175.06,
    "image": "/product-images/prod-100.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-129",
    "title": "Seals of Julius Caesar",
    "emperor": "caesar",
    "description": "Seals of Julius Caesar: Replica seal set inspired by motifs tied to Julius Caesar.",
    "price": 269.22,
    "image": "/product-images/prod-101.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-130",
    "title": "Scrolls of Julius Caesar",
    "emperor": "caesar",
    "description": "Scrolls of Julius Caesar: Decorative scroll print recounting a key moment of Julius Caesar.",
    "price": 230.61,
    "image": "/product-images/prod-102.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-131",
    "title": "Standards of Julius Caesar",
    "emperor": "caesar",
    "description": "Standards of Julius Caesar: Banner print styled after forces allied with Julius Caesar.",
    "price": 230.91,
    "image": "/product-images/prod-103.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-132",
    "title": "Mosaics of Julius Caesar",
    "emperor": "caesar",
    "description": "Mosaics of Julius Caesar: Mosaic-style art panel inspired by Julius Caesar's period.",
    "price": 197.73,
    "image": "/product-images/prod-104.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-133",
    "title": "Cameos of Julius Caesar",
    "emperor": "caesar",
    "description": "Cameos of Julius Caesar: Cameo medallion honoring Julius Caesar.",
    "price": 143.85,
    "image": "/product-images/prod-105.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-134",
    "title": "Maps of Julius Caesar",
    "emperor": "caesar",
    "description": "Maps of Julius Caesar: Cartographic print highlighting campaigns of Julius Caesar.",
    "price": 262.68,
    "image": "/product-images/prod-106.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-135",
    "title": "Chronicles of Julius Caesar",
    "emperor": "caesar",
    "description": "Chronicles of Julius Caesar: Collector booklet with curated stories from Julius Caesar's time.",
    "price": 158.27,
    "image": "/product-images/prod-107.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-136",
    "title": "Coins of Pompey",
    "emperor": "pompey",
    "description": "Coins of Pompey: Reproduction coin set themed around Pompey.",
    "price": 198.77,
    "image": "/product-images/prod-108.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-137",
    "title": "Busts of Pompey",
    "emperor": "pompey",
    "description": "Busts of Pompey: Museum-style bust honoring Pompey.",
    "price": 230.7,
    "image": "/product-images/prod-109.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-138",
    "title": "Reliefs of Pompey",
    "emperor": "pompey",
    "description": "Reliefs of Pompey: Wall relief artwork featuring symbols of Pompey's era.",
    "price": 171.77,
    "image": "/product-images/prod-11.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-139",
    "title": "Seals of Pompey",
    "emperor": "pompey",
    "description": "Seals of Pompey: Replica seal set inspired by motifs tied to Pompey.",
    "price": 121.07,
    "image": "/product-images/prod-110.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-140",
    "title": "Scrolls of Pompey",
    "emperor": "pompey",
    "description": "Scrolls of Pompey: Decorative scroll print recounting a key moment of Pompey.",
    "price": 123.92,
    "image": "/product-images/prod-111.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-141",
    "title": "Standards of Pompey",
    "emperor": "pompey",
    "description": "Standards of Pompey: Banner print styled after forces allied with Pompey.",
    "price": 170.7,
    "image": "/product-images/prod-112.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-142",
    "title": "Mosaics of Pompey",
    "emperor": "pompey",
    "description": "Mosaics of Pompey: Mosaic-style art panel inspired by Pompey's period.",
    "price": 209.7,
    "image": "/product-images/prod-113.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-143",
    "title": "Cameos of Pompey",
    "emperor": "pompey",
    "description": "Cameos of Pompey: Cameo medallion honoring Pompey.",
    "price": 243.43,
    "image": "/product-images/prod-114.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-144",
    "title": "Maps of Pompey",
    "emperor": "pompey",
    "description": "Maps of Pompey: Cartographic print highlighting campaigns of Pompey.",
    "price": 129.46,
    "image": "/product-images/prod-115.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-145",
    "title": "Chronicles of Pompey",
    "emperor": "pompey",
    "description": "Chronicles of Pompey: Collector booklet with curated stories from Pompey's time.",
    "price": 102.2,
    "image": "/product-images/prod-116.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-146",
    "title": "Coins of Cicero",
    "emperor": "cicero",
    "description": "Coins of Cicero: Reproduction coin set themed around Cicero.",
    "price": 186.2,
    "image": "/product-images/prod-117.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-147",
    "title": "Busts of Cicero",
    "emperor": "cicero",
    "description": "Busts of Cicero: Museum-style bust honoring Cicero.",
    "price": 266.38,
    "image": "/product-images/prod-118.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-148",
    "title": "Reliefs of Cicero",
    "emperor": "cicero",
    "description": "Reliefs of Cicero: Wall relief artwork featuring symbols of Cicero's era.",
    "price": 112.38,
    "image": "/product-images/prod-119.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-149",
    "title": "Seals of Cicero",
    "emperor": "cicero",
    "description": "Seals of Cicero: Replica seal set inspired by motifs tied to Cicero.",
    "price": 38.69,
    "image": "/product-images/prod-12.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-150",
    "title": "Scrolls of Cicero",
    "emperor": "cicero",
    "description": "Scrolls of Cicero: Decorative scroll print recounting a key moment of Cicero.",
    "price": 209.16,
    "image": "/product-images/prod-120.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-151",
    "title": "Standards of Cicero",
    "emperor": "cicero",
    "description": "Standards of Cicero: Banner print styled after forces allied with Cicero.",
    "price": 174.08,
    "image": "/product-images/prod-121.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-152",
    "title": "Mosaics of Cicero",
    "emperor": "cicero",
    "description": "Mosaics of Cicero: Mosaic-style art panel inspired by Cicero's period.",
    "price": 287.31,
    "image": "/product-images/prod-122.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-153",
    "title": "Cameos of Cicero",
    "emperor": "cicero",
    "description": "Cameos of Cicero: Cameo medallion honoring Cicero.",
    "price": 179.09,
    "image": "/product-images/prod-123.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-154",
    "title": "Maps of Cicero",
    "emperor": "cicero",
    "description": "Maps of Cicero: Cartographic print highlighting campaigns of Cicero.",
    "price": 173.74,
    "image": "/product-images/prod-124.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-155",
    "title": "Chronicles of Cicero",
    "emperor": "cicero",
    "description": "Chronicles of Cicero: Collector booklet with curated stories from Cicero's time.",
    "price": 169.42,
    "image": "/product-images/prod-125.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-156",
    "title": "Coins of Crassus",
    "emperor": "crassus",
    "description": "Coins of Crassus: Reproduction coin set themed around Crassus.",
    "price": 18.53,
    "image": "/product-images/prod-13.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-157",
    "title": "Busts of Crassus",
    "emperor": "crassus",
    "description": "Busts of Crassus: Museum-style bust honoring Crassus.",
    "price": 173.3,
    "image": "/product-images/prod-14.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-158",
    "title": "Reliefs of Crassus",
    "emperor": "crassus",
    "description": "Reliefs of Crassus: Wall relief artwork featuring symbols of Crassus's era.",
    "price": 44.82,
    "image": "/product-images/prod-15.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-159",
    "title": "Seals of Crassus",
    "emperor": "crassus",
    "description": "Seals of Crassus: Replica seal set inspired by motifs tied to Crassus.",
    "price": 118.02,
    "image": "/product-images/prod-16.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-160",
    "title": "Scrolls of Crassus",
    "emperor": "crassus",
    "description": "Scrolls of Crassus: Decorative scroll print recounting a key moment of Crassus.",
    "price": 79.13,
    "image": "/product-images/prod-17.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-161",
    "title": "Standards of Crassus",
    "emperor": "crassus",
    "description": "Standards of Crassus: Banner print styled after forces allied with Crassus.",
    "price": 18.46,
    "image": "/product-images/prod-18.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-162",
    "title": "Mosaics of Crassus",
    "emperor": "crassus",
    "description": "Mosaics of Crassus: Mosaic-style art panel inspired by Crassus's period.",
    "price": 157.92,
    "image": "/product-images/prod-19.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-163",
    "title": "Cameos of Crassus",
    "emperor": "crassus",
    "description": "Cameos of Crassus: Cameo medallion honoring Crassus.",
    "price": 234.99,
    "image": "/product-images/prod-2.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-164",
    "title": "Maps of Crassus",
    "emperor": "crassus",
    "description": "Maps of Crassus: Cartographic print highlighting campaigns of Crassus.",
    "price": 277.04,
    "image": "/product-images/prod-20.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-165",
    "title": "Chronicles of Crassus",
    "emperor": "crassus",
    "description": "Chronicles of Crassus: Collector booklet with curated stories from Crassus's time.",
    "price": 199.77,
    "image": "/product-images/prod-21.jpg",
    "timePeriod": "lateRepublic"
  },
  {
    "id": "prod-166",
    "title": "Coins of Augustus",
    "emperor": "augustus",
    "description": "Coins of Augustus: Reproduction coin set themed around Augustus.",
    "price": 192.46,
    "image": "/product-images/prod-22.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-167",
    "title": "Busts of Augustus",
    "emperor": "augustus",
    "description": "Busts of Augustus: Museum-style bust honoring Augustus.",
    "price": 145.16,
    "image": "/product-images/prod-23.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-168",
    "title": "Reliefs of Augustus",
    "emperor": "augustus",
    "description": "Reliefs of Augustus: Wall relief artwork featuring symbols of Augustus's era.",
    "price": 157.91,
    "image": "/product-images/prod-24.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-169",
    "title": "Seals of Augustus",
    "emperor": "augustus",
    "description": "Seals of Augustus: Replica seal set inspired by motifs tied to Augustus.",
    "price": 27.88,
    "image": "/product-images/prod-25.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-170",
    "title": "Scrolls of Augustus",
    "emperor": "augustus",
    "description": "Scrolls of Augustus: Decorative scroll print recounting a key moment of Augustus.",
    "price": 263.62,
    "image": "/product-images/prod-26.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-171",
    "title": "Standards of Augustus",
    "emperor": "augustus",
    "description": "Standards of Augustus: Banner print styled after forces allied with Augustus.",
    "price": 250.09,
    "image": "/product-images/prod-27.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-172",
    "title": "Mosaics of Augustus",
    "emperor": "augustus",
    "description": "Mosaics of Augustus: Mosaic-style art panel inspired by Augustus's period.",
    "price": 118.73,
    "image": "/product-images/prod-28.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-173",
    "title": "Cameos of Augustus",
    "emperor": "augustus",
    "description": "Cameos of Augustus: Cameo medallion honoring Augustus.",
    "price": 212.71,
    "image": "/product-images/prod-29.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-174",
    "title": "Maps of Augustus",
    "emperor": "augustus",
    "description": "Maps of Augustus: Cartographic print highlighting campaigns of Augustus.",
    "price": 59.21,
    "image": "/product-images/prod-3.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-175",
    "title": "Chronicles of Augustus",
    "emperor": "augustus",
    "description": "Chronicles of Augustus: Collector booklet with curated stories from Augustus's time.",
    "price": 121.02,
    "image": "/product-images/prod-30.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-176",
    "title": "Coins of Tiberius",
    "emperor": "tiberius",
    "description": "Coins of Tiberius: Reproduction coin set themed around Tiberius.",
    "price": 31.7,
    "image": "/product-images/prod-31.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-177",
    "title": "Busts of Tiberius",
    "emperor": "tiberius",
    "description": "Busts of Tiberius: Museum-style bust honoring Tiberius.",
    "price": 181.53,
    "image": "/product-images/prod-32.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-178",
    "title": "Reliefs of Tiberius",
    "emperor": "tiberius",
    "description": "Reliefs of Tiberius: Wall relief artwork featuring symbols of Tiberius's era.",
    "price": 171.93,
    "image": "/product-images/prod-33.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-179",
    "title": "Seals of Tiberius",
    "emperor": "tiberius",
    "description": "Seals of Tiberius: Replica seal set inspired by motifs tied to Tiberius.",
    "price": 263.2,
    "image": "/product-images/prod-34.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-180",
    "title": "Scrolls of Tiberius",
    "emperor": "tiberius",
    "description": "Scrolls of Tiberius: Decorative scroll print recounting a key moment of Tiberius.",
    "price": 72.69,
    "image": "/product-images/prod-35.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-181",
    "title": "Standards of Tiberius",
    "emperor": "tiberius",
    "description": "Standards of Tiberius: Banner print styled after forces allied with Tiberius.",
    "price": 203.99,
    "image": "/product-images/prod-36.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-182",
    "title": "Mosaics of Tiberius",
    "emperor": "tiberius",
    "description": "Mosaics of Tiberius: Mosaic-style art panel inspired by Tiberius's period.",
    "price": 151.04,
    "image": "/product-images/prod-37.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-183",
    "title": "Cameos of Tiberius",
    "emperor": "tiberius",
    "description": "Cameos of Tiberius: Cameo medallion honoring Tiberius.",
    "price": 78.85,
    "image": "/product-images/prod-38.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-184",
    "title": "Maps of Tiberius",
    "emperor": "tiberius",
    "description": "Maps of Tiberius: Cartographic print highlighting campaigns of Tiberius.",
    "price": 179.17,
    "image": "/product-images/prod-39.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-185",
    "title": "Chronicles of Tiberius",
    "emperor": "tiberius",
    "description": "Chronicles of Tiberius: Collector booklet with curated stories from Tiberius's time.",
    "price": 156.94,
    "image": "/product-images/prod-4.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-186",
    "title": "Coins of Nero",
    "emperor": "nero",
    "description": "Coins of Nero: Reproduction coin set themed around Nero.",
    "price": 207.46,
    "image": "/product-images/prod-40.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-187",
    "title": "Busts of Nero",
    "emperor": "nero",
    "description": "Busts of Nero: Museum-style bust honoring Nero.",
    "price": 113.66,
    "image": "/product-images/prod-41.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-188",
    "title": "Reliefs of Nero",
    "emperor": "nero",
    "description": "Reliefs of Nero: Wall relief artwork featuring symbols of Nero's era.",
    "price": 231.42,
    "image": "/product-images/prod-42.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-189",
    "title": "Seals of Nero",
    "emperor": "nero",
    "description": "Seals of Nero: Replica seal set inspired by motifs tied to Nero.",
    "price": 177.82,
    "image": "/product-images/prod-43.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-190",
    "title": "Scrolls of Nero",
    "emperor": "nero",
    "description": "Scrolls of Nero: Decorative scroll print recounting a key moment of Nero.",
    "price": 153.18,
    "image": "/product-images/prod-44.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-191",
    "title": "Standards of Nero",
    "emperor": "nero",
    "description": "Standards of Nero: Banner print styled after forces allied with Nero.",
    "price": 177.91,
    "image": "/product-images/prod-45.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-192",
    "title": "Mosaics of Nero",
    "emperor": "nero",
    "description": "Mosaics of Nero: Mosaic-style art panel inspired by Nero's period.",
    "price": 130.29,
    "image": "/product-images/prod-46.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-193",
    "title": "Cameos of Nero",
    "emperor": "nero",
    "description": "Cameos of Nero: Cameo medallion honoring Nero.",
    "price": 31.64,
    "image": "/product-images/prod-47.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-194",
    "title": "Maps of Nero",
    "emperor": "nero",
    "description": "Maps of Nero: Cartographic print highlighting campaigns of Nero.",
    "price": 55.93,
    "image": "/product-images/prod-48.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-195",
    "title": "Chronicles of Nero",
    "emperor": "nero",
    "description": "Chronicles of Nero: Collector booklet with curated stories from Nero's time.",
    "price": 117.17,
    "image": "/product-images/prod-49.jpg",
    "timePeriod": "earlyEmpire"
  },
  {
    "id": "prod-196",
    "title": "Coins of Trajan",
    "emperor": "trajan",
    "description": "Coins of Trajan: Reproduction coin set themed around Trajan.",
    "price": 236.57,
    "image": "/product-images/prod-5.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-197",
    "title": "Busts of Trajan",
    "emperor": "trajan",
    "description": "Busts of Trajan: Museum-style bust honoring Trajan.",
    "price": 114.07,
    "image": "/product-images/prod-50.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-198",
    "title": "Reliefs of Trajan",
    "emperor": "trajan",
    "description": "Reliefs of Trajan: Wall relief artwork featuring symbols of Trajan's era.",
    "price": 38.98,
    "image": "/product-images/prod-51.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-199",
    "title": "Seals of Trajan",
    "emperor": "trajan",
    "description": "Seals of Trajan: Replica seal set inspired by motifs tied to Trajan.",
    "price": 153.66,
    "image": "/product-images/prod-52.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-200",
    "title": "Scrolls of Trajan",
    "emperor": "trajan",
    "description": "Scrolls of Trajan: Decorative scroll print recounting a key moment of Trajan.",
    "price": 92.57,
    "image": "/product-images/prod-53.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-201",
    "title": "Standards of Trajan",
    "emperor": "trajan",
    "description": "Standards of Trajan: Banner print styled after forces allied with Trajan.",
    "price": 163.71,
    "image": "/product-images/prod-54.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-202",
    "title": "Mosaics of Trajan",
    "emperor": "trajan",
    "description": "Mosaics of Trajan: Mosaic-style art panel inspired by Trajan's period.",
    "price": 86.13,
    "image": "/product-images/prod-55.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-203",
    "title": "Cameos of Trajan",
    "emperor": "trajan",
    "description": "Cameos of Trajan: Cameo medallion honoring Trajan.",
    "price": 133.36,
    "image": "/product-images/prod-56.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-204",
    "title": "Maps of Trajan",
    "emperor": "trajan",
    "description": "Maps of Trajan: Cartographic print highlighting campaigns of Trajan.",
    "price": 163.53,
    "image": "/product-images/prod-57.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-205",
    "title": "Chronicles of Trajan",
    "emperor": "trajan",
    "description": "Chronicles of Trajan: Collector booklet with curated stories from Trajan's time.",
    "price": 98.03,
    "image": "/product-images/prod-58.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-206",
    "title": "Coins of Hadrian",
    "emperor": "hadrian",
    "description": "Coins of Hadrian: Reproduction coin set themed around Hadrian.",
    "price": 251.45,
    "image": "/product-images/prod-59.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-207",
    "title": "Busts of Hadrian",
    "emperor": "hadrian",
    "description": "Busts of Hadrian: Museum-style bust honoring Hadrian.",
    "price": 184.28,
    "image": "/product-images/prod-6.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-208",
    "title": "Reliefs of Hadrian",
    "emperor": "hadrian",
    "description": "Reliefs of Hadrian: Wall relief artwork featuring symbols of Hadrian's era.",
    "price": 220.76,
    "image": "/product-images/prod-60.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-209",
    "title": "Seals of Hadrian",
    "emperor": "hadrian",
    "description": "Seals of Hadrian: Replica seal set inspired by motifs tied to Hadrian.",
    "price": 48.99,
    "image": "/product-images/prod-61.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-210",
    "title": "Scrolls of Hadrian",
    "emperor": "hadrian",
    "description": "Scrolls of Hadrian: Decorative scroll print recounting a key moment of Hadrian.",
    "price": 199.13,
    "image": "/product-images/prod-62.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-211",
    "title": "Standards of Hadrian",
    "emperor": "hadrian",
    "description": "Standards of Hadrian: Banner print styled after forces allied with Hadrian.",
    "price": 61.74,
    "image": "/product-images/prod-63.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-212",
    "title": "Mosaics of Hadrian",
    "emperor": "hadrian",
    "description": "Mosaics of Hadrian: Mosaic-style art panel inspired by Hadrian's period.",
    "price": 30.61,
    "image": "/product-images/prod-64.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-213",
    "title": "Cameos of Hadrian",
    "emperor": "hadrian",
    "description": "Cameos of Hadrian: Cameo medallion honoring Hadrian.",
    "price": 183.55,
    "image": "/product-images/prod-65.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-214",
    "title": "Maps of Hadrian",
    "emperor": "hadrian",
    "description": "Maps of Hadrian: Cartographic print highlighting campaigns of Hadrian.",
    "price": 28.59,
    "image": "/product-images/prod-66.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-215",
    "title": "Chronicles of Hadrian",
    "emperor": "hadrian",
    "description": "Chronicles of Hadrian: Collector booklet with curated stories from Hadrian's time.",
    "price": 42.01,
    "image": "/product-images/prod-67.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-216",
    "title": "Coins of Marcus",
    "emperor": "marcus",
    "description": "Coins of Marcus: Reproduction coin set themed around Marcus.",
    "price": 21.28,
    "image": "/product-images/prod-68.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-217",
    "title": "Busts of Marcus",
    "emperor": "marcus",
    "description": "Busts of Marcus: Museum-style bust honoring Marcus.",
    "price": 228.73,
    "image": "/product-images/prod-69.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-218",
    "title": "Reliefs of Marcus",
    "emperor": "marcus",
    "description": "Reliefs of Marcus: Wall relief artwork featuring symbols of Marcus's era.",
    "price": 52.39,
    "image": "/product-images/prod-7.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-219",
    "title": "Seals of Marcus",
    "emperor": "marcus",
    "description": "Seals of Marcus: Replica seal set inspired by motifs tied to Marcus.",
    "price": 297.4,
    "image": "/product-images/prod-70.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-220",
    "title": "Scrolls of Marcus",
    "emperor": "marcus",
    "description": "Scrolls of Marcus: Decorative scroll print recounting a key moment of Marcus.",
    "price": 135.03,
    "image": "/product-images/prod-71.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-221",
    "title": "Standards of Marcus",
    "emperor": "marcus",
    "description": "Standards of Marcus: Banner print styled after forces allied with Marcus.",
    "price": 88.9,
    "image": "/product-images/prod-72.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-222",
    "title": "Mosaics of Marcus",
    "emperor": "marcus",
    "description": "Mosaics of Marcus: Mosaic-style art panel inspired by Marcus's period.",
    "price": 158.83,
    "image": "/product-images/prod-73.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-223",
    "title": "Cameos of Marcus",
    "emperor": "marcus",
    "description": "Cameos of Marcus: Cameo medallion honoring Marcus.",
    "price": 176.89,
    "image": "/product-images/prod-74.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-224",
    "title": "Maps of Marcus",
    "emperor": "marcus",
    "description": "Maps of Marcus: Cartographic print highlighting campaigns of Marcus.",
    "price": 145.44,
    "image": "/product-images/prod-75.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-225",
    "title": "Chronicles of Marcus",
    "emperor": "marcus",
    "description": "Chronicles of Marcus: Collector booklet with curated stories from Marcus's time.",
    "price": 44.44,
    "image": "/product-images/prod-76.jpg",
    "timePeriod": "highEmpire"
  },
  {
    "id": "prod-226",
    "title": "Coins of Septimius Severus",
    "emperor": "septimiusSeverus",
    "description": "Coins of Septimius Severus: Reproduction coin set themed around Septimius Severus.",
    "price": 119.74,
    "image": "/product-images/prod-77.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-227",
    "title": "Busts of Septimius Severus",
    "emperor": "septimiusSeverus",
    "description": "Busts of Septimius Severus: Museum-style bust honoring Septimius Severus.",
    "price": 83.01,
    "image": "/product-images/prod-78.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-228",
    "title": "Reliefs of Septimius Severus",
    "emperor": "septimiusSeverus",
    "description": "Reliefs of Septimius Severus: Wall relief artwork featuring symbols of Septimius Severus's era.",
    "price": 216.97,
    "image": "/product-images/prod-79.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-229",
    "title": "Seals of Septimius Severus",
    "emperor": "septimiusSeverus",
    "description": "Seals of Septimius Severus: Replica seal set inspired by motifs tied to Septimius Severus.",
    "price": 146.65,
    "image": "/product-images/prod-8.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-230",
    "title": "Scrolls of Septimius Severus",
    "emperor": "septimiusSeverus",
    "description": "Scrolls of Septimius Severus: Decorative scroll print recounting a key moment of Septimius Severus.",
    "price": 229.79,
    "image": "/product-images/prod-80.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-231",
    "title": "Standards of Septimius Severus",
    "emperor": "septimiusSeverus",
    "description": "Standards of Septimius Severus: Banner print styled after forces allied with Septimius Severus.",
    "price": 71.5,
    "image": "/product-images/prod-81.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-232",
    "title": "Mosaics of Septimius Severus",
    "emperor": "septimiusSeverus",
    "description": "Mosaics of Septimius Severus: Mosaic-style art panel inspired by Septimius Severus's period.",
    "price": 40.48,
    "image": "/product-images/prod-82.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-233",
    "title": "Cameos of Septimius Severus",
    "emperor": "septimiusSeverus",
    "description": "Cameos of Septimius Severus: Cameo medallion honoring Septimius Severus.",
    "price": 68.15,
    "image": "/product-images/prod-83.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-234",
    "title": "Maps of Septimius Severus",
    "emperor": "septimiusSeverus",
    "description": "Maps of Septimius Severus: Cartographic print highlighting campaigns of Septimius Severus.",
    "price": 74.73,
    "image": "/product-images/prod-84.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-235",
    "title": "Chronicles of Septimius Severus",
    "emperor": "septimiusSeverus",
    "description": "Chronicles of Septimius Severus: Collector booklet with curated stories from Septimius Severus's time.",
    "price": 139.07,
    "image": "/product-images/prod-85.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-236",
    "title": "Coins of Aurelian",
    "emperor": "aurelian",
    "description": "Coins of Aurelian: Reproduction coin set themed around Aurelian.",
    "price": 290.6,
    "image": "/product-images/prod-86.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-237",
    "title": "Busts of Aurelian",
    "emperor": "aurelian",
    "description": "Busts of Aurelian: Museum-style bust honoring Aurelian.",
    "price": 94.45,
    "image": "/product-images/prod-87.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-238",
    "title": "Reliefs of Aurelian",
    "emperor": "aurelian",
    "description": "Reliefs of Aurelian: Wall relief artwork featuring symbols of Aurelian's era.",
    "price": 177.29,
    "image": "/product-images/prod-88.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-239",
    "title": "Seals of Aurelian",
    "emperor": "aurelian",
    "description": "Seals of Aurelian: Replica seal set inspired by motifs tied to Aurelian.",
    "price": 166.61,
    "image": "/product-images/prod-89.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-240",
    "title": "Scrolls of Aurelian",
    "emperor": "aurelian",
    "description": "Scrolls of Aurelian: Decorative scroll print recounting a key moment of Aurelian.",
    "price": 138.54,
    "image": "/product-images/prod-9.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-241",
    "title": "Standards of Aurelian",
    "emperor": "aurelian",
    "description": "Standards of Aurelian: Banner print styled after forces allied with Aurelian.",
    "price": 211.79,
    "image": "/product-images/prod-90.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-242",
    "title": "Mosaics of Aurelian",
    "emperor": "aurelian",
    "description": "Mosaics of Aurelian: Mosaic-style art panel inspired by Aurelian's period.",
    "price": 125.53,
    "image": "/product-images/prod-91.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-243",
    "title": "Cameos of Aurelian",
    "emperor": "aurelian",
    "description": "Cameos of Aurelian: Cameo medallion honoring Aurelian.",
    "price": 248.4,
    "image": "/product-images/prod-92.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-244",
    "title": "Maps of Aurelian",
    "emperor": "aurelian",
    "description": "Maps of Aurelian: Cartographic print highlighting campaigns of Aurelian.",
    "price": 209.29,
    "image": "/product-images/prod-93.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-245",
    "title": "Chronicles of Aurelian",
    "emperor": "aurelian",
    "description": "Chronicles of Aurelian: Collector booklet with curated stories from Aurelian's time.",
    "price": 100.77,
    "image": "/product-images/prod-94.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-246",
    "title": "Coins of Diocletian",
    "emperor": "diocletian",
    "description": "Coins of Diocletian: Reproduction coin set themed around Diocletian.",
    "price": 247.12,
    "image": "/product-images/prod-95.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-247",
    "title": "Busts of Diocletian",
    "emperor": "diocletian",
    "description": "Busts of Diocletian: Museum-style bust honoring Diocletian.",
    "price": 144.24,
    "image": "/product-images/prod-96.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-248",
    "title": "Reliefs of Diocletian",
    "emperor": "diocletian",
    "description": "Reliefs of Diocletian: Wall relief artwork featuring symbols of Diocletian's era.",
    "price": 33.93,
    "image": "/product-images/prod-97.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-249",
    "title": "Seals of Diocletian",
    "emperor": "diocletian",
    "description": "Seals of Diocletian: Replica seal set inspired by motifs tied to Diocletian.",
    "price": 232.19,
    "image": "/product-images/prod-98.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-250",
    "title": "Scrolls of Diocletian",
    "emperor": "diocletian",
    "description": "Scrolls of Diocletian: Decorative scroll print recounting a key moment of Diocletian.",
    "price": 56.11,
    "image": "/product-images/prod-99.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-251",
    "title": "Standards of Diocletian",
    "emperor": "diocletian",
    "description": "Standards of Diocletian: Banner print styled after forces allied with Diocletian.",
    "price": 126.57,
    "image": "/product-images/prod-1.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-252",
    "title": "Mosaics of Diocletian",
    "emperor": "diocletian",
    "description": "Mosaics of Diocletian: Mosaic-style art panel inspired by Diocletian's period.",
    "price": 67.57,
    "image": "/product-images/prod-10.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-253",
    "title": "Cameos of Diocletian",
    "emperor": "diocletian",
    "description": "Cameos of Diocletian: Cameo medallion honoring Diocletian.",
    "price": 131.51,
    "image": "/product-images/prod-100.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-254",
    "title": "Maps of Diocletian",
    "emperor": "diocletian",
    "description": "Maps of Diocletian: Cartographic print highlighting campaigns of Diocletian.",
    "price": 227.28,
    "image": "/product-images/prod-101.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-255",
    "title": "Chronicles of Diocletian",
    "emperor": "diocletian",
    "description": "Chronicles of Diocletian: Collector booklet with curated stories from Diocletian's time.",
    "price": 80.77,
    "image": "/product-images/prod-102.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-256",
    "title": "Coins of Constantine",
    "emperor": "constantine",
    "description": "Coins of Constantine: Reproduction coin set themed around Constantine.",
    "price": 257.24,
    "image": "/product-images/prod-103.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-257",
    "title": "Busts of Constantine",
    "emperor": "constantine",
    "description": "Busts of Constantine: Museum-style bust honoring Constantine.",
    "price": 153.0,
    "image": "/product-images/prod-104.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-258",
    "title": "Reliefs of Constantine",
    "emperor": "constantine",
    "description": "Reliefs of Constantine: Wall relief artwork featuring symbols of Constantine's era.",
    "price": 130.22,
    "image": "/product-images/prod-105.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-259",
    "title": "Seals of Constantine",
    "emperor": "constantine",
    "description": "Seals of Constantine: Replica seal set inspired by motifs tied to Constantine.",
    "price": 227.34,
    "image": "/product-images/prod-106.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-260",
    "title": "Scrolls of Constantine",
    "emperor": "constantine",
    "description": "Scrolls of Constantine: Decorative scroll print recounting a key moment of Constantine.",
    "price": 270.1,
    "image": "/product-images/prod-107.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-261",
    "title": "Standards of Constantine",
    "emperor": "constantine",
    "description": "Standards of Constantine: Banner print styled after forces allied with Constantine.",
    "price": 256.76,
    "image": "/product-images/prod-108.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-262",
    "title": "Mosaics of Constantine",
    "emperor": "constantine",
    "description": "Mosaics of Constantine: Mosaic-style art panel inspired by Constantine's period.",
    "price": 15.11,
    "image": "/product-images/prod-109.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-263",
    "title": "Cameos of Constantine",
    "emperor": "constantine",
    "description": "Cameos of Constantine: Cameo medallion honoring Constantine.",
    "price": 142.63,
    "image": "/product-images/prod-11.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-264",
    "title": "Maps of Constantine",
    "emperor": "constantine",
    "description": "Maps of Constantine: Cartographic print highlighting campaigns of Constantine.",
    "price": 248.11,
    "image": "/product-images/prod-110.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-265",
    "title": "Chronicles of Constantine",
    "emperor": "constantine",
    "description": "Chronicles of Constantine: Collector booklet with curated stories from Constantine's time.",
    "price": 107.8,
    "image": "/product-images/prod-111.jpg",
    "timePeriod": "lateEmpire"
  },
  {
    "id": "prod-266",
    "title": "Coins of Theodosius I",
    "emperor": "theodosius",
    "description": "Coins of Theodosius I: Reproduction coin set themed around Theodosius I.",
    "price": 255.3,
    "image": "/product-images/prod-112.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-267",
    "title": "Busts of Theodosius I",
    "emperor": "theodosius",
    "description": "Busts of Theodosius I: Museum-style bust honoring Theodosius I.",
    "price": 64.11,
    "image": "/product-images/prod-113.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-268",
    "title": "Reliefs of Theodosius I",
    "emperor": "theodosius",
    "description": "Reliefs of Theodosius I: Wall relief artwork featuring symbols of Theodosius I's era.",
    "price": 102.85,
    "image": "/product-images/prod-114.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-269",
    "title": "Seals of Theodosius I",
    "emperor": "theodosius",
    "description": "Seals of Theodosius I: Replica seal set inspired by motifs tied to Theodosius I.",
    "price": 273.45,
    "image": "/product-images/prod-115.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-270",
    "title": "Scrolls of Theodosius I",
    "emperor": "theodosius",
    "description": "Scrolls of Theodosius I: Decorative scroll print recounting a key moment of Theodosius I.",
    "price": 61.3,
    "image": "/product-images/prod-116.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-271",
    "title": "Standards of Theodosius I",
    "emperor": "theodosius",
    "description": "Standards of Theodosius I: Banner print styled after forces allied with Theodosius I.",
    "price": 184.61,
    "image": "/product-images/prod-117.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-272",
    "title": "Mosaics of Theodosius I",
    "emperor": "theodosius",
    "description": "Mosaics of Theodosius I: Mosaic-style art panel inspired by Theodosius I's period.",
    "price": 20.96,
    "image": "/product-images/prod-118.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-273",
    "title": "Cameos of Theodosius I",
    "emperor": "theodosius",
    "description": "Cameos of Theodosius I: Cameo medallion honoring Theodosius I.",
    "price": 15.16,
    "image": "/product-images/prod-119.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-274",
    "title": "Maps of Theodosius I",
    "emperor": "theodosius",
    "description": "Maps of Theodosius I: Cartographic print highlighting campaigns of Theodosius I.",
    "price": 266.21,
    "image": "/product-images/prod-12.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-275",
    "title": "Chronicles of Theodosius I",
    "emperor": "theodosius",
    "description": "Chronicles of Theodosius I: Collector booklet with curated stories from Theodosius I's time.",
    "price": 105.4,
    "image": "/product-images/prod-120.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-276",
    "title": "Coins of Honorius",
    "emperor": "honorius",
    "description": "Coins of Honorius: Reproduction coin set themed around Honorius.",
    "price": 150.29,
    "image": "/product-images/prod-121.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-277",
    "title": "Busts of Honorius",
    "emperor": "honorius",
    "description": "Busts of Honorius: Museum-style bust honoring Honorius.",
    "price": 134.83,
    "image": "/product-images/prod-122.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-278",
    "title": "Reliefs of Honorius",
    "emperor": "honorius",
    "description": "Reliefs of Honorius: Wall relief artwork featuring symbols of Honorius's era.",
    "price": 87.44,
    "image": "/product-images/prod-123.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-279",
    "title": "Seals of Honorius",
    "emperor": "honorius",
    "description": "Seals of Honorius: Replica seal set inspired by motifs tied to Honorius.",
    "price": 222.61,
    "image": "/product-images/prod-124.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-280",
    "title": "Scrolls of Honorius",
    "emperor": "honorius",
    "description": "Scrolls of Honorius: Decorative scroll print recounting a key moment of Honorius.",
    "price": 276.22,
    "image": "/product-images/prod-125.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-281",
    "title": "Standards of Honorius",
    "emperor": "honorius",
    "description": "Standards of Honorius: Banner print styled after forces allied with Honorius.",
    "price": 245.67,
    "image": "/product-images/prod-13.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-282",
    "title": "Mosaics of Honorius",
    "emperor": "honorius",
    "description": "Mosaics of Honorius: Mosaic-style art panel inspired by Honorius's period.",
    "price": 164.3,
    "image": "/product-images/prod-14.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-283",
    "title": "Cameos of Honorius",
    "emperor": "honorius",
    "description": "Cameos of Honorius: Cameo medallion honoring Honorius.",
    "price": 25.13,
    "image": "/product-images/prod-15.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-284",
    "title": "Maps of Honorius",
    "emperor": "honorius",
    "description": "Maps of Honorius: Cartographic print highlighting campaigns of Honorius.",
    "price": 69.53,
    "image": "/product-images/prod-16.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-285",
    "title": "Chronicles of Honorius",
    "emperor": "honorius",
    "description": "Chronicles of Honorius: Collector booklet with curated stories from Honorius's time.",
    "price": 98.03,
    "image": "/product-images/prod-17.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-286",
    "title": "Coins of Stilicho",
    "emperor": "stilicho",
    "description": "Coins of Stilicho: Reproduction coin set themed around Stilicho.",
    "price": 179.72,
    "image": "/product-images/prod-18.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-287",
    "title": "Busts of Stilicho",
    "emperor": "stilicho",
    "description": "Busts of Stilicho: Museum-style bust honoring Stilicho.",
    "price": 16.42,
    "image": "/product-images/prod-19.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-288",
    "title": "Reliefs of Stilicho",
    "emperor": "stilicho",
    "description": "Reliefs of Stilicho: Wall relief artwork featuring symbols of Stilicho's era.",
    "price": 224.18,
    "image": "/product-images/prod-2.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-289",
    "title": "Seals of Stilicho",
    "emperor": "stilicho",
    "description": "Seals of Stilicho: Replica seal set inspired by motifs tied to Stilicho.",
    "price": 34.32,
    "image": "/product-images/prod-20.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-290",
    "title": "Scrolls of Stilicho",
    "emperor": "stilicho",
    "description": "Scrolls of Stilicho: Decorative scroll print recounting a key moment of Stilicho.",
    "price": 41.77,
    "image": "/product-images/prod-21.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-291",
    "title": "Standards of Stilicho",
    "emperor": "stilicho",
    "description": "Standards of Stilicho: Banner print styled after forces allied with Stilicho.",
    "price": 255.44,
    "image": "/product-images/prod-22.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-292",
    "title": "Mosaics of Stilicho",
    "emperor": "stilicho",
    "description": "Mosaics of Stilicho: Mosaic-style art panel inspired by Stilicho's period.",
    "price": 87.06,
    "image": "/product-images/prod-23.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-293",
    "title": "Cameos of Stilicho",
    "emperor": "stilicho",
    "description": "Cameos of Stilicho: Cameo medallion honoring Stilicho.",
    "price": 201.59,
    "image": "/product-images/prod-24.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-294",
    "title": "Maps of Stilicho",
    "emperor": "stilicho",
    "description": "Maps of Stilicho: Cartographic print highlighting campaigns of Stilicho.",
    "price": 139.94,
    "image": "/product-images/prod-25.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-295",
    "title": "Chronicles of Stilicho",
    "emperor": "stilicho",
    "description": "Chronicles of Stilicho: Collector booklet with curated stories from Stilicho's time.",
    "price": 213.37,
    "image": "/product-images/prod-26.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-296",
    "title": "Coins of Aetius",
    "emperor": "aetius",
    "description": "Coins of Aetius: Reproduction coin set themed around Aetius.",
    "price": 30.61,
    "image": "/product-images/prod-27.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-297",
    "title": "Busts of Aetius",
    "emperor": "aetius",
    "description": "Busts of Aetius: Museum-style bust honoring Aetius.",
    "price": 138.68,
    "image": "/product-images/prod-28.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-298",
    "title": "Reliefs of Aetius",
    "emperor": "aetius",
    "description": "Reliefs of Aetius: Wall relief artwork featuring symbols of Aetius's era.",
    "price": 115.01,
    "image": "/product-images/prod-29.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-299",
    "title": "Seals of Aetius",
    "emperor": "aetius",
    "description": "Seals of Aetius: Replica seal set inspired by motifs tied to Aetius.",
    "price": 172.62,
    "image": "/product-images/prod-3.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-300",
    "title": "Scrolls of Aetius",
    "emperor": "aetius",
    "description": "Scrolls of Aetius: Decorative scroll print recounting a key moment of Aetius.",
    "price": 283.85,
    "image": "/product-images/prod-30.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-301",
    "title": "Standards of Aetius",
    "emperor": "aetius",
    "description": "Standards of Aetius: Banner print styled after forces allied with Aetius.",
    "price": 33.15,
    "image": "/product-images/prod-31.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-302",
    "title": "Mosaics of Aetius",
    "emperor": "aetius",
    "description": "Mosaics of Aetius: Mosaic-style art panel inspired by Aetius's period.",
    "price": 149.02,
    "image": "/product-images/prod-32.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-303",
    "title": "Cameos of Aetius",
    "emperor": "aetius",
    "description": "Cameos of Aetius: Cameo medallion honoring Aetius.",
    "price": 80.24,
    "image": "/product-images/prod-33.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-304",
    "title": "Maps of Aetius",
    "emperor": "aetius",
    "description": "Maps of Aetius: Cartographic print highlighting campaigns of Aetius.",
    "price": 97.67,
    "image": "/product-images/prod-34.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-305",
    "title": "Chronicles of Aetius",
    "emperor": "aetius",
    "description": "Chronicles of Aetius: Collector booklet with curated stories from Aetius's time.",
    "price": 50.84,
    "image": "/product-images/prod-35.jpg",
    "timePeriod": "lateAntiquity"
  },
  {
    "id": "prod-306",
    "title": "Coins of Justinian I",
    "emperor": "justinian",
    "description": "Coins of Justinian I: Reproduction coin set themed around Justinian I.",
    "price": 46.27,
    "image": "/product-images/prod-36.jpg",
    "timePeriod": "earlyByzantine"
  },
  {
    "id": "prod-307",
    "title": "Busts of Justinian I",
    "emperor": "justinian",
    "description": "Busts of Justinian I: Museum-style bust honoring Justinian I.",
    "price": 281.52,
    "image": "/product-images/prod-37.jpg",
    "timePeriod": "earlyByzantine"
  },
  {
    "id": "prod-308",
    "title": "Reliefs of Justinian I",
    "emperor": "justinian",
    "description": "Reliefs of Justinian I: Wall relief artwork featuring symbols of Justinian I's era.",
    "price": 209.64,
    "image": "/product-images/prod-38.jpg",
    "timePeriod": "earlyByzantine"
  },
  {
    "id": "prod-309",
    "title": "Seals of Justinian I",
    "emperor": "justinian",
    "description": "Seals of Justinian I: Replica seal set inspired by motifs tied to Justinian I.",
    "price": 115.9,
    "image": "/product-images/prod-39.jpg",
    "timePeriod": "earlyByzantine"
  },
  {
    "id": "prod-310",
    "title": "Scrolls of Justinian I",
    "emperor": "justinian",
    "description": "Scrolls of Justinian I: Decorative scroll print recounting a key moment of Justinian I.",
    "price": 24.28,
    "image": "/product-images/prod-4.jpg",
    "timePeriod": "earlyByzantine"
  },
  {
    "id": "prod-311",
    "title": "Standards of Justinian I",
    "emperor": "justinian",
    "description": "Standards of Justinian I: Banner print styled after forces allied with Justinian I.",
    "price": 25.96,
    "image": "/product-images/prod-40.jpg",
    "timePeriod": "earlyByzantine"
  },
  {
    "id": "prod-312",
    "title": "Mosaics of Justinian I",
    "emperor": "justinian",
    "description": "Mosaics of Justinian I: Mosaic-style art panel inspired by Justinian I's period.",
    "price": 215.12,
    "image": "/product-images/prod-41.jpg",
    "timePeriod": "earlyByzantine"
  },
  {
    "id": "prod-313",
    "title": "Cameos of Justinian I",
    "emperor": "justinian",
    "description": "Cameos of Justinian I: Cameo medallion honoring Justinian I.",
    "price": 185.98,
    "image": "/product-images/prod-42.jpg",
    "timePeriod": "earlyByzantine"
  },
  {
    "id": "prod-314",
    "title": "Maps of Justinian I",
    "emperor": "justinian",
    "description": "Maps of Justinian I: Cartographic print highlighting campaigns of Justinian I.",
    "price": 86.79,
    "image": "/product-images/prod-43.jpg",
    "timePeriod": "earlyByzantine"
  },
  {
    "id": "prod-315",
    "title": "Chronicles of Justinian I",
    "emperor": "justinian",
    "description": "Chronicles of Justinian I: Collector booklet with curated stories from Justinian I's time.",
    "price": 169.65,
    "image": "/product-images/prod-44.jpg",
    "timePeriod": "earlyByzantine"
  },
  {
    "id": "prod-316",
    "title": "Coins of Belisarius",
    "emperor": "belisarius",
    "description": "Coins of Belisarius: Reproduction coin set themed around Belisarius.",
    "price": 280.49,
    "image": "/product-images/prod-45.jpg",
    "timePeriod": "earlyByzantine"
  },
  {
    "id": "prod-317",
    "title": "Busts of Belisarius",
    "emperor": "belisarius",
    "description": "Busts of Belisarius: Museum-style bust honoring Belisarius.",
    "price": 40.19,
    "image": "/product-images/prod-46.jpg",
    "timePeriod": "earlyByzantine"
  },
  {
    "id": "prod-318",
    "title": "Reliefs of Belisarius",
    "emperor": "belisarius",
    "description": "Reliefs of Belisarius: Wall relief artwork featuring symbols of Belisarius's era.",
    "price": 29.4,
    "image": "/product-images/prod-47.jpg",
    "timePeriod": "earlyByzantine"
  },
  {
    "id": "prod-319",
    "title": "Seals of Belisarius",
    "emperor": "belisarius",
    "description": "Seals of Belisarius: Replica seal set inspired by motifs tied to Belisarius.",
    "price": 18.3,
    "image": "/product-images/prod-48.jpg",
    "timePeriod": "earlyByzantine"
  },
  {
    "id": "prod-320",
    "title": "Scrolls of Belisarius",
    "emperor": "belisarius",
    "description": "Scrolls of Belisarius: Decorative scroll print recounting a key moment of Belisarius.",
    "price": 179.39,
    "image": "/product-images/prod-49.jpg",
    "timePeriod": "earlyByzantine"
  },
  {
    "id": "prod-321",
    "title": "Standards of Belisarius",
    "emperor": "belisarius",
    "description": "Standards of Belisarius: Banner print styled after forces allied with Belisarius.",
    "price": 27.04,
    "image": "/product-images/prod-5.jpg",
    "timePeriod": "earlyByzantine"
  },
  {
    "id": "prod-322",
    "title": "Mosaics of Belisarius",
    "emperor": "belisarius",
    "description": "Mosaics of Belisarius: Mosaic-style art panel inspired by Belisarius's period.",
    "price": 111.46,
    "image": "/product-images/prod-50.jpg",
    "timePeriod": "earlyByzantine"
  },
  {
    "id": "prod-323",
    "title": "Cameos of Belisarius",
    "emperor": "belisarius",
    "description": "Cameos of Belisarius: Cameo medallion honoring Belisarius.",
    "price": 20.43,
    "image": "/product-images/prod-51.jpg",
    "timePeriod": "earlyByzantine"
  },
  {
    "id": "prod-324",
    "title": "Maps of Belisarius",
    "emperor": "belisarius",
    "description": "Maps of Belisarius: Cartographic print highlighting campaigns of Belisarius.",
    "price": 169.08,
    "image": "/product-images/prod-52.jpg",
    "timePeriod": "earlyByzantine"
  },
  {
    "id": "prod-325",
    "title": "Chronicles of Belisarius",
    "emperor": "belisarius",
    "description": "Chronicles of Belisarius: Collector booklet with curated stories from Belisarius's time.",
    "price": 53.54,
    "image": "/product-images/prod-53.jpg",
    "timePeriod": "earlyByzantine"
  },
  {
    "id": "prod-326",
    "title": "Coins of Heraclius",
    "emperor": "heraclius",
    "description": "Coins of Heraclius: Reproduction coin set themed around Heraclius.",
    "price": 203.97,
    "image": "/product-images/prod-54.jpg",
    "timePeriod": "earlyByzantine"
  },
  {
    "id": "prod-327",
    "title": "Busts of Heraclius",
    "emperor": "heraclius",
    "description": "Busts of Heraclius: Museum-style bust honoring Heraclius.",
    "price": 65.34,
    "image": "/product-images/prod-55.jpg",
    "timePeriod": "earlyByzantine"
  },
  {
    "id": "prod-328",
    "title": "Reliefs of Heraclius",
    "emperor": "heraclius",
    "description": "Reliefs of Heraclius: Wall relief artwork featuring symbols of Heraclius's era.",
    "price": 136.17,
    "image": "/product-images/prod-56.jpg",
    "timePeriod": "earlyByzantine"
  },
  {
    "id": "prod-329",
    "title": "Seals of Heraclius",
    "emperor": "heraclius",
    "description": "Seals of Heraclius: Replica seal set inspired by motifs tied to Heraclius.",
    "price": 248.19,
    "image": "/product-images/prod-57.jpg",
    "timePeriod": "earlyByzantine"
  },
  {
    "id": "prod-330",
    "title": "Scrolls of Heraclius",
    "emperor": "heraclius",
    "description": "Scrolls of Heraclius: Decorative scroll print recounting a key moment of Heraclius.",
    "price": 23.95,
    "image": "/product-images/prod-58.jpg",
    "timePeriod": "earlyByzantine"
  },
  {
    "id": "prod-331",
    "title": "Standards of Heraclius",
    "emperor": "heraclius",
    "description": "Standards of Heraclius: Banner print styled after forces allied with Heraclius.",
    "price": 78.99,
    "image": "/product-images/prod-59.jpg",
    "timePeriod": "earlyByzantine"
  },
  {
    "id": "prod-332",
    "title": "Mosaics of Heraclius",
    "emperor": "heraclius",
    "description": "Mosaics of Heraclius: Mosaic-style art panel inspired by Heraclius's period.",
    "price": 103.85,
    "image": "/product-images/prod-6.jpg",
    "timePeriod": "earlyByzantine"
  },
  {
    "id": "prod-333",
    "title": "Cameos of Heraclius",
    "emperor": "heraclius",
    "description": "Cameos of Heraclius: Cameo medallion honoring Heraclius.",
    "price": 211.22,
    "image": "/product-images/prod-60.jpg",
    "timePeriod": "earlyByzantine"
  },
  {
    "id": "prod-334",
    "title": "Maps of Heraclius",
    "emperor": "heraclius",
    "description": "Maps of Heraclius: Cartographic print highlighting campaigns of Heraclius.",
    "price": 286.59,
    "image": "/product-images/prod-61.jpg",
    "timePeriod": "earlyByzantine"
  },
  {
    "id": "prod-335",
    "title": "Chronicles of Heraclius",
    "emperor": "heraclius",
    "description": "Chronicles of Heraclius: Collector booklet with curated stories from Heraclius's time.",
    "price": 118.6,
    "image": "/product-images/prod-62.jpg",
    "timePeriod": "earlyByzantine"
  },
  {
    "id": "prod-336",
    "title": "Coins of Irene",
    "emperor": "irene",
    "description": "Coins of Irene: Reproduction coin set themed around Irene.",
    "price": 269.83,
    "image": "/product-images/prod-63.jpg",
    "timePeriod": "earlyByzantine"
  },
  {
    "id": "prod-337",
    "title": "Busts of Irene",
    "emperor": "irene",
    "description": "Busts of Irene: Museum-style bust honoring Irene.",
    "price": 62.06,
    "image": "/product-images/prod-64.jpg",
    "timePeriod": "earlyByzantine"
  },
  {
    "id": "prod-338",
    "title": "Reliefs of Irene",
    "emperor": "irene",
    "description": "Reliefs of Irene: Wall relief artwork featuring symbols of Irene's era.",
    "price": 87.44,
    "image": "/product-images/prod-65.jpg",
    "timePeriod": "earlyByzantine"
  },
  {
    "id": "prod-339",
    "title": "Seals of Irene",
    "emperor": "irene",
    "description": "Seals of Irene: Replica seal set inspired by motifs tied to Irene.",
    "price": 172.24,
    "image": "/product-images/prod-66.jpg",
    "timePeriod": "earlyByzantine"
  },
  {
    "id": "prod-340",
    "title": "Scrolls of Irene",
    "emperor": "irene",
    "description": "Scrolls of Irene: Decorative scroll print recounting a key moment of Irene.",
    "price": 44.06,
    "image": "/product-images/prod-67.jpg",
    "timePeriod": "earlyByzantine"
  },
  {
    "id": "prod-341",
    "title": "Standards of Irene",
    "emperor": "irene",
    "description": "Standards of Irene: Banner print styled after forces allied with Irene.",
    "price": 102.87,
    "image": "/product-images/prod-68.jpg",
    "timePeriod": "earlyByzantine"
  },
  {
    "id": "prod-342",
    "title": "Mosaics of Irene",
    "emperor": "irene",
    "description": "Mosaics of Irene: Mosaic-style art panel inspired by Irene's period.",
    "price": 14.51,
    "image": "/product-images/prod-69.jpg",
    "timePeriod": "earlyByzantine"
  },
  {
    "id": "prod-343",
    "title": "Cameos of Irene",
    "emperor": "irene",
    "description": "Cameos of Irene: Cameo medallion honoring Irene.",
    "price": 175.54,
    "image": "/product-images/prod-7.jpg",
    "timePeriod": "earlyByzantine"
  },
  {
    "id": "prod-344",
    "title": "Maps of Irene",
    "emperor": "irene",
    "description": "Maps of Irene: Cartographic print highlighting campaigns of Irene.",
    "price": 48.07,
    "image": "/product-images/prod-70.jpg",
    "timePeriod": "earlyByzantine"
  },
  {
    "id": "prod-345",
    "title": "Chronicles of Irene",
    "emperor": "irene",
    "description": "Chronicles of Irene: Collector booklet with curated stories from Irene's time.",
    "price": 221.65,
    "image": "/product-images/prod-71.jpg",
    "timePeriod": "earlyByzantine"
  }
];
export default products;
