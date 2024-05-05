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
        question: "Frage",
        choice1: "Antwort1",
        choice2: "Antwort2",
        choice3: "Antwort3",
        answer: "Antwort1"
    },
    {
        question: "Frage 2",
        choice1: "Antwort1",
        choice2: "Antwort2",
        choice3: "Antwort3",
        answer: "Antwort1"
    },
    {
        question: "Frage 3",
        choice1: "Antwort1",
        choice2: "Antwort2",
        choice3: "Antwort3",
        answer: "Antwort1"
    }
];

//Web API
const questionElement = document.getElementById("question");
const choice1Element = document.getElementById("choice1");
const choice2Element = document.getElementById("choice2");
const choice3Element = document.getElementById("choice3");
const submitButton = document.getElementById("submit");
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







showQuestion();
showChoice1();

