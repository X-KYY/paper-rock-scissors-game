let humanScore = 0;
let computerScore = 0;;
let choices = ['paper', 'rock', 'scissors'];
const system = {
    rock : 'paper',
    paper : 'scissors',
    scissors : 'rock'
}
let status = true;


function playGame() {

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    let randomAnswer = choices[randomIndex];
    return randomAnswer;
}

let getHumanChoice = prompt('what would you choice between ROCK, PAPER, and SCISSORS?');

const humanAnswer = getHumanChoice;
const computerAnswer = getComputerChoice();


function playRound(human, computer) {
    let opponent = system[computer];
    
    if (human === computer) {
        alert(`Draw, computer answer is ${computer}. Your score: ${humanScore}, computer score: ${computerScore}`)
    } else if (human !== opponent) {
        computerScore += 1;
        alert(`You lose, computer answer is ${computer}. Your score: ${humanScore}, computer score: ${computerScore}`)
    } else if (human == opponent) {
        humanScore += 1;
        alert(`You win, computer answer is ${computer}. Your score: ${humanScore}, computer score: ${computerScore}`)
    }
    

}
playRound(humanAnswer, computerAnswer);
}

while(humanScore < 5 && computerScore < 5) {
    playGame()
}

if (computerScore === 5 || humanScore === 5) {
    let winner = humanScore === 5 ? "Human" : "computer";
    alert(`The winner is ${winner}. If you wanna play again, refresh this page`)
}