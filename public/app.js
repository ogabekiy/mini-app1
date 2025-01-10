// Select elements
const coinButton = document.getElementById('coin-button');
const coinCountElement = document.getElementById('coin-count');

let coins = 0;

// Tap Event
coinButton.addEventListener('click', () => {
    // Increment coins
    coins += 1;
    coinCountElement.textContent = coins;

    // Add animation effect
    coinCountElement.classList.add('fade');
    setTimeout(() => {
        coinCountElement.classList.remove('fade');
    }, 500);
});
