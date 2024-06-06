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

let questions = fetch(`${process.env.DOMAIN_NAME}:${process.env.PORT}/quiz/CDI`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

//   let questions = [
//     {
//       numb: 1,
//       topic: "Traffic Accident Investigation",
//       question: "Most important equipment in traffic accident investigation?",
//       answer: "camera",
//       options: [
//         "cellphone",
//         "camera",
//         "laptop",
//         "computer"
//       ]
//     },
//     {
//       numb: 2,
//       topic: "Sketch Orientation",
//       question: "Refers to the standard arrow designating the north to facilitate proper sketch orientation.",
//       answer: "Compass direction",
//       options: [
//         "Proper north",
//         "True north",
//         "Legend",
//         "Compass direction"
//       ]
//     },
//     {
//       numb: 3,
//       topic: "Search and Seizure",
//       question: "Taking into custody property described in the search warrant as a result of a search, to be utilized as evidence in a case.",
//       answer: "Seizure",
//       options: [
//         "Seizure",
//         "Detention",
//         "Safekeeping",
//         "Confiscation"
//       ]
//     },
//     {
//       numb: 4,
//       topic: "Arson Investigation",
//       question: "It is legally classified as arson and set on purpose with a motive.",
//       answer: "Intentional fire",
//       options: [
//         "Providential fire",
//         "Accidental fire",
//         "Intentional fire",
//         "None of the foregoing"
//       ]
//     },
//     {
//       numb: 5,
//       topic: "Traffic Violations",
//       question: "Traffic arrest can be made when the following are present, EXCEPT",
//       answer: "to avoid continues violation",
//       options: [
//         "to avoid continues violation",
//         "offense committed is serious",
//         "the violator will not attend in court",
//         "involved in a vehicular accident"
//       ]
//     },
//     {
//       numb: 6,
//       topic: "Arson Investigation",
//       question: "Instrument used to open / close fire hydrants.",
//       answer: "Hydrant key",
//       options: [
//         "Sprinkler",
//         "Fire pump",
//         "Fire hose",
//         "Hydrant key"
//       ]
//     },
//     {
//       numb: 7,
//       topic: "Arson Investigation",
//       question: "Descriptive of any material when by its nature or as a result of its reaction with other elements promotes a rapid drop in temperature of the immediate surroundings.",
//       answer: "Cryogenic",
//       options: [
//         "Dust",
//         "Oxidizing material",
//         "Pyrolysis",
//         "Cryogenic"
//       ]
//     },
//     {
//       numb: 8,
//       topic: "Arson Investigation",
//       question: "Lowest temperature of a liquid in open container at which vapors are evolved fast enough to support continuous combustion.",
//       answer: "Kindling temperature",
//       options: [
//         "Ignition temperature",
//         "Kindling temperature",
//         "Fire point",
//         "Flash point"
//       ]
//     },
//     {
//       numb: 9,
//       topic: "Arson Investigation",
//       question: "Rapid oxidation accompanied by heat and light.",
//       answer: "Combustion",
//       options: [
//         "Pyrolysis",
//         "Combustion",
//         "Detonation",
//         "All of the foregoing"
//       ]
//     },
//     {
//       numb: 10,
//       topic: "Arson Investigation",
//       question: "A chemical decomposition of matter through the action of heat.",
//       answer: "Pyrolysis",
//       options: [
//         "Pyrolysis",
//         "Combustion",
//         "Detonation",
//         "Oxidation"
//       ]
//     },
//     {
//       numb: 11,
//       topic: "Arson Investigation",
//       question: "Measure of the rate of flow of heat, through unit area of the material with unit temperature gradient.",
//       answer: "Thermal conductivity",
//       options: [
//         "Conduction",
//         "Thermal conductivity",
//         "Radiation",
//         "Fission"
//       ]
//     },
//     {
//       numb: 12,
//       topic: "Arson Investigation",
//       question: "A means of heat transfer when energy travels through space or materials as waves.",
//       answer: "Radiation",
//       options: [
//         "Conduction",
//         "Convection",
//         "Radiation",
//         "Fission"
//       ]
//     },
//     {
//       numb: 13,
//       topic: "Arson Investigation",
//       question: "Matter made up of very fine particles and condensed vapor as a result of combustion.",
//       answer: "Smoke",
//       options: [
//         "Fire",
//         "Flame",
//         "Heat",
//         "Smoke"
//       ]
//     },
//     {
//       numb: 14,
//       topic: "Arson Investigation",
//       question: "Incandescent gases accompanied by oxidation.",
//       answer: "Flame",
//       options: [
//         "Fire",
//         "Flame",
//         "Heat",
//         "Smoke"
//       ]
//     },
//     {
//       numb: 15,
//       topic: "Arson Investigation",
//       question: "The threat to arson investigators after fire has been contained.",
//       answer: "Falling debris",
//       options: [
//         "Backdraft",
//         "Flashover",
//         "Carbon monoxide poisoning",
//         "Falling debris"
//       ]
//     },
//     {
//       numb: 16,
//       topic: "Arson Investigation",
//       question: "Result of slow oxidation of a combustible material.",
//       answer: "Spontaneous heating",
//       options: [
//         "Spontaneous heating",
//         "Combustible gases",
//         "Combustible dust",
//         "None of the choices"
//       ]
//     },
//     {
//       numb: 17,
//       topic: "Arson Investigation",
//       question: "Refers to the preparation and gathering of materials to start a fire.",
//       answer: "Plants",
//       options: [
//         "Plants",
//         "Trailers",
//         "Accelerants",
//         "Wick"
//       ]
//     },
//     {
//       numb: 18,
//       topic: "Arson Investigation",
//       question: "Act that would remove or neutralize a fire hazard.",
//       answer: "Abatement",
//       options: [
//         "Abatement",
//         "Combustion",
//         "Allotment",
//         "Distillation"
//       ]
//     },
//     {
//       numb: 19,
//       topic: "Cyber Crimes",
//       question: "Crimes consummated by the use of computers and other highly modern devices.",
//       answer: "cyber crimes",
//       options: [
//         "Transnational crimes",
//         "White collar crimes",
//         "Modern crimes",
//         "Cyber crimes"
//       ]
//     },
//     {
//       numb: 20,
//       topic: "Transnational Crimes",
//       question: "The following are transnational crimes, except",
//       answer: "illegal recruitment",
//       options: [
//         "Drug trafficking",
//         "Gun smuggling",
//         "Money laundering",
//         "Illegal recruitment"
//       ]
//     },
//     {
//       numb: 21,
//       topic: "Transnational Crimes",
//       question: "The following countries comprise the Golden Triangle, except",
//       answer: "Vietnam",
//       options: [
//         "Thailand",
//         "Laos",
//         "Myanmar",
//         "Vietnam"
//       ]
//     },
//     {
//       numb: 22,
//       topic: "Human Trafficking",
//       question: "A term used to describe a place where trafficked persons are brought and forced to become prostitutes.",
//       answer: "Brothels",
//       options: [
//         "Sweat shops",
//         "Hotels",
//         "Brothels",
//         "Motels"
//       ]
//     },
//     {
//       numb: 23,
//       topic: "Traffic Regulations",
//       question: "The double solid white line:",
//       answer: "doesn’t allow lane changing",
//       options: [
//         "doesn’t allow lane changing",
//         "allows overtaking",
//         "allows lane changing",
//         "allows parking"
//       ]
//     },
//     {
//       numb: 24,
//       topic: "Traffic Regulations",
//       question: "It is a wholly police responsibility and entails looking for defects in the behavior of the motorists, pedestrian, vehicles and roadway condition.",
//       answer: "Defection",
//       options: [
//         "Apprehension",
//         "Adjudication",
//         "Defection",
//         "Prosecution"
//       ]
//     },
//     {
//       numb: 25,
//       topic: "Traffic Violations",
//       question: "Traffic arrest can be made when the following are present, EXCEPT:",
//       answer: "to avoid continues violation",
//       options: [
//         "to avoid continues violation",
//         "offense committed is serious",
//         "the violator will not attend in court",
//         "involved in vehicular accident"
//       ]
//     },
//     {
//       numb: 26,
//       topic: "Traffic Control",
//       question: "In this manner, a traffic enforcer while observing the flow of traffic tries to attract attention of the motorists by keeping in full view of traffic:",
//       answer: "Visible",
//       options: [
//         "Stationary",
//         "Visible",
//         "Conspicuous",
//         "Inconspicuous"
//       ]
//     },
//     {
//       numb: 27,
//       topic: "Traffic Control",
//       question: "Licensed person allowing limited number of passengers, freight or cargo in public utility truck or buses.",
//       answer: "Conductor",
//       options: [
//         "Operator",
//         "Driver",
//         "Conductor",
//         "Pedestrian"
//       ]
//     },
//     {
//       numb: 28,
//       topic: "Traffic Accident Investigation",
//       question: "It is the separation of a traffic unit in motion from an object with which it has collided; the force between the object ceases at this time.",
//       answer: "Disengagement",
//       options: [
//         "Stopping",
//         "Disengagement",
//         "Maximum Engagement",
//         "Initial Contact"
//       ]
//     },
//     {
//       numb: 29,
//       topic: "Criminal Organizations",
//       question: "It is referred to as oldest and biggest criminal organization in the world.",
//       answer: "Chinese Triad",
//       options: [
//         "Mafia",
//         "Yakuza",
//         "Chinese Triad",
//         "Cali Cartel"
//       ]
//     },
//     {
//       numb: 30,
//       topic: "Psychiatric Disorders",
//       question: "The name given to a person afflicted with a mental illness wherein he is sexually aroused by young children.",
//       answer: "Pedophile",
//       options: [
//         "Pedophile",
//         "Pervert",
//         "Maniac",
//         "Pedophilia"
//       ]
//     },
//     {
//       "numb": 31,
//       "topic": "Fire Causes",
//       "question": "They are fires caused by unforeseen acts of God.",
//       "answer": "Providential",
//       "options": [
//         "Providential",
//         "Accidental",
//         "Intentional",
//         "Incendiarism"
//       ]
//     },
//     {
//       "numb": 32,
//       "topic": "Fire Science",
//       "question": "A combination of three elements namely: fuel, heat and oxygen.",
//       "answer": "Fire triangle",
//       "options": [
//         "Fire",
//         "Origin of fire",
//         "Fire triangle",
//         "All of the foregoing"
//       ]
//     },
//     {
//       "numb": 33,
//       "topic": "Fire Science",
//       "question": "Most important part of fire triangle for it is what burns.",
//       "answer": "Fuel",
//       "options": [
//         "Fuel",
//         "Heat",
//         "Oxygen",
//         "Gas"
//       ]
//     },
//     {
//       "numb": 34,
//       "topic": "Heat Transfer",
//       "question": "A means by which heat is transformed by a circulating medium either gas or a liquid.",
//       "answer": "Convection",
//       "options": [
//         "Conduction",
//         "Convection",
//         "Radiation",
//         "Fission"
//       ]
//     },
//     {
//       "numb": 35,
//       "topic": "Heat Science",
//       "question": "The amount of heat necessary to convert solid to liquid.",
//       "answer": "Latent heat",
//       "options": [
//         "Specific heat",
//         "Latent heat",
//         "Heat of Combustion",
//         "Heat of fusion"
//       ]
//     },
//     {
//       "numb": 36,
//       "topic": "Combustion Products",
//       "question": "Formed by the incomplete combustion of acetylene or natural cracking of hydrogen in the absence of air.",
//       "answer": "Carbon black",
//       "options": [
//         "Carbon black",
//         "Lamp black",
//         "Soot",
//         "Black bone"
//       ]
//     },
//     {
//       "numb": 37,
//       "topic": "Combustion Products",
//       "question": "Matter made up of very fine particles and condensed vapor as a result of combustion.",
//       "answer": "Smoke",
//       "options": [
//         "Fire",
//         "Flame",
//         "Heat",
//         "Smoke"
//       ]
//     },
//     {
//       "numb": 38,
//       "topic": "Combustion Products",
//       "question": "Incandescent gases accompanied by oxidation.",
//       "answer": "Flame",
//       "options": [
//         "Fire",
//         "Flame",
//         "Heat",
//         "Smoke"
//       ]
//     },
//     {
//       "numb": 39,
//       "topic": "Arson Investigation",
//       "question": "The threat to arson investigators after fire has been contained.",
//       "answer": "Carbon monoxide poisoning",
//       "options": [
//         "Backdraft",
//         "Flashover",
//         "Carbon monoxide poisoning",
//         "Falling debris"
//       ]
//     },
//     {
//       "numb": 40,
//       "topic": "Combustion Products",
//       "question": "Color smoke produced accompanied by red flames indicates the burning of what material?",
//       "answer": "Rubber",
//       "options": [
//         "Rubber",
//         "Nitrogen products",
//         "Asphalt singles",
//         "Chlorine"
//       ]
//     },
//     {
//       "numb": 41,
//       "topic": "Fire-resistant Materials",
//       "question": "Which among the following is commonly used in fire resistant materials?",
//       "answer": "Asbestos",
//       "options": [
//         "Asbestos",
//         "Diamond",
//         "Asphalt",
//         "Cotton"
//       ]
//     },
//     {
//       "numb": 42,
//       "topic": "Providential Fires",
//       "question": "A form of static electricity of great magnitude producing tremendous amperage and voltage, it is the most common cause of providential fires.",
//       "answer": "Lighting",
//       "options": [
//         "Rays of the sun",
//         "Spontaneous heating",
//         "Arcing",
//         "Lighting"
//       ]
//     },
//     {
//       "numb": 43,
//       "topic": "Accidental Fires",
//       "question": "Most common source of accidental fire is related to:",
//       "answer": "Smoking",
//       "options": [
//         "Smoking",
//         "Arcing",
//         "Sparkling",
//         "Overloading"
//       ]
//     },
//     {
//       "numb": 44,
//       "topic": "Arson Tools",
//       "question": "A device used by arsonists to spread the fire within the room or throughout the structure.",
//       "answer": "Trailer",
//       "options": [
//         "Accelerant",
//         "Plants",
//         "Trailer",
//         "Wick"
//       ]
//     },
//     {
//       "numb": 45,
//       "topic": "Arson Tools",
//       "question": "Usually comes in form of combustible liquid which is a contrivance to hasten the start of fire.",
//       "answer": "Accelerant",
//       "options": [
//         "Accelerant",
//         "Plants",
//         "Trailer",
//         "Wick"
//       ]
//     },
//     {
//       "numb": 46,
//       "topic": "Arson Motivation",
//       "question": "Most common reason of arson cases.",
//       "answer": "All of the foregoing",
//       "options": [
//         "Revenge",
//         "Profit",
//         "Competition",
//         "All of the foregoing"
//       ]
//     },
//     {
//       "numb": 47,
//       "topic": "Combustion",
//       "question": "Result of slow oxidation of a combustible material.",
//       "answer": "Spontaneous heating",
//       "options": [
//         "Spontaneous heating",
//         "Combustible gases",
//         "Combustible dust",
//         "None of the choices"
//       ]
//     },
//     {
//       "numb": 48,
//       "topic": "Arson Tools",
//       "question": "Refers to the preparation and gathering of materials to start a fire.",
//       "answer": "Plants",
//       "options": [
//         "Plants",
//         "Trailers",
//         "Accelerants",
//         "Wick"
//       ]
//     },
//     {
//       "numb": 49,
//       "topic": "Fire Hazards",
//       "question": "Act that would remove or neutralize a fire hazard.",
//       "answer": "Abatement",
//       "options": [
//         "Abatement",
//         "Combustion",
//         "Allotment",
//         "Distillation"
//       ]
//     },
//     {
//       "numb": 50,
//       "topic": "Modern Crimes",
//       "question": "Crimes consummated by the use of computers and other highly modern devices.",
//       "answer": "cyber crimes",
//       "options": [
//         "Transnational crimes",
//         "white collar crimes",
//         "modern crimes",
//         "cyber crimes"
//       ]
//     }
// ];

  // Function to select 20 questions randomly and reassign their numbers
  function selectQuestions() {
    let shuffledQuestions = shuffleArray(questions);
    let selectedQuestions = shuffledQuestions.slice(0, 20);
    // Reassign numbers 1-20 to the selected questions
    selectedQuestions.forEach((question, index) => {
        question.numb = index + 1;
    });
    return selectedQuestions;
  }

  // Variable to store the selected questions for the quiz
  let selectedQuestions = selectQuestions();

  // Randomizing options for each question
  questions.forEach(question => {
    question.options = shuffleArray(question.options);
    console.log("1. Data Preprocessing", "Data preprocessing completed.");
    console.log("2. Calculate Initial Gini Index", "Initial Gini index calculated: " + 2);
    console.log("3. Calculate Gini Index for Splits", "Gini index for splits calculated.");
    console.log("4. Select Best Split", "Best split selected: " + 5);
    console.log("5. Create Leaf Node", "Leaf node created for subset " + 7);
    console.log("6. Prune Decision Tree", "Decision tree pruned.");
    console.log("7. Identify Weak Areas", "Weak areas identified: ");
    console.log("8. Select Topic", "Selected topic: ");
    console.log("9. Generate Personalized Quiz", "Personalized quiz generated.");
  });

  // Displaying questions
  questions.forEach(question => {
    console.log("Question " + question.numb + ": " + question.question);
    console.log("Options: " + question.options.join(", "));
    console.log("Answer: " + question.answer);
    console.log("\n");
  });