// Selecting all required elements
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

let quizData = JSON.parse(localStorage.getItem('quizData')) || { userScore: 0, attempts: 0, highestScore: 0 };
let attempts = quizData.attempts; // Initialize attempts from localStorage
let highestScore = quizData.highestScore; // Initialize highest score from localStorage

// If exitQuiz button clicked
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); // Hide info box
}

// If continueQuiz button clicked
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); // Hide info box
    quiz_box.classList.add("activeQuiz"); // Show quiz box
    showQuestions(0); // Calling showQuestions function
    queCounter(1); // Passing 1 parameter to queCounter
    timeValue = 30;
    startTimer(timeValue); // Calling startTimer function
    startTimerLine(0); // Calling startTimerLine function
    attempts += 1;
    document.getElementById('attempts').textContent = attempts;
    saveQuizData();
}

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// If restartQuiz button clicked
restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz"); // Show quiz box
    result_box.classList.remove("activeResult"); // Hide result box
    timeValue = 30;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    attempts += 1;
    document.getElementById('attempts').textContent = attempts;

    // Select new questions for the retake
    selectedQuestions = selectQuestions();

    showQuestions(que_count); // Calling showQuestions function
    queCounter(que_numb); // Passing que_numb value to queCounter
    clearInterval(counter); // Clear counter
    clearInterval(counterLine); // Clear counterLine
    startTimer(timeValue); // Calling startTimer function
    startTimerLine(widthValue); // Calling startTimerLine function
    timeText.textContent = "Time Left"; // Change the text of timeText to Time Left
    next_btn.classList.remove("show"); // Hide the next button
    saveQuizData();
}

// If quitQuiz button clicked
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

// If Next Question button clicked
next_btn.onclick = () => {
    if(que_count < questions.length - 1){ // If question count is less than total question length
        que_count++; // Increment the que_count value
        que_numb++; // Increment the que_numb value
        showQuestions(que_count); // Calling showQuestions function
        queCounter(que_numb); // Passing que_numb value to queCounter
        clearInterval(counter); // Clear counter
        clearInterval(counterLine); // Clear counterLine
        startTimer(timeValue); // Calling startTimer function
        startTimerLine(widthValue); // Calling startTimerLine function
        timeText.textContent = "Time Left"; // Change the timeText to Time Left
        next_btn.classList.remove("show"); // Hide the next button
    } else {
        clearInterval(counter); // Clear counter
        clearInterval(counterLine); // Clear counterLine
        showResult(); // Calling showResult function
    }
}

// Getting questions and options from array
function showQuestions(index) {
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

// Creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

// If user clicked on option
function optionSelected(answer) {
    clearInterval(counter); // Clear counter
    clearInterval(counterLine);
    let userAns = answer.textContent; // Getting user selected option
    let correcAns = questions[que_count].answer; // Getting correct answer from array
    const allOptions = option_list.children.length; // Getting all option items
    
    if(userAns == correcAns) { // If user selected option is equal to array's correct answer
        userScore += 1; // Upgrading score value with 1
        answer.classList.add("correct"); // Adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); // Adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    } else {
        answer.classList.add("incorrect"); // Adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); // Adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(let i = 0; i < allOptions; i++) {
            if(option_list.children[i].textContent == correcAns) { // If there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); // Adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); // Adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled"); // Once user select an option then disabled all options
    }
    next_btn.classList.add("show"); // Show the next button if user selected any option
}

function showResult() {
    info_box.classList.remove("activeInfo"); // Hide info box
    quiz_box.classList.remove("activeQuiz"); // Hide quiz box
    result_box.classList.add("activeResult"); // Show result box
    const scoreText = result_box.querySelector(".score_text");

    // Retrieve quiz data from local storage
    const quizData = JSON.parse(localStorage.getItem('quizData')) || { userScore: 0, attempts: 0, highestScore: 0 };

    // Update attempts
    quizData.attempts = attempts;

    // Update highest score if the current score is higher
    if (userScore > quizData.highestScore) {
        quizData.highestScore = userScore;
    }

    // Display highest score, current score, and attempts
    document.getElementById('highest-score').textContent = quizData.highestScore;
    document.getElementById('quiz-score').textContent = userScore;
    document.getElementById('attempts').textContent = attempts;

    // Save updated quiz data to local storage
    const updatedQuizData = {
        userScore: userScore,
        attempts: attempts,
        highestScore: quizData.highestScore // Ensure highest score is correctly updated
    };

    localStorage.setItem('quizData', JSON.stringify(updatedQuizData));

    if (userScore > 3) { // If user scored more than 3
        // Creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>Score:  <p>' + userScore + '</p>/<p>' + selectedQuestions.length + '</p></span>';
        scoreText.innerHTML = scoreTag; // Adding new span tag inside score_Text
    } else if (userScore > 1) { // If user scored more than 1
        let scoreTag = '<span>Score:  <p>' + userScore + '</p>/<p>' + selectedQuestions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    } else { // If user scored less than 1
        let scoreTag = '<span>Score:  <p>' + userScore + '</p>/<p>' + selectedQuestions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function saveQuizData() {
    const updatedQuizData = {
        userScore: userScore,
        attempts: attempts,
        highestScore: Math.max(quizData.highestScore, userScore) // Ensure highest score is correctly updated
    };
    localStorage.setItem('quizData', JSON.stringify(updatedQuizData));
}

function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time; // Changing the value of timeCount with time value
        time--; // Decrement the time value
        if(time < 9) { // If timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; // Add a 0 before time value
        }
        if(time < 0) { // If timer is less than 0
            clearInterval(counter); // Clear counter
            timeText.textContent = "Time Off"; // Change the time text to time off
            const allOptions = option_list.children.length; // Getting all option items
            let correcAns = questions[que_count].answer; // Getting correct answer from array
            for(let i = 0; i < allOptions; i++) {
                if(option_list.children[i].textContent == correcAns) { // If there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); // Adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); // Adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(let i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled"); // Once user select an option then disabled all options
            }
            next_btn.classList.add("show"); // Show the next button if user selected any option
        }
    }
}

function startTimerLine(time) {
    counterLine = setInterval(timer, 100); // Adjusted interval to fit 30 seconds
    function timer() {
        time += 1; // Incrementing time value
        time_line.style.width = (time / 300) * 100 + "%"; // Calculate width for 30 seconds

        // Adjust the width calculation to match the timer line to 30 seconds
        if(time >= 300) { // If time value is greater than or equal to 300 (30 seconds)
            clearInterval(counterLine); // Clear counterLine
        }
    }
}

function queCounter(index) {
    // Creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>' + index + '</p> of <p>' + selectedQuestions.length + '</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  // Adding new span tag inside bottom_ques_counter
}

// Original code for sidebar toggling and dark mode
const darkMode = document.querySelector('.dark-mode');

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
});
