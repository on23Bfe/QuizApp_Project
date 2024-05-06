import { choice1Element as choice1Button, choice2Element as choice2Button, choice3Element as choice3Button, questionElement, restartElement, resultElement } from "./utils";

import { quizData } from "./questions";

var currentQuestion: number = 0; //Initialer Startwert (Quiz fängt von vorne an)
var score: number = 0; //Score beginnt bei 0

function showQuestion() {
  const question = quizData[currentQuestion].question; //hole erste Frage aus Fragenarray

  if (questionElement != null) {
    questionElement.innerText = question; //Frage in p tag anzeigen
  }
}

function showChoice1() {
  const choice1 = quizData[currentQuestion].choice1; //aktuelle Antwort in Variable zwischenspeichern

  if (choice1Button != null) { //prüft ob choice1 Button in HTML gefunden
    choice1Button.innerText = choice1; //zeigt Antwort an
  }
}

function showChoice2() {
  const choice2 = quizData[currentQuestion].choice2; //aktuelle Antwort in Variable zwischenspeichern

  if (choice2Button != null) { //prüft ob Button in HTML
    choice2Button.innerText = choice2; //zeigt Antwort an
  }
}

function showChoice3() {
  const choice3 = quizData[currentQuestion].choice3; //aktuelle Antwort in Variable zwischenspeichern

  if (choice3Button != null) { //prüft ob Button in HTML
    choice3Button.innerText = choice3; //zeigt Antwort an
  }
}

function checkAnswer(answer: string) { //answer als string definiert
  const correctAnswer = quizData[currentQuestion].answer; //für die aktuelle Frage dir richtige Antwort
  if (answer == correctAnswer) { //prüft ob Antwort korrkt
    score++; //zählt score hoch (inkrement)
  }
  nextQuestion(); //nach Prüfung wird nächste Frage angezeigt
}

function nextQuestion() {
  currentQuestion++; //springt zur nächsten Frage
  if (currentQuestion < quizData.length) {//prüft Länge quizData, wenn currentQuestion nicht mehr < Länge, Anzeige Result
    showQuestion();
    showChoice1();
    showChoice2();
    showChoice3();
  } else {
    showResult();
  }
}

function showResult() {
  if (resultElement != null) {
        resultElement.innerText = `Du hast ${score} von ${quizData.length} erreicht.`; //Ergebnisanzeige
  }
  if (restartElement != null) {
        restartElement.className = ""; //Button für Neustart am Ende des Quiz anzeigen
  }
  if (questionElement != null) {
        questionElement.className = "hidden"; //Frage verstecken, wenn Neustart Button angezeigt wird
  }

  if (choice1Button != null) {
        choice1Button.className = "hidden"; //Antwort verstecken, indem CSS Klasse hidden hinzugefügt wird
  }

  if (choice2Button != null) {
        choice2Button.className = "hidden"; //Antwort verstecken, indem CSS Klasse hidden hinzugefügt wird
  }

  if (choice3Button != null) {
        choice3Button.className = "hidden"; //Antwort verstecken, indem CSS Klasse hidden hinzugefügt wird
  }

}

if (choice1Button != null) {
  let choice1 = quizData[currentQuestion].choice1;
  choice1Button.addEventListener("click", () => {
    checkAnswer(choice1); //damit der Button was er beim click zu tun hat (nächste Frage anzeigen)
  });
}

if (choice2Button != null) {
  let choice2 = quizData[currentQuestion].choice2;
  choice2Button.addEventListener("click", () => {
    checkAnswer(choice2); //damit der Button was er beim click zu tun hat (nächste Frage anzeigen).
  });
}

if (choice3Button != null) {
  let choice3 = quizData[currentQuestion].choice3;
  choice3Button.addEventListener("click", () => {
    checkAnswer(choice3); //damit der Button was er beim click zu tun hat (nächste Frage anzeigen).
  });
}

if (restartElement != null) {
  restartElement.addEventListener("click", () => { //damit der Button was er beim click zu tun hat.
    window.location.reload(); //für Neuladen der Seite, damit Quiz von vorne beginnt
  });
}

//damit Frage + Antwort beim ersten mal angezeigt wird.
showQuestion(); 
showChoice1();
showChoice2();
showChoice3();

