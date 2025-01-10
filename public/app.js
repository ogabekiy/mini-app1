const tg = window.Telegram.WebApp;

// Log Telegram WebApp data
console.log(tg.initDataUnsafe);

// Retrieve user name with fallback
const userName = tg.initDataUnsafe.user?.first_name || 'Guest';
const usernameElement = document.getElementById('username');

// Update the UI with the user's name
usernameElement.textContent = `Hello, ${userName}!`;

// Add dynamic effects
let colors = ['#ff4081', '#ffa000', '#3f51b5', '#76ff03', '#1de9b6'];
let i = 0;

function changeUsernameColor() {
    usernameElement.style.color = colors[i];
    i = (i + 1) % colors.length;
}

setInterval(changeUsernameColor, 1000);

// Handle button click
document.getElementById('start-button').addEventListener('click', () => {
    tg.close();
});

// Expand Web App
tg.expand();
