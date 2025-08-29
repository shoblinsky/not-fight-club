import { enemies, activeEnemy, activeEnemyIndex, chooseEnemyIndex } from "./hostiles.js";

const logWindow = document.getElementById('log__window');
const fightWrapper = document.getElementById('fight__wrapper');

const playerHealthSpan = document.querySelector('.player__health');
const enemyHealthSpan = document.querySelector('.enemy__health');

const playerHpBar = document.querySelector('.hpbar__player');
const enemyHpBar = document.querySelector('.hpbar__enemy');

const playerNameSpan = document.querySelector('.character__name__fight')
const playerAvatar = document.querySelector('.player__avatar__fight')

const enemyNameSpan = document.querySelector('.enemy__name__fight');
const enemyAvatar = document.querySelector('.enemy__avatar__fight');


const attack = document.querySelector('.attack');

const personParts = ['head', 'torso', 'hands', 'belly', 'legs']

playerNameSpan.textContent = localStorage.getItem('name')
playerAvatar.src = localStorage.getItem('avatar')

let player = {
    health: 100,
    attack: 15,
    criticalChance: 0.25,
    criticalMult: 5,
    attackParts: [],
    defenceParts: [],
}

let currentEnemy = JSON.parse(localStorage.getItem('activeEnemy'));


if (currentEnemy) {
    enemyNameSpan.textContent = currentEnemy.name;
    enemyAvatar.src = currentEnemy.image;
    enemyHealthSpan.textContent = currentEnemy.health;
    enemyHpBar.value = currentEnemy.health;
    enemyHpBar.max = currentEnemy.health;
    playerHealthSpan.textContent = player.health;
    playerHpBar.value = player.health;
    playerHpBar.max = player.health;
}




let playerIsDead = false;
let enemyIsDead = false;
let isGameOver = false;

let attackPart = personParts[0]
let defenceParts = [];

player.attackParts = attackPart;
player.defenceParts = defenceParts;

// let defencePartOne = undefined
// let defencePartTwo = undefined






let turn = 1

function gameOver() {
    if (playerIsDead || enemyIsDead) {
        isGameOver = true;
        attackButton.disabled = true;
    }
}

// if (isGameOver === true) {

// }

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

function addInfo(string) {
    const logString = document.createElement('p')
    logString.textContent = string
    logWindow.appendChild(logString);
    logWindow.scrollTop = logWindow.scrollHeight;
}

// if (!attackPart || defenceParts.length !== 2) {
//     addLog("Please select one attack zone and two defence zones!");
//     return;
// }

const testButton = document.getElementById('test');
testButton.addEventListener('click', function () {
    addLog('huh?');
});

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function () {
    resetLog();
});


function updateAttackButtonState() {
    const attackChecked = document.querySelector('input[name="attack"]:checked');
    const defenceChecked = document.querySelectorAll('input[name="defence"]:checked');
    attack.disabled = !(attackChecked && defenceChecked.length === 2);
}
updateAttackButtonState();

document.querySelectorAll('input[name="defence"]').forEach(input => {

    input.addEventListener('change', () => {

        const checked = document.querySelectorAll('input[name="defence"]:checked');
        if (checked.length > 2) {
            input.checked = false;
            addInfo("You can only select two defence zones!");
        }
        updateAttackButtonState();
    });
});

document.querySelectorAll('input[name="attack"]').forEach(input => {
    input.addEventListener('change', () => {
        updateAttackButtonState();
    })
})
