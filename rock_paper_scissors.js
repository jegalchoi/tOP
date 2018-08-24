
let computerPlay = function() {
  let randomNumber = getRandomInt(3);
  if (randomNumber === 1) {
    return "rock"
  } else if (randomNumber === 2) {
    return "paper"
  } else {
    return "scissors"
  }
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

let playerPlay = function() {
  let playerChoose = prompt("Rock, Paper or Scissors?");
  return playerChoose.toLowerCase();
};

let playRound = function(computerSelection, playerSelection) {
  if(playerSelection == "rock" && computerSelection == "scissors") {
    yourScore += 1;
    console.log("You win! Your rock beats computer's scissors.");
  } else if(playerSelection == "rock" && computerSelection == "paper") {
      computerScore += 1;
      console.log("You lose! Computer's paper beats your rock.");
  } else if(playerSelection == "paper" && computerSelection == "scissors") {
      computerScore += 1;
      console.log("You lose! Computer's scissors beat your paper.");
  } else if(playerSelection == "paper" && computerSelection == "rock") {
      yourScore += 1;
      console.log("You win! Your paper beats computer's rock.");
  } else if(playerSelection == "scissors" && computerSelection == "paper") {
      yourScore += 1;
      console.log("You win! Your scissors beat computer's paper.");
  } else if(playerSelection == "scissors" && computerSelection == "rock") {
      computerScore += 1;
      console.log("You lose! Computer's rock beats your scissors.");
  } else {
      console.log("Tie!");
  }
};

let yourScore = 0;
let computerScore = 0;

function game() {
  for(i=1; i <= 5; i++) {
    console.log("Round " + i);
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();
    let result = playRound(computerSelection, playerSelection);
    console.log("**********\nScoreboard\nYou: " + yourScore + "\n" + "Computer: " + computerScore + "\n**********");
    if(i == 5) {
      if(yourScore > computerScore){
        console.log("You won the match!");
      } else if (yourScore < computerScore) {
        console.log("You lost the match!");
      } else {
        console.log("It is a tie!");
      }
      let newGame = prompt("Play again?");
      if(newGame == 'yes') {
        game();
      } else {
        console.log("Thanks for playing!");
      };
      };
    }
};

let playGame = prompt("Would you like to play Rock, Paper, Scissors?");

if(playGame == 'yes') {
  game();
} else {
  console.log("Please come again!")
};
