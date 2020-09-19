const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const instructionsElement = document.getElementById('instructions')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const timeLeftDisplay = document.querySelector('#time-left')

let shuffledQuestions, currentQuestionIndex
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})    

function startGame() {
startButton.classList.add('hide')
instructions.classList.add('hide')



shuffledQuestions = questions.sort(() => Math.random() -.5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion(){
    resetState()
showQuestion(shuffledQuestions[currentQuestionIndex])
button.innerText = answer.text
}

function showQuestion(question) {
questionElement.innerText = question.question
question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if(answer.correct ) {
        button.dataset.correct = answer.correct
   }
 
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
})
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
       nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
   
}
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else{
        element.classList.add('wrong')
    }    
}
    function clearStatusClass(element) {
        element.classList.remove('correct')
        element.classList.remove('wrong')
    }
    let timeLeft = 60

    function countDown() {
    
    setInterval(function(){
    if(timeLeft <= 0 ) {
    clearInterval(timeLeft = 0)
    }
     timeLeftDisplay.innerHTML = timeLeft
         timeLeft -= 1 
       
      }, 1000)
    }
    startButton.addEventListener('click', countDown)
    
    
const questions = [
    {
     question:'Commonly used data types do not include:',
     answers: [ 
         { text: 'strings', correct: true},
         { text: 'boolens', correct: false},
         { text: 'alerts', correct: false},
         { text: 'numbers', correct: false},

        ]  
    },
    {
        question:'The condition in an if/else statement is enclosed within ____.',
        answers: [ 
            { text: 'quotes', correct: true},
            { text: 'curly brackets', correct: false},
            { text: 'paratheses', correct: false},
            { text: 'square brackets', correct: false},
           ]  
       },
       {
        question:'Sting values must be enclosed within ___ when being assigned to variables.',
        answers: [ 
            { text: 'commas', correct: false},
            { text: 'curly brackets', correct: false},
            { text: 'quotes', correct: true},
            { text: 'paratheses', correct: false},
           ]  
       },
       {
        question:'Arrays in Javascript can be used to store ___.',
        answers: [ 
            { text: 'number and strings', correct: false},
            { text: 'other arrays', correct: false},
            { text: 'booleans', correct: false},
            { text: 'all the above', correct: true},
           ]  
       }, 
       {
       question:'A very useful tool used during development and debugging for printing content to the debugger is:',
       answers: [ 
           { text: 'Javascript', correct: false},
           { text: 'terminal/bash', correct: false},
           { text: 'for loops', correct: false},
           { text: 'console.log', correct: true},
          ]  
      }, 





];