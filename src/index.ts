// Imports use relative file paths or Node.js package names
import { textInput } from './dom-utils';

type quizDataType = {
    question:string;
    choice1:string;
    choice2:string;
    choice3:string;
    answer:string;
}

const quizData: quizDataType[] = [

    {
        question: "Wie wird eine Variable in JavaScript deklariert, die ihren Wert nicht ändern kann?",
        choice1: "let",
        choice2: "const",
        choice3: "var",
        answer: "const"
    },
    {
        question: "Welche Methode wird verwendet, um die Länge eines Arrays in JavaScript zu erhalten?",
        choice1: "array.length",
        choice2: "array.count()",
        choice3: "array.size()",
        answer: "array.length"
    },
    {
        question: "Welche der folgenden ist eine korrekte Art, eine leere Liste (Array) in JavaScript zu erstellen?",
        choice1: "var myList = []",
        choice2: "var myList = ()",
        choice3: "var myList = {}",
        answer: "var myList = []"
    }
];

//Web API
const questionElement = document.getElementById("question");
const choice1Element = document.getElementById("choice1");
const choice2Element = document.getElementById("choice2");
const choice3Element = document.getElementById("choice3");
const resultElement = document.getElementById("result");



var currentQuestion:number = 0;
var score:number = 0;

function showQuestion() {
    const question = quizData[currentQuestion].question; //hole erste Frage aus Fragenarray
    
    if(questionElement!=null)
    {
        questionElement.innerText = question;//Frage in p tag anzeigen
    } 
}

function showChoice1() {
    const choice1 = quizData[currentQuestion].choice1; 

   if(choice1Element!=null)
    {
        choice1Element.innerText = choice1; //bei Anzeige von nächster Frage, werden alte Antwortmöglichkeiten entfernt
     
    }
}

function showChoice2() {
    const choice2 = quizData[currentQuestion].choice2; 

   if(choice2Element!=null)
    {
        choice2Element.innerText = choice2; //bei Anzeige von nächster Frage, werden alte Antwortmöglichkeiten entfernt
     
    }
}

function showChoice3() {
    const choice3 = quizData[currentQuestion].choice3; 

   if(choice3Element!=null)
    {
        choice3Element.innerText = choice3; //bei Anzeige von nächster Frage, werden alte Antwortmöglichkeiten entfernt
     
    }
}

function checkAnswer(answer:string) {
    const correctAnswer = quizData[currentQuestion].answer;
    if(answer===correctAnswer) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestion++;
    if(currentQuestion < quizData.length) {
        showQuestion();
        showChoice1();showChoice2();showChoice3();
    } else {
        showResult();
    }
}

function showResult() {
    if(resultElement){
        resultElement.innerText = `Du hast ${score} von ${quizData.length} erreicht.`;
    }

}

showQuestion();
showChoice1();
showChoice2();
showChoice3();

