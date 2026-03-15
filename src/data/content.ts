// News Data
export const newsData = [
  {
    id: 1,
    title: 'MedCanG-Reform: Was Patienten wissen müssen',
    excerpt: 'Die geplante Reform verbietet Telemedizin und Versand. Erfahre, was das für Cannabis-Patienten bedeutet.',
    category: 'Gesetze',
    date: '15.03.2026',
    href: '/recht/medcang-reform-2026',
    featured: true,
  },
  {
    id: 2,
    title: 'Cannabis-Gesetz 2026: Alle Änderungen im Überblick',
    excerpt: 'Das neue Cannabis-Gesetz bringt wichtige Änderungen für Konsumenten, Patienten und Anbauer.',
    category: 'Gesetze',
    date: '12.03.2026',
    href: '/recht/cannabis-gesetz-2026',
    featured: true,
  },
  {
    id: 3,
    title: 'Neue CSC in Deutschland: März 2026',
    excerpt: 'Über 50 neue Cannabis Social Clubs wurden diesen Monat gegründet. Hier findest du die Übersicht.',
    category: 'CSC',
    date: '10.03.2026',
    href: '/cannabis-clubs/verzeichnis',
    featured: false,
  },
];

// Quick Links Data
export const quickLinksData = [
  {
    id: 1,
    title: 'Recht & Gesetze',
    description: 'Aktuelle Gesetze, MedCanG-Reform und alle rechtlichen Grundlagen',
    icon: 'Scale',
    href: '/recht',
    color: 'bg-blue-500',
  },
  {
    id: 2,
    title: 'Anbau Guides',
    description: 'Schritt-für-Schritt Anleitungen für Anfänger und Fortgeschrittene',
    icon: 'Sprout',
    href: '/anbau',
    color: 'bg-green-500',
  },
  {
    id: 3,
    title: 'Cannabis-Clubs',
    description: 'CSC finden, gründen oder Mitglied werden – alles was du wissen musst',
    icon: 'Users',
    href: '/cannabis-clubs',
    color: 'bg-purple-500',
  },
  {
    id: 4,
    title: 'Medizinisch',
    description: 'Rezept bekommen, Ärzte finden und Kosten verstehen',
    icon: 'Stethoscope',
    href: '/medizinisch',
    color: 'bg-amber-500',
  },
];

// Popular Articles Data
export const popularArticlesData = [
  {
    id: 1,
    title: 'Cannabis anbauen für Anfänger',
    excerpt: 'Der komplette Guide für deinen ersten legalen Anbau in Deutschland.',
    category: 'Anbau',
    readTime: '15 Min.',
    href: '/anbau/anleitung-anfaenger',
  },
  {
    id: 2,
    title: 'Wie viele Pflanzen sind erlaubt?',
    excerpt: 'Alles zu Besitzlimits, Eigenanbau und den rechtlichen Grenzen.',
    category: 'Recht',
    readTime: '8 Min.',
    href: '/recht/besitzlimits',
  },
  {
    id: 3,
    title: 'CSC gründen: Schritt-für-Schritt',
    excerpt: 'Die komplette Anleitung zur Gründung eines Cannabis Social Clubs.',
    category: 'CSC',
    readTime: '20 Min.',
    href: '/cannabis-clubs/gruendungs-guide',
  },
];

// Legal Categories Data
export const legalCategoriesData = [
  {
    id: 1,
    title: 'Aktuelle Gesetze',
    items: [
      { name: 'Cannabis-Gesetz 2026 (KCanG)', href: '/recht/cannabis-gesetz-2026' },
      { name: 'MedCanG-Reform: Was sich ändert', href: '/recht/medcang-reform-2026' },
      { name: 'Bundesländer-Übersicht', href: '/recht/bundeslaender' },
    ],
  },
  {
    id: 2,
    title: 'Privater Konsum',
    items: [
      { name: 'Besitzlimits: 25g/50g', href: '/recht/besitzlimits' },
      { name: 'Eigenanbau: 3 Pflanzen', href: '/recht/eigenanbau' },
      { name: 'Strafen bei Überschreitung', href: '/recht/strafen' },
    ],
  },
  {
    id: 3,
    title: 'Öffentlichkeit & Arbeit',
    items: [
      { name: 'THC-Grenzwert beim Autofahren', href: '/recht/autofahren-thc' },
      { name: 'Cannabis am Arbeitsplatz', href: '/recht/arbeitsplatz' },
      { name: 'Kündigung wegen Cannabis?', href: '/recht/kuendigung' },
    ],
  },
  {
    id: 4,
    title: 'Wohnen & Miete',
    items: [
      { name: 'Cannabis im Mietvertrag', href: '/recht/mietvertrag' },
      { name: 'Anbau in der Wohnung', href: '/recht/anbau-wohnung' },
      { name: 'Geruchsbeeinträchtigung', href: '/recht/geruch' },
    ],
  },
];

