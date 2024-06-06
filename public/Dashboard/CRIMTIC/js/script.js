//selecting all required elements
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const quitButton = document.querySelector('.quit');


let timeValue =  0;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

let attempts = 0;
//let attempts = localStorage.getItem('attempts') ? parseInt(localStorage.getItem('attempts')) : 0;
//attempts += 1;
//localStorage.setItem('attempts', attempts);

// Update attempts in showResult


// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuestions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    timeValue =  30;
    startTimer(timeValue); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
    attempts += 1;
    document.getElementById('attempts').textContent = attempts;
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Randomizing options for each question
questions.forEach(question => {
    question.options = shuffleArray(question.options);
});

const pretestResults = [
    [1, 0], // Example pretest result: Answered first question correctly
    // Add more pretest results here if needed
];


// Decision Tree Logic
class Node {
    constructor(feature, threshold, left, right, weakArea) {
        this.feature = feature;
        this.threshold = threshold;
        this.left = left;
        this.right = right;
        this.weakArea = weakArea;
    }
}

function entropy(labels) {
    const labelCounts = {};
    labels.forEach(label => {
        labelCounts[label] = (labelCounts[label] || 0) + 1;
    });

    const probabilities = Object.values(labelCounts).map(count => count / labels.length);
    return probabilities.reduce((sum, p) => sum - p * Math.log2(p), 0);
}

function informationGain(leftLabels, rightLabels, currentEntropy) {
    const leftWeight = leftLabels.length / (leftLabels.length + rightLabels.length);
    const rightWeight = rightLabels.length / (leftLabels.length + rightLabels.length);
    return currentEntropy - (leftWeight * entropy(leftLabels) + rightWeight * entropy(rightLabels));
}

function findBestSplit(features, labels) {
    let bestGain = 0;
    let bestFeature = null;
    let bestThreshold = null;
    const currentEntropy = entropy(labels);

    for (let featureIndex = 0; featureIndex < features[0].length; featureIndex++) {
        const featureValues = features.map(row => row[featureIndex]);
        const thresholds = [...new Set(featureValues)];

        thresholds.forEach(threshold => {
            const leftLabels = [];
            const rightLabels = [];

            features.forEach((row, index) => {
                if (row[featureIndex] === threshold) {
                    leftLabels.push(labels[index]);
                } else {
                    rightLabels.push(labels[index]);
                }
            });

            if (leftLabels.length === 0 || rightLabels.length === 0) {
                return;
            }

            const gain = informationGain(leftLabels, rightLabels, currentEntropy);

            if (gain > bestGain) {
                bestGain = gain;
                bestFeature = featureIndex;
                bestThreshold = threshold;
            }
        });
    }

    return { bestFeature, bestThreshold };
}

function buildTree(features, labels) {
    if (new Set(labels).size === 1) {
        return new Node(null, null, null, null, labels[0]);
    }

    const { bestFeature, bestThreshold } = findBestSplit(features, labels);
    const leftIndices = [];
    const rightIndices = [];

    features.forEach((row, index) => {
        if (row[bestFeature] === bestThreshold) {
            leftIndices.push(index);
        } else {
            rightIndices.push(index);
        }
    });

    const leftTree = buildTree(features.filter((_, index) => leftIndices.includes(index)), labels.filter((_, index) => leftIndices.includes(index)));
    const rightTree = buildTree(features.filter((_, index) => rightIndices.includes(index)), labels.filter((_, index) => rightIndices.includes(index)));

    return new Node(bestFeature, bestThreshold, leftTree, rightTree, null);
}

function predict(node, sample) {
    if (node.weakArea !== null) {
        return node.weakArea;
    }

    if (sample[node.feature] === node.threshold) {
        return predict(node.left, sample);
    } else {
        return predict(node.right, sample);
    }
}

const X_train = pretestResults.map(question => [question[0]]); // Question numbers
const y_train = pretestResults.map(question => question[1]);  // Correct answer indices
const tree = buildTree(X_train, y_train);

function getWeakArea() {
    const sample = [1]; // Example pretest result
    const weakAreaIndex = predict(tree, sample);
    return questions[weakAreaIndex].subject;
}

