const logWindow = document.getElementById('log-window');

const personParts = ['head', 'torso', 'hands', 'belly', 'legs']

let playerIsDead = false;
let enemyIsDead = false;

let attackPartOne = undefined
let defencePartOne = undefined
let defencePartTwo = undefined

let turn = 0


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


