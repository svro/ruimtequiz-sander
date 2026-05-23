const ROUND_SIZE = 25;
const MODE_ALL = "all";
const MODE_TIMELINE = "timeline";
const MODE_FRENCH = "french";

const bodies = [
  {
    name: "Mercurius",
    label: "Planeet",
    category: "Rotsplaneet",
    romanGod: "Mercurius",
    orbitQuestion: { prompt: "Hoeveel aardse dagen doet Mercurius ongeveer over een rondje rond de zon?", answer: "88 dagen" },
    moons: "0",
    temperature: "167 graden C",
    factQuestion: "Welke planeet staat het dichtst bij de zon?",
    factAnswer: "Mercurius",
    quickFacts: ["Dichtst bij de zon", "Geen manen", "Kleine rotsplaneet"]
  },
  {
    name: "Venus",
    label: "Planeet",
    category: "Rotsplaneet",
    romanGod: "Venus",
    orbitQuestion: { prompt: "Hoeveel aardse dagen doet Venus ongeveer over een rondje rond de zon?", answer: "225 dagen" },
    moons: "0",
    temperature: "462 graden C",
    factQuestion: "Welke planeet is de heetste planeet in ons zonnestelsel?",
    factAnswer: "Venus",
    quickFacts: ["Heel heet", "Geen manen", "Bekend om lange dagen"]
  },
  {
    name: "Aarde",
    label: "Planeet",
    category: "Rotsplaneet",
    romanGod: "Geen Romeinse god",
    orbitQuestion: { prompt: "Hoeveel aardse dagen doet de Aarde over een rondje rond de zon?", answer: "365 dagen" },
    moons: "1",
    temperature: "15 graden C",
    factQuestion: "Op welke planeet woon jij?",
    factAnswer: "Aarde",
    quickFacts: ["Ongeveer 70% water", "1 maan", "Onze thuisplaneet"]
  },
  {
    name: "Mars",
    label: "Planeet",
    category: "Rotsplaneet",
    romanGod: "Mars",
    orbitQuestion: { prompt: "Hoeveel aardse dagen doet Mars ongeveer over een rondje rond de zon?", answer: "687 dagen" },
    moons: "2",
    temperature: "-63 graden C",
    factQuestion: "Welke planeet noemen we vaak de rode planeet?",
    factAnswer: "Mars",
    quickFacts: ["Rode planeet", "2 manen", "Kleur komt door ijzeroxide"]
  },
  {
    name: "Jupiter",
    label: "Planeet",
    category: "Gasplaneet",
    romanGod: "Jupiter",
    orbitQuestion: { prompt: "Hoeveel aardse jaren doet Jupiter ongeveer over een rondje rond de zon?", answer: "12 jaar" },
    moons: "95",
    temperature: "-121 graden C",
    factQuestion: "Welke planeet is de grootste planeet van het zonnestelsel?",
    factAnswer: "Jupiter",
    quickFacts: ["Grootste planeet", "Gasplaneet", "Snel draaiende planeet"]
  },
  {
    name: "Saturnus",
    label: "Planeet",
    category: "Gasplaneet",
    romanGod: "Saturnus",
    orbitQuestion: { prompt: "Hoeveel aardse jaren doet Saturnus ongeveer over een rondje rond de zon?", answer: "29,5 jaar" },
    moons: "146",
    temperature: "-140 graden C",
    factQuestion: "Welke planeet is beroemd om zijn ringen?",
    factAnswer: "Saturnus",
    quickFacts: ["Opvallende ringen van ijs en stof", "Gasplaneet", "Heel veel manen"]
  },
  {
    name: "Uranus",
    label: "Planeet",
    category: "Gasplaneet",
    romanGod: "Ouranos",
    orbitQuestion: { prompt: "Hoeveel aardse jaren doet Uranus ongeveer over een rondje rond de zon?", answer: "84 jaar" },
    moons: "27",
    temperature: "-201 graden C",
    factQuestion: "Welke planeet is de zevende planeet vanaf de zon?",
    factAnswer: "Uranus",
    quickFacts: ["Ijskoud", "27 manen", "Zevende planeet vanaf de zon"]
  },
  {
    name: "Neptunus",
    label: "Planeet",
    category: "Gasplaneet",
    romanGod: "Neptunus",
    orbitQuestion: { prompt: "Hoeveel aardse jaren doet Neptunus ongeveer over een rondje rond de zon?", answer: "165 jaar" },
    moons: "14",
    temperature: "-220 graden C",
    factQuestion: "Welke planeet ligt het verst van de zon?",
    factAnswer: "Neptunus",
    quickFacts: ["Verst van de zon", "Blauwachtige ijsreus", "14 manen"]
  },
  {
    name: "Zon",
    label: "Bonus",
    category: "Ster",
    romanGod: "Sol",
    orbitQuestion: { prompt: "Wat is de zon eigenlijk?", answer: "Een ster" },
    moons: "0",
    temperature: "5500 graden C",
    factQuestion: "Welk hemellichaam geeft licht en warmte aan de planeten?",
    factAnswer: "Zon",
    quickFacts: ["Geen planeet maar een ster", "Geeft licht en warmte", "Maakt bijna alle massa van het zonnestelsel uit"]
  }
];

const answerPool = {
  category: ["Rotsplaneet", "Gasplaneet", "Ster", "Dwergplaneet"],
  moons: ["0", "1", "2", "14", "27", "95", "146"],
  orbit: ["24 uur", "88 dagen", "225 dagen", "365 dagen", "687 dagen", "12 jaar", "29,5 jaar", "84 jaar", "165 jaar", "Een ster"],
  gods: ["Mercurius", "Venus", "Mars", "Jupiter", "Saturnus", "Ouranos", "Neptunus", "Sol", "Geen Romeinse god"]
};

