var startScreen = document.querySelector("#startScreen");
var questionScreen = document.querySelector("#questionScreen");
var gameOverScreen = document.querySelector("#gameOverScreen");
var highScoreScreen = document.querySelector("#highScoreScreen");
var timeEl = document.querySelector("#time");
var highScoreEl = document.querySelector("#highscore");
var questionEl = document.querySelector("#question");
var answerButton1 = document.querySelector("#answerButton1");
var answerButton2 = document.querySelector("#answerButton2");
var answerButton3 = document.querySelector("#answerButton3");
var answerButton4 = document.querySelector("#answerButton4");
var finalScore = document.querySelector("#finalScore");
var inputInitials = document.querySelector("#inputInitials");

var questions = [
    {q : "This is question 1", a1 : "t" , a2 : "f1" , a3 : "f2" , a4 : "f3"},
    {q : "This is question 2", a1 : "t" , a2 : "f1" , a3 : "f2" , a4 : "f3"},
    {q : "This is question 3", a1 : "t" , a2 : "f1" , a3 : "f2" , a4 : "f3"},
    {q : "This is question 4", a1 : "t" , a2 : "f1" , a3 : "f2" , a4 : "f3"},
    {q : "This is question 5", a1 : "t" , a2 : "f1" , a3 : "f2" , a4 : "f3"}
];

// this is the countdown start number
var secondsLeft = 6;

// this is used to indicate what question the user is on
var questionNumber = 0;

// keeps track of user score
var gameScore = 0;

// from start screen to question screen + kicks off timer and displays first question
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
        questionScreen.style.display = "none";
        gameOverScreen.style.display = "block";
        finalScore.textContent = "Your final score is: " + gameScore;
      }
    }, 1000);
    }

function displayQuestion () {
questionEl.textContent = questions[questionNumber].q;
answerButton1.textContent = questions[questionNumber].a1;
answerButton2.textContent = questions[questionNumber].a2;
answerButton3.textContent = questions[questionNumber].a3;
answerButton4.textContent = questions[questionNumber].a4;
}

function nextQuestion(event) {
    if (event.target.matches("a")) {
        questionNumber++;
        displayQuestion();}
    console.log(questionNumber);}

function highScore(){
highScoreScreen.style.display = "block";
startScreen.style.display = "none";
gameOverScreen.style.display = "none";
questionScreen.style.display = "none";
}
        

questionScreen.addEventListener("click", nextQuestion);
highScoreEl.addEventListener("click", highScore); 