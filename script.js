let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let rando = Math.floor(Math.random() * 3);
    if (rando == 0) {
        return "rock";
    } else if (rando == 1) {
        return "scissors";
    } else { return "paper" }
};

function getHumanChoice(){
    const input = prompt("rock, paper or scissors");
    return input;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    if (humanChoice == "rock" && computerChoice == "scissors" ||
    humanChoice == "paper" && computerChoice == "rock" ||  
    humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
console.log("whoopty doo " + humanChoice + " beats " + computerChoice + "\n" + "human: " +  humanScore + " computer: " + computerScore);
}
else if 
(humanChoice == "scissors" && computerChoice == "rock" ||
    humanChoice == "rock" && computerChoice == "paper" ||  
    humanChoice == "paper" && computerChoice == "scissors") {
computerScore++;
console.log("hahaha" + computerChoice + " beats " + humanChoice + "\n" + "human: " +  humanScore + " computer: " + computerScore)
    }else {console.log("tie")}
}

function playGame(){
    playRound(getHumanChoice, getComputerChoice)
    playRound(getHumanChoice, getComputerChoice)
    playRound(getHumanChoice, getComputerChoice)
    playRound(getHumanChoice, getComputerChoice)
    playRound(getHumanChoice, getComputerChoice)
    console.log("you scored " + humanScore + " computer scored " + computerScore)
    if (humanScore > computerScore) {
        console.log("you win!")
    }
    else if (humanScore < computerScore) {
        console.log("lol you lost") 
    }
    else {
        console.log("tied!")
    }
}
playGame();