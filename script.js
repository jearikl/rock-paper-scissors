//gets input from user
//let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "))
// 
// ;

let humanScore = 0;
let computerScore = 0;


 playGame()
 playGame()
 playGame()
 playGame()
 playGame()



function getRandomNumber(){
    return Math.random()
}

function getComputerChoice(){
 if (getRandomNumber() <= .3333) {
    return "rock";
} 
    else if (getRandomNumber() > .6666) {
        return "scissors";
    }
        else {return "paper"}
    
};

console.log("computer: " + getComputerChoice())

function getHumanChoice(){
    const input = prompt("rock, paper or scissors").toLowerCase;
    if (input === "rock") {
        return "rock";
    } else if (input === "paper") {
        return "paper";
    } else if (input === "scissors") {
        return "scissors";
    } else {
        return "Add a valid entry";
    }
};

console.log("human: " + getHumanChoice());


function playGame(){

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() == "rock" && computerChoice == "scissors" ||
    humanChoice.toLowerCase() == "paper" && computerChoice == "rock" ||  
    humanChoice.toLowerCase() == "scissors" && computerChoice == "paper") {
humanScore++;
console.log("you won that round!");}
else if 
(humanChoice.toLowerCase() == "scissors" && computerChoice == "rock" ||
    humanChoice.toLowerCase() == "rock" && computerChoice == "paper" ||  
    humanChoice.toLowerCase() == "paper" && computerChoice == "scissors") {
computerScore++;
console.log("hahaha you stupid bitch you lost")}
else  {return "tie";}
}
}
  

  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();