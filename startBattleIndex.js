import { chooseEnemyIndex, activeEnemy, activeEnemyIndex } from "./hostiles.js";
const startButton = document.getElementById('start')
// let activeEnemy = null;
// let activeEnemyIndex = Math.round(Math.random() * enemies.length)
// console.log(chooseEnemyIndex())
const start = () => {
    // let activeEnemyIndex = Math.round(Math.random() * enemies.length);
    // let testEnemyChoose = chooseEnemyIndex();
    // console.log(`test returns ${testEnemyChoose}`)
    // console.log(chooseEnemyIndex())
    activeEnemy()
    localStorage.setItem('activeEnemy', JSON.stringify(activeEnemy));
    localStorage.setItem('activeEnemyIndex', activeEnemyIndex);

    // window.location.href = "./pages/battle.html"


}

startButton.addEventListener('click', start);
