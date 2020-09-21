var startButton = document.getElementById('start-btn');
var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next-btn');
var questionContainerElement = document.getElementById('question-container');
var instructionsElement = document.getElementById('instructions');
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-buttons');
var timeLeftDisplay = document.querySelector('#time-left');
var text = document.querySelector('end-game');
var shuffledQuestions, currentQuestionIndex;
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});
function startGame() {
    startButton.classList.add('hide');
    instructions.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
    
}
var timeLeft = 60;
function countDown() {

    setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(timeLeft = 0);
        }
        timeLeftDisplay.innerHTML = timeLeft;
        timeLeft -= 1;

    }, 1000);
}


startButton.addEventListener('click', countDown);


function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);

    
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        var button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        } 

        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}
function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}
function selectAnswer(e) {
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct;
    console.log("selected btn",selectedButton.dataset);

    if (correct != "true"){

        timeLeft = timeLeft - 5;

    }


    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Game Over';
        startButton.classList.remove('hide');
    }

}
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}
function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');

    
}
var questions = [
    {
        question: 'Commonly used data types do not include:',
        answers: [
            { text: 'strings', correct: true },
            { text: 'boolens', correct: false },
            { text: 'alerts', correct: false },
            { text: 'numbers', correct: false },
        ]
    },
    {
        question: 'The condition in an if/else statement is enclosed within ____.',
        answers: [
            { text: 'quotes', correct: true },
            { text: 'curly brackets', correct: false },
            { text: 'paratheses', correct: false },
            { text: 'square brackets', correct: false },
        ]
    },
    {
        question: 'String values must be enclosed within ___ when being assigned to variables.',
        answers: [
            { text: 'commas', correct: false },
            { text: 'curly brackets', correct: false },
            { text: 'quotes', correct: true },
            { text: 'paratheses', correct: false },
        ]
    },
    {
        question: 'Arrays in Javascript can be used to store ___.',
        answers: [
            { text: 'number and strings', correct: false },
            { text: 'other arrays', correct: false },
            { text: 'booleans', correct: false },
            { text: 'all the above', correct: true },
        ]
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: [
            { text: 'Javascript', correct: false },
            { text: 'terminal/bash', correct: false },
            { text: 'for loops', correct: false },
            { text: 'console.log', correct: true },
        ]
    }];
