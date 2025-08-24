import { enemies, activeEnemy, activeEnemyIndex, chooseEnemyIndex } from "./hostiles.js";
const startButton = document.getElementById('start')
// let activeEnemy = null;
// let activeEnemyIndex = Math.round(Math.random() * enemies.length)
chooseEnemyIndex()
const start = () => {
    // let activeEnemyIndex = Math.round(Math.random() * enemies.length);

    console.log(chooseEnemyIndex())
    console.log(activeEnemyIndex)
    console.log(activeEnemy)
    // window.location.href = "./pages/battle.html"


}

startButton.addEventListener('click', start);
