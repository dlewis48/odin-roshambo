const options=['Rock', 'Paper', 'Scissors'];

//Score Variable 
let humanScore = 0
let computerScore = 0

// Function to randomly choose from options for computer
function getComputerChoice(){
     const randomOption = Math.floor(Math.random() * options.length)
      const choice = options[randomOption];
      console.log("THe Computer Picks " + choice);
     return options[randomOption];
    
}


//function to randomly choose from options for player
function getHumanChoice(){
    let playerPick = prompt('Rock, Paper,Scissors?');
     playerPick = playerPick.charAt(0).toUpperCase() + playerPick.slice(1).toLowerCase();
    console.log("You Picked "+playerPick);
     return playerPick
}

//function to play game
 function playGame(humanChoice, computerChoice){
     for (let i = 0; i < 5; i++){
     const humanChoice = getHumanChoice()
     const computerChoice = getComputerChoice()
     console.log(playRound(humanChoice, computerChoice));
 }}
 //function to play round
function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice)
    return "Its a draw"
    else if (humanChoice === ("Rock") && computerChoice === ("Scissors") || humanChoice ===("Paper") &&  computerChoice ===("Rock") || humanChoice ===("Scissors") && computerChoice === ("Paper"))
     
     return humanScore++, "You Win "+humanChoice + " beats "+ computerChoice
    else
     
    return computerScore++, "You Lose "+ computerChoice +" beats "+ humanChoice}
    playGame()
    console.log(`Final Score Human-${humanScore} Computer- ${computerScore}`);
    if (humanScore>computerScore){
     console.log("You Win!");
    }else if (computerScore>humanScore){
     console.log("You Lose!")
    }
    else {
     console.log(`It's a Draw!`);}