const topicCards = [
  {
    label: "Leskaart",
    title: "Aarde vanbinnen",
    category: "Aarde, zon en maan",
    lines: ["Lagen: aardkorst, mantel, buitenkern, binnenkern"],
    facts: ["Bijna 3/4 van het aardoppervlak is water", "De atmosfeer beschermt het leven op aarde"]
  },
  {
    label: "Leskaart",
    title: "Dag en nacht",
    category: "Beweging van de aarde",
    lines: ["De aarde draait rond haar eigen as"],
    facts: ["Een draai duurt ongeveer 23 uur, 56 minuten en 4 seconden", "Die draaiing zorgt voor dag en nacht"]
  },
  {
    label: "Leskaart",
    title: "Verduisteringen",
    category: "Maan en zon",
    lines: ["Maansverduistering: aarde tussen zon en maan"],
    facts: ["Zonsverduistering: maan tussen aarde en zon", "De maan geeft zelf geen licht"]
  },
  {
    label: "Leskaart",
    title: "Licht en kleur",
    category: "Kleurrijke beelden",
    lines: ["Wit licht bestaat uit veel kleuren"],
    facts: ["Een regenboog ontstaat door licht in regendruppels", "De lucht lijkt blauw door verstrooid blauw licht"]
  },
  {
    label: "Leskaart",
    title: "Ruimtevaart tijdslijn",
    category: "Belangrijk achteraan",
    lines: ["1957: Spoetnik en Laika", "1969: Neil Armstrong op de maan"],
    facts: ["1992: Dirk Frimout in de ruimte", "2001: Dennis Tito als eerste ruimtetoerist"]
  }
];

const frenchVocabulary = window.frenchVocabulary ?? [
  { nl: "aan (Joelle geven)", fr: "a" },
  { nl: "tot morgen", fr: "A demain!" },
  { nl: "kopen", fr: "acheter" },
  { nl: "een agent", fr: "un agent" },
  { nl: "helpen", fr: "aider" },
  { nl: "een vriend", fr: "un ami" },
  { nl: "een vriendin", fr: "une amie" },
  { nl: "(het) Engels", fr: "l'anglais" },
  { nl: "een jaar", fr: "une annee" },
  { nl: "leren", fr: "apprendre" },
  { nl: "namiddag", fr: "apres-midi" },
  { nl: "stoppen", fr: "arreter" },
  { nl: "komen, aankomen", fr: "arriver" },
  { nl: "een bord", fr: "une assiette" },
  { nl: "een vliegtuig", fr: "un avion" },
  { nl: "een stokbrood", fr: "une baguette" },
  { nl: "een banaan", fr: "une banane" },
  { nl: "een schip, boot", fr: "un bateau" },
  { nl: "de boter", fr: "le beurre" },
  { nl: "het bier", fr: "la biere" },
  { nl: "een arm", fr: "un bras" },
  { nl: "de koffie", fr: "le cafe" },
  { nl: "een vrachtwagen", fr: "un camion" },
  { nl: "het platteland", fr: "la campagne" },
  { nl: "een wortel", fr: "une carotte" },
  { nl: "een kruispunt", fr: "un carrefour" },
  { nl: "een kaart", fr: "une carte" },
  { nl: "een centiem", fr: "un centime" },
  { nl: "warm", fr: "chaud" },
  { nl: "een sok", fr: "une chaussette" },
  { nl: "een weg", fr: "un chemin" },
  { nl: "een paard", fr: "un cheval" },
  { nl: "de chocolade", fr: "le chocolat" },
  { nl: "een bioscoop", fr: "un cinema" },
  { nl: "een varken", fr: "un cochon" },
  { nl: "begrijpen", fr: "comprendre" },
  { nl: "de jam", fr: "la confiture" },
  { nl: "een tand", fr: "une dent" },
  { nl: "een dessert", fr: "un dessert" },
  { nl: "zondag", fr: "dimanche" },
  { nl: "slapen", fr: "dormir" },
  { nl: "een rug", fr: "un dos" },
  { nl: "het water", fr: "l'eau" },
  { nl: "schrijven", fr: "ecrire" },
  { nl: "een e-mail", fr: "un e-mail" },
  { nl: "de zomer", fr: "l'ete" },
  { nl: "een euro", fr: "un euro" },
  { nl: "een fout", fr: "une faute" },
  { nl: "een film", fr: "un film" },
  { nl: "een bloem", fr: "une fleur" },
  { nl: "een vork", fr: "une fourchette" },
  { nl: "de kaas", fr: "le fromage" },
  { nl: "een vrucht", fr: "un fruit" },
  { nl: "winnen", fr: "gagner" },
  { nl: "links", fr: "a gauche" },
  { nl: "een knie", fr: "un genou" },
  { nl: "een gsm", fr: "un GSM" },
  { nl: "de winter", fr: "l'hiver" },
  { nl: "een ziekenhuis", fr: "un hopital" },
  { nl: "een been", fr: "une jambe" },
  { nl: "donderdag", fr: "jeudi" },
  { nl: "een dag", fr: "un jour" },
  { nl: "de melk", fr: "le lait" },
  { nl: "een groente", fr: "un legume" },
  { nl: "lezen", fr: "lire" },
  { nl: "maandag", fr: "lundi" },
  { nl: "een bril", fr: "des lunettes" },
  { nl: "een winkel", fr: "un magasin" },
  { nl: "een hand", fr: "une main" },
  { nl: "eten", fr: "manger" },
  { nl: "dinsdag", fr: "mardi" },
  { nl: "de zee", fr: "la mer" },
  { nl: "een geneesmiddel", fr: "un medicament" },
  { nl: "woensdag", fr: "mercredi" },
  { nl: "een bericht", fr: "un message" },
  { nl: "een miljoen", fr: "un million" },
  { nl: "een maand", fr: "un mois" },
  { nl: "een berg", fr: "une montagne" },
  { nl: "een woord", fr: "un mot" },
  { nl: "een muur", fr: "un mur" },
  { nl: "de sneeuw", fr: "la neige" },
  { nl: "een oom", fr: "un oncle" },
  { nl: "een sinaasappel", fr: "une orange" },
  { nl: "een bladzijde", fr: "une page" },
  { nl: "een brood", fr: "un pain" },
  { nl: "Parijs", fr: "Paris" },
  { nl: "spreken", fr: "parler" },
  { nl: "vertrekken", fr: "partir" },
  { nl: "een land", fr: "un pays" },
  { nl: "een ontbijt", fr: "un petit dejeuner" },
  { nl: "een beetje", fr: "un peu" },
  { nl: "een zin", fr: "une phrase" },
  { nl: "een pizza", fr: "une pizza" },
  { nl: "een plaats", fr: "une place" },
  { nl: "een peer", fr: "une poire" },
  { nl: "een appel", fr: "une pomme" },
  { nl: "een aardappel", fr: "une pomme de terre" },
  { nl: "een laptop", fr: "un portable" },
  { nl: "een pot", fr: "un pot" },
  { nl: "een kip", fr: "une poule" },
  { nl: "waarom?", fr: "pourquoi?" },
  { nl: "de lente", fr: "le printemps" },
  { nl: "een prijs", fr: "un prix" },
  { nl: "een wandeling", fr: "une promenade" },
  { nl: "een maaltijd", fr: "un repas" },
  { nl: "een restaurant", fr: "un restaurant" },
  { nl: "tot ziens!", fr: "Au revoir!" },
  { nl: "een rotonde", fr: "un rond-point" },
  { nl: "een baan, weg", fr: "une route" },
  { nl: "een sla", fr: "une salade" },
  { nl: "zaterdag", fr: "samedi" },
  { nl: "een saus", fr: "une sauce" },
  { nl: "een week", fr: "une semaine" },
  { nl: "de zon", fr: "le soleil" },
  { nl: "een uitgang", fr: "une sortie" },
  { nl: "de soep", fr: "la soupe" },
  { nl: "spaghetti", fr: "des spaghettis" },
  { nl: "de suiker", fr: "le sucre" },
  { nl: "een supermarkt", fr: "un supermarche" },
  { nl: "een boterham", fr: "une tartine" },
  { nl: "een kop thee", fr: "une tasse de the" },
  { nl: "de tijd", fr: "le temps" },
  { nl: "een hoofd", fr: "une tete" },
  { nl: "een tekst", fr: "un texte" },
  { nl: "de thee", fr: "le the" },
  { nl: "een tomaat", fr: "une tomate" },
  { nl: "vallen", fr: "tomber" },
  { nl: "alles", fr: "tout" },
  { nl: "werken", fr: "travailler" },
  { nl: "een koe", fr: "une vache" },
  { nl: "verkopen", fr: "vendre" },
  { nl: "vrijdag", fr: "vendredi" },
  { nl: "komen", fr: "venir" },
  { nl: "de wind", fr: "le vent" },
  { nl: "een buik", fr: "un ventre" },
  { nl: "het vlees", fr: "la viande" },
  { nl: "een dorp", fr: "un village" },
  { nl: "een stad", fr: "une ville" },
  { nl: "de wijn", fr: "le vin" },
  { nl: "een buurman", fr: "un voisin" },
  { nl: "een buurvrouw", fr: "une voisine" },
  { nl: "een reis", fr: "un voyage" },
  { nl: "een weekend", fr: "un week-end" }
];

