import { enemies, chooseEnemyIndex, activeEnemy, activeEnemyIndex } from "./hostiles.js";
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
    attack: 14,
    criticalChance: 0.25,
    criticalMult: 1.75,
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



let turn = 1



function gameOver() {
    if (playerIsDead || enemyIsDead) {
        isGameOver = true;
        addInfo('Fight ended.')
        attack.textContent = 'Next enemy'
        attack.removeEventListener('click', battle);
        attack.addEventListener('click', nextEnemy);
    }
}


function nextEnemy() {
    resetLog();
    player.health = 100;
    playerHealthSpan.textContent = player.health;
    playerHpBar.value = player.health;
    playerIsDead = false;
    enemyIsDead = false;
    isGameOver = false;
    attack.textContent = 'Attack';
    attack.removeEventListener('click', nextEnemy);
    attack.addEventListener('click', battle);
    let index = Math.floor(Math.random() * 8);
    currentEnemy = {
        name: enemies[index].name,
        image: enemies[index].image,
        health: enemies[index].health,
        attack: enemies[index].attack,
        criticalChance: enemies[index].criticalChance,
        criticalMult: enemies[index].criticalMult,
        attackParts: enemies[index].attackParts,
        defenceParts: enemies[index].defenceParts,
        fightPhrase: enemies[index].fightPhrase
    };
    localStorage.setItem('activeEnemy', JSON.stringify(currentEnemy));
    enemyNameSpan.textContent = currentEnemy.name;
    enemyAvatar.src = currentEnemy.image;
    enemyHealthSpan.textContent = currentEnemy.health;
    enemyHpBar.value = currentEnemy.health;
    enemyHpBar.max = currentEnemy.health;
    addInfo(currentEnemy.fightPhrase[Math.floor(Math.random() * currentEnemy.fightPhrase.length)]);
}



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


const testButton = document.getElementById('test');
testButton.addEventListener('click', function () {
    addInfo('huh?');
});

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function () {
    resetLog();
});


function chooseEnemyParts(enemy) {
    let attackParts = [];
    let defenceParts = [];
    let availableParts = ['head', 'torso', 'hands', 'belly', 'legs'];

    let attackCount = Math.min(enemy.attackParts || 1);

    for (let i = 0; i < attackCount; i++) {
        let randomIndex = Math.floor(Math.random() * availableParts.length);
        let chosenPart = availableParts[randomIndex];
        attackParts.push(chosenPart);
        availableParts.splice(randomIndex, 1);
    }

    let defenceCount = Math.min(enemy.defenceParts || 0);
    for (let i = 0; i < defenceCount; i++) {
        let randomIndex = Math.floor(Math.random() * availableParts.length);
        let chosenPart = availableParts[randomIndex];
        defenceParts.push(chosenPart);
        availableParts.splice(randomIndex, 1);
    }

    return { attackParts, defenceParts };
}



function calculateDamage(attacker, targetDefenceParts) {
    if (attacker.attackParts.length === 0) {
        return { damage: 0, isCritical: false, isBlocked: false };
    }

    if (!targetDefenceParts) {
        targetDefenceParts = [];
    }



    let totalDamage = 0;
    let isCritical = Math.random() < attacker.criticalChance;
    let isBlocked = false;

    attacker.attackParts.forEach(attackPart => {
        let partDamage = attacker.attack;
        if (isCritical) {
            partDamage *= attacker.criticalMult;
        } else if (targetDefenceParts.includes(attackPart)) {
            isBlocked = true;
            partDamage = 0;
        }
        totalDamage += partDamage;
    });
    return { damage: totalDamage, isCritical, isBlocked };
}


function battle() {
    if (isGameOver) {
        addLog("Game is over, please reset!");
        return;
    }

    const attackPart = document.querySelector('input[name="attack"]:checked').value;
    const defenceParts = Array.from(document.querySelectorAll('input[name="defence"]:checked')).map(input => input.value);

    player.attackParts = [attackPart];
    player.defenceParts = defenceParts;

    const enemyChoices = chooseEnemyParts(currentEnemy);
    currentEnemy.attackParts = enemyChoices.attackParts;
    currentEnemy.defenceParts = enemyChoices.defenceParts;

    const playerAttack = calculateDamage(player, currentEnemy.defenceParts);
    currentEnemy.health -= playerAttack.damage;
    if (currentEnemy.health < 0) currentEnemy.health = 0;
    addLog(`${localStorage.getItem('name')} attacks ${currentEnemy.name}'s ${player.attackParts[0]} for ${playerAttack.damage} damage${playerAttack.isCritical ? ' (Critical)' : ''}${playerAttack.isBlocked ? ' (Blocked)' : ''}! Enemy HP: ${currentEnemy.health}`);
    enemyHealthSpan.textContent = currentEnemy.health;
    enemyHpBar.value = currentEnemy.health;




    if (currentEnemy.health <= 0) {
        enemyIsDead = true;
        let wins = parseInt(localStorage.getItem('wins') || '0') + 1;
        localStorage.setItem('wins', wins);
        addInfo(`${enemyNameSpan.textContent} defeated!`);
        gameOver();
        return;
    }





    const enemyAttack = calculateDamage(currentEnemy, player.defenceParts);
    player.health -= enemyAttack.damage;
    addLog(`${currentEnemy.name} attacks ${localStorage.getItem('name')} ${currentEnemy.attackParts[0]} for ${enemyAttack.damage} damage${enemyAttack.isCritical ? ' (Critical)' : ''}${enemyAttack.isBlocked ? ' (Blocked)' : ''}! Player HP: ${player.health}`);
    if (player.health < 0) player.health = 0;
    playerHealthSpan.textContent = player.health;
    playerHpBar.value = player.health;
    if (player.health <= 0) {
        playerIsDead = true;
        let loses = parseInt(localStorage.getItem('loses') || '0') + 1;
        localStorage.setItem('loses', loses);
        addInfo(`${playerNameSpan.textContent} defeated!`);
        gameOver();
        return;
    }

    if (Math.random() < 0.2) {
        const phrases = currentEnemy.fightPhrase;
        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        const formattedPhrase = randomPhrase.replace('Enemy', currentEnemy.name);
        addInfo(formattedPhrase);
    }

}

attack.addEventListener('click', battle);



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
