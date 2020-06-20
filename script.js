var startScreen = document.querySelector("#startScreen");
var questionScreen = document.querySelector("#questionScreen");
var questionScreen2 = document.querySelector("#questionScreen2");
var timeEl = document.querySelector("#time");
var questionEl = document.querySelector("#question");
var answerButton1 = document.querySelector("#answerButton1");
var answerButton2 = document.querySelector("#answerButton2");
var answerButton3 = document.querySelector("#answerButton3");
var answerButton4 = document.querySelector("#answerButton4");

var questions = [
    {q : "This is question 1", at : "t" , af1 : "f1" , af2 : "f2" , af3 : "f3"},
    {q : "This is question 2", at : "t" , af1 : "f1" , af2 : "f2" , af3 : "f3"},
    {q : "This is question 3", at : "t" , af1 : "f1" , af2 : "f2" , af3 : "f3"},
    {q : "This is question 4", at : "t" , af1 : "f1" , af2 : "f2" , af3 : "f3"},
    {q : "This is question 5", at : "t" , af1 : "f1" , af2 : "f2" , af3 : "f3"}
];

var secondsLeft = 60;

var questionNumber = 0;

function startGame() {
    startScreen.style.display = "none";
    questionScreen.style.display = "block";
    gameTimer();
    displayQuestion();

}

function gameTimer() {
    var timeInterval = setInterval(function(){
      secondsLeft --;
      timeEl.textContent = "Time: " + secondsLeft;
      if (secondsLeft === 0) {
        clearInterval(timeInterval);
      }
    }, 1000);
    }

function displayQuestion () {
questionEl.textContent = questions[questionNumber].q;
answerButton1.textContent = questions[questionNumber].at;
answerButton2.textContent = questions[questionNumber].af1;
answerButton3.textContent = questions[questionNumber].af2;
answerButton4.textContent = questions[questionNumber].af3;
}

function nextQuestion(event) {
    if (event.target.matches("a")) {
        questionNumber++;
        displayQuestion();}
    console.log(questionNumber);}
        

questionScreen.addEventListener("click", nextQuestion); 