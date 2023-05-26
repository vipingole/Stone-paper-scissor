// JavaScript code for Rock Paper Scissor game

// Store the reference to the choice buttons
const rockBtn = document.querySelector('button[value="Rock"]');
const paperBtn = document.querySelector('button[value="Paper"]');
const scissorBtn = document.querySelector('button[value="Scissor"]');

// Store the reference to the reset button
const resetBtn = document.querySelector('button[value="reset"]');

// Store the reference to the user and computer images
const userImg = document.getElementById('user_img');
const compImg = document.getElementById('comp_img');

// Add event listeners to the choice buttons
rockBtn.addEventListener('click', () => playGame('Rock'));
paperBtn.addEventListener('click', () => playGame('Paper'));
scissorBtn.addEventListener('click', () => playGame('Scissor'));

// Function to play the game
function playGame(userChoice) {
  // Generate a random choice for the computer
  const computerChoice = generateComputerChoice();

  // Update the user and computer images based on the choices
  userImg.src = `images/${userChoice.toLowerCase()}.jpg`;
  compImg.src = `images/${computerChoice.toLowerCase()}flip.jpg`;

  // Determine the winner and display the result
  const result = determineWinner(userChoice, computerChoice);
  displayResult(result);
}

// Function to generate a random choice for the computer
function generateComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissor'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (userChoice === 'Rock' && computerChoice === 'Scissor') ||
    (userChoice === 'Paper' && computerChoice === 'Rock') ||
    (userChoice === 'Scissor' && computerChoice === 'Paper')
  ) {
    return 'You win!';
  } else {
    return 'Computer wins!';
  }
}

// Function to display the result
function displayResult(result) {
  alert(result);
}

// Add event listener to the reset button
resetBtn.addEventListener('click', resetGame);

// Function to reset the game
function resetGame() {
  // Reset the user and computer images
  userImg.src = 'images/rock.jpg';
  compImg.src = 'images/rockflip.jpg';
}
