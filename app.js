// initializing the user and computer's score
var userScore = 0;
var computerScore = 0;

// Get the DOM elements
const userScoreSpan = document.getElementById('user-score'); // span of user
const compScoreSpan = document.getElementById('comp-score'); // span of computer

const scoreBoardDiv = document.querySelector('.score-board'); // div containing score board
const resultDiv = document.querySelector('.result');          // div containing result

const rockDiv = document.getElementById('r');                 // rock image
const paperDiv = document.getElementById('p');               // paper image
const scissorDiv = document.getElementById('s');              // scissor image

const user = document.getElementById('user-label'); // user icon of scoreboard
const comp = document.getElementById('computer-label'); // user icon of scoreboard


// Event listeners 
rockDiv.addEventListener('click', function () { game('r'); });
paperDiv.addEventListener('click', function () { game('p'); });
scissorDiv.addEventListener('click', function () { game('s'); });



// function that generates random choices for computer
function getComputerChoice() {
    const choice = ['r', 'p', 's'];                             // creating three choices for the comp
    var randomNumber = (Math.random() * 2).toFixed(0);            // obtain random number from 0-2 for index of choice;
    return choice[randomNumber];

}
// function that compares the user's and computer's choices
function game(userChoice) {
    resetFormat();

    // generate the computer's choice 
    const computerChoice = getComputerChoice();

    // for console view of the game 
    console.log("user choice: " + userChoice);
    console.log("computer choice: " + computerChoice);

    /* Comparison of the choices made */

    // for same choices of user and the computer
    if (userChoice == computerChoice) {
        console.log("      ITS DRAW");
        resultDiv.innerHTML = 'YOU & COMPUTER SELECTED SAME !!';

        // indicate the draw of the game by changing background color
        scoreBoardDiv.style.backgroundColor = "grey";
    }
    else
        // switch statement for comparison
        switch (userChoice + computerChoice) {
            case 'rs':
            case 'pr':
            case 'sp':
                resultDiv.innerHTML = " USER WINS !";
                console.log('       USER WINS');
                // store the current score of the user 
                userScore++;
                userScoreSpan.innerHTML = userScore;
                // indicate the user's wining by glowing
                user.style.boxShadow = "#8fd7d2 0px 0px 22px";
                break;
            default:
                resultDiv.innerHTML = " COMPUTER WINS !";
                console.log('       COMPUTER WINS');
                // store the current score of the computer 
                computerScore++;
                compScoreSpan.innerHTML = computerScore;
                // indicate the computer's wining by glowing
                comp.style.boxShadow = "#8fd7d2 0px 0px 22px";

        }
}

// remove the wining indication of players 
function resetFormat() {
    // remove the glowing for next round
    user.style.boxShadow = "none";
    // remove the glowing of computer span for next round
    comp.style.boxShadow = "none";
    // remove the draw indication
    scoreBoardDiv.style.backgroundColor = "#24272E";
}

