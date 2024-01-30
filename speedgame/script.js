//variables
const words = [
  'apple',
  'banana',
  'orange',
  'grape',
  'kiwi',
  'strawberry',
  'blueberry',
  'pineapple',
];
let correckeys = 0;
let incorrectkeys = 0;
let timer;
let randomWord;
let resetButton = document.querySelector('button');

// documents
resetButton.addEventListener('click', resetGame);
document.getElementById('correct-count').innerText = correckeys;
document.getElementById('incorrect-count').innerText = incorrectkeys;
document.addEventListener('keydown', function (e) {
  if (e.key === randomWord[correckeys]) {
    correckeys++;
    document.getElementById('correct-count').innerText = correckeys;
  } else {
    incorrectkeys++;
    document.getElementById('incorrect-count').innerText = incorrectkeys;
  }
});

//functions

function startGame() {
  start();
  displayName();
}

function endGame() {
  clearInterval(timer);
  alert('Game over, click Ok to see your scores');
  let message = `You get ${correckeys} keys  correct , and ${incorrectkeys} keys wrong`;
  document.getElementById('message').innerText = message;
}

function resetGame() {
  clearInterval(timer);
  document.getElementById('timer').innerText = 0;
  document.getElementById('correct-count').innerText = 0;
  document.getElementById('incorrect-count').innerText = 0;
  document.getElementById('message').innerText = '';
  start();
}

function displayName() {
  randomWord = words[Math.floor(Math.random() * words.length)];
  document.querySelector('#word').innerText = randomWord;
}

function start() {
  let time = 0;
  document.getElementById('timer').innerText = time;

  timer = setInterval(() => {
    time++;
    document.getElementById('timer').innerText = time;

    if (time >= 10) {
      endGame();
    } else if (correckeys === randomWord.length) {
      endGame();
    }
  }, 1000);
}

startGame();
