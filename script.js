/*

Game:
Total time: 75 seconds
Total questions: 10
Possible answers per question: 4
If a question is answered incorrectly, time = -7 seconds


1. Start Game Function
If we click the start game button:
    - timer starts dropping from 75
    - the main box disappears
    - question and answers appear


2. View High Scores Page
    - clear high scores
    - go back

*/

// Global Variables
var button_divMainBox = document.getElementById("start-game");
var divMainBox = document.querySelector(".main-box-inactive");
var counter_divTopBar = document.getElementById("counter");
var header_divMainBox = document.querySelector("header");
var description_divMainBox = document.getElementById("description");
var btn = ""
var isRight = "";
var results_div = "";
var timerOnPage = document.getElementById("counter")
var secondsLeft = 75;
var timerInterval = "";
var buttonArr = [];


//TODO: make questions an array of objects
var questions = [
    {
        // Question 1
        question: "Commonly Used Data Strings do NOT include:",
        possibleAnswers: [
            {text: "Strings", correct: false},
            {text: "Boolean", correct: false},
            {text: "Alert", correct: true},
            {text: "Numbers", correct: false}
        ]
    },
    {
        // Question 2
        question: "String values must be enclosed within ___ when being assigned to variables.",
        possibleAnswers: [
            {text: "Commas", correct: false},
            {text: "Curly brackets", correct: false},
            {text: "Parenthesis", correct: false},
            {text: "Quotes", correct: true}
        ]
    },
    {
        // Question 3
        question: "Arrays in JavaScript can be used to store ___.",
        possibleAnswers: [
            {text: "Numbers and strings", correct: false},
            {text: "Other arrays", correct: false},
            {text: "Booleans", correct: false},
            {text: "All of the above", correct: true}
        ]
    },
    {
        // Question 4
        question: "The condition in an if / else statement is enclosed within ___.",
        possibleAnswers: [
            {text: "Quotes", correct: false},
            {text: "Curly brackets", correct: true},
            {text: "Parenthesis", correct: false},
            {text: "Square brackets", correct: false}
        ]
    },
    {
        // Question 5
        question: "A very useful tool used during development and debugging for printing content to the debugger is",
        possibleAnswers: [
            {text: "Javascript", correct: false},
            {text: "Terminal / Bash", correct: false},
            {text: "For Loops", correct: false},
            {text: "Console Log", correct: true}
        ]
    }
];


var resetFunction = function () {
    location.reload()
    }

function showQuestions (questionNumber) {
    header_divMainBox.textContent = questions[questionNumber].question
    // Change Question
    results_div = document.createElement('div')
    results_div.setAttribute("style", "margin-top: 5px");

   if (secondsLeft > 0) { 
    // Creates new buttons for the possible answers
    for (i = 0; i < questions[questionNumber].possibleAnswers.length; i++) {
        let newButton = document.createElement('button');
        newButton.textContent = questions[questionNumber].possibleAnswers[i].text
        newButton.className = "answerButton";
        newButton.classList.add(questions[questionNumber].possibleAnswers[i].correct)

        divMainBox.appendChild(newButton)
        divMainBox.appendChild(results_div);
        
        // Check Answer        
        newButton.addEventListener('click', function checkAnswers () {             
            // If correct, checkAnswers stops. Show results and next question button
            if (newButton.classList.contains(true)) {
                results_div.textContent = "Correct! Nice job."
                newButton.className = "correctAnswerButton"
                results_div.className = "resultsCorrect"
                isRight = "yes"; 
                let nextQuestion = document.createElement('button');
                nextQuestion.textContent = "Next question"
                nextQuestion.setAttribute("style", "position: relative; left: 10%;") 
                // Show next questions
                nextQuestion.addEventListener("click", function (){
                     buttonArr.forEach
                     (function (btn) {
                         btn.className = "hide"
                                              },
                     nextQuestion.className = "hide",
                     results_div.className = "hide"
                     )
                    isRight = "";
                    if (questionNumber <= 3) {
                            showQuestions(questionNumber+1)
                            } else if (secondsLeft > 0) {
                                header_divMainBox.classList.add("final-score");
                                // -1 second because of lag
                                header_divMainBox.textContent = "You did it with " + (secondsLeft - 1) + " seconds left!"
                                var submitScore = document.createElement('input');
                                divMainBox.appendChild(submitScore);
                                submitScore.setAttribute("type", "text");
                                submitScore.setAttribute("placeholder", "Type your initials");
                                var submitScoreButton = document.createElement('button');
                                divMainBox.appendChild(submitScoreButton);
                                submitScoreButton.textContent = "Submit Score"
                                submitScoreButton.className = "answerButton"                            
                                }
                })
                results_div.appendChild(nextQuestion);

                // If incorrect, continue to checkAnswers
            } else if ((isRight != "yes") && newButton.classList.contains(false) && secondsLeft > 0) {
                results_div.className = "resultsWrong"
                newButton.className = "wrongAnswerButton"
                newButton.removeEventListener('click', checkAnswers)
                isRight = "no";
                secondsLeft = secondsLeft - 10           
                }
                
                else if (secondsLeft < 0) {
                    header_divMainBox.textContent = "You're out of time! Want to try again?"
                    timerOnPage.textContent = "0 seconds";
                    hideButtons();
                    function hideButtons () {
                        buttonArr.forEach(function (btn) {
                                btn.className = "hide"
                                })
                    }
                    var resetButton = document.createElement('button');
                    divMainBox.appendChild(resetButton);
                    resetButton.textContent = "Reset"
                    resetButton.className = "answerButton"
                        resetButton.addEventListener('click', resetFunction)
                
                    return;
                }

        })
        buttonArr.push(newButton);
    }
}
}



// Start Game Function

function startGame () {

// Change page to new styling
divMainBox.setAttribute("class", "main-box-active");
button_divMainBox.setAttribute("class", "hide");
header_divMainBox.setAttribute("style", "font-size: 125%; margin-bottom: 3px;");
description_divMainBox.setAttribute("class", "hide");
showQuestions(0);
setTime();

}

// Listen for Start Game
button_divMainBox.addEventListener("click", startGame)



// Timer
function setTime() {
    // Sets interval in variable
    timerInterval = setInterval(timeCounter, 1000)
};







var timeCounter = function() {
        secondsLeft--;
        if (secondsLeft <= 0) {
            timerOnPage.textContent = "0 seconds";
            clearInterval(timerInterval);
            hideButtons();
            function hideButtons () {
                buttonArr.forEach(function (btn) {
                        btn.className = "hide"
                        })
            }
            header_divMainBox.textContent = "You're out of time! Want to try again?"
            timerOnPage.textContent = "0 seconds";
            var resetButton = document.createElement('button');
            divMainBox.appendChild(resetButton);
            resetButton.textContent = "Reset"
            resetButton.className = "answerButton"
            resetButton.addEventListener('click', resetFunction)
            }
        
            else if (secondsLeft > 0) {
                    timerOnPage.textContent = secondsLeft + " seconds"
                }
          
        if (header_divMainBox.classList.contains("final-score")) {
          
          clearInterval(timerInterval);
          return;
        }

}  