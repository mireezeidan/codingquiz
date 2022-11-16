// global variable
let startQuizbtn = document.querySelector(`#startQuiz`);
let questionDiv = document.querySelector(`#questions`);
let timerDiv = document.querySelector(`#timer`);
let allScoresDiv = document.querySelector("#allScores");
let intialForm = document.querySelector("#initials");
let highscoreTag = document.querySelector("#highscore");
let questions = [
  {
    title: "Which of the following isn't a coding language?",
    choices: ["HTML", "CSS", "JavaScript", "Blanket"],
    answer: "Blanket",
  },
  { title: "Which of the following isn't a type in JavaScript?", choices: ["strings", "numbers", "objects", "headings"], answer: "headings" },
  { title: "this is the third question", choices: ["a", "b", "c", "d"], answer: "d" },
];
let correctOrNot = ["Correct", "Incorrect"];
let scores = JSON.parse(localStorage.getItem("scores")) || [];
let questionsIndex = 0;
let time = 60;
let timer = 0;
let score = 0;

// functions
function startQuiz() {
  timer = setInterval(function () {
    time--;
    timerDiv.innerHTML = time;
  }, 1000);
  createButton(0);

  //   bring up question one

  // make clickable
}

function createButton(index) {
  let title = document.createElement("h2");
  title.textContent = questions[index].title;
  questionDiv.appendChild(title);
  // add 4 answer options
  let btnOne = document.createElement("button");
  btnOne.textContent = questions[index].choices[0];
  btnOne.dataset.answer = questions[index].answer;
  questionDiv.appendChild(btnOne);

  let btnTwo = document.createElement("button");
  btnTwo.textContent = questions[index].choices[1];
  btnTwo.dataset.answer = questions[index].answer;
  questionDiv.appendChild(btnTwo);

  let btnThree = document.createElement("button");
  btnThree.textContent = questions[index].choices[2];
  btnThree.dataset.answer = questions[index].answer;
  questionDiv.appendChild(btnThree);

  let btnFour = document.createElement("button");
  btnFour.textContent = questions[index].choices[3];
  btnFour.dataset.answer = questions[index].answer;
  questionDiv.appendChild(btnFour);
}

function endGame() {
  questionDiv.innerHTML = "";
  let heading = document.createElement("h1");
  heading.innerHTML = "Quiz is Over!";
  questionDiv.appendChild(heading);
  console.log(time);
  score = time;
  clearInterval(timer);
  console.log(score);
  // display the score by getting it from local storage
  // add button to restart the quiz

  // save initials and score
}

function handleInitialScoreSave(event) {
  event.preventDefault();
  let initials = document.querySelector("#initialsInput").value;
  document.querySelector("#initialsInput").value = "";
  console.log(initials);
  let userScore = {
    initials: initials,
    score: score,
  };
  scores.push(userScore);

  localStorage.setItem("scores", JSON.stringify(scores));
}

function viewScoreInitials(event) {
  event.preventDefault();
  scores.forEach((score) => {
    allScoresDiv.innerHTML += `${score.initials}: ${score.score} <br>`;
  });
}

function checkAnswer(event) {
  let choice = event.target.innerHTML;
  let answer = event.target.dataset.answer;
  let verify = document.createElement("p");
  questionsIndex++;

  if (choice === answer) {
    verify.textContent = correctOrNot[0];
    questionDiv.appendChild(verify);
    if (questionsIndex > questions.length - 1) {
      endGame();
    } else {
      createButton(questionsIndex);
    }
    // locally store how many answers were correct and incorrect
  } else {
    verify.textContent = correctOrNot[1];
    questionDiv.appendChild(verify);
    time = time - 10;
    createButton(questionsIndex);
  }
}

// function calls
startQuizbtn.addEventListener("click", startQuiz);

questionDiv.addEventListener("click", checkAnswer);

intialForm.addEventListener("submit", handleInitialScoreSave);

highscoreTag.addEventListener("click", viewScoreInitials);
