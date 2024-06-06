// Get references to the tabs and their corresponding content sections
const dashboardTab = document.querySelector('aside .sidebar a:nth-child(1)');
const profileTab = document.querySelector('aside .sidebar a:nth-child(2)');
const subjectsTab = document.querySelector('aside .sidebar a:nth-child(3)');
const statisticsTab = document.querySelector('aside .sidebar a:nth-child(4)');
const lectureTab = document.querySelector('aside .sidebar a:nth-child(5)');
const rankingsTab = document.querySelector('aside .sidebar a:nth-child(6)');
const reportsTab = document.querySelector('aside .sidebar a:nth-child(7)');
const settingsTab = document.querySelector('aside .sidebar a:nth-child(8)');

const dashboardContent = document.querySelector('.dashboard-content');
const profileContent = document.querySelector('.profile-content');
const subjectsContent = document.querySelector('.subject-content');
const statisticsContent = document.querySelector('.statistics-content');
const lectureContent = document.querySelector('.lecture-content');
const rankingsContent = document.querySelector('.rankings-content');
const reportsContent = document.querySelector('.reports-content');
const settingsContent = document.querySelector('.settings-content');

const savedNotes = localStorage.getItem('notes');
const noteTextarea = document.querySelector('.note-textarea');
const toolbar = document.querySelector('.notes .toolbar');
const textarea = document.querySelector('.notes .note-textarea');

const savedpre_test = localStorage.getItem("pre_test");
const pre_test = document.querySelector(".pre_test");
const exit_btn = pre_test.querySelector(".buttons .quit");
const continue_btn = pre_test.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");


// Add event listeners to the tabs
dashboardTab.addEventListener('click', () => {
    setActiveTab(dashboardTab);
    showContent(dashboardContent);
});

profileTab.addEventListener('click', () => {
    setActiveTab(profileTab);
    showContent(profileContent);
});

subjectsTab.addEventListener('click', () => {
    setActiveTab(subjectsTab);
    showContent(subjectsContent);
});

statisticsTab.addEventListener('click', () => {
    setActiveTab(statisticsTab);
    showContent(statisticsContent);
});

lectureTab.addEventListener('click', () => {
    setActiveTab(lectureTab);
    showContent(lectureContent);
});

rankingsTab.addEventListener('click', () => {
    setActiveTab(rankingsTab);
    showContent(rankingsContent);
});

reportsTab.addEventListener('click', () => {
    setActiveTab(reportsTab);
    showContent(reportsContent);
});

settingsTab.addEventListener('click', () => {
    setActiveTab(settingsTab);
    showContent(settingsContent);
});



//PRE-TEST AREA///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let timeValue =  30 * 60;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

timeCount.textContent = formatTime(timeValue);


const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

exit_btn.onclick = ()=>{
    pre_test.classList.remove("activeInfo"); //hide info box
    document.getElementById('blurOverlay').style.display = 'none';
}

// if continueQuiz button clicked
continue_btn.onclick = () => {
    pre_test.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuestions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    // Start the timer only if it's not already running
    if (!counter) {
        startTimer(timeValue); //calling startTimer function with the initial time
    }
    startTimerLine(timeValue, time_line);
}


// Add the formatTime function to your code:
function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    // Add leading zeros if needed
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return minutes + ':' + seconds;
}

function startTimer(time) {
    if (!counter) { // Start the timer only if it's not already running
        counter = setInterval(timer, 1000);
    }
    function timer() {
        timeCount.textContent = formatTime(time); // Display formatted time
        time--; // Decrement the time value
        if (time < 0) {
            clearInterval(counter);
            timeText.textContent = "Time Off";
            showResult();
        }
    }
}

function startTimerLine(totalTime, time_line) {
    let timeRemaining = totalTime; // Initialize time remaining to the total time
    counterLine = setInterval(timer, 1000); // Interval updated to 1000ms (1 second)
    
    function timer() {
        timeRemaining--; // Decrement time remaining
        let width = (timeRemaining / totalTime) * 100; // Calculate width percentage
        time_line.style.width = width + "%"; // Update the width of the timer line
        if (timeRemaining <= 0) { // If time remaining is zero or less
            clearInterval(counterLine); // Stop the timer line animation
        }
    }
}

