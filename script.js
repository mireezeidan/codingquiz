// global variable
let startQuizbtn = document.querySelector(`#startQuiz`);
let questionDiv = document.querySelector(`#question`);

// functions
function startQuiz() {
  alert("I started the game");
  //   bring up question one
  let title = document.createElement("h2");
  title.textContent = "who is the best magician?";
  questionDiv.appendChild(title);
  // add 4 answer options
  let btnOne = document.createElement("button");
  // make clickable
}

// function calls
startQuizbtn.addEventListener("click", startQuiz);
