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
var initialsButton = document.querySelector("#initialsButton");
var clearButton = document.querySelector("#clearButton");
var goBackButton = document.querySelector("#goBackButton");
var finalScore = document.querySelector("#finalScore");
var inputInitials = document.querySelector("#inputInitials");
var highScoreListEl = document.querySelector("#highscore-list");
var answerResult = document.querySelector("#answerResult");
var answerResult2 = document.querySelector("#answerResult2");
var form = document.querySelector("#form");

var questions = [
    {q : "This is question 1", a1 : "t" , a2 : "f1" , a3 : "f2" , a4 : "f3", correct: "t"},
    {q : "This is question 2", a1 : "t" , a2 : "f1" , a3 : "f2" , a4 : "f3", correct: "f2"},
    {q : "This is question 3", a1 : "t" , a2 : "f1" , a3 : "f2" , a4 : "f3", correct: "f3"},
    {q : "This is question 4", a1 : "t" , a2 : "f1" , a3 : "f2" , a4 : "f3", correct: "t"},
    {q : "This is question 5", a1 : "t" , a2 : "f1" , a3 : "f2" , a4 : "f3", correct: "f1"}
];

// this is the countdown start number
var secondsLeft = 60;

// this is used to indicate what question the user is on
var questionNumber = 0;

// keeps track of user score
var gameScore = 0;

var highScoreList = [];


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
      if (secondsLeft === 0 || secondsLeft<0 || questionNumber === questions.length) {
        clearInterval(timeInterval);
        questionScreen.style.display = "none";
        gameOverScreen.style.display = "block";
        finalScore.textContent = "Your final score is: " + gameScore;
        highScoreEl.style.display = "block";
      }
    }, 1000);
    }

function displayQuestion () {
if(questionNumber < questions.length){
questionEl.textContent = questions[questionNumber].q;
answerButton1.textContent = questions[questionNumber].a1;
answerButton2.textContent = questions[questionNumber].a2;
answerButton3.textContent = questions[questionNumber].a3;
answerButton4.textContent = questions[questionNumber].a4;
highScoreEl.style.display = "none";
}
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

function a1Compare(){
    if (questions[questionNumber].a1 === questions[questionNumber].correct){
        gameScore+=5;
        answerResult.style.display = "block";
        setTimeout(function () {answerResult.style.display = "none";}, 1000);
    }
    else {
        answerResult2.style.display = "block";
        setTimeout(function () {answerResult2.style.display = "none";}, 1000);
        if(secondsLeft>=10){
        secondsLeft-=10;}
        else{
            secondsLeft=0;
        }
        }
    
    console.log(questions[questionNumber].a1);
    console.log(questions[questionNumber].compare);
    console.log("seconds left: " + secondsLeft);
    console.log("score: " + gameScore)
}

function a2Compare(){
    if (questions[questionNumber].a2 === questions[questionNumber].correct){
        gameScore+=5;
        answerResult.style.display = "block";
        setTimeout(function () {answerResult.style.display = "none";}, 1000);
    }
    else {
        answerResult2.style.display = "block";
        setTimeout(function () {answerResult2.style.display = "none";}, 1000);
        if (secondsLeft>=10){
        secondsLeft-=10;}
        else {
            secondsLeft=0;
        }
    }
    console.log(questions[questionNumber].a2);
    console.log(questions[questionNumber].compare);
    console.log("seconds left: " + secondsLeft);
    console.log("score: " + gameScore)
}

function a3Compare(){
    if (questions[questionNumber].a3 === questions[questionNumber].correct){
        gameScore+=5;
        answerResult.style.display = "block";
        setTimeout(function () {answerResult.style.display = "none";}, 1000);
    }
    else {
        answerResult2.style.display = "block";
        setTimeout(function () {answerResult2.style.display = "none";}, 1000);
        if (secondsLeft>=10){
        secondsLeft-=10;}
        else {
            secondsLeft=0;
        }
    }
    console.log(questions[questionNumber].a3);
    console.log(questions[questionNumber].compare);
    console.log("seconds left: " + secondsLeft);
    console.log("score: " + gameScore)
}

function a4Compare(){
    if (questions[questionNumber].a4 === questions[questionNumber].correct){
        gameScore+=5;
        answerResult.style.display = "block";
        setTimeout(function () {answerResult.style.display = "none";}, 1000);
    }
    else {
        answerResult2.style.display = "block";
        setTimeout(function () {answerResult2.style.display = "none";}, 1000);
        if (secondsLeft>=10){
        secondsLeft-=10;}
        else {
            secondsLeft=0;
        }
    }
    console.log(questions[questionNumber].a4);
    console.log(questions[questionNumber].compare);
    console.log("seconds left: " + secondsLeft);
    console.log("score: " + gameScore)
}


function addPersonToHighScore(event) {
    event.preventDefault();
    var initials = inputInitials.value;
    var li = document.createElement("li");
    li.id = highScoreList.length;
    li.innerHTML = initials + " - " + gameScore;
    highScoreList.push({ initials: initials, score: gameScore });
    highScoreListEl.append(li);
    highScoreScreen.style.display = "block";
    gameOverScreen.style.display = "none";
    console.log(highScoreList);
}

function clearHighScore(){
    for (var i = 0; i < (highScoreList.length+1); i++){
    highScoreListEl.removeChild(highScoreListEl.childNodes[0]);};
    // highScoreList="";
    highScoreList=[];
    console.log(highScoreList);
}

function goBack(){
    highScoreScreen.style.display = "none";
    startScreen.style.display = "block";
    secondsLeft = 60;
    gameScore = 0;
    questionNumber = 0;
    timeEl.textContent = "Time: 60";
}

questionScreen.addEventListener("click", nextQuestion);
highScoreEl.addEventListener("click", highScore); 
answerButton1.addEventListener("click", a1Compare);
answerButton2.addEventListener("click", a2Compare);
answerButton3.addEventListener("click", a3Compare);
answerButton4.addEventListener("click", a4Compare);
initialsButton.addEventListener("click", addPersonToHighScore);
clearButton.addEventListener("click", clearHighScore);
goBackButton.addEventListener("click", goBack);
