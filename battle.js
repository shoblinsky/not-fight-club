const logWindow = document.getElementById('log__window');

const personParts = ['head', 'torso', 'hands', 'belly', 'legs']

let playerIsDead = false;
let enemyIsDead = false;
let isGameOver = false;
function gameOver() {
    if (playerIsDead || enemyIsDead) {
        isGameOver = true
    }
}

let attackPartOne = undefined
let defencePartOne = undefined
let defencePartTwo = undefined

let turn = 0


function gameInitialization() {
    addLog('Начало боя.')
}

function resetLog() {
    logWindow.textContent = '';
}

function addLog(string) {
    const logString = document.createElement('p')
    logString.textContent = `Ход номер ${turn}. ${string}`
    logWindow.appendChild(logString)
    turn = turn + 1;
}

const testButton = document.getElementById('test');
testButton.addEventListener('click', function () {
    addLog('хы');
});

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function () {
    resetLog();
});

