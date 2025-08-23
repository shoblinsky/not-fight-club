const wins = document.getElementById('wins');
const loses = document.getElementById('loses');

wins.textContent = window.localStorage.getItem('wins');
loses.textContent = window.localStorage.getItem('loses');
