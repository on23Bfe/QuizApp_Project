const quizData = [
    {
        question: "What is the capital of France?",
        choices: ["Paris", "Berlin", "London", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Mars", "Venus", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the chemical symbol for water?",
        choices: ["H2O", "CO2", "O2", "N2"],
        answer: "H2O"
    }
];

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const submitButton = document.getElementById("submit");
const resultElement = document.getElementById("result");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
    choicesElement.innerHTML = "";
    question.choices.forEach(choice => {
        const choiceElement = document.createElement("button");
        choiceElement.innerText = choice;
        choiceElement.classList.add("choice");
        choiceElement.addEventListener("click", () => {
            checkAnswer(choice);
        });
        choicesElement.appendChild(choiceElement);
    });
}

function checkAnswer(choice) {
    const question = quizData[currentQuestion];
    if (choice === question.answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.style.display = "none";
    choicesElement.style.display = "none";
    submitButton.style.display = "none";
    resultElement.innerText = `You scored ${score} out of ${quizData.length}`;
}

showQuestion();
