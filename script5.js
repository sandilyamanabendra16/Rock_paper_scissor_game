// Variables to keep track of scores
let userScore = 0;
let computerScore = 0;

// Function to handle user's choice
let userChoice;
function dis(val) {
    userChoice = val;
}

// Function to get random computer choice
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let compChoice;
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomIndex = getRandomInt(3);
    compChoice = choices[randomIndex];
}

// Function to determine the result
function determineResult(user, computer) {
    switch (user) {
        case 'rock':
            if (computer === 'rock') return 'draw';
            if (computer === 'paper') return 'lose';
            if (computer === 'scissor') return 'win';
            break;
        case 'paper':
            if (computer === 'rock') return 'win';
            if (computer === 'paper') return 'draw';
            if (computer === 'scissor') return 'lose';
            break;
        case 'scissor':
            if (computer === 'rock') return 'lose';
            if (computer === 'paper') return 'win';
            if (computer === 'scissor') return 'draw';
            break;
    }
}

// Function to update scores and UI
let userScoreInput = document.querySelector('#ys');
let computerScoreInput = document.querySelector('#cs');
userScoreInput.value=0;
computerScoreInput.value=0;
function updateScore(result) {

    switch (result) {
        case 'win':
            userScore++;
            break;
        case 'lose':
            computerScore++;
            break;
    }

    userScoreInput.value = userScore;
    computerScoreInput.value = computerScore;
}

let results=document.getElementById('results');
let lost=document.getElementById('loser');
let win=document.getElementById('winner');
let next=document.getElementById('rule_next');
let next1=document.getElementById('next');
let winner=document.getElementById('hurray');
let winner1=document.getElementById('win');
let score=document.getElementById('head1');
winner.style.display='none';
results.style.display='none';
// Function to update the UI based on result
function updateUI(result) {
    const winDiv = document.getElementById('win');
    const loseDiv = document.getElementById('lost');
    const tieDiv = document.getElementById('tie');
    const buttons1=document.getElementById('buttons1');
    const lines=document.getElementById('lines');
    const win=document.getElementById('winner');
    const next=document.getElementById('rule_next');
    const next1=document.getElementById('next');
    
    // Hide all result divs
    winDiv.style.display = 'none';
    loseDiv.style.display = 'none';
    tieDiv.style.display = 'none';
    lines.style.display='none';
    next1.style.display='none';
    // Show the corresponding result div
    switch (result) {
        case 'win':
            winDiv.style.display = 'block';
            results.style.display='inline-grid';
            win.style.display='block';
            next.style.display='inline-flex';
            buttons1.style.display='none';
            next1.style.display='inline-grid';
            break;
        case 'lose':
            loseDiv.style.display = 'block';
            results.style.display='inline-grid';
            lost.style.display='block';
            buttons1.style.display='none';
            next.style.display='none';
    
            break;
        case 'draw':
            tieDiv.style.display = 'block';
            results.style.display='inline-grid';
            buttons1.style.display='none';
            next.style.display='none';
            break;
    }

    // Update the score
    updateScore(result);
}

// Function to play the game
function playGame() {
    getComputerChoice();
    const result = determineResult(userChoice, compChoice);
    updateUI(result);
}

// Function to reset scores
function resetScores() {
    let userScore;
    let  computerScore;
    const userScoreInput = document.getElementById('ys');
    const computerScoreInput = document.getElementById('cs');
    userScoreInput.innerText=0;
    computerScoreInput.innerText=0;

    const winDiv = document.getElementById('win');
    const loseDiv = document.getElementById('lost');
    const tieDiv = document.getElementById('tie');
    const results=document.getElementById('results');
    results.style.display='none';
    winDiv.style.display = 'none';
    loseDiv.style.display = 'none';
    tieDiv.style.display = 'none';
    win.style.display='none';
    lost.style.display='none';
    lines.style.display='inline-flex';
    next1.style.display='none';
    winner.style.display='none';
    score.style.display='flex';
}

// Event listeners for buttons
document.getElementById('rock').addEventListener('click', () => {
    dis('rock');
    playGame();
    displayResults([userChoice,compChoice]);
});

document.getElementById('paper').addEventListener('click', () => {
    dis('paper');
    playGame();
    displayResults([userChoice,compChoice]);
});

document.getElementById('scissor').addEventListener('click', () => {
    dis('scissor');
    playGame();
    displayResults([userChoice,compChoice]);
});

// Event listener for play again buttons
document.querySelectorAll('.replay').forEach(button => {
    button.addEventListener('click', () => {
        resetScores();
        const buttons2=document.getElementById('buttons1');
        const lines1=document.getElementById('lines');

        buttons2.style.display='block';
        lines1.style.display='block';
    });
});

// Function to update scores and UI
function updateScore(result) {
    const userScoreInput = document.getElementById('ys');
    const computerScoreInput = document.getElementById('cs');

    switch (result) {
        case 'win':
            userScore++;
            break;
        case 'lose':
            computerScore++;
            break;
    }

    userScoreInput.value = userScore;
    computerScoreInput.value = computerScore;
}

const resultsDiv = document.querySelectorAll("#results");
const resultDivs = document.querySelectorAll(".results_result");
const gameDiv = document.querySelector(".buttons");
// function to display winner
function displayResults(results) {
    
    resultDivs.forEach((resultDiv, idx) => {
        resultDiv.innerHTML = `
        <div class="choice ${results[idx]}" id="${results[idx]}1">
          <img src="${results[idx]}.png" alt="${results[idx]}" />
        </div>
        `;
      
    });
  }
// function to display hurray page

function displaywin(){
    winner.style.display='block';
    results.style.display='none';
    win.style.display='none';
    winner1.style.display='none';
    next1.style.display='none';
    score.style.display='none';
}

// Function to display rules
function displayText() {
    const rulesDiv = document.getElementById('rules1');
    rulesDiv.style.display = 'block';
}

// Function to close rules
function closeRules() {
    const rulesDiv = document.getElementById('rules1');
    rulesDiv.style.display = 'none';
}