const quizState = {
  questions: [],
  currentIndex: 0,
  score: 0,
  streak: 0,
  answered: false,
  mode: MODE_ALL
};

const progressValue = document.getElementById("progress-value");
const scoreValue = document.getElementById("score-value");
const streakValue = document.getElementById("streak-value");
const questionTag = document.getElementById("question-tag");
const questionText = document.getElementById("question-text");
const questionHint = document.getElementById("question-hint");
const answersContainer = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");
const progressBarFill = document.getElementById("progress-bar-fill");
const summaryCard = document.getElementById("summary-card");
const summaryText = document.getElementById("summary-text");
const summaryStars = document.getElementById("summary-stars");
const studyCards = document.getElementById("study-cards");
const studyTitle = document.getElementById("study-title");
const studyCopy = document.getElementById("study-copy");
const startButton = document.getElementById("start-button");
const timelineButton = document.getElementById("timeline-button");
const frenchButton = document.getElementById("french-button");
const restartButton = document.getElementById("restart-button");

function shuffle(array) {
  const copy = [...array];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function buildOptions(correctAnswer, pool, count = 4) {
  const wrongOptions = shuffle(pool.filter((option) => option !== correctAnswer)).slice(0, count - 1);
  return shuffle([correctAnswer, ...wrongOptions]);
}

function buildQuestionBank() {
  const nameOptions = bodies.map((body) => body.name);

  return bodies.flatMap((body) => {
    const questionSet = [];

    questionSet.push({
      tag: `${body.label} | Soort`,
      prompt: body.name === "Zon"
        ? "Wat voor hemellichaam is de zon?"
        : `Is ${body.name} een rotsplaneet of een gasplaneet?`,
      hint: "Denk aan de bundel: rotsplaneet, gasplaneet of bonusvraag over de zon.",
      correct: body.category,
      options: buildOptions(body.category, answerPool.category),
      explanation: `${body.name} hoort bij: ${body.category}.`
    });

    questionSet.push({
      tag: `${body.label} | Baan`,
      prompt: body.orbitQuestion.prompt,
      hint: "Kies het antwoord dat het best past bij de bundel.",
      correct: body.orbitQuestion.answer,
      options: buildOptions(body.orbitQuestion.answer, answerPool.orbit),
      explanation: `${body.name}: ${body.orbitQuestion.answer}.`
    });

    questionSet.push({
      tag: `${body.label} | Manen`,
      prompt: body.name === "Zon"
        ? "Hoeveel manen heeft de zon?"
        : `Hoeveel manen heeft ${body.name}?`,
      hint: "Sommige antwoorden zijn exact uit de bundel overgenomen.",
      correct: body.moons,
      options: buildOptions(body.moons, answerPool.moons),
      explanation: `${body.name} heeft ${body.moons} manen.`
    });

    questionSet.push({
      tag: `${body.label} | God`,
      prompt: body.name === "Aarde"
        ? "Werd de Aarde genoemd naar een Romeinse god?"
        : body.name === "Uranus"
          ? "Met welke Griekse god wordt Uranus verbonden?"
          : `Met welke Romeinse god wordt ${body.name} verbonden?`,
      hint: body.name === "Aarde"
        ? "De Aarde is hier een uitzondering."
        : body.name === "Uranus"
          ? "In de bundel staat hier de Griekse god Ouranos."
          : "Kijk goed naar de naam van de god.",
      correct: body.name === "Aarde" ? "Nee" : body.romanGod,
      options: body.name === "Aarde" ? ["Ja", "Nee"] : buildOptions(body.romanGod, answerPool.gods),
      explanation: body.name === "Aarde"
        ? "De Aarde is niet genoemd naar een Romeinse god."
        : body.name === "Uranus"
          ? "Uranus wordt verbonden met de Griekse god Ouranos."
          : `${body.name} wordt verbonden met ${body.romanGod}.`
    });

    questionSet.push({
      tag: `${body.label} | Extra`,
      prompt: body.factQuestion,
      hint: "Gebruik het ezelsbruggetje uit de bundel of de kaartjes hieronder.",
      correct: body.factAnswer,
      options: buildOptions(body.factAnswer, nameOptions),
      explanation: `${body.factAnswer}: ${body.quickFacts[0].toLowerCase()}.`
    });

    return questionSet;
  });
}

function buildFrenchQuestionBank() {
  const frenchOptions = frenchVocabulary.map((entry) => entry.fr);

  return frenchVocabulary.map((entry) => ({
    tag: "Frans | Woordenschat",
    prompt: `Wat is het Franse woord voor "${entry.nl}"?`,
    hint: "Kies het juiste Franse woord uit 5 mogelijkheden.",
    correct: entry.fr,
    options: buildOptions(entry.fr, frenchOptions, 5),
    explanation: `"${entry.nl}" is in het Frans "${entry.fr}".`
  }));
}

const extraQuestions = [];

extraQuestions.push(
  {
    tag: "Aarde | Lagen",
    prompt: "Welke laag ligt net onder de aardkorst?",
    hint: "Denk aan de doorsnede van de aarde.",
    correct: "De mantel",
    options: ["De mantel", "De buitenkern", "De atmosfeer", "De maan"],
    explanation: "Onder de aardkorst ligt de mantel."
  },
  {
    tag: "Aarde | Water",
    prompt: "Waaruit bestaat bijna 3/4 van het aardoppervlak?",
    hint: "Dat is meer dan 70 procent.",
    correct: "Water",
    options: ["Water", "Zand", "Lava", "Ijs"],
    explanation: "Bijna drie vierde van het aardoppervlak bestaat uit water."
  },
  {
    tag: "Aarde | Atmosfeer",
    prompt: "Welke laag gassen beschermt het leven op aarde?",
    hint: "Die laag houdt schadelijke zonnestralen tegen.",
    correct: "De atmosfeer",
    options: ["De atmosfeer", "De aardkorst", "De mantel", "De regenboog"],
    explanation: "De atmosfeer beschermt het leven op aarde."
  },
  {
    tag: "Aarde | Draaien",
    prompt: "Welke beweging zorgt voor dag en nacht?",
    hint: "Het gaat niet om de baan rond de zon.",
    correct: "De aarde draait rond haar eigen as",
    options: ["De aarde draait rond haar eigen as", "De maan draait rond de aarde", "De zon draait rond de aarde", "De aarde staat stil"],
    explanation: "Dag en nacht ontstaan doordat de aarde rond haar eigen as draait."
  },
  {
    tag: "Aarde | Tijd",
    prompt: "Hoe lang duurt een draai van de aarde rond haar eigen as precies?",
    hint: "Bijna 24 uur.",
    correct: "23 uur, 56 minuten en 4 seconden",
    options: ["23 uur, 56 minuten en 4 seconden", "12 uur", "24 dagen", "365 dagen"],
    explanation: "Een aardrotatie duurt 23 uur, 56 minuten en 4 seconden."
  },
  {
    tag: "Maan | Licht",
    prompt: "Geeft de maan zelf licht?",
    hint: "Denk aan zonlicht.",
    correct: "Nee",
    options: ["Ja", "Nee", "Alleen soms", "Alleen in de winter"],
    explanation: "De maan geeft zelf geen licht, we zien weerkaatst zonlicht."
  },
  {
    tag: "Maan | Verduistering",
    prompt: "Wat staat bij een maansverduistering tussen de zon en de maan?",
    hint: "Daardoor valt er schaduw op de maan.",
    correct: "De aarde",
    options: ["De aarde", "De maan", "Mercurius", "Jupiter"],
    explanation: "Bij een maansverduistering staat de aarde tussen de zon en de maan."
  },
  {
    tag: "Zon | Verduistering",
    prompt: "Wat staat bij een zonsverduistering tussen de aarde en de zon?",
    hint: "Dat hemellichaam blokkeert een deel van het zonlicht.",
    correct: "De maan",
    options: ["De maan", "De aarde", "Mars", "Venus"],
    explanation: "Bij een zonsverduistering staat de maan tussen de aarde en de zon."
  },
  {
    tag: "Licht | Regenboog",
    prompt: "Waaruit bestaat wit licht eigenlijk?",
    hint: "Het is niet maar een kleur.",
    correct: "Uit heel veel verschillende kleuren",
    options: ["Uit heel veel verschillende kleuren", "Alleen uit geel en blauw", "Alleen uit rood", "Uit donker en licht"],
    explanation: "Wit licht is opgebouwd uit veel verschillende kleuren."
  },
  {
    tag: "Licht | Regenboog",
    prompt: "Hoe ontstaat een regenboog?",
    hint: "Denk aan licht en regendruppels.",
    correct: "Als licht in regendruppels breekt en weerkaatst",
    options: ["Als licht in regendruppels breekt en weerkaatst", "Als de maan op water schijnt", "Als wolken botsen", "Als de aarde sneller draait"],
    explanation: "Een regenboog ontstaat als zonlicht in regendruppels breekt en weerkaatst."
  },
  {
    tag: "Licht | Hemel",
    prompt: "Welke kleur licht wordt makkelijk verstrooid, waardoor de lucht blauw lijkt?",
    hint: "Het is dezelfde kleur als de lucht.",
    correct: "Blauw",
    options: ["Blauw", "Zwart", "Bruin", "Roze"],
    explanation: "Blauw licht wordt makkelijker verstrooid door de atmosfeer."
  },
  {
    tag: "Zonnestelsel | Basis",
    prompt: "Hoeveel planeten telt ons zonnestelsel?",
    hint: "De bundel liet de acht planeten zien.",
    correct: "8",
    options: ["8", "7", "9", "10"],
    explanation: "Ons zonnestelsel telt acht planeten."
  },
  {
    tag: "Zonnestelsel | Soorten",
    prompt: "Welke twee soorten planeten zijn er volgens de bundel?",
    hint: "Denk aan de labels onder de planeten.",
    correct: "Rotsplaneten en gasplaneten",
    options: ["Rotsplaneten en gasplaneten", "Warme en koude planeten", "Binnenmanen en buitenmanen", "Sterren en manen"],
    explanation: "De bundel verdeelt de planeten in rotsplaneten en gasplaneten."
  },
  {
    tag: "Zonnestelsel | Onderzoek",
    prompt: "Welke planeet werd op het ingevulde infoblad uit de nieuwe bundel onderzocht?",
    hint: "Die planeet ontbrak in de vorige scan.",
    correct: "Jupiter",
    options: ["Jupiter", "Venus", "Neptunus", "Aarde"],
    explanation: "Op het infoblad uit de tweede bundel werd Jupiter onderzocht."
  }
);

extraQuestions.push(
  {
    tag: "Ruimtevaart | Gagarin",
    prompt: "Wie was de eerste mens in de ruimte?",
    hint: "Hij vloog in 1961.",
    correct: "Yuri Gagarin",
    options: ["Yuri Gagarin", "Neil Armstrong", "Dirk Frimout", "Alan Shepard"],
    explanation: "Yuri Gagarin was de eerste mens in de ruimte."
  },
  {
    tag: "Ruimtevaart | Gagarin",
    prompt: "Met welke capsule vloog Yuri Gagarin?",
    hint: "De naam stond in zijn paspoortfiche.",
    correct: "Vostok 1",
    options: ["Vostok 1", "Apollo 11", "ISS", "Challenger"],
    explanation: "Yuri Gagarin vloog met Vostok 1."
  },
  {
    tag: "Ruimtevaart | Gagarin",
    prompt: "Op welke datum ging Yuri Gagarin de ruimte in?",
    hint: "Het was in april 1961.",
    correct: "12 april 1961",
    options: ["12 april 1961", "20 juli 1969", "28 januari 1986", "2 november 2000"],
    explanation: "Yuri Gagarin ging op 12 april 1961 de ruimte in."
  },
  {
    tag: "Maanlanding | Apollo",
    prompt: "Hoe heette de eerste bemande missie met een maanlanding?",
    hint: "Het getal is beroemd.",
    correct: "Apollo 11",
    options: ["Apollo 11", "Apollo 10", "Vostok 1", "ISS 1"],
    explanation: "De eerste bemande maanlanding was Apollo 11."
  },
  {
    tag: "Maanlanding | Apollo",
    prompt: "Welk land organiseerde Apollo 11?",
    hint: "Niet Rusland.",
    correct: "Verenigde Staten",
    options: ["Verenigde Staten", "Rusland", "China", "Belgie"],
    explanation: "Apollo 11 werd georganiseerd door de Verenigde Staten."
  },
  {
    tag: "Maanlanding | Apollo",
    prompt: "Wanneer landde de maanlander op het maanoppervlak?",
    hint: "Het was in 1969.",
    correct: "20 juli 1969",
    options: ["20 juli 1969", "20 juli 1960", "12 april 1961", "2 november 2000"],
    explanation: "De maanlanding gebeurde op 20 juli 1969."
  },
  {
    tag: "Maanlanding | Apollo",
    prompt: "Wie zette als eerste een voet op de maan?",
    hint: "Zijn voornaam was Neil.",
    correct: "Neil Armstrong",
    options: ["Neil Armstrong", "Buzz Aldrin", "Dirk Frimout", "Yuri Gagarin"],
    explanation: "Neil Armstrong zette als eerste mens voet op de maan."
  },
  {
    tag: "Ruimtepuin | Basis",
    prompt: "Over hoeveel stukken ruimtepuin schrijft de bundel ongeveer?",
    hint: "Volgens de schatting van NASA is het een heel groot aantal.",
    correct: "Ruim 500 000 stukken",
    options: ["Ruim 500 000 stukken", "Ongeveer 500 stukken", "Meer dan 5 miljoen stukken", "Slechts 50 stukken"],
    explanation: "Volgens de bundel cirkelen er ruim 500 000 stukken ruimtepuin rond de aarde."
  },
  {
    tag: "Dieren | Eerste hond",
    prompt: "Hoe heette de hond die in 1957 de ruimte in werd gestuurd?",
    hint: "Haar naam stond ook op de tijdslijn.",
    correct: "Laika",
    options: ["Laika", "Felicette", "Ham", "Yuri"],
    explanation: "Laika was de hond die in 1957 de ruimte in werd gestuurd."
  },
  {
    tag: "Dieren | Kat",
    prompt: "Welk dier was Felicette?",
    hint: "Het miauwt.",
    correct: "Een kat",
    options: ["Een kat", "Een hond", "Een chimpansee", "Een paard"],
    explanation: "Felicette was de eerste en enige kat in de ruimte."
  },
  {
    tag: "Tijdslijn | 1957",
    prompt: "Welke satelliet brachten de Russen in 1957 in een baan rond de aarde?",
    hint: "Dit was het begin van de tijdslijn.",
    correct: "Spoetnik",
    options: ["Spoetnik", "Apollo 11", "ISS", "Vostok 1"],
    explanation: "In 1957 brachten de Russen Spoetnik in een baan rond de aarde."
  },
  {
    tag: "Tijdslijn | 1963",
    prompt: "Wie was de eerste vrouw in de ruimte?",
    hint: "Dat gebeurde in 1963.",
    correct: "Valentina Tereshkova",
    options: ["Valentina Tereshkova", "Christa McAuliffe", "Felicette", "Laika"],
    explanation: "Valentina Tereshkova was de eerste vrouw in de ruimte."
  },
  {
    tag: "Tijdslijn | 1965",
    prompt: "Wie maakte de eerste ruimtewandeling?",
    hint: "Hij verliet twaalf minuten lang de ruimtecapsule.",
    correct: "Alexei Leonov",
    options: ["Alexei Leonov", "Yuri Gagarin", "Alan Shepard", "Dennis Tito"],
    explanation: "Alexei Leonov maakte de eerste ruimtewandeling."
  },
  {
    tag: "Tijdslijn | 1992",
    prompt: "Wie was de eerste Belgische astronaut in de ruimte?",
    hint: "Dit staat op de tijdslijn van 1992.",
    correct: "Dirk Frimout",
    options: ["Dirk Frimout", "Dennis Tito", "Yuri Gagarin", "Neil Armstrong"],
    explanation: "Dirk Frimout was de eerste Belgische astronaut in de ruimte."
  },
  {
    tag: "Tijdslijn | 2001",
    prompt: "Wie was de eerste ruimtetoerist?",
    hint: "Hij betaalde 20 miljoen dollar.",
    correct: "Dennis Tito",
    options: ["Dennis Tito", "Dirk Frimout", "Christa McAuliffe", "Alan Shepard"],
    explanation: "Dennis Tito was de eerste ruimtetoerist."
  },
  {
    tag: "Tijdslijn | Volgorde",
    prompt: "Wat gebeurde eerst?",
    hint: "Kies het oudste moment uit de tijdslijn.",
    correct: "Spoetnik kwam in een baan rond de aarde",
    options: [
      "Spoetnik kwam in een baan rond de aarde",
      "Neil Armstrong zette voet op de maan",
      "Dirk Frimout ging de ruimte in",
      "Dennis Tito werd ruimtetoerist"
    ],
    explanation: "Spoetnik in 1957 kwam vroeger dan de andere gebeurtenissen."
  }
);

const timelineQuestions = [
  {
    tag: "Tijdslijn | 1957",
    prompt: "Welke satelliet brachten de Russen in 1957 in een baan rond de aarde?",
    hint: "Dit was het begin van de tijdslijn.",
    correct: "Spoetnik",
    options: ["Spoetnik", "Apollo 11", "ISS", "Vostok 1"],
    explanation: "In 1957 brachten de Russen Spoetnik in een baan rond de aarde."
  },
  {
    tag: "Tijdslijn | 1957",
    prompt: "Welk dier werd in hetzelfde jaar als Spoetnik de ruimte in gestuurd?",
    hint: "Het was een hond.",
    correct: "Laika",
    options: ["Laika", "Felicette", "Ham", "Dennis Tito"],
    explanation: "In 1957 werd ook de hond Laika de ruimte in gestuurd."
  },
  {
    tag: "Tijdslijn | 1961",
    prompt: "Wie was de eerste mens in de ruimte?",
    hint: "Hij vloog in 1961.",
    correct: "Yuri Gagarin",
    options: ["Yuri Gagarin", "Neil Armstrong", "Dirk Frimout", "Alan Shepard"],
    explanation: "Yuri Gagarin was de eerste mens in de ruimte."
  },
  {
    tag: "Tijdslijn | 1961",
    prompt: "Met welke capsule vloog Yuri Gagarin?",
    hint: "De naam stond in zijn paspoortfiche.",
    correct: "Vostok 1",
    options: ["Vostok 1", "Apollo 11", "ISS", "Challenger"],
    explanation: "Yuri Gagarin vloog met Vostok 1."
  },
  {
    tag: "Tijdslijn | 1961",
    prompt: "Op welke datum ging Yuri Gagarin de ruimte in?",
    hint: "Het was in april 1961.",
    correct: "12 april 1961",
    options: ["12 april 1961", "20 juli 1969", "28 januari 1986", "2 november 2000"],
    explanation: "Yuri Gagarin ging op 12 april 1961 de ruimte in."
  },
  {
    tag: "Tijdslijn | 1961",
    prompt: "Wie was 24 dagen na Yuri Gagarin de eerste Amerikaan in de ruimte?",
    hint: "Zijn voornaam is Alan.",
    correct: "Alan Shepard",
    options: ["Alan Shepard", "Neil Armstrong", "Alexei Leonov", "Dirk Frimout"],
    explanation: "Alan Shepard was 24 dagen later de eerste Amerikaan in de ruimte."
  },
  {
    tag: "Tijdslijn | 1961",
    prompt: "Welk dier werd in 1961 ook de ruimte in gestuurd?",
    hint: "Het was een chimpansee.",
    correct: "Ham",
    options: ["Ham", "Laika", "Felicette", "Christa McAuliffe"],
    explanation: "In 1961 werd ook de chimpansee Ham de ruimte in gestuurd."
  },
  {
    tag: "Tijdslijn | 1963",
    prompt: "Wie was de eerste vrouw in de ruimte?",
    hint: "Dat gebeurde in 1963.",
    correct: "Valentina Tereshkova",
    options: ["Valentina Tereshkova", "Christa McAuliffe", "Felicette", "Laika"],
    explanation: "Valentina Tereshkova was de eerste vrouw in de ruimte."
  },
  {
    tag: "Tijdslijn | 1963",
    prompt: "Welk dier werd in hetzelfde jaar als Valentina Tereshkova de ruimte in gestuurd?",
    hint: "Het was een kat.",
    correct: "Felicette",
    options: ["Felicette", "Laika", "Ham", "Columbia"],
    explanation: "In 1963 werd ook de kat Felicette de ruimte in gestuurd."
  },
  {
    tag: "Tijdslijn | 1965",
    prompt: "Wie maakte de eerste ruimtewandeling?",
    hint: "Hij verliet twaalf minuten lang de ruimtecapsule.",
    correct: "Alexei Leonov",
    options: ["Alexei Leonov", "Yuri Gagarin", "Alan Shepard", "Dennis Tito"],
    explanation: "Alexei Leonov maakte de eerste ruimtewandeling."
  },
  {
    tag: "Tijdslijn | 1965",
    prompt: "Hoe lang duurde de eerste ruimtewandeling volgens de bundel?",
    hint: "Het was geen uur.",
    correct: "12 minuten",
    options: ["12 minuten", "108 minuten", "73 seconden", "8 dagen"],
    explanation: "Alexei Leonov verliet twaalf minuten lang de ruimtecapsule."
  },
  {
    tag: "Tijdslijn | 1969",
    prompt: "Wie zette als eerste mens voet op de maan?",
    hint: "Zijn voornaam was Neil.",
    correct: "Neil Armstrong",
    options: ["Neil Armstrong", "Buzz Aldrin", "Dirk Frimout", "Yuri Gagarin"],
    explanation: "Neil Armstrong zette als eerste mens voet op de maan."
  },
  {
    tag: "Tijdslijn | 1969",
    prompt: "In welk jaar zette Neil Armstrong als eerste mens voet op de maan?",
    hint: "Dat jaar staat groot op de tijdslijn.",
    correct: "1969",
    options: ["1969", "1961", "1975", "1992"],
    explanation: "De maanlanding van Neil Armstrong was in 1969."
  },
  {
    tag: "Tijdslijn | 1975",
    prompt: "Wat gebeurde er in 1975 volgens de tijdslijn?",
    hint: "Het ging om samenwerking tussen twee landen.",
    correct: "De eerste gezamenlijke ruimtevlucht",
    options: ["De eerste gezamenlijke ruimtevlucht", "De eerste vrouw in de ruimte", "De eerste Belg in de ruimte", "De eerste maanlanding"],
    explanation: "In 1975 maakten een Russische en een Amerikaanse capsule de eerste gezamenlijke ruimtevlucht."
  },
  {
    tag: "Tijdslijn | 1986",
    prompt: "Welk ruimteveer ontplofte in 1986?",
    hint: "Christa McAuliffe zat mee aan boord.",
    correct: "Challenger",
    options: ["Challenger", "Columbia", "Vostok 1", "Apollo 11"],
    explanation: "In 1986 ontplofte het ruimteveer Challenger."
  },
  {
    tag: "Tijdslijn | 1986",
    prompt: "Welke leerkracht zat aan boord van de Challenger?",
    hint: "Ze werd gekozen uit meer dan 11 000 kandidaten.",
    correct: "Christa McAuliffe",
    options: ["Christa McAuliffe", "Valentina Tereshkova", "Felicette", "Dennis Tito"],
    explanation: "Christa McAuliffe was de leerkracht aan boord van de Challenger."
  },
  {
    tag: "Tijdslijn | 1986",
    prompt: "Hoeveel seconden na de lancering ontplofte de Challenger?",
    hint: "Minder dan anderhalve minuut.",
    correct: "73 seconden",
    options: ["73 seconden", "108 minuten", "12 minuten", "8 dagen"],
    explanation: "De Challenger ontplofte 73 seconden na de lancering."
  },
  {
    tag: "Tijdslijn | 1992",
    prompt: "Wie was de eerste Belgische astronaut in de ruimte?",
    hint: "Dit staat op de tijdslijn van 1992.",
    correct: "Dirk Frimout",
    options: ["Dirk Frimout", "Dennis Tito", "Yuri Gagarin", "Neil Armstrong"],
    explanation: "Dirk Frimout was de eerste Belgische astronaut in de ruimte."
  },
  {
    tag: "Tijdslijn | 1998",
    prompt: "Wat brachten ze in 1998 in de ruimte?",
    hint: "Het had te maken met het ISS.",
    correct: "Een eerste stuk van het ISS",
    options: ["Een eerste stuk van het ISS", "De Challenger", "De maanlander", "Spoetnik"],
    explanation: "In 1998 werd een eerste stuk van het internationale ruimtestation ISS in de ruimte gebracht."
  },
  {
    tag: "Tijdslijn | 2000",
    prompt: "Wat gebeurde er op 2 november 2000?",
    hint: "Het gaat over het ISS.",
    correct: "De eerste bemanning vertrok naar het ISS",
    options: ["De eerste bemanning vertrok naar het ISS", "Neil Armstrong landde op de maan", "Yuri Gagarin vertrok", "Dirk Frimout keerde terug"],
    explanation: "Op 2 november 2000 vertrok de eerste bemanning naar het ISS."
  },
  {
    tag: "Tijdslijn | 2001",
    prompt: "Tot wanneer bleef die eerste ISS-bemanning daar volgens de bundel?",
    hint: "Zoek de datum in maart 2001.",
    correct: "18 maart 2001",
    options: ["18 maart 2001", "2 november 2000", "20 juli 1969", "12 april 1961"],
    explanation: "De eerste ISS-bemanning bleef daar tot 18 maart 2001."
  },
  {
    tag: "Tijdslijn | 2001",
    prompt: "Wie was de eerste ruimtetoerist?",
    hint: "Hij betaalde 20 miljoen dollar.",
    correct: "Dennis Tito",
    options: ["Dennis Tito", "Dirk Frimout", "Christa McAuliffe", "Alan Shepard"],
    explanation: "Dennis Tito was de eerste ruimtetoerist."
  },
  {
    tag: "Tijdslijn | 2001",
    prompt: "Hoeveel betaalde Dennis Tito voor zijn reis?",
    hint: "Het was een enorm bedrag.",
    correct: "20 miljoen dollar",
    options: ["20 miljoen dollar", "2 miljoen dollar", "200 000 dollar", "50 miljoen dollar"],
    explanation: "Dennis Tito betaalde 20 miljoen dollar voor zijn ruimtereis."
  },
  {
    tag: "Tijdslijn | 2001",
    prompt: "Hoe lang verbleef Dennis Tito ongeveer in het ISS?",
    hint: "Bijna een week plus een beetje.",
    correct: "Bijna acht dagen",
    options: ["Bijna acht dagen", "73 seconden", "108 minuten", "Twintig dagen"],
    explanation: "Dennis Tito verbleef bijna acht dagen in het ISS."
  },
  {
    tag: "Tijdslijn | 2003",
    prompt: "Welk ruimteveer verongelukte in 2003?",
    hint: "Niet de Challenger.",
    correct: "Columbia",
    options: ["Columbia", "Challenger", "Apollo 11", "ISS"],
    explanation: "In 2003 verongelukte het ruimteveer Columbia."
  },
  {
    tag: "Tijdslijn | Volgorde",
    prompt: "Wat gebeurde eerst?",
    hint: "Kies het oudste moment uit de tijdslijn.",
    correct: "Spoetnik kwam in een baan rond de aarde",
    options: [
      "Spoetnik kwam in een baan rond de aarde",
      "Neil Armstrong zette voet op de maan",
      "Dirk Frimout ging de ruimte in",
      "Dennis Tito werd ruimtetoerist"
    ],
    explanation: "Spoetnik in 1957 kwam vroeger dan de andere gebeurtenissen."
  },
  {
    tag: "Tijdslijn | Volgorde",
    prompt: "Wat gebeurde het laatst?",
    hint: "Kies de meest recente gebeurtenis uit de lijst.",
    correct: "Columbia verongelukte",
    options: [
      "Columbia verongelukte",
      "Dirk Frimout ging de ruimte in",
      "Neil Armstrong zette voet op de maan",
      "Valentina Tereshkova werd de eerste vrouw in de ruimte"
    ],
    explanation: "Van deze vier gebeurtenissen is Columbia in 2003 het laatst."
  }
];

function getModeLabel(mode) {
  if (mode === MODE_TIMELINE) {
    return "tijdslijnmodus";
  }

  if (mode === MODE_FRENCH) {
    return "Franse quiz";
  }

  return "volledige quiz";
}

function getQuestionPool(mode) {
  if (mode === MODE_TIMELINE) {
    return timelineQuestions;
  }

  if (mode === MODE_FRENCH) {
    return buildFrenchQuestionBank();
  }

  return [...buildQuestionBank(), ...extraQuestions];
}

function buildRound(mode) {
  const bank = shuffle(getQuestionPool(mode));
  return bank.slice(0, Math.min(ROUND_SIZE, bank.length));
}

function updateStatus() {
  const total = quizState.questions.length;
  const current = total === 0 ? 0 : Math.min(quizState.currentIndex + 1, total);
  progressValue.textContent = `${current} / ${total}`;
  scoreValue.textContent = `${quizState.score}`;
  streakValue.textContent = `${quizState.streak}`;
  progressBarFill.style.width = total ? `${(quizState.currentIndex / total) * 100}%` : "0%";
}

function renderStudyCards(mode = quizState.mode) {
  studyCards.innerHTML = "";

  if (mode === MODE_FRENCH) {
    studyTitle.textContent = "Ruimtekaartjes";
    studyCopy.textContent = "Tijdens de Franse quiz blijven alleen de ruimtekaartjes zichtbaar.";
  } else {
    studyTitle.textContent = "Ruimtekaartjes";
    studyCopy.textContent = "Handig om eerst te oefenen en daarna de quiz opnieuw te starten.";
  }

  bodies.forEach((body) => {
    const card = document.createElement("article");
    card.className = "study-card";
    card.innerHTML = `
      <p class="eyebrow">${body.label}</p>
      <h3>${body.name}</h3>
      <p class="meta">${body.category}</p>
      <p>${body.name === "Uranus" ? "Griekse god" : "Romeinse god"}: ${body.romanGod}</p>
      <p>Baan rond de zon: ${body.orbitQuestion.answer}</p>
      <p>Manen: ${body.moons} | Gemiddelde temperatuur: ${body.temperature}</p>
      <ul>
        ${body.quickFacts.map((fact) => `<li>${fact}</li>`).join("")}
      </ul>
    `;
    studyCards.appendChild(card);
  });

  topicCards.forEach((topic) => {
    const card = document.createElement("article");
    card.className = "study-card";
    card.innerHTML = `
      <p class="eyebrow">${topic.label}</p>
      <h3>${topic.title}</h3>
      <p class="meta">${topic.category}</p>
      ${topic.lines.map((line) => `<p>${line}</p>`).join("")}
      <ul>
        ${topic.facts.map((fact) => `<li>${fact}</li>`).join("")}
      </ul>
    `;
    studyCards.appendChild(card);
  });
}

function renderQuestion() {
  const question = quizState.questions[quizState.currentIndex];
  quizState.answered = false;

  if (!question) {
    finishRound();
    return;
  }

  questionTag.textContent = quizState.mode === MODE_TIMELINE
    ? "Tijdslijnmodus"
    : quizState.mode === MODE_FRENCH
      ? "Franse quiz"
      : question.tag;
  questionText.textContent = question.prompt;
  questionHint.textContent = quizState.mode === MODE_TIMELINE
    ? `${question.hint} Je zit nu in de tijdslijnmodus.`
    : quizState.mode === MODE_FRENCH
      ? `${question.hint} Je ziet eerst het Nederlandse woord en kiest daarna het juiste Franse antwoord.`
      : question.hint;
  feedback.textContent = "Kies het antwoord dat volgens jou juist is.";
  feedback.className = "feedback";
  nextButton.classList.add("hidden");
  answersContainer.innerHTML = "";

  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.textContent = option;
    button.addEventListener("click", () => handleAnswer(option, button));
    answersContainer.appendChild(button);
  });

  updateStatus();
  progressBarFill.style.width = `${(quizState.currentIndex / quizState.questions.length) * 100}%`;
}

