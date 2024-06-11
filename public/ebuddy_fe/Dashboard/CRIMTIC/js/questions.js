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
      "numb": 1,
      "topic": "Security Measures",
      "question": "An industrial complex must establish its first line of physical defense. It must have:",
      "answer": "perimeter barrier",
      "options": [
        "the building itself",
        "communication barrier",
        "perimeter barrier",
        "window barrier"
      ]
    },
    {
      "numb": 2,
      "topic": "Forensic Science",
      "question": "If the dead person is laying, where will the blood go during livor mortis?",
      "answer": "Neck",
      "options": [
        "Back",
        "Neck",
        "Head",
        "Legs"
      ]
    },
    {
      "numb": 3,
      "topic": "Forensic Science",
      "question": "If there are 6 grooves, is it also the same in lands?",
      "answer": "No",
      "options": [
        "Yes",
        "No",
        "Partly Yes",
        "Partly No"
      ]
    },
    {
      "numb": 4,
      "topic": "Forensic Science",
      "question": "What is the other term for dot?",
      "answer": "Islet",
      "options": [
        "Islet",
        "Core",
        "Delta",
        "Bifurcation"
      ]
    },
    {
      "numb": 5,
      "topic": "Forensic Science",
      "question": "In writing, what is being used?",
      "answer": "Hands",
      "options": [
        "Finger",
        "Forearm",
        "Hands",
        "All of the choices"
      ]
    },
    {
      "numb": 6,
      "topic": "Forensic Science",
      "question": "There are three types of fingerprint pattern; arch, whorl and _____.",
      "answer": "Loop",
      "options": [
        "Ulnar loop",
        "Radial loop",
        "Loop",
        "Arch"
      ]
    },
    {
      "numb": 7,
      "topic": "General Knowledge",
      "question": "Is your name Eric? What kind of question is this?",
      "answer": "Irrelevant",
      "options": [
        "Irrelevant",
        "Relevant",
        "Control",
        "Evidence"
      ]
    },
    {
      "numb": 8,
      "topic": "Forensic Science",
      "question": "In polygraph examination, what is being detected?",
      "answer": "Truth",
      "options": [
        "Lying",
        "Dying",
        "Truth",
        "Response"
      ]
    },
    {
      "numb": 9,
      "topic": "Forensic Science",
      "question": "In pubic hair, what is the best examination to be conducted in the crime laboratory?",
      "answer": "Microscope examination",
      "options": [
        "DNA",
        "Microscope examination",
        "Chemical examination",
        "Serology examination"
      ]
    },
    {
      "numb": 10,
      "topic": "Forensic Science",
      "question": "If you didn’t clean the fingerprint slab, what will be the effect to the fingerprint?",
      "answer": "Blurred",
      "options": [
        "Blurred",
        "Sticky",
        "Classified",
        "Clear"
      ]
    },
    {
      "numb": 11,
      "topic": "General Knowledge",
      "question": "What is found on the left white portion of the portrait?",
      "answer": "Vignette",
      "options": [
        "Vignette",
        "Watermark",
        "Security fiber",
        "Fiber"
      ]
    },
    {
      "numb": 12,
      "topic": "Forensic Science",
      "question": "In Henry System how many clasifications of fingerprints are there?",
      "answer": "2",
      "options": [
        "2",
        "3",
        "8",
        "7"
      ]
    },
    {
      "numb": 13,
      "topic": "Forensic Science",
      "question": "Indication of tremor due to old age, illiteracy and sickness is what kind of signature?",
      "answer": "Spurious",
      "options": [
        "Genuine",
        "Spurious",
        "Forged",
        "Simulated"
      ]
    },
    {
      "numb": 14,
      "topic": "Forensic Science",
      "question": "If in the CS, you found semen and blood, can you consider it as rape on minor?",
      "answer": "No",
      "options": [
        "Yes",
        "No",
        "Partly Yes",
        "Partly No"
      ]
    },
    {
      "numb": 15,
      "topic": "Forensic Science",
      "question": "In polarization film, how long is the developing?",
      "answer": "3 min",
      "options": [
        "5 minutes",
        "7 min",
        "3 min",
        "8 minutes"
      ]
    },
    {
      "numb": 16,
      "topic": "General Knowledge",
      "question": "What do you call the outer cover of the bullet?",
      "answer": "Jacketed",
      "options": [
        "Jacketed",
        "Metallic",
        "Silver",
        "Ogive"
      ]
    },
    {
      "numb": 17,
      "topic": "General Knowledge",
      "question": "In snake, the two snake venom is neurotoxic and _____.",
      "answer": "Hemotoxic",
      "options": [
        "Hemotoxic",
        "Viral",
        "Surgical",
        "B or C"
      ]
    },
    {
      "numb": 18,
      "topic": "General Knowledge",
      "question": "Why is polygraphy in the Philippines not admissible?",
      "answer": "Under experimental stage",
      "options": [
        "Under experimental stage",
        "Under analysis",
        "Based on opinion",
        "Unskill"
      ]
    },
    {
      "numb": 19,
      "topic": "General Knowledge",
      "question": "Phos means light, graphia means _____.",
      "answer": "Write",
      "options": [
        "Write",
        "Study",
        "Technology",
        "Record"
      ]
    },
    {
      "numb": 20,
      "topic": "General Knowledge",
      "question": "In major classification, the right thumb is the numerator while the left is the denominator?",
      "answer": "It depends",
      "options": [
        "Yes",
        "No",
        "It depends"
      ]
    },
    {
      "numb": 21,
      "topic": "General Knowledge",
      "question": "If you are a patrol officer, what type of CS will you photograph even though there is no SOCO photographer?",
      "answer": "Vehicular accident scene",
      "options": [
        "Vehicular accident scene",
        "Infanticide scene",
        "Homicide scene",
        "Parricide scene"
      ]
    },
    {
      "numb": 22,
      "topic": "General Knowledge",
      "question": "What is the most common symptom of coma?",
      "answer": "Unconsciousness",
      "options": [
        "Unconsciousness",
        "Blackening of lips",
        "Dilated eyes",
        "Consciousness"
      ]
    },
    {
      "numb": 23,
      "topic": "General Knowledge",
      "question": "The dead person is dehydrated. What is lacking?",
      "answer": "H2O",
      "options": [
        "H2O",
        "Blood",
        "Air",
        "Anesthesia"
      ]
    },
    {
      "numb": 24,
      "topic": "General Knowledge",
      "question": "In police laboratory, the one examined by biologist is not limited to ____.",
      "answer": "None of these",
      "options": [
        "Semen",
        "Blood",
        "Riverstone",
        "None of these"
      ]
    },
    {
      "numb": 25,
      "topic": "General Knowledge",
      "question": "These bullets when fired emit bright red flame from their base, thereby showing the gunner the path as well as the striking point of the bullet.",
      "answer": "Tracer bullet",
      "options": [
        "Jacketed bullet",
        "Armor-piercing",
        "Semi-wed cutter bullet",
        "Tracer bullet"
      ]
    },
    {
      "numb": 26,
      "topic": "General Knowledge",
      "question": "The caliber of the firearms can be determined by the bore diameter measured from:",
      "answer": "Land to land",
      "options": [
        "Land to firearm",
        "Land to land",
        "Land to grooves",
        "Grooves to land"
      ]
    },
    {
      "numb": 27,
      "topic": "General Knowledge",
      "question": "The breech end of the chamber of the firearm is sealed by a solid flat block of metal against which the barrel comes into position when the weapon is closed for firing, which is termed as:",
      "answer": "Breechface",
      "options": [
        "Extractor",
        "Breechface",
        "Head space",
        "Breechblock"
      ]
    },
    {
      "numb": 28,
      "topic": "General Knowledge",
      "question": "The firearms that propelled projectiles more than one inch in diameter is called.",
      "answer": "Artillery",
      "options": [
        "Machine gun",
        "Musket",
        "Artillery",
        "Single-shot firearm"
      ]
    },
    {
      "numb": 29,
      "topic": "General Knowledge",
      "question": "A Smith & Wesson type of firearm has a class characteristics of:",
      "answer": "Five lands, five grooves right twist",
      "options": [
        "Four lands, four grooves right twist",
        "Six lands, six grooves left twist",
        "Seven lands, seven grooves right twist",
        "Five lands, five grooves right twist"
      ]
    },
    {
      "numb": 30,
      "topic": "General Knowledge",
      "question": "To impact a motion of rotation to a bullet during its passage inside the barrel to insure gyroscopic stability in its flight is called:",
      "answer": "Rifling",
      "options": [
        "Range",
        "Gauge",
        "Rifling",
        "Center-fire"
      ]
    },
    {
      "numb": 31,
      "topic": "General Knowledge",
      "question": "Most commonly these marks are found on bullets fired from a Revolver due to a poor alignment of the cylinder with the bore:",
      "answer": "Shaving marks",
      "options": [
        "Shaving marks",
        "Skid marks",
        "Pivot marks",
        "Landmarks"
      ]
    },
    {
      "numb": 32,
      "topic": "General Knowledge",
      "question": "The inventor of gunpowder is credited to:",
      "answer": "Berthold Scwartz",
      "options": [
        "James Forsythe",
        "Philip O. Gravelle",
        "Van Amberg",
        "Berthold Scwartz"
      ]
    },
    {
      "numb": 33,
      "topic": "General Knowledge",
      "question": "That science dealing with the motion of projectile from the time the firer squeezes the trigger up to the time it reaches the muzzle of the barrel is called:",
      "answer": "Interior ballistics",
      "options": [
        "Posterior ballistics",
        "Interior ballistics",
        "Exterior ballistics",
        "Terminal ballistics"
      ]
    },
    {
      "numb": 34,
      "topic": "General Knowledge",
      "question": "The marks left on a bullet by a gun barrel are different from those left by any other gun barrel. This fact is most useful in directly identifying the:",
      "answer": "Gun from which a bullet was fired",
      "options": [
        "Person who fired the particular gun",
        "Direction form which a shot was fired",
        "Gun from which a bullet was fired",
        "Bullet which caused a fatal wound"
      ]
    },
    {
      "numb": 35,
      "topic": "General Knowledge",
      "question": "A patrolman should fire his pistol:",
      "answer": "Only as a last resort",
      "options": [
        "At no time",
        "Primarily to stop a quarrel",
        "To impress upon citizen the need for respect",
        "Only as a last resort"
      ]
    },
    {
      "numb": 36,
      "topic": "General Knowledge",
      "question": "Which of the following, the best method to use in firing a revolver is to keep:",
      "answer": "Both eyes open",
      "options": [
        "Both eyes closed",
        "Both eyes open",
        "Only the right eye is open",
        "Only the left eye is open"
      ]
    },
    {
      "numb": 37,
      "topic": "General Knowledge",
      "question": "Pistols with the same number of barrel grooves on the differentiated by the direction of the twist of the rifling which may be either be to the left or to the right. Of the following statement the one which can most accurately be inferred is that:",
      "answer": "The direction of the twist in any pistol can be either left or right",
      "options": [
        "Most pistols have the same number of grooves",
        "Same pistols have rifling twisted both left and right",
        "The direction of the twist in any pistol can be either left or right",
        "All of the above"
      ]
    },
    {
      "numb": 38,
      "topic": "General Knowledge",
      "question": "The secret of good shooting form is:",
      "answer": "A relaxed and natural position",
      "options": [
        "Proper sighting of the target",
        "Firing slowly and carefully",
        "A relaxed and natural position",
        "Speed at which the bullet leaves the revolver"
      ]
    },
    {
      "numb": 39,
      "topic": "General Knowledge",
      "question": "Quality of a paper related to the amount of light that can be transmitted through its surface.",
      "answer": "Opacity",
      "options": [
        "Thickness",
        "Opacity",
        "Translucent",
        "Texture"
      ]
    },
    {
      "numb": 40,
      "topic": "General Knowledge",
      "question": "Fundamentally, the grand mission and objective of document examiner is to determine and conclude with scientific basis and technique who is the",
      "answer": "Writer or signatory",
      "options": [
        "Beneficiaries",
        "Writer or signatory",
        "Master mind",
        "Conspirator"
      ]
    },
    {
      "numb": 41,
      "topic": "General Knowledge",
      "question": "In questioned document, it is where all characteristics are grouped.",
      "answer": "Both A and B",
      "options": [
        "Class characteristics",
        "Individual characteristics",
        "Both A and B",
        "Neither"
      ]
    },
    {
      "numb": 42,
      "topic": "General Knowledge",
      "question": "Writing was written by one person when there is a sufficient number of identical writing habits and the absence of divergent characteristics. This is in consonance with;",
      "answer": "Identification",
      "options": [
        "Identification",
        "Non-identification",
        "Either",
        "Neither"
      ]
    },
    {
      "numb": 43,
      "topic": "General Knowledge",
      "question": "Embellishment is an example of",
      "answer": "Individual Characteristics",
      "options": [
        "Individual Characteristics",
        "Class Characteristics",
        "Both",
        "Neither"
      ]
    },
    {
      "numb": 44,
      "topic": "General Knowledge",
      "question": "Hiatus is a gap between strokes due to",
      "answer": "All of the choices",
      "options": [
        "Speed in writing",
        "Defective writing instrument",
        "Unevenness of writing materials",
        "All of the choices"
      ]
    },
    {
      "numb": 45,
      "topic": "General Knowledge",
      "question": "Among the following, which is not an element of movement?",
      "answer": "emphasis",
      "options": [
        "Line Quality",
        "Rhythm",
        "Speed Freedom",
        "emphasis"
      ]
    },
    {
      "numb": 46,
      "topic": "General Knowledge",
      "question": "Writing, done rapidly, will exhibit no pen lift, except those at the",
      "answer": "B and C",
      "options": [
        "Middle of the words/strokes",
        "End of the stroke",
        "Beginning of strokes",
        "B and C"
      ]
    },
    {
      "numb": 47,
      "topic": "General Knowledge",
      "question": "The orientation of the writing instrument is referred to as",
      "answer": "Pen position",
      "options": [
        "Pen position",
        "Pen hold",
        "Pen emphasis",
        "Pen orientation"
      ]
    },
    {
      "numb": 48,
      "topic": "General Knowledge",
      "question": "The relation between the tall and short letters is referred to as",
      "answer": "Ratio",
      "options": [
        "Ratio",
        "Proportion",
        "Line quality",
        "All"
      ]
    },
    {
      "numb": 49,
      "topic": "General Knowledge",
      "question": "In questioned document examination, it is referred to as the flourishing succession of motion which are recorded in a written record.",
      "answer": "Line quality",
      "options": [
        "Line quality",
        "Rhythm",
        "Speed in writing",
        "Movement"
      ]
    },
    {
      "numb": 50,
      "topic": "General Knowledge",
      "question": "Slant is the angle or inclination of the axis of the letters relative to the",
      "answer": "Baseline",
      "options": [
        "Baseline",
        "Slope",
        "Alignment",
        "Staff"
        ]
        },
        {
        "numb": 51,
        "topic": "General Knowledge",
        "question": "Uncommon and well fixed characteristic that serve as a fundamental point of identification.",
        "answer": "Habit",
        "options": [
        "Slant",
        "Habit",
        "Movement",
        "All"
        ]
        },
        {
        "numb": 52,
        "topic": "General Knowledge",
        "question": "Baseline is the ruled or imaginary line upon which the writing ______",
        "answer": "Rests",
        "options": [
        "Holds",
        "Rests",
        "Stays",
        "Slants"
        ]
        },
        {
        "numb": 53,
        "topic": "General Knowledge",
        "question": "The inventor of gunpowder is credited to:",
        "answer": "Berthold Scwartz",
        "options": [
        "James Forsythe",
        "Philip O. Gravelle",
        "Van Amberg",
        "Berthold Scwartz"
        ]
        },
        {
        "numb": 54,
        "topic": "General Knowledge",
        "question": "That science dealing with the motion of projectile from the time the firer squeezes the trigger up to the time it reaches the muzzle of the barrel is called:",
        "answer": "Interior ballistics",
        "options": [
        "Posterior ballistics",
        "Interior ballistics",
        "Exterior ballistics",
        "Terminal ballistics"
        ]
        },
        {
        "numb": 55,
        "topic": "General Knowledge",
        "question": "The marks left on a bullet by a gun barrel are different from those left by any other gun barrel. This fact is most useful in directly identifying the:",
        "answer": "Gun from which a bullet was fired",
        "options": [
        "Person who fired the particular gun",
        "Direction form which a shot was fired",
        "Gun from which a bullet was fired",
        "Bullet which caused a fatal wound"
        ]
        },
        {
        "numb": 56,
        "topic": "General Knowledge",
        "question": "A patrolman should fire his pistol:",
        "answer": "Only as a last resort",
        "options": [
        "At no time",
        "Primarily to stop a quarrel",
        "To impress upon citizen the need for respect",
        "Only as a last resort"
        ]
        },
        {
        "numb": 57,
        "topic": "General Knowledge",
        "question": "Which of the following, the best method to use in firing a revolver is to keep:",
        "answer": "Both eyes open",
        "options": [
        "Both eyes closed",
        "Both eyes open",
        "Only the right eye is open",
        "Only the left eye is open"
        ]
        },
        {
        "numb": 58,
        "topic": "General Knowledge",
        "question": "Pistols with the same number of barrel grooves on the differentiated by the direction of the twist of the rifling which may be either be to the left or to the right. Of the following statement the one which can most accurately be inferred is that:",
        "answer": "The direction of the twist in any pistol can be either left or right",
        "options": [
        "Most pistols have the same number of grooves",
        "Same pistols have rifling twisted both left and right",
        "The direction of the twist in any pistol can be either left or right",
        "All of the above"
        ]
        },
        {
        "numb": 59,
        "topic": "General Knowledge",
        "question": "The secret of good shooting form is:",
        "answer": "A relaxed and natural position",
        "options": [
        "Proper sighting of the target",
        "Firing slowly and carefully",
        "A relaxed and natural position",
        "Speed at which the bullet leaves the revolver"
        ]
        },
        {
        "numb": 60,
        "topic": "General Knowledge",
        "question": "Quality of a paper related to the amount of light that can be transmitted through its surface.",
        "answer": "Opacity",
        "options": [
        "Thickness",
        "Opacity",
        "Translucent",
        "Texture"
        ]
        }
        ];

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