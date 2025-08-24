const wins = document.getElementById('wins');
const loses = document.getElementById('loses');
const charName = document.getElementById('name');

wins.textContent = window.localStorage.getItem('wins');
loses.textContent = window.localStorage.getItem('loses');
charName.textContent = window.localStorage.getItem('name');


