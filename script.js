const body = document.body
const span = document.createElement("span")
const buttonRock = document.createElement("button")
const buttonPaper = document.createElement("button")
const buttonScissors = document.createElement("button")

span.textContent = "Select your choice: "
buttonRock.textContent = "Rock"
buttonPaper.textContent = "Paper"
buttonScissors.textContent = "Scissors" 

body.append(span)
body.append(buttonRock)
body.append(buttonPaper)
body.append(buttonScissors)

let computerChoices = ["rock", "paper", "scissors"]
let humanScore = 0, computerScore = 0, roundCount = 1;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
    return computerChoices[computerChoice]
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice: ")
    return humanChoice.toLowerCase()
}

function checkGameEnd() {
    if(computerScore == 5 || humanScore == 5) {
        buttonRock.disabled = true;
        buttonPaper.disabled = true;
        buttonScissors.disabled = true;

        const restartButton = document.createElement("button");
        restartButton.textContent = "Restart Game?"
        restartButton.addEventListener("click", (e) => {
            window.location.reload("true")
        })

        alert(`Game finished! ${computerScore > humanScore ? "Computer wins!" : "You win!"}`)
        body.append(restartButton)
    } else {
        return
    }

}

function playRound(humanChoice) {
    const choiceDiv = document.createElement("div")
    const resultDiv = document.createElement("div")
    const computerChoice = getComputerChoice()

    choiceDiv.textContent = `You picked ${humanChoice} and the computer picked ${computerChoice}!`
    
    if(humanChoice == computerChoice) {
        resultDiv.textContent = `Tie! Both players picked ${computerChoice}!`
    } else if (
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "rock")) {
        resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}!`
        humanScore ++
    } else {
        resultDiv.textContent = `Computer wins! ${computerChoice} beats ${humanChoice}!`
        computerScore ++
    }

    body.append(document.createElement("br"))
    body.append(document.createTextNode(`Round ${roundCount}:`))
    body.append(choiceDiv)
    body.append(resultDiv)
    body.append(document.createTextNode(`Current Score - Computer: ${computerScore} You: ${humanScore}`))
    body.append(document.createElement("br"))
    checkGameEnd();

    roundCount ++;
}

buttonRock.addEventListener("click", () => {
    playRound("rock")
    console.log("User picked rock")
})

buttonPaper.addEventListener("click", () => {
    playRound("paper")
    console.log("User picked paper")
})

buttonScissors.addEventListener("click", () => {
    playRound("scissors")
    console.log("User picked scissors")
})