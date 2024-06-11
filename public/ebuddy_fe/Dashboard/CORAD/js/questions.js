// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Array of questions
  //Traffic Accident Investigation
  //Sketch Orientation
  //Search and Seizure
  //Arson Investigation
  //Traffic Violations
  //Cyber Crimes
  //Transnational Crimes
  //Human Trafficking
  //Traffic Regulations
  //Traffic Control
  //Criminal Organizations
  //Psychiatric Disorders
  
  let questions = [
    {
      numb: 1,
      topic: "Traffic Accident Investigation",
      question: "Most important equipment in traffic accident investigation?",
      answer: "camera",
      options: [
        "cellphone",
        "camera",
        "laptop",
        "computer"
      ]
    },
    {
      numb: 2,
      topic: "Sketch Orientation",
      question: "Refers to the standard arrow designating the north to facilitate proper sketch orientation.",
      answer: "Compass direction",
      options: [
        "Proper north",
        "True north",
        "Legend",
        "Compass direction"
      ]
    },
    {
      numb: 3,
      topic: "Search and Seizure",
      question: "Taking into custody property described in the search warrant as a result of a search, to be utilized as evidence in a case.",
      answer: "Seizure",
      options: [
        "Seizure",
        "Detention",
        "Safekeeping",
        "Confiscation"
      ]
    },
    {
      numb: 4,
      topic: "Arson Investigation",
      question: "It is legally classified as arson and set on purpose with a motive.",
      answer: "Intentional fire",
      options: [
        "Providential fire",
        "Accidental fire",
        "Intentional fire",
        "None of the foregoing"
      ]
    },
    {
      numb: 5,
      topic: "Traffic Violations",
      question: "Traffic arrest can be made when the following are present, EXCEPT",
      answer: "to avoid continues violation",
      options: [
        "to avoid continues violation",
        "offense committed is serious",
        "the violator will not attend in court",
        "involved in a vehicular accident"
      ]
    },
    {
      numb: 6,
      topic: "Arson Investigation",
      question: "Instrument used to open / close fire hydrants.",
      answer: "Hydrant key",
      options: [
        "Sprinkler",
        "Fire pump",
        "Fire hose",
        "Hydrant key"
      ]
    },
    {
      numb: 7,
      topic: "Arson Investigation",
      question: "Descriptive of any material when by its nature or as a result of its reaction with other elements promotes a rapid drop in temperature of the immediate surroundings.",
      answer: "Cryogenic",
      options: [
        "Dust",
        "Oxidizing material",
        "Pyrolysis",
        "Cryogenic"
      ]
    },
    {
      numb: 8,
      topic: "Arson Investigation",
      question: "Lowest temperature of a liquid in open container at which vapors are evolved fast enough to support continuous combustion.",
      answer: "Kindling temperature",
      options: [
        "Ignition temperature",
        "Kindling temperature",
        "Fire point",
        "Flash point"
      ]
    },
    {
      numb: 9,
      topic: "Arson Investigation",
      question: "Rapid oxidation accompanied by heat and light.",
      answer: "Combustion",
      options: [
        "Pyrolysis",
        "Combustion",
        "Detonation",
        "All of the foregoing"
      ]
    },
    {
      numb: 10,
      topic: "Arson Investigation",
      question: "A chemical decomposition of matter through the action of heat.",
      answer: "Pyrolysis",
      options: [
        "Pyrolysis",
        "Combustion",
        "Detonation",
        "Oxidation"
      ]
    },
    {
      numb: 11,
      topic: "Arson Investigation",
      question: "Measure of the rate of flow of heat, through unit area of the material with unit temperature gradient.",
      answer: "Thermal conductivity",
      options: [
        "Conduction",
        "Thermal conductivity",
        "Radiation",
        "Fission"
      ]
    },
    {
      numb: 12,
      topic: "Arson Investigation",
      question: "A means of heat transfer when energy travels through space or materials as waves.",
      answer: "Radiation",
      options: [
        "Conduction",
        "Convection",
        "Radiation",
        "Fission"
      ]
    },
    {
      numb: 13,
      topic: "Arson Investigation",
      question: "Matter made up of very fine particles and condensed vapor as a result of combustion.",
      answer: "Smoke",
      options: [
        "Fire",
        "Flame",
        "Heat",
        "Smoke"
      ]
    },
    {
      numb: 14,
      topic: "Arson Investigation",
      question: "Incandescent gases accompanied by oxidation.",
      answer: "Flame",
      options: [
        "Fire",
        "Flame",
        "Heat",
        "Smoke"
      ]
    },
    {
      numb: 15,
      topic: "Arson Investigation",
      question: "The threat to arson investigators after fire has been contained.",
      answer: "Falling debris",
      options: [
        "Backdraft",
        "Flashover",
        "Carbon monoxide poisoning",
        "Falling debris"
      ]
    },
    {
      numb: 16,
      topic: "Arson Investigation",
      question: "Result of slow oxidation of a combustible material.",
      answer: "Spontaneous heating",
      options: [
        "Spontaneous heating",
        "Combustible gases",
        "Combustible dust",
        "None of the choices"
      ]
    },
    {
      numb: 17,
      topic: "Arson Investigation",
      question: "Refers to the preparation and gathering of materials to start a fire.",
      answer: "Plants",
      options: [
        "Plants",
        "Trailers",
        "Accelerants",
        "Wick"
      ]
    },
    {
      numb: 18,
      topic: "Arson Investigation",
      question: "Act that would remove or neutralize a fire hazard.",
      answer: "Abatement",
      options: [
        "Abatement",
        "Combustion",
        "Allotment",
        "Distillation"
      ]
    },
    {
      numb: 19,
      topic: "Cyber Crimes",
      question: "Crimes consummated by the use of computers and other highly modern devices.",
      answer: "cyber crimes",
      options: [
        "Transnational crimes",
        "White collar crimes",
        "Modern crimes",
        "Cyber crimes"
      ]
    },
    {
      numb: 20,
      topic: "Transnational Crimes",
      question: "The following are transnational crimes, except",
      answer: "illegal recruitment",
      options: [
        "Drug trafficking",
        "Gun smuggling",
        "Money laundering",
        "Illegal recruitment"
      ]
    },
    {
      numb: 21,
      topic: "Transnational Crimes",
      question: "The following countries comprise the Golden Triangle, except",
      answer: "Vietnam",
      options: [
        "Thailand",
        "Laos",
        "Myanmar",
        "Vietnam"
      ]
    },
    {
      numb: 22,
      topic: "Human Trafficking",
      question: "A term used to describe a place where trafficked persons are brought and forced to become prostitutes.",
      answer: "brothels",
      options: [
        "Sweat shops",
        "Hotels",
        "Brothels",
        "Motels"
      ]
    },
    {
      numb: 23,
      topic: "Traffic Regulations",
      question: "The double solid white line:",
      answer: "doesn’t allow lane changing",
      options: [
        "doesn’t allow lane changing",
        "allows overtaking",
        "allows lane changing",
        "allows parking"
      ]
    },
    {
      numb: 24,
      topic: "Traffic Regulations",
      question: "It is a wholly police responsibility and entails looking for defects in the behavior of the motorists, pedestrian, vehicles and roadway condition.",
      answer: "Defection",
      options: [
        "Apprehension",
        "Adjudication",
        "Defection",
        "Prosecution"
      ]
    },
    {
      numb: 25,
      topic: "Traffic Violations",
      question: "Traffic arrest can be made when the following are present, EXCEPT:",
      answer: "to avoid continues violation",
      options: [
        "to avoid continues violation",
        "offense committed is serious",
        "the violator will not attend in court",
        "involved in vehicular accident"
      ]
    },
    {
      numb: 26,
      topic: "Traffic Control",
      question: "In this manner, a traffic enforcer while observing the flow of traffic tries to attract attention of the motorists by keeping in full view of traffic:",
      answer: "Visible",
      options: [
        "Stationary",
        "Visible",
        "Conspicuous",
        "Inconspicuous"
      ]
    },
    {
      numb: 27,
      topic: "Traffic Control",
      question: "Licensed person allowing limited number of passengers, freight or cargo in public utility truck or buses.",
      answer: "Conductor",
      options: [
        "Operator",
        "Driver",
        "Conductor",
        "Pedestrian"
      ]
    },
    {
      numb: 28,
      topic: "Traffic Accident Investigation",
      question: "It is the separation of a traffic unit in motion from an object with which it has collided; the force between the object ceases at this time.",
      answer: "Disengagement",
      options: [
        "Stopping",
        "Disengagement",
        "Maximum Engagement",
        "Initial Contact"
      ]
    },
    {
      numb: 29,
      topic: "Criminal Organizations",
      question: "It is referred to as oldest and biggest criminal organization in the world.",
      answer: "Chinese Triad",
      options: [
        "Mafia",
        "Yakuza",
        "Chinese Triad",
        "Cali Cartel"
      ]
    },
    {
      numb: 30,
      topic: "Psychiatric Disorders",
      question: "The name given to a person afflicted with a mental illness wherein he is sexually aroused by young children.",
      answer: "Pedophile",
      options: [
        "Pedophile",
        "Pervert",
        "Maniac",
        "Pedophilia"
      ]
    }
];

  
  
  // Randomizing options for each question
  questions.forEach(question => {
    question.options = shuffleArray(question.options);
  });
  
  // Displaying questions
  questions.forEach(question => {
    console.log("Question " + question.numb + ": " + question.question);
    console.log("Options: " + question.options.join(", "));
    console.log("Answer: " + question.answer);
    console.log("\n");
  });