// Anbau Categories Data
export const anbauCategoriesData = [
  {
    id: 1,
    title: 'Für Anfänger',
    icon: 'Sprout',
    items: [
      { name: 'Schritt-für-Schritt Anleitung', href: '/anbau/anleitung-anfaenger' },
      { name: 'Kosten des Eigenanbaus', href: '/anbau/kosten' },
      { name: 'Häufige Anfängerfehler', href: '/anbau/anfaengerfehler' },
    ],
  },
  {
    id: 2,
    title: 'Indoor-Anbau',
    icon: 'Home',
    items: [
      { name: 'Growbox einrichten', href: '/anbau/growbox' },
      { name: 'LED-Lampen Vergleich', href: '/produkte/grow-equipment/led-lampen' },
      { name: 'Belüftung & Klima', href: '/anbau/belueftung' },
      { name: 'Erde & Dünger', href: '/anbau/erde-duenger' },
    ],
  },
  {
    id: 3,
    title: 'Outdoor-Anbau',
    icon: 'Sun',
    items: [
      { name: 'Standort wählen', href: '/anbau/standort' },
      { name: 'Aussaat & Anzucht', href: '/anbau/aussaat' },
      { name: 'Schädlinge bekämpfen', href: '/anbau/schaedlinge' },
      { name: 'Überwintern', href: '/anbau/ueberwintern' },
    ],
  },
  {
    id: 4,
    title: 'Sorten & Samen',
    icon: 'Leaf',
    items: [
      { name: 'Beste Sorten für Anfänger', href: '/anbau/sorten-anfaenger' },
      { name: 'Autoflowering vs. Photoperiode', href: '/anbau/autoflowering' },
      { name: 'Feminisierte Samen', href: '/produkte/samen/feminisierte' },
      { name: 'CBD-Sorten', href: '/anbau/cbd-sorten' },
    ],
  },
  {
    id: 5,
    title: 'Ernte & Nachbehandlung',
    icon: 'Scissors',
    items: [
      { name: 'Erntezeitpunkt erkennen', href: '/anbau/erntezeitpunkt' },
      { name: 'Trocknen & Curen', href: '/anbau/trocknen-curen' },
      { name: 'Lagerung', href: '/anbau/lagerung' },
    ],
  },
];

// CSC Data
export const cscData = [
  {
    id: 1,
    title: 'Club gründen',
    icon: 'Building',
    items: [
      { name: 'Schritt-für-Schritt Anleitung', href: '/cannabis-clubs/gruendungs-guide' },
      { name: 'Satzung Muster (Download)', href: '/cannabis-clubs/satzung-muster' },
      { name: 'Kosten & Finanzierung', href: '/cannabis-clubs/kosten' },
      { name: 'Versicherungen', href: '/cannabis-clubs/versicherungen' },
    ],
  },
  {
    id: 2,
    title: 'Club finden',
    icon: 'MapPin',
    items: [
      { name: 'Verzeichnis nach Bundesland', href: '/cannabis-clubs/verzeichnis' },
      { name: 'Karte mit allen CSC', href: '/cannabis-clubs/karte' },
      { name: 'Bewertungen & Erfahrungen', href: '/cannabis-clubs/bewertungen' },
    ],
  },
  {
    id: 3,
    title: 'Mitglied werden',
    icon: 'UserPlus',
    items: [
      { name: 'Voraussetzungen', href: '/cannabis-clubs/voraussetzungen' },
      { name: 'Kosten & Abgabenmengen', href: '/cannabis-clubs/kosten-mitgliedschaft' },
      { name: 'Rechte & Pflichten', href: '/cannabis-clubs/rechte-pflichten' },
      { name: 'FAQ', href: '/cannabis-clubs/faq' },
    ],
  },
];