function handleAnswer(option, button) {
  if (quizState.answered) {
    return;
  }

  quizState.answered = true;
  const question = quizState.questions[quizState.currentIndex];
  const buttons = [...answersContainer.querySelectorAll(".answer-button")];

  buttons.forEach((entry) => {
    entry.classList.add("locked");
    entry.disabled = true;
    if (entry.textContent === question.correct) {
      entry.classList.add("correct");
    }
  });

  if (option === question.correct) {
    quizState.score += 1;
    quizState.streak += 1;
    button.classList.add("correct");
    feedback.textContent = `Juist! ${question.explanation}`;
    feedback.className = "feedback success";
  } else {
    quizState.streak = 0;
    button.classList.add("wrong");
    feedback.textContent = `Nog eens proberen in je hoofd: ${question.explanation}`;
    feedback.className = "feedback fail";
  }

  progressBarFill.style.width = `${((quizState.currentIndex + 1) / quizState.questions.length) * 100}%`;
  scoreValue.textContent = `${quizState.score}`;
  streakValue.textContent = `${quizState.streak}`;
  nextButton.classList.remove("hidden");
}

function finishRound() {
  const total = quizState.questions.length;
  const percentage = Math.round((quizState.score / total) * 100);
  const praise = quizState.mode === MODE_FRENCH
    ? percentage >= 85
      ? "Superknap. Die Franse woorden zitten al sterk in je hoofd."
      : percentage >= 60
        ? "Mooi bezig. Nog een Franse ronde en er blijft veel hangen."
        : "Goede start. Bekijk nog even de woordkaartjes en probeer daarna opnieuw."
    : percentage >= 85
      ? "Superknap. De ruimtekennis zit al stevig in je hoofd."
      : percentage >= 60
        ? "Mooi bezig. Nog een ronde en veel details gaan blijven hangen."
        : "Goede start. Kijk nog even naar de kaartjes en probeer daarna opnieuw.";

  summaryCard.classList.remove("hidden");
  summaryText.textContent = `Je had ${quizState.score} op ${total} in de ${getModeLabel(quizState.mode)}. ${praise}`;
  summaryStars.innerHTML = "";

  const starCount = Math.max(1, Math.round((percentage / 100) * 5));
  for (let index = 0; index < starCount; index += 1) {
    const star = document.createElement("span");
    summaryStars.appendChild(star);
  }

  questionTag.textContent = "Klaar";
  questionText.textContent = "De ronde is afgelopen.";
  questionHint.textContent = `Start een nieuwe ronde in de ${getModeLabel(quizState.mode)} of herhaal met de kaartjes hieronder.`;
  answersContainer.innerHTML = "";
  feedback.textContent = "Je kunt meteen opnieuw oefenen.";
  feedback.className = "feedback";
  nextButton.classList.add("hidden");
  progressValue.textContent = `${total} / ${total}`;
}

function startRound(mode = quizState.mode) {
  quizState.mode = mode;
  quizState.questions = buildRound(mode);
  quizState.currentIndex = 0;
  quizState.score = 0;
  quizState.streak = 0;
  quizState.answered = false;
  summaryCard.classList.add("hidden");
  renderStudyCards(mode);
  renderQuestion();
}

nextButton.addEventListener("click", () => {
  quizState.currentIndex += 1;
  renderQuestion();
});

startButton.addEventListener("click", () => startRound(MODE_ALL));
timelineButton.addEventListener("click", () => startRound(MODE_TIMELINE));
frenchButton.addEventListener("click", () => startRound(MODE_FRENCH));
restartButton.addEventListener("click", () => startRound(quizState.mode));

renderStudyCards(MODE_ALL);
updateStatus();
