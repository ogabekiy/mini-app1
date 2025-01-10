const tg = window.Telegram.WebApp;

const userName = tg.initDataUnsafe.user?.first_name || 'Guest';

const welcomeMessage = document.getElementById('welcome-message');
const usernameElement = document.getElementById('username');
usernameElement.textContent = userName;

let colors = ['#ff4081', '#ffa000', '#3f51b5', '#76ff03', '#1de9b6'];
let i = 0;

function changeUsernameColor() {
    usernameElement.style.color = colors[i];
    i = (i + 1) % colors.length;
}

setInterval(changeUsernameColor, 1000);

document.getElementById('start-button').addEventListener('click', () => {
    tg.close();
});

tg.expand();
