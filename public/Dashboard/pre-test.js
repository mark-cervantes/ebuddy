// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Array of questions
  let questions = [
    {
      numb: 1,
      subject: "Crime Detection and Investigation",
      question: "What is the penalty when a police officer failed to appear in court to testify in a drug case without justifiable reason?",
      answer: "12 to 20 yrs imprisonment",
      options: [
        "12 to 20 yrs imprisonment",
        "20 to 40 yrs imprisonment",
        "Life imprisonment",
        "Death"
      ]
    },
    {
      numb: 2,
      subject: "Crime Detection and Investigation",
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
      numb: 3,
      subject: "Crime Detection and Investigation",
      question: "The temperature at which flammable liquid form a vapor-air mixture that ignites.",
      answer: "Ignition temperature",
      options: [
        "Ignition temperature",
        "Kindling temperature",
        "Fire point",
        "Flash point"
      ]
    },
    {
      numb: 4,
      subject: "Crime Detection and Investigation",
      question: "The primary reason a finished sketch is made from a rough sketch is for",
      answer: "courtroom presentation",
      options: [
        "scale and proportion",
        "future use",
        "accuracy and clarity",
        "courtroom presentation"
      ]
    },
    {
      numb: 5,
      subject: "Crime Detection and Investigation",
      question: "The Access Devices Regulation Act of 1998:",
      answer: "RA 8484",
      options: [
        "RA 8484",
        "RA 7877",
        "RA 7080",
        "RA 8353"
      ]
    },
    {
      numb: 6,
      subject: "Crime Detection and Investigation",
      question: "Clandestine operation in police parlance.",
      answer: "Surveillance",
      options: [
        "Covert intelligence",
        "Secret activity",
        "Over intelligence",
        "Surveillance"
      ]
    },
    {
      numb: 7,
      subject: "Crime Detection and Investigation",
      question: "It is the physical possibility that the suspect could have committed the crime.",
      answer: "Opportunity",
      options: [
        "Motive",
        "Intent",
        "Opportunity",
        "Deceit"
      ]
    },
    {
      numb: 8,
      subject: "Crime Detection and Investigation",
      question: "Employed where a general impression of the subject’s habits and associate are required.",
      answer: "Loose tail shadowing",
      options: [
        "Surveillance",
        "Loose tail shadowing",
        "Rough shadowing",
        "Close tail shadowing"
      ]
    },
    {
      numb: 9,
      subject: "Crime Detection and Investigation",
      question: "Refers to a person who manages or owns houses of ill-refute whereby the business of prostitution is conducted.",
      answer: "Pimp",
      options: [
        "Operator",
        "Banker",
        "Mama",
        "Pimp"
      ]
    },
    {
      numb: 10,
      subject: "Crime Detection and Investigation",
      question: "Anti gambling law",
      answer: "PD 1602",
      options: [
        "PD 1869",
        "PD 1612",
        "PD 1602",
        "PD 1866"
      ]
    },
    {
      numb: 11,
      subject: "Criminalistics",
      question: "Which of the following, the best method to use in firing a revolver is to keep:",
      answer: "Both eyes open",
      options: [
        "Both eyes closed",
        "Both eyes open",
        "Only the right eye is open",
        "Only the left eye is open"
      ]
    },
    {
      numb: 12,
      subject: "Criminalistics",
      question: "The chemical eating away of the bore of an arm due to rusting or the action of salts deposited from the cap or gunpowder is:",
      answer: "Corrosion",
      options: [
        "Pressure",
        "Extractor",
        "Corrosion",
        "Priming Composition"
      ]
    },
    {
      numb: 13,
      subject: "Criminalistics",
      question: "The only sure method of determining the velocity is by the use of:",
      answer: "Chronograph",
      options: [
        "Micrometer",
        "Taper Gauge",
        "Caliber",
        "Chronograph"
      ]
    },
    {
      numb: 14,
      subject: "Criminalistics",
      question: "In polygraph, it is the process of detecting false statement or signs of -",
      answer: "Deception",
      options: [
        "Detection",
        "Deception",
        "Lie",
        "Untrue statement"
      ]
    },
    {
      numb: 15,
      subject: "Criminalistics",
      question: "A type of firearm having six lands, six grooves with the right hand twist is:",
      answer: "Browning type",
      options: [
        "Smith & Wesson",
        "Browning type",
        "Colt type",
        "Webley type"
      ]
    },
    {
      numb: 16,
      subject: "Criminalistics",
      question: "A system of Identification best used in case of a burned body.",
      answer: "Odontology",
      options: [
        "Fingerprint",
        "Skeletal Identification",
        "Odontology",
        "Photography"
      ]
    },
    {
      numb: 17,
      subject: "Criminalistics",
      question: "The first use of photography in police work is in what particular field?",
      answer: "Identification files",
      options: [
        "Crime prevention",
        "Identification files",
        "Surveillance work",
        "Crime scene investigation"
      ]
    },
    {
      numb: 18,
      subject: "Criminalistics",
      question: "A gas with a rotten egg odor usually made by decaying body.",
      answer: "Hydrogen sulfide",
      options: [
        "Chloride",
        "Ammonia",
        "Carbon dioxide",
        "Hydrogen sulfide"
      ]
    },
    {
      numb: 19,
      subject: "Criminalistics",
      question: "Period of time wherein human bones will not exhibit changes.",
      answer: "20 years",
      options: [
        "10 years",
        "20 years",
        "30 years",
        "40 years"
      ]
    },
    {
      numb: 20,
      subject: "Criminalistics",
      question: "A fingerprint pattern with a single loop but it has two deltas.",
      answer: "Whorl",
      options: [
        "Accidental loop",
        "Double loop",
        "Whorl",
        "Central pocket loop"
      ]
    },
    {
      numb: 21,
      subject: "Criminal Law and Jurisprudence",
      question: "Refers to the counsel provided by the government to assist destitute litigant?",
      answer: "Counsel de officio",
      options: [
        "Counsel de officio",
        "counsel de parte",
        "Public Attorney’s Office",
        "National Prosecution Office"
      ]
    },
    {
      numb: 22,
      subject: "Criminal Law and Jurisprudence",
      question: "If an accused person who refuses to plead, a plea of ___ shall be entered.",
      answer: "Not guilty",
      options: [
        "Not guilty",
        "admission by silence",
        "guilty",
        "none"
      ]
    },
    {
      numb: 23,
      subject: "Criminal Law and Jurisprudence",
      question: "Validity of Search Warrant",
      answer: "from the date indicated therein",
      options: [
        "when the judge sign",
        "upon serve",
        "from the date indicated therein",
        "from the date received by the officer"
      ]
    },
    {
      numb: 24,
      subject: "Criminal Law and Jurisprudence",
      question: "The trial of a case shall commence with ___ days from receipt of the pre-trial order?",
      answer: "30 days",
      options: [
        "30 days",
        "15 days",
        "20 days",
        "60 days"
      ]
    },
    {
      numb: 25,
      subject: "Criminal Law and Jurisprudence",
      question: "It is the judicial examination and determination of the issue in an action or proceeding, civil or criminal.",
      answer: "trial",
      options: [
        "pre-trial",
        "trial",
        "plea bargaining",
        "Judgment"
      ]
    },
    {
      numb: 26,
      subject: "Criminal Law and Jurisprudence",
      question: "A person who directly induce others to commit a crime is regarded as:",
      answer: "principal by induction",
      options: [
        "principal by direct participation",
        "principal by indispensable cooperation",
        "principal by induction",
        "instigators"
      ]
    },
    {
      numb: 27,
      subject: "Criminal Law and Jurisprudence",
      question: "It is evidence of the same kind and to the same state of facts.",
      answer: "Cumulative evidence",
      options: [
        "secondary evidence",
        "prima facie evidence",
        "corroborative evidence",
        "Cumulative evidence"
      ]
    },
    {
      numb: 28,
      subject: "Criminal Law and Jurisprudence",
      question: "The law which provides Human Security",
      answer: "R.A. 9372",
      options: [
        "R.A. 9208",
        "R.A. 9745",
        "R.A. 9372",
        "R.A. 7438"
      ]
    },
    {
      numb: 29,
      subject: "Criminal Law and Jurisprudence",
      question: "Court shall take judicial notice, without the introduction of evidence of the following, EXCEPT:",
      answer: "Matters of Public Knowledge",
      options: [
        "Matters of Public Knowledge",
        "Law of nation",
        "The measure of time",
        "Law of nature"
      ]
    },
    {
      numb: 30,
      subject: "Criminal Law and Jurisprudence",
      question: "Under what characteristics of criminal law the above circumstance falls?",
      answer: "Prospective",
      options: [
        "Generality",
        "Territoriality",
        "Prospective",
        "Retroactive"
      ]
    },
    {
      "numb": 31,
      subject: "Correctional Administration",
      "topic": "Correctional Administration",
      "question": "Dissolved in 1939 and the function was taken over by the Division of Investigation of the Department of Justice.",
      "answer": "Philippine Constabulary",
      "options": [
          "Philippine Constabulary",
          "Philippine National Police",
          "Philippine Secret Service",
          "Bureau of Prisons"
      ]
  },
  {
      "numb": 32,
      subject: "Correctional Administration",
      "topic": "Correctional Administration",
      "question": "This organization was established in the 18th century in the Philippines primarily for the maintenance of peace and order.",
      "answer": "Guardia Civil",
      "options": [
          "Guardia Civil",
          "Philippine National Police",
          "Bureau of Jail Management and Penology",
          "National Bureau of Investigation"
      ]
  },
  {
      "numb": 33,
      subject: "Correctional Administration",
      "topic": "Correctional Administration",
      "question": "Ser Chief is a newly arrived inmate committed for the first time. He is classified as a ____ among the classification of inmates according to privileges.",
      "answer": "3rd class inmate",
      "options": [
          "1st class inmate",
          "3rd class inmate",
          "2nd class inmate",
          "Colonist"
      ]
  },
  {
      "numb": 34,
      subject: "Correctional Administration",
      "topic": "Correctional Administration",
      "question": "What classification of Prisoners according to Degree of Security if the prisoner cannot be trusted in open conditions and pose lesser danger than maximum-security prisoners in case they escape?",
      "answer": "Medium Security Prisoners",
      "options": [
          "Minimum Security Prisoners",
          "Medium Security Prisoners",
          "Maximum Security Prisoners",
          "Any of the Above"
      ]
  },
  {
      "numb": 35,
      subject: "Correctional Administration",
      "topic": "Probation and Parole",
      "question": "Celebrated case which paved the way for declaring unconstitutional of the first probation law of November 16, 1937.",
      "answer": "People vs. Vera",
      "options": [
          "People vs. Vera",
          "People vs. De Vera",
          "People vs. De Vega",
          "People vs. Vega"
      ]
  },
  {
      "numb": 36,
      subject: "Correctional Administration",
      "topic": "Probation and Parole",
      "question": "How long is the period of probation of a defendant sentenced to a term of imprisonment of not more than one (1) year?",
      "answer": "Not to exceed 2 years",
      "options": [
          "Not to exceed 6 years",
          "Not to exceed 8 years",
          "Not to exceed 10 years",
          "Not to exceed 2 years"
      ]
  },
  {
      "numb": 37,
      subject: "Correctional Administration",
      "topic": "Probation and Parole",
      "question": "The power of the Chief Executive to grant pardon is limited to the following, EXCEPT:",
      "answer": "Pardon is administered by the court",
      "options": [
          "Pardon is administered by the court",
          "Pardon cannot be extended to cases of impeachment",
          "No pardon, parole or suspension of sentence for the violation of any election law may be granted without favourable recommendation of the Commission of Elections",
          "Pardon is exercised only after conviction"
      ]
  },
  {
      "numb": 38,
      subject: "Correctional Administration",
      "topic": "Probation and Parole",
      "question": "What court will you apply for Probation?",
      "answer": "Same court, where you had been convicted",
      "options": [
          "Regional Trial Court for 6 years and above",
          "MTC or MCTC for 6 years and below",
          "Same court, where you had been convicted",
          "Any of these"
      ]
  },
  {
      "numb": 39,
      subject: "Correctional Administration",
      "topic": "Probation and Parole",
      "question": "Waiting for the decision of the court on the application for probation, the offender applying for probation –",
      "answer": "Maybe released on bail or recognizance",
      "options": [
          "Must stay in prison as a detainee",
          "Maybe set free without bail",
          "Maybe released on bail or recognizance",
          "all of these"
      ]
  },
  {
      "numb": 40,
      subject: "Correctional Administration",
      "topic": "Probation and Parole",
      "question": "When will the court deny application for probation of a petitioner?",
      "answer": "Petitioner is a drug dependent",
      "options": [
          "Petitioner is a foreigner",
          "Petitioner is a drug dependent",
          "Petitioner violates the condition",
          "Petitioner can be treated well in an institution"
      ]
  },
  {
    "numb": 41,
    subject: "Ethics and Criminal Sociology",
    "topic": "Criminology",
    "question": "It is the study of human society, its origin structure, functions, and direction.",
    "answer": "sociology",
    "options": [
        "criminology",
        "sociology",
        "psychology",
        "anthropology"
    ]
},
{
    "numb": 42,
    subject: "Ethics and Criminal Sociology",
    "topic": "Criminology",
    "question": "The science of classifying the physical characteristics.",
    "answer": "somatology",
    "options": [
        "free will",
        "positivism",
        "atavism",
        "somatology"
    ]
},
{
    "numb": 43,
    subject: "Ethics and Criminal Sociology",
    "topic": "Criminology",
    "question": "The approach that is using the perspective of heredity in explaining the cause of crime.",
    "answer": "biological approach",
    "options": [
        "geographical approach",
        "biological approach",
        "psychiatric application",
        "psychological application"
    ]
},
{
    "numb": 44,
    subject: "Ethics and Criminal Sociology",
    "topic": "Criminology",
    "question": "The purpose of penalty in the positivism school of criminology.",
    "answer": "reformation",
    "options": [
        "retribution",
        "rejection",               
"reformation",
        "restoration"
    ]
},
{
    "numb": 45,
    subject: "Ethics and Criminal Sociology",
    "topic": "Criminology",
    "question": "It is the study of the formation of the skull in relation to the behavior of the criminal.",
    "answer": "phrenology",
    "options": [
        "entomology",
        "penology",
        "phrenology",
        "criminology"
    ]
},
{
    "numb": 46,
    subject: "Ethics and Criminal Sociology",
    "topic": "Criminology",
    "question": "Children shall be given priority during_____ as a result of armed conflict.",
    "answer": "education",
    "options": [
        "war",
        "treatment",
        "evacuation",
        "education"
    ]
},
{
    "numb": 47,
    subject: "Ethics and Criminal Sociology",
    "topic": "Criminology",
    "question": "Science concerned with improving the quality of offspring.",
    "answer": "eugenics",
    "options": [
        "criminology",
        "eugenics",
        "genetics",
        "heredity"
    ]
},
{
    "numb": 48,
    subject: "Ethics and Criminal Sociology",
    "topic": "Criminology",
    "question": "Commonly known as victimless crime:",
    "answer": "public order crime",
    "options": [
        "occasional crime",
        "political crime",
        "public order crime",
        "conventional crime"
    ]
},
{
    "numb": 49,
    subject: "Ethics and Criminal Sociology",
    "topic": "Criminology",
    "question": "A child whose basic needs have been deliberately unattended.",
    "answer": "neglected child",
    "options": [
        "abandoned child",
        "dependent child",
        "abusive child",
        "neglected child"
    ]
},
{
    "numb": 50,
    subject: "Ethics and Criminal Sociology",
    "topic": "Criminology",
    "question": "The principle that events, including criminal behavior, have sufficient causes.",
    "answer": "determinism",
    "options": [
        "atavism",
        "narcissism",
        "determinism",
        "positivism"
    ]
},
{
  "numb": 51,
  subject: "Law Enforcement Administration",
  "topic": "Combination of isolated analysis with known information",
  "question": "The combination of the elements isolated analysis with other known information related to the operation.",
  "answer": "Integration",
  "options": [
      "Recording",
      "Analysis",
      "Integration",
      "Interpretation"
  ]
},
{
  "numb": 52,
  subject: "Law Enforcement Administration",
  "topic": "Dealing with demographic and psychological aspects of groups",
  "question": "It deals with the demographic and psychological aspects of groups of people.",
  "answer": "Sociological Intelligence",
  "options": [
      "Sociological Intelligence",
      "Economic Intelligence",
      "Biographical Intelligence",
      "Political Intelligence"
  ]
},
{
  "numb": 53,
  subject: "Law Enforcement Administration",
  "topic": "Most important principle of intelligence",
  "question": "Which among the following principles of intelligence deemed to be the most important?",
  "answer": "Intelligence must be available on time",
  "options": [
      "Intelligence requires continuous security measures",
      "Intelligence and operation are interdependent",
      "Intelligence must be available on time",
      "Intelligence must be flexible"
  ]
},
{
  "numb": 54,
  subject: "Law Enforcement Administration",
  "topic": "Careful inspection of a place for operational purpose",
  "question": "It is the careful inspection of a place to determine its suitability for a particular operational purpose.",
  "answer": "Casing",
  "options": [
      "Casing",
      "Loose Tail",
      "Rough Shadowing",
      "Stakeout"
  ]
},
{
  "numb": 55,
  subject: "Law Enforcement Administration",
  "topic": "Determination of the pertinence and reliability of information",
  "question": "It refers to the determination of the pertinence of the information to the operation, reliability of the source of or agency and the accuracy of the information.",
  "answer": "Appraisal",
  "options": [
      "Evaluation",
      "Recording",
      "Credibility",
      "Appraisal"
  ]
},
{
  "numb": 56,
  subject: "Law Enforcement Administration",
  "topic": "Most dangerous type of informant",
  "question": "It refers to the most dangerous type of informant.",
  "answer": "Double Crosser",
  "options": [
      "Women",
      "Double Crosser",
      "False",
      "Anonymous"
  ]
},
{
  "numb": 57,
  subject: "Law Enforcement Administration",
  "topic": "Transformation of coded message into plain text",
  "question": "It is the transforming of coded message into plain text.",
  "answer": "Decoding",
  "options": [
      "Coding",
      "Encrypting",
      "Decoding",
      "Reclassify"
  ]
},
{
  "numb": 58,
  subject: "Law Enforcement Administration",
  "topic": "Thorough knowledge required after planning intelligence collection",
  "question": "After the planning on how intelligence is to be collected, the intelligence officer must have thorough knowledge of the __________.",
  "answer": "Available sources of information",
  "options": [
      "The strength of the area where the information will be gathered",
      "Where they will be collecting the information",
      "Available sources of information",
      "The vulnerabilities of the possessor of intelligence"
  ]
},
{
  "numb": 59,
  subject: "Law Enforcement Administration",
  "topic": "Military strategist dressing as a beggar",
  "question": "He often dresses as a beggar & went to the street of Rome to gather first hand information, he is considered as the greatest military strategist.",
  "answer": "Hannibal",
  "options": [
      "Alexander the Great",
      "Hannibal",
      "Frederick the Great",
      "Genghis Khan"
  ]
},
{
  "numb": 60,
  subject: "Law Enforcement Administration",
  "topic": "Economic advantage of foot patrol",
  "question": "What is the economic advantage of the foot patrol over other patrol methods?",
  "answer": "Reduced maintenance cost",
  "options": [
      "Reduced equipment cost",
      "Reduced maintenance cost",
      "Reduced personnel cost",
      "Reduced fuel cost"
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