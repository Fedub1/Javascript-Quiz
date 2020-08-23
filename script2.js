const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})    

function startGame() {
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() -.5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}
var counter = 60;
setInterval(function(){
  document.getElementById('count');
  
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
    // or...
    alert("You're out of time!");
  }
}, 1000);
function setNextQuestion(){
    resetState()
showQuestion(shuffledQuestions[currentQuestionIndex])

}
function showQuestion(question) {
questionElement.innerText = question.question
question.answers.forEach(answer => {
    const button =document.createElement('button')
    button.innterText = answer.text
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
    if (shuffledQuestions.length > currentQuestionIndex + 1){
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
        element.classList.add('correct')
        element.classList.add('wrong')
    }

    let retrievedObject = JSON.parse(window.localStorage.getItem('results'));

if(!retrievedObject ){
alert('Empty, initializing');
retrievedObject  = [];
}

retrievedObject.push('quiz.results' + retrievedObject.length);
window.localStorage.setItem('results', JSON.stringify(retrievedObject));

const questions = [
    {
     question:'Commonly used data types do not include:',
     answers: [ 
         { text: 'strings', correct: true},
         { text: 'boolens', wrong: false},
         { text: 'alerts', wrong: false},
         { text: 'numbers', wrong: false},

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
      } , 
]