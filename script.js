const startButton = document.querySelector('#start-btn')
const nextButton = document.querySelector('#next-btn')
const questionContainerElement = document.querySelector('#question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')

let questoesAleatorias, questaoAtualIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    questaoAtualIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    questoesAleatorias = questions.sort(() => Math.random() - .5)
    questaoAtualIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestions(questoesAleatorias[questaoAtualIndex])
}

function showQuestions(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild
            (answerButtonElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (questoesAleatorias.length > questaoAtualIndex + 1) {
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
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: `Quantos anos Kobe Bryant e Shaquille O´Neal jogaram juntos no Lakers?`,
        answers: [
            { text: '8', correct: true },
            { text: '5', correct: false },
            { text: '9', correct: false },
            { text: '2', correct: false }
        ]
    },

    {
        question: 'Qual o jogador que marcou mais pontos em uma única partida na NBA? ',
        answers: [
            { text: 'Michael Jordan', correct: false },
            { text: 'Stephen Curry', correct: false },
            { text: 'Wilt Chamberlain', correct: true },
            { text: 'Lebron James', correct: false }
        ]
    },

    {
        question: 'Que ano Michael Jordan estreiou na NBA?',
        answers: [
            { text: '1995', correct: false },
            { text: '2010', correct: false },
            { text: '2001', correct: false },
            { text: '1984', correct: true }
        ]
    }, 

    {
        question: 'Quantos títulos o Chicago Bulls venceu?',
        answers: [
            { text: '6', correct: true },
            { text: '8', correct: false },
            { text: '7', correct: false },
            { text: '3', correct: false }
        ]
    }, 

    {
        question: 'Quantos títulos tem Kobe Bryan?',
        answers: [
            { text: '2', correct: false },
            { text: '8', correct: false },
            { text: '5', correct: true },
            { text: '4', correct: false }
        ]
    } 
]