// Medizinisch Data
export const medizinischData = [
  {
    id: 1,
    title: 'Rezept bekommen',
    icon: 'FileText',
    items: [
      { name: 'Voraussetzungen', href: '/medizinisch/voraussetzungen' },
      { name: 'Ärzte finden (Verzeichnis)', href: '/medizinisch/aerzte-verzeichnis' },
      { name: 'Kosten & Krankenkasse', href: '/medizinisch/kosten-krankenkasse' },
    ],
  },
  {
    id: 2,
    title: 'Ärzte & Apotheken',
    icon: 'Stethoscope',
    items: [
      { name: 'Cannabis-Ärzte nach Bundesland', href: '/medizinisch/aerzte-verzeichnis' },
      { name: 'Apotheken mit Cannabis', href: '/medizinisch/apotheken-verzeichnis' },
      { name: 'Botendienste', href: '/medizinisch/botendienste' },
    ],
  },
  {
    id: 3,
    title: 'Anwendung',
    icon: 'Pill',
    items: [
      { name: 'Sorten & Wirkungen', href: '/medizinisch/sorten-wirkungen' },
      { name: 'Dosierung', href: '/medizinisch/dosierung' },
      { name: 'Nebenwirkungen', href: '/medizinisch/nebenwirkungen' },
    ],
  },
  {
    id: 4,
    title: 'Kosten',
    icon: 'Euro',
    items: [
      { name: 'Was zahlt die Krankenkasse?', href: '/medizinisch/krankenkasse' },
      { name: 'Zuzahlung berechnen', href: '/medizinisch/zuzahlung' },
      { name: 'Kostenhilfe beantragen', href: '/medizinisch/kostenhilfe' },
    ],
  },
];

// Products Data
export const productsData = [
  {
    id: 1,
    title: 'Samen',
    icon: 'Seedling',
    items: [
      { name: 'Beste Samenbanken 2026', href: '/produkte/samen/beste-samenbanken' },
      { name: 'Autoflowering-Sorten', href: '/produkte/samen/autoflowering' },
      { name: 'Feminisierte Samen', href: '/produkte/samen/feminisierte' },
    ],
  },
  {
    id: 2,
    title: 'Grow-Equipment',
    icon: 'Lightbulb',
    items: [
      { name: 'LED-Lampen Test', href: '/produkte/grow-equipment/led-lampen' },
      { name: 'Growbox Komplettsets', href: '/produkte/grow-equipment/growboxen' },
      { name: 'Belüftung & Duftfilter', href: '/produkte/grow-equipment/belueftung' },
    ],
  },
  {
    id: 3,
    title: 'Vaporizer',
    icon: 'Wind',
    items: [
      { name: 'Tragbare Vaporizer', href: '/produkte/vaporizer/tragbar' },
      { name: 'Stationäre Vaporizer', href: '/produkte/vaporizer/stationaer' },
    ],
  },
  {
    id: 4,
    title: 'CBD-Öl',
    icon: 'Droplet',
    items: [
      { name: 'CBD-Öl Test 2026', href: '/produkte/cbd-oel/test' },
      { name: 'Anwendung & Dosierung', href: '/produkte/cbd-oel/anwendung' },
    ],
  },
];

// Blog Categories
export const blogCategoriesData = [
  { id: 'news', name: 'News', href: '/blog/news' },
  { id: 'gesetzesaenderungen', name: 'Gesetzesänderungen', href: '/blog/gesetzesaenderungen' },
  { id: 'studien', name: 'Studien', href: '/blog/studien' },
  { id: 'community', name: 'Community', href: '/blog/community' },
];

// Bundesländer Data
export const bundeslaenderData = [
  { id: 'bayern', name: 'Bayern', capital: 'München', href: '/bayern' },
  { id: 'berlin', name: 'Berlin', capital: 'Berlin', href: '/berlin' },
  { id: 'brandenburg', name: 'Brandenburg', capital: 'Potsdam', href: '/brandenburg' },
  { id: 'bremen', name: 'Bremen', capital: 'Bremen', href: '/bremen' },
  { id: 'hamburg', name: 'Hamburg', capital: 'Hamburg', href: '/hamburg' },
  { id: 'hessen', name: 'Hessen', capital: 'Wiesbaden', href: '/hessen' },
  { id: 'niedersachsen', name: 'Niedersachsen', capital: 'Hannover', href: '/niedersachsen' },
  { id: 'nrw', name: 'Nordrhein-Westfalen', capital: 'Düsseldorf', href: '/nrw' },
  { id: 'rlp', name: 'Rheinland-Pfalz', capital: 'Mainz', href: '/rheinland-pfalz' },
  { id: 'saarland', name: 'Saarland', capital: 'Saarbrücken', href: '/saarland' },
  { id: 'sachsen', name: 'Sachsen', capital: 'Dresden', href: '/sachsen' },
  { id: 'sachsen-anhalt', name: 'Sachsen-Anhalt', capital: 'Magdeburg', href: '/sachsen-anhalt' },
  { id: 'schleswig-holstein', name: 'Schleswig-Holstein', capital: 'Kiel', href: '/schleswig-holstein' },
  { id: 'thueringen', name: 'Thüringen', capital: 'Erfurt', href: '/thueringen' },
  { id: 'baden-wuerttemberg', name: 'Baden-Württemberg', capital: 'Stuttgart', href: '/baden-wuerttemberg' },
  { id: 'mecklenburg-vorpommern', name: 'Mecklenburg-Vorpommern', capital: 'Schwerin', href: '/mecklenburg-vorpommern' },
];

