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
  question: "What does HTML stand for?",
  answer: "Hyper Text Markup Language",
  options: [
    "Hyper Text Preprocessor",
    "Hyper Text Markup Language",
    "Hyper Text Multiple Language",
    "Hyper Tool Multi Language"
  ]
},
{
  numb: 2,
  question: "What does CSS stand for?",
  answer: "Cascading Style Sheet",
  options: [
    "Common Style Sheet",
    "Colorful Style Sheet",
    "Computer Style Sheet",
    "Cascading Style Sheet"
  ]
},
{
  numb: 3,
  question: "What does PHP stand for?",
  answer: "Hypertext Preprocessor",
  options: [
    "Hypertext Preprocessor",
    "Hypertext Programming",
    "Hypertext Preprogramming",
    "Hometext Preprocessor"
  ]
},
{
  numb: 4,
  question: "What does SQL stand for?",
  answer: "Structured Query Language",
  options: [
    "Stylish Question Language",
    "Stylesheet Query Language",
    "Statement Question Language",
    "Structured Query Language"
  ]
},
{
  numb: 5,
  question: "What does XML stand for?",
  answer: "eXtensible Markup Language",
  options: [
    "eXtensible Markup Language",
    "eXecutable Multiple Language",
    "eXTra Multi-Program Language",
    "eXamine Multiple Language"
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