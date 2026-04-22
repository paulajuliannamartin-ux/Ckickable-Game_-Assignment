
// Variables
let score =0;
let timeleft =5;
let gameStarted = false;
let gameEnded = false;
let interval = null;


//HTML DOM
const button1 =document.getElementById('button1');
const button2 =document.getElementById('button2');
const ScoreDisplay = document.getElementById('ScoreDisplay');
const timerDisplay = document.getElementById('timerDisplay');
const input1 = document.getElementById('name');
const label1 = document.getElementById('label1');
const message = document.getElementById('message');


// UI Function
button1.addEventListener('click', () => {
 if (!gameEnded) {
   increaseScore();
 }

  if (!gameStarted) {
    startGame();
  }
})
button2.addEventListener('click', () => {
  submitHighscore();
})

input1.style.display = 'none';
label1.style.display = 'none';
button2.display = 'none';

//Function
function increaseScore() {
  score++;
  ScoreDisplay.innerText = score;
}

function countdown() {
  timeleft--;
  timerDisplay.innerText = timeleft;

  if (timeleft <= 0){
    timerDisplay.innerText = 0;
    endGame();
  }
}

function startGame() {
 interval = setInterval(countdown, 1000);
  gameStarted = true;
}

function endGame() {
gameEnded = true;
clearInterval(interval);
button1.style.display = 'none';
input1.style.display = 'block';
label1.style.display = 'block';
button2.style.display = 'block';
}

async function submitHighscore() {

  try {
    const response = await fetch("https://hooks.zapier.com/hooks/catch/8338993/ujs9jj9/",
      {
        method: "POST",
        body: JSON.stringify({ name: input1.value, score: score }),
      }
    );

    if (response.ok) {
      message.textContent = "Your score was saved successfully!";
    } else {
      message.textContent = "Your score could not be saved.";
    }

    console.log(response);
  }
}










