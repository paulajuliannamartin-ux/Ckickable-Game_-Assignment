//Click a button or object to earn points
// Variables
let score =0;
let timeleft =60

//HTML DOM
const button1 =document.getElementById('button1');
const ScoreDisplay = document.getElementById('ScoreDisplay');
const timerDisplay = document.getElementById('timerDisplay');

// UI Function
button1.addEventListener('click', () => {
  increaseScore();
})

setInterval(countdown, 1000);

//Function
function increaseScore() {
  score++;
  ScoreDisplay.innerText = score;
}
function countdown() {
  timeleft--;
  timerDisplay.innerText = timeleft;
  //
}

