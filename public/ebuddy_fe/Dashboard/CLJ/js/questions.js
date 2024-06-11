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
    "topic": "Evidence",
    "question": "The declaration of a dying person, made under the consciousness of an impending death, may be received in any case wherein his death is the subject of inquiry, as evidence of the cause and surrounding circumstances of such death.",
    "answer": "Dying declaration",
    "options": [
      "Dying declaration",
      "res gestae",
      "declaration against interest",
      "declaration about pedigree"
    ]
  },
  {
    "numb": 2,
    "topic": "Legal Procedures",
    "question": "Is the duty of the party to present evidence on the facts in issue necessary to establish his claim or defense by the amount of evidence required by law.",
    "answer": "burden of proof",
    "options": [
      "burden of evidence",
      "burden of proof",
      "proof of evidence",
      "cause of action"
    ]
  },
  {
    "numb": 3,
    "topic": "Maritime Law",
    "question": "A Foreign vessel registered in the country of Australia anchored at Manila Bay wherein an Australian national was caught in possession of Cocaine. What rule provides that a crime committed while on board of the vessel.",
    "answer": "French rule",
    "options": [
      "French rule",
      "American Rule",
      "Spanish Rule",
      "English Rule"
    ]
  },
  {
    "numb": 4,
    "topic": "Criminal Law",
    "question": "Shall deprive the offender rights of parental authority or guardianship.",
    "answer": "civil interdiction",
    "options": [
      "subsidiary penalty",
      "penalty",
      "suspension",
      "civil interdiction"
    ]
  },
  {
    "numb": 5,
    "topic": "Family Law",
    "question": "It is a case of concubinage when a woman has a sexual relationship to a married man. This statement is?",
    "answer": "false",
    "options": [
      "True",
      "false",
      "It depends",
      "Partly false"
    ]
  },
  {
    "numb": 6,
    "topic": "Criminal Law",
    "question": "The following are considered afflictive penalties, except:",
    "answer": "prison mayor",
    "options": [
      "death by lethal injection",
      "reclusion perpetua",
      "reclusion temporal",
      "prison mayor"
    ]
  },
  {
    "numb": 7,
    "topic": "Family Law",
    "question": "It is a case of adultery when a man has a sexual relationship to a married woman. This statement is?",
    "answer": "false",
    "options": [
      "True",
      "false",
      "It depends",
      "Partly false"
    ]
  },
  {
    "numb": 8,
    "topic": "Evidence",
    "question": "A form of evidence supplied by written instruments or derived from conventional symbols, such as letters, by which ideas are represented on material substances.",
    "answer": "documentary evidence",
    "options": [
      "documentary evidence",
      "testimonial evidence",
      "material evidence",
      "real evidence"
    ]
  },
  {
    "numb": 9,
    "topic": "Evidence",
    "question": "When the witness states that he did not see or know the occurrence of a fact.",
    "answer": "negative evidence",
    "options": [
      "positive evidence",
      "corroborative evidence",
      "secondary evidence",
      "negative evidence"
    ]
  },
  {
    "numb": 10,
    "topic": "Constitutional Law",
    "question": "The law hears before it condemns, proceeds upon inquiry and renders judgment after a fair trial.",
    "answer": "due process of law",
    "options": [
      "ex post facto law",
      "equal protection of the law",
      "rule of law",
      "due process of law"
    ]
  },
  {
    "numb": 11,
    "topic": "Criminal Law",
    "question": "It means that the resulting injury is greater than that which is intended.",
    "answer": "Praeter Intentionem",
    "options": [
      "Aberratio ictus",
      "Error in personae",
      "Dura Lex Sed lex",
      "Praeter Intentionem"
    ]
  },
  {
    "numb": 12,
    "topic": "Criminal Procedures",
    "question": "If an accused person who refuses to plead, a plea of ___ shall be entered.",
    "answer": "Not guilty",
    "options": [
      "Not guilty",
      "admission by silence",
      "guilty",
      "none"
    ]
  },
  {
    "numb": 13,
    "topic": "Criminal Procedures",
    "question": "When reception of evidence is necessary under the following circumstances:",
    "answer": "plea of guilty to capital offense",
    "options": [
      "Plea of guilty to lesser offense",
      "plea of guilty to capital offense",
      "Plea of guilty to non-capital offense",
      "all of these"
    ]
  },
  {
    "numb": 14,
    "topic": "Criminal Procedures",
    "question": "When the complaint is vague, the accused may file a motion alleging among others the defect of the complaint or information and the details desired in order to enable him to properly answer and prepare for trial. This motion is known as:",
    "answer": "motion for bill of particular",
    "options": [
      "motion for bill of particular",
      "motion for clarification",
      "motion to dismiss",
      "motion for postponement"
    ]
  },
  {
    "numb": 15,
    "topic": "Criminal Procedures",
    "question": "Upon motion of the proper party, arraignment shall be suspended on the following grounds:",
    "answer": "All of the choices",
    "options": [
      "The accused appears to be suffering from unsound mental condition.",
      "There exist a prejudicial question.",
      "A petition for review of the resolution of the prosecutor is pending either at the DOJ or office of the President.",
      "All of the choices"
    ]
  },
  {
    "numb": 16,
    "topic": "Criminal Procedures",
    "question": "A move for the annulment of the criminal charge made by an accused is:",
    "answer": "Motion to quash",
    "options": [
      "Motion to quash",
      "Nolle pro sequi",
      "Motion to dismiss",
      "bill of particulars"
    ]
  },
  {
    "numb": 17,
    "topic": "Criminal Law",
    "question": "It is the loss by the state of the right to prosecute and punish or the termination of the power to prosecute or punish the offender after the lapse of certain definite period from the commission of the offense.",
    "answer": "Prescription of crime",
    "options": [
      "Prescription of crime",
      "acquisitive",
      "prescription of penalty",
      "extinctive"
    ]
  },
  {
    "numb": 18,
    "topic": "Criminal Procedures",
    "question": "It is one of the grounds for motion to quash. It is the danger of being prosecuted for the same offense for the second time.",
    "answer": "double jeopardy",
    "options": [
      "double jeopardy",
      "double trial",
      "double trouble",
      "double counter"
    ]
  },
  {
    "numb": 19,
    "topic": "Criminal Law",
    "question": "Provisional dismissal of offense punishable by imprisonment not exceeding six years or a fine of any amount or both shall become permanent after ____.",
    "answer": "1 year",
    "options": [
      "1 year",
      "2 years",
      "5 years",
      "4 years"
    ]
  },
  {
    "numb": 20,
    "topic": "Criminal Procedures",
    "question": "Within how many days after arraignment and from the date the court acquires jurisdiction over the person of the accused shall order a pre-trial conference?",
    "answer": "30 days",
    "options": [
      "30 days",
      "15 days",
      "20 days",
      "60 days"
    ]
  },
  {
    "numb": 21,
    "topic": "Criminal Procedures",
    "question": "How many days are given to an accused person to prepare for trial after a plea of not guilty is entered?",
    "answer": "15 days",
    "options": [
      "15 days",
      "20 days",
      "30 days",
      "180 days"
    ]
  },
  {
    "numb": 22,
    "topic": "Criminal Law",
    "question": "The following qualifies Direct Assault, EXCEPT:",
    "answer": "The offender is a public officer or employee",
    "options": [
      "The assault is committed with a weapon",
      "The offender is a public officer or employee",
      "The offender lays hands upon a person in authority",
      "The offender seriously intimidating or resisting a person in authority"
    ]
  },
  {
    "numb": 23,
    "topic":

 "Criminal Law",
    "question": "If the offender performs all the acts of execution which should produce the felony as a consequence, but which, nevertheless, do not produce it by reason of causes independent of the will of the perpetrator.",
    "answer": "Frustrated felony",
    "options": [
      "impossible crime",
      "frustrated felony",
      "complex crime",
      "consummated felony"
    ]
  },
  {
    "numb": 24,
    "topic": "Criminal Law",
    "question": "The actual taking away of personal property with intent to gain, without the consent of the owner.",
    "answer": "asportation",
    "options": [
      "sequestration",
      "trespassing",
      "plundering",
      "asportation"
    ]
  },
  {
    "numb": 25,
    "topic": "Criminal Law",
    "question": "Shall deprive the offender rights of parental authority or guardianship.",
    "answer": "civil interdiction",
    "options": [
      "subsidiary penalty",
      "penalty",
      "suspension",
      "civil interdiction"
    ]
  },
  {
    "numb": 26,
    "topic": "Evidence",
    "question": "The obligation imposed upon a party who alleges a fact to prove the same.",
    "answer": "burden of proof",
    "options": [
      "burden of evidence",
      "burden of proof",
      "proof of evidence",
      "cause of action"
    ]
  },
  {
    "numb": 27,
    "topic": "Evidence",
    "question": "The person testifying to the court may be a party to the case, an ordinary witness or an expert witness.",
    "answer": "testimonial evidence",
    "options": [
      "documentary evidence",
      "testimonial evidence",
      "material evidence",
      "real evidence"
    ]
  },
  {
    "numb": 28,
    "topic": "Evidence",
    "question": "Involves the use of external things such as objects, structures, and places as evidence.",
    "answer": "material evidence",
    "options": [
      "documentary evidence",
      "testimonial evidence",
      "material evidence",
      "real evidence"
    ]
  },
  {
    "numb": 29,
    "topic": "Evidence",
    "question": "Evidence that pertains to physical objects or tangible items that are presented in court as evidence.",
    "answer": "real evidence",
    "options": [
      "documentary evidence",
      "testimonial evidence",
      "material evidence",
      "real evidence"
    ]
  },
  {
    "numb": 30,
    "topic": "Criminal Law",
    "question": "Criminal offense wherein the intent to gain is presumed from the unlawfulness of the act.",
    "answer": "Mala prohibita",
    "options": [
      "Mala prohibita",
      "Mala in se",
      "Consummated felony",
      "Frustrated felony"
    ]
  }
]



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