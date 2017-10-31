const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Invalid Type')
  }
};

const getComputerChoice = () => {
  let compChoice = Math.floor(Math.random() * 3);
  switch (compChoice) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2: 
      return 'scissors';
      break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  }
  if (userChoice === 'rock' && computerChoice === 'scissors') {
      return 'The user has won';
    } else {
      return 'The computer has won';
    }
    if (userChoice === 'paper' && computerChoice === 'rock') {
      return 'The user has won';
    } else {
      return 'The computer has won';
    }
    if (userChoice === 'scissors' && computerChoice === 'paper') {
      return 'The user has won';
    } else {
      return 'The computer has won';
    }
  if (userChoice === 'bomb') {
    return 'The user has won';
  }
};

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
