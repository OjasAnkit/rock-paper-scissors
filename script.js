let computerChoices = ['rock', 'paper', 'scissors']
let humanScore = 0, computerScore = 0

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    return computerChoices[computerChoice];
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice: ")
    return humanChoice.toLowerCase()
}

function playRound() {
    const humanChoice = getHumanChoice()
    const computerChoice = getComputerChoice()
    let resultString = ""

    if(humanChoice == computerChoice) {
        resultString = `Tie! Both players picked ${computerChoice}!`
    } else if (
        (humanChoice == 'rock' && computerChoice == 'scissors') ||
        (humanChoice == 'scissors' && computerChoice == 'paper') ||
        (humanChoice == 'paper' && computerChoice == 'rock')) {
        resultString = `You win! ${humanChoice} beats ${computerChoice}!`
        humanScore ++
    } else {
        resultString = `Computer wins! ${computerChoice} beats ${humanChoice}!`
        computerScore ++
    }
    console.log(resultString);
}

console.log("Starting the game!");
for(let i = 0; i < 5; i ++) {
    console.log(`Round ${i + 1}:`);
    playRound()
}

if(computerScore > humanScore) {
    console.log(`Computer wins! Computer: ${computerScore} | You: ${humanScore}`);
} else {
    console.log(`You win! Computer: ${computerScore} | You: ${humanScore}`);
}
