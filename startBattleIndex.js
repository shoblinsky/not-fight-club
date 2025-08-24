import enemies from "./hostiles.js";
const startButton = document.getElementById('start')
let activeEnemy = null;


const start = () => {
    let enemyIndex = Math.round(Math.random() * enemies.length);
    activeEnemy = enemies[enemyIndex];
    console.log(enemyIndex)
    console.log(activeEnemy)
    // window.location.href = "./pages/battle.html"


}
startButton.addEventListener('click', start);