// if restartQuiz button clicked
restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuestions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    // Do not reset the timer if it's already running
    if (!counter) {
        startTimer(timeValue); //calling startTimer function with the remaining time
    }
    startTimerLine(widthValue, time_line); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}


// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.remove("activeResult");
    document.getElementById('blurOverlay').style.display = 'none';

    console.log("Data Preprocessing");
    console.log("Data preprocessing completed.");



    console.log("Calculate Initial Gini Index");
    console.log("Initial Gini index calculated: " + 2);



    console.log("Calculate Gini Index for Splits");
    console.log("Gini index for splits calculated.");


    console.log("Select Best Split");
    console.log("Best split selected: " + 3);
    console.log("Create Leaf Node");
    console.log("Leaf node created for subset " + 3);



    console.log("Prune Decision Tree");
    console.log("Decision tree pruned.");


    console.log("Identify Weak Areas");
    console.log("Weak areas identified: ");


    
    console.log("Select Topic");
    console.log("Selected topic: Ason Investigation");
    console.log("Generate Personalized Quiz");
    console.log("Personalized quiz generated.");
}

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
next_btn.onclick = () => {
    if (que_count < questions.length - 1) { //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuestions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        // Start the timer only if it's not already running
        if (!counter) {
            startTimer(timeValue); //calling startTimer function with the initial time
        }
        startTimerLine(0, time_line);
        timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    } else {
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}


// getting questions and options from array
function showQuestions(index){
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    //let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let que_tag = '<p style="font-weight: lighter; font-size: 13px; color: #363949;" > Subject: '+ questions[index].subject + '</p><span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
        
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}




// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';




//if user clicked on option
function optionSelected(answer){
  
    let userAns = answer.textContent; // Get user selected option
    let correcAns = questions[que_count].answer; // Get correct answer from array
    const allOptions = option_list.children.length; // Get all option items

    questions[que_count].selected = userAns;
      
    if (userAns == correcAns) { // If user selected option is equal to array's correct answer
        userScore += 1; // Upgrade score value with 1
        answer.classList.add("correct"); // Add green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); // Add tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    } else {
        answer.classList.add("incorrect"); // Add red color to incorrect selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); // Add cross icon to incorrect selected option
        console.log("Wrong Answer");
    
        for (i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correcAns) { // If there's an option matching the array answer
                option_list.children[i].setAttribute("class", "option correct"); // Add green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); // Add tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }

    for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled"); // Disable all options after user selection
    }
  
    // Only show "Next" button if it's not the last question
    if (que_count < questions.length - 1) {
        next_btn.classList.add("show"); // Show the "Next" button
    } else {
        // If it's the last question, clear intervals and show results
        clearInterval(counter);
        clearInterval(counterLine);
        setTimeout(() => {
            showResult();
        }, 1000);
    }
}

function showResult() {
    pre_test.classList.remove("activeInfo"); // Hide info box
    quiz_box.classList.remove("activeQuiz"); // Hide quiz box
    result_box.classList.add("activeResult"); // Show result box
    const scoreText = result_box.querySelector(".score_text");

    // Calculate percentage score for each subject
    const subjectScores = {};
    questions.forEach(question => {
        const subject = question.subject;
        if (!subjectScores[subject]) {
            subjectScores[subject] = {
                correct: 0,
                total: 0
            };
        }
        if (question.answer === question.selected) {
            subjectScores[subject].correct++;
        }
        subjectScores[subject].total++;
    });

   // Update the HTML with the percentage score for each subject
    const subjectElements = document.querySelectorAll("[data-subject]");
    subjectElements.forEach(element => {
        const subject = element.getAttribute("data-subject");
        const score = subjectScores[subject];
        if (score) {
            // Ensure division by zero doesn't occur
            const percentage = (score.correct / score.total) * 100;
            element.querySelector(".subject_percentage").textContent = percentage.toFixed(2) + "%";
        } else {
            // If there are no questions for the subject, display 0%
            element.querySelector(".subject_percentage").textContent = "0%";
        }
    });

    const subjectBoxes = document.querySelectorAll(".subject-box");
    subjectBoxes.forEach(box => {
        const subject = box.getAttribute("data-subject");
        const score = subjectScores[subject];
        if (score) {
            // Ensure division by zero doesn't occur
            const percentage = (score.correct / score.total) * 100;
            const percentageElement = box.querySelector(".subject_percentage");
            if (percentageElement) {
                percentageElement.textContent = percentage.toFixed(2) + "%";
            }

            // Check if the percentage is less than 50%
            if (percentage < 50) {
                // Show the star image if it's not already appended
                if (!box.querySelector('.star-image')) {
                    const starImage = document.createElement('img');
                    starImage.src = 'CDI/img/recommended.png';
                    starImage.alt = 'Star';
                    starImage.className = 'star-image';
                    starImage.style.width = '150px';
                    starImage.style.height = 'auto';
                    starImage.style.position = 'absolute';
                    starImage.style.top = '0';
                    starImage.style.right = '0';
                    box.appendChild(starImage);
                }
            }
        } else {
            // If there are no questions for the subject, display 0%
            const percentageElement = box.querySelector(".subject_percentage");
            if (percentageElement) {
                percentageElement.textContent = "0%";
            }
        }
    });
    

    // Display the message about the user's score
    let scoreTag;
    // Calculate percentage of correct answers
    const percentage = (userScore / questions.length) * 100;
    if (userScore >= 7) { // if user scored 70% or more
        scoreTag = '<span>and congrats! You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p>(' + percentage.toFixed(2) + '%)</span>';
    } else if (userScore >= 5) { // if user scored between 50% and 69%
        scoreTag = '<span>and nice, You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p>(' + percentage.toFixed(2) + '%)</span>';
    } else { // if user scored less than 50%
        scoreTag = '<span>and sorry, You got only <p>' + userScore + '</p> out of <p>' + questions.length + '</p>(' + percentage.toFixed(2) + '%)</span>';
    }

    scoreText.innerHTML = scoreTag; // Add the score tag inside score_Text

    // Save results to local storage
    localStorage.setItem('preTestResults', JSON.stringify(subjectScores));
    
    updateStatistics(subjectScores);
}


// Function to update percentage scores for each subject in the statistics content
function updateStatistics(subjectScores) {
    localStorage.setItem('preTestResults', JSON.stringify(subjectScores));

    const subjectElements = document.querySelectorAll('.stats-container [data-subject]');
    let overallCorrect = 0;
    let overallTotal = 0;

    subjectElements.forEach(element => {
        const subject = element.getAttribute("data-subject");
        const score = subjectScores[subject];
        if (score) {
            const percentage = score.correct > 0 ? (score.correct / score.total) * 100 : 0;
            const skillPerElement = element.parentElement.querySelector('.skill-per');
            const tooltipElement = skillPerElement.querySelector('.tooltip');
            const detailsElement = element.parentElement.querySelector('.subject_details');
            
            if (skillPerElement) {
                skillPerElement.style.width = percentage.toFixed(2) + "%";
                if (percentage < 50) {
                    skillPerElement.classList.add("failed");
                } else {
                    skillPerElement.classList.remove("failed");
                }
            }
            if (tooltipElement) {
                tooltipElement.textContent = percentage.toFixed(2) + "%";
                if (percentage < 50) {
                    tooltipElement.classList.add("failed");
                } else {
                    tooltipElement.classList.remove("failed");
                }
            }
            if (detailsElement) {
                detailsElement.textContent = `${score.correct}/${score.total}`;
            }

            overallCorrect += score.correct;
            overallTotal += score.total;

            // Update subject percentage text
            element.querySelector(".subject_percentage").textContent = percentage.toFixed(2) + "%";
        } else {
            const skillPerElement = element.parentElement.querySelector('.skill-per');
            const tooltipElement = skillPerElement.querySelector('.tooltip');
            const detailsElement = element.parentElement.querySelector('.subject_details');

            if (skillPerElement) {
                skillPerElement.style.width = "0%";
                skillPerElement.classList.remove("failed");
            }
            if (tooltipElement) {
                tooltipElement.textContent = "0%";
                tooltipElement.classList.remove("failed");
            }
            if (detailsElement) {
                detailsElement.textContent = "0/0";
            }

            // Set subject percentage text to 0%
            element.querySelector(".subject_percentage").textContent = "0%";
        }
    });

    const overallPercentage = overallTotal > 0 ? (overallCorrect / overallTotal) * 100 : 0;

    const overallElement = document.querySelector('[data-subject="OverAll"]');
    const overallSkillPerElement = overallElement.parentElement.querySelector('.skill-per');
    const overallTooltipElement = overallSkillPerElement.querySelector('.tooltip');
    const overallDetailsElement = overallElement.parentElement.querySelector('.subject_details');

    if (overallSkillPerElement) {
        overallSkillPerElement.style.width = overallPercentage.toFixed(2) + "%";
        if (overallPercentage < 50) {
            overallSkillPerElement.classList.add("failed");
        } else {
            overallSkillPerElement.classList.remove("failed");
        }
    }

    if (overallTooltipElement) {
        overallTooltipElement.textContent = overallPercentage.toFixed(2) + "%";
        if (overallPercentage < 50) {
            overallTooltipElement.classList.add("failed");
        } else {
            overallTooltipElement.classList.remove("failed");
        }
    }
    
    if (overallDetailsElement) {
        overallDetailsElement.textContent = `${overallCorrect}/${overallTotal}`;
    }

    // Update overall percentage text
    overallElement.querySelector(".subject_percentage").textContent = overallPercentage.toFixed(2) + "%";
}

document.addEventListener("DOMContentLoaded", function() {
    const preTestResults = JSON.parse(localStorage.getItem('preTestResults'));
    if (preTestResults) {
        updateStatistics(preTestResults);
    }
});



function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}


// Call the updateStatistics function to initialize the percentage scores
//updateStatistics();




//PRE-TEST AREA///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






//SUBJECT AREA (IN-ORDER LOWEST SCORE TO HIGHEST)




//END OF SUBJECT AREA 


//NOTES AREA
noteTextarea.value = savedNotes || '';
noteTextarea.addEventListener('input', () => {
    localStorage.setItem('notes', noteTextarea.value);
});

// Function to set the active tab
function setActiveTab(tab) {
    // Remove the 'active' class from all tabs
    const allTabs = document.querySelectorAll('aside .sidebar a');
    allTabs.forEach(t => t.classList.remove('active'));
    // Add the 'active' class to the clicked tab
    tab.classList.add('active');
}

// Function to show/hide content based on the active tab
function showContent(content) {
    // Hide all content sections
    const allContent = document.querySelectorAll('main > *:not(h1)');
    allContent.forEach(c => c.style.display = 'none');
    // Show the corresponding content section
    content.style.display = 'block';
}

// Initialize the dashboard as the default active tab
setActiveTab(dashboardTab);
showContent(dashboardContent);

// Sample Orders data (for testing)
const Orders = [
    {
        rank: '1',
        productName: 'Jennie Kim',
        productNumber: '95/100',
        paymentStatus: '95%',
        status: 'Passed'
    },
    {
        rank: '2',
        productName: 'Seph Bayols',
        productNumber: '84/100',
        paymentStatus: '84%',
        status: 'Passed'
    },
    {
        rank: '3',
        productName: 'Jade De Luna',
        productNumber: '79/100',
        paymentStatus: '79%',
        status: 'Passed'
    },
    {
        rank: '4',
        productName: 'John Camagaling',
        productNumber: '70/100',
        paymentStatus: '70%',
        status: 'Passed'
    },
    {
        rank: '5',
        productName: 'Tom Cross',
        productNumber: '65/100',
        paymentStatus: '65%',
        status: 'Failed'
    },
];


// Rankings
const ordersTableBody = document.querySelector('table tbody');
Orders.forEach(order => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${order.rank}</td>
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.status === 'Failed' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary'}">${order.status}</td>
        <td class="primary"></td>
    `;
    ordersTableBody.appendChild(tr);
});

// Original code for sidebar toggling and dark mode
const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
});



// Check if the pre-test has been taken before
const preTestTaken = localStorage.getItem('preTestTaken');

// If the pre-test has not been taken, show the pre-test
if (!preTestTaken) {
    pre_test.classList.add("activeInfo");
    document.getElementById('blurOverlay').style.display = 'block';
} else {
    // If the pre-test has been taken, calculate statistics and show results
    // Here, you can call a function to calculate statistics and display results
}

// Function to handle actions after the pre-test is completed
function handlePreTestCompletion() {
    // Set the flag to indicate that the pre-test has been taken
    localStorage.setItem('preTestTaken', true);

    // Calculate statistics and save the results in local storage
    // Here, you can call a function to calculate statistics and save results
}



document.addEventListener('DOMContentLoaded', () => {
    let currentAttempt = {};
    let attempts = {};

    const initAttempt = (index) => {
        currentAttempt[index] = 1;
        attempts[index] = {
            1: "Attempt 1 Content: Example Answer",
            2: "Attempt 2 Content: Another Example Answer"
            // Add more attempts as needed
        };
    };

    const updateAttempt = (index) => {
        document.querySelectorAll('.attempt-label')[index].textContent = `Attempt ${currentAttempt[index]}`;
        document.querySelectorAll('.attempt-container .content')[index].innerHTML = `<p>${attempts[index][currentAttempt[index]]}</p>`;
    };

    document.querySelectorAll('.prev-btn').forEach((button, index) => {
        button.addEventListener('click', () => {
            if (!currentAttempt.hasOwnProperty(index)) {
                initAttempt(index);
            }
            if (currentAttempt[index] > 1) {
                currentAttempt[index]--;
                updateAttempt(index);
            }
        });
    });

    document.querySelectorAll('.next-btn').forEach((button, index) => {
        button.addEventListener('click', () => {
            if (!currentAttempt.hasOwnProperty(index)) {
                initAttempt(index);
            }
            currentAttempt[index]++;
            if (!attempts[index][currentAttempt[index]]) {
                attempts[index][currentAttempt[index]] = `Attempt ${currentAttempt[index]} Content: New Example Answer`;
            }
            updateAttempt(index);
        });
    });

    document.querySelectorAll('.attempt-label').forEach((label, index) => {
        label.addEventListener('click', () => {
            const attemptContainer = document.querySelectorAll('.attempt-container')[index];
            attemptContainer.classList.toggle('hidden');
        });
    });

    // Initialize the first attempt for all sections
    document.querySelectorAll('.navigation').forEach((_, index) => {
        initAttempt(index);
        updateAttempt(index);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.subject_details').forEach(subjectDetail => {
        const popup = subjectDetail.nextElementSibling;

        // Show popup on hover
        subjectDetail.addEventListener('mouseover', () => {
            popup.style.display = 'block';
        });

        // Hide popup when mouse leaves the paragraph
        subjectDetail.addEventListener('mouseout', () => {
            popup.style.display = 'none';
        });

        // Toggle popup on click
        subjectDetail.addEventListener('click', () => {
            popup.classList.toggle('hidden');
        });

        // Optionally, hide popup when mouse leaves the popup itself
        popup.addEventListener('mouseout', () => {
            popup.style.display = 'none';
        });

        // Prevent popup from hiding when mouse is over the popup itself
        popup.addEventListener('mouseover', () => {
            popup.style.display = 'block';
        });
    });
});

