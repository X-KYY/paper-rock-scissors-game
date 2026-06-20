// DOM
let humanContainer = document.querySelector('#your-container');
let scorePlace = document.querySelector('#score');
let humanImg = document.querySelector('#your-img');
let computerImg = document.querySelector('#computer-img');
let humanPlaceholder = document.querySelector('#human-answer-placeholder');
let computerPlaceholder = document.querySelector('#computer-answer-placeholder');
let button = document.querySelector('#vs-btn');
let notif = document.querySelector('#notification');
let outputNotif = document.querySelector('#notif-h1');

// Variabel
let humanScore = 0;
let computerScore = 0;
const choices = ['rock', 'paper', 'scissors'];
const opponent = {
    rock: 'paper',
    paper: 'scissors',
    scissors: 'rock'
};
const imgDatabase = {
    ori: 'img/question-mark.png',
    rock: 'img/rock.jpeg',
    paper: 'img/paper.jpeg',
    scissors: 'img/scissors.jpeg'
};
const changeImg = (img1, img2) => {
    let imgSrc1 = imgDatabase[img1];
    let imgSrc2 = imgDatabase[img2];
    humanImg.src = imgSrc1;
    computerImg.src = imgSrc2;
}
function drawComputerAnswer() {
    let randomIndex = Math.floor(Math.random() * 3);
    let randomImg = choices[randomIndex];
    return randomImg;
}
function showUpNotification(param) {
  let winner = `The winner is ${humanScore == 5 ? 'human' : 'computer'}`
  if (param) {
    notif.classList.add('notification-container-on');
    outputNotif.append(winner);
  } else {
    notif.classList.remove('notification-container-on');
    outputNotif.textContent = '';
  }
}
function resetState() {
  humanScore = 0;
  computerScore = 0;
  humanImg.src =  imgDatabase.ori; 
  computerImg.src = imgDatabase.ori;

}

// Play game
function playGame(answer) {
  const computerAnswer = drawComputerAnswer();
  const humanAnswer = answer.textContent.toLowerCase();
  const computerOpponent = opponent[computerAnswer];
    
  // Change image
  changeImg(humanAnswer, computerAnswer)
  humanPlaceholder.textContent = humanAnswer;
  computerPlaceholder.textContent = computerAnswer;

  // Conditioning answer
  if (humanAnswer === computerOpponent) {
    humanScore += 1;
  } else if (humanAnswer === computerAnswer) {
    return console.log('drawwwww')
  } else if (humanAnswer !== computerOpponent) {
    computerScore += 1;
  } 

  // Score conditioning
  if (humanScore == 5 || computerScore == 5) {
    showUpNotification(true);
    setTimeout(() => {showUpNotification(false)}, 1500);
    resetState();
  }
    
    scorePlace.textContent = `${humanScore} : ${computerScore}`
}
