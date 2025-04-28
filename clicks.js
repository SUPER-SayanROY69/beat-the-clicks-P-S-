// Variables
let counter = 0;
let timeLeft = 10; // Set time limit (you can change it)
let timer;
let gameStarted = false;

const counterDisplay = document.getElementById('counter');
const timeLeftDisplay = document.getElementById('timeLeft');
const clickButton = document.getElementById('clickButton');
const highestScoreDisplay = document.getElementById('highestScore');

// Click Event
clickButton.addEventListener('click', () => {
    if (!gameStarted) {
        startTimer();
        gameStarted = true;
    }
    if (timeLeft > 0) {
        counter++;
        counterDisplay.textContent = counter;
    }
});

// Start Timer
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timeLeftDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            clickButton.disabled = true;
            alert(`Time's up! You clicked ${counter} times.`);
        }
    }, 1000);
}

// Fetch Highest Score
async function fetchHighestScore() {
    try {
        const response = await fetch('https://your-github-link.com/highest-score.json');
        const data = await response.json();
        highestScoreDisplay.textContent = data.highestScore;
    } catch (error) {
        highestScoreDisplay.textContent = 'Unable to load highest score';
        console.error('Error fetching highest score:', error);
    }
}

// Initialize
fetchHighestScore();
