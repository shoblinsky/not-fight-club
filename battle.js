const logWindow = document.getElementById('log__window');
const fightWrapper = document.getElementById('fight__wrapper');

const playerHealthSpan = document.querySelector('.player__health');
const enemyHealthSpan = document.querySelector('.enemy__health');

const playerHpBar = document.querySelector('.hpbar__player');
const enemyHpBar = document.querySelector('.hpbar__enemy');

const playerNameSpan = document.querySelector('player__name__fight')
const playerAvatar = document.querySelector('player__avatar__fight')

const enemyNameSpan = document.querySelector('.enemy__name__fight');
const enemyAvatar = document.querySelector('.enemy__avatar__fight');


const attack = document.querySelector('.attack');


import { enemies, activeEnemy, activeEnemyIndex, chooseEnemyIndex } from "./hostiles.js";
const personParts = ['head', 'torso', 'hands', 'belly', 'legs']

let playerIsDead = false;
let enemyIsDead = false;
let isGameOver = false;

function gameOver() {
    if (playerIsDead || enemyIsDead) {
        isGameOver = true;
        attackButton.disabled = true;
    }
}

// if (isGameOver === true) {

// }

let attackPartOne = undefined
let defencePartOne = undefined
let defencePartTwo = undefined

let turn = 1


function resetLog() {
    logWindow.textContent = '';
    turn = 1;
}

function addLog(string) {
    const logString = document.createElement('p')
    logString.textContent = `Turn #${turn}. ${string}`
    logWindow.appendChild(logString);
    logWindow.scrollTop = logWindow.scrollHeight;
    turn = turn + 1;
}

const testButton = document.getElementById('test');
testButton.addEventListener('click', function () {
    addLog('huh?');
});

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function () {
    resetLog();
});


let player = {
    health: 100,
    attack: 15,
    criticalChance: 0.25,
    criticalMult: 5,
    attackParts: [],
    defenceParts: [],
}

