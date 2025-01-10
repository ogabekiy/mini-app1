const tg = window.Telegram.WebApp;

document.getElementById('username').innerText = tg.initDataUnsafe.user?.first_name || 'Guest';

document.getElementById('closeBtn').addEventListener('click', () => {
    tg.close();
});

tg.expand();