// Function to generate questions based on the weakest area
function generateQuestionsBasedOnWeakArea(weakArea) {
    const weakAreaQuestions = questions.filter(question => question.subject === weakArea);
    //return shuffleArray(weakAreaQuestions).slice(0, 20);
}

// Initialize quiz with questions based on weakest area
//selectedQuestions = generateQuestionsBasedOnWeakArea(getWeakArea());
selectedQuestions = selectQuestions();

// Function to show questions


const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");


// Retake quiz button functionality
restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz"); // show quiz box
    result_box.classList.remove("activeResult"); // hide result box
    timeValue = 30; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    attempts += 1;    
    document.getElementById('attempts').textContent = attempts;

    // Generate new set of questions based on weakest area
    //selectedQuestions = generateQuestionsBasedOnWeakArea(getWeakArea());
    selectedQuestions = selectQuestions();

    showQuestions(que_count); // calling showQestions function
    queCounter(que_numb); // passing que_numb value to queCounter
    clearInterval(counter); // clear counter
    clearInterval(counterLine); // clear counterLine
    startTimer(timeValue); // calling startTimer function
    startTimerLine(widthValue); // calling startTimerLine function
    timeText.textContent = "Time Left"; // change the text of timeText to Time Left
    next_btn.classList.remove("show"); // hide the next button
}


// if quitQuiz button clicked
quit_quiz.onclick = () => {
    window.location.href = "../dashboard.html"; // Navigate to dashboard.html
}

quitButton.addEventListener('click', () => {
    window.location.href = "../dashboard.html"; // Navigate to dashboard.html
});



const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

document.addEventListener('keydown', function(event) {
    // Check if the pressed key is the Enter key
    if (event.keyCode === 13) {
        // Trigger a click event on the next button
        next_btn.click();
    }
});
// if Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuestions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

// getting questions and options from array
function showQuestions(index){
    const que_text = document.querySelector(".que_text");

    // Check if the index is within the range of selected questions
    if (index < selectedQuestions.length) {
        let question = selectedQuestions[index];
        let que_tag = '<p style="font-weight: lighter; font-size: 13px; color: #363949;" > Topic: '+ questions[index].topic + '</p><span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
        let option_tag = '<div class="option"><span>' + question.options[0] + '</span></div>'
            + '<div class="option"><span>' + question.options[1] + '</span></div>'
            + '<div class="option"><span>' + question.options[2] + '</span></div>'
            + '<div class="option"><span>' + question.options[3] + '</span></div>';
        que_text.innerHTML = que_tag; // Adding new span tag inside que_tag
        option_list.innerHTML = option_tag; // Adding new div tag inside option_tag

        const option = option_list.querySelectorAll(".option");

        // Set onclick attribute to all available options
        for (let i = 0; i < option.length; i++) {
            option[i].setAttribute("onclick", "optionSelected(this)");
        }
    } else {
        // If index is beyond the selected questions, reset the quiz
        clearInterval(counter);
        clearInterval(counterLine);
        showResult();
    }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");

    document.getElementById('quiz-score').textContent = userScore;
    document.getElementById('attempts').textContent = attempts;

    if (userScore > 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>Score:  <p>'+ userScore +'</p>/<p>'+ selectedQuestions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 1){ // if user scored more than 1
        let scoreTag = '<span>Score:  <p>'+ userScore +'</p>/<p>'+ selectedQuestions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>Score:  <p>'+ userScore +'</p>/<p>'+ selectedQuestions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = questions[que_count].answer; //getting correct answer from array
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn.classList.add("show"); //show the next button if user selected any option
        }
    }
}

function startTimerLine(time) {
    counterLine = setInterval(timer, 100); // Adjusted interval to fit 30 seconds
    function timer() {
        time += 1; // incrementing time value
        time_line.style.width = (time / 300) * 100 + "%"; // calculate width for 30 seconds

        // Adjust the width calculation to match the timer line to 30 seconds
        if (time >= 300) { // if time value is greater than or equal to 300 (30 seconds)
            clearInterval(counterLine); // clear counterLine
        }
    }
}

function queCounter(index) {
    let totalQueCounTag = '<span><p>' + index + '</p> of <p>' + selectedQuestions.length + '</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;
}

// Original code for sidebar toggling and dark mode
const darkMode = document.querySelector('.dark-mode');

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
});