// Timeline Data for MedCanG Reform
export const medcangTimelineData = [
  { date: '08.10.2025', title: 'Kabinettsbeschluss', status: 'completed', description: 'Das Bundeskabinett beschließt die MedCanG-Reform.' },
  { date: '18.12.2025', title: '1. Lesung Bundestag', status: 'completed', description: 'Die erste Lesung im Bundestag findet statt.' },
  { date: '14.01.2026', title: 'Anhörung Gesundheitsausschuss', status: 'completed', description: 'Expertenanhörung im Gesundheitsausschuss.' },
  { date: 'Anfang 2026', title: 'Bundestagsabstimmung', status: 'pending', description: 'Die finale Abstimmung im Bundestag ist erwartet.' },
  { date: 'Q2 2026', title: 'Inkrafttreten', status: 'pending', description: 'Das Gesetz tritt voraussichtlich in Kraft.' },
];

// Equipment List for Anbau
export const equipmentListData = [
  { item: 'Growbox (60x60x160cm empfohlen)', price: '80-200€', affiliate: true },
  { item: 'LED-Lampe (mindestens 100W)', price: '100-300€', affiliate: true },
  { item: 'Belüftungssystem (Abluft + Umluft)', price: '80-200€', affiliate: true },
  { item: 'Aktivkohlefilter', price: '50-120€', affiliate: true },
  { item: 'Töpfe & Erde', price: '30-60€', affiliate: true },
  { item: 'Samen (feminisiert empfohlen)', price: '30-80€', affiliate: true },
  { item: 'pH-Messer & Thermometer', price: '30-60€', affiliate: true },
];

// CSC Cost Overview
export const cscCostData = [
  { item: 'Vereinsregister', cost: '50-100€' },
  { item: 'Notar (optional)', cost: '200-500€' },
  { item: 'BfArM-Gebühr', cost: '500€' },
  { item: 'Anbaufläche (Miete/Kauf)', cost: 'variabel' },
  { item: 'Anbau-Equipment', cost: '5.000-20.000€' },
  { item: 'Versicherungen/Jahr', cost: '1.000-3.000€' },
];

// FAQ Data
export const faqData = [
  {
    question: 'Wie viele Cannabis-Pflanzen darf ich anbauen?',
    answer: 'In Deutschland dürfen volljährige Personen (18+) maximal 3 Cannabis-Pflanzen pro Person für den Eigenbedarf anbauen. Dies gilt bundesweit seit dem Cannabis-Gesetz 2026.',
  },
  {
    question: 'Ist der Cannabis-Anbau legal?',
    answer: 'Ja, der Eigenanbau von bis zu 3 Pflanzen pro Person ist seit dem Cannabis-Gesetz 2026 legal. Wichtig: Der Anbau darf nur für den Eigenbedarf erfolgen, ein Weiterverkauf ist verboten.',
  },
  {
    question: 'Was kostet der erste Anbau?',
    answer: 'Die Kosten für den ersten Anbau liegen zwischen 430€ und 1.130€, abhängig von der Equipment-Qualität. Folgeanbauten sind mit 130-330€ deutlich günstiger.',
  },
  {
    question: 'Was ist ein Cannabis Social Club (CSC)?',
    answer: 'Ein Cannabis Social Club ist ein gemeinnütziger Verein, der Cannabis für seine Mitglieder anbaut und abgibt. Maximal 500 Mitglieder, 25g pro Tag und 50g pro Monat pro Mitglied.',
  },
  {
    question: 'Wie bekomme ich medizinisches Cannabis?',
    answer: 'Du benötigst ein Rezept von einem Arzt. Seit der MedCanG-Reform 2026 ist eine persönliche Konsultation beim Arzt Pflicht, Telemedizin ist nicht mehr erlaubt.',
  },
];
