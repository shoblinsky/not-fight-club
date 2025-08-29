const enemies = [
    {
        name: "The Huh Cat",
        image: '../assets/pictures/enemy(6).png',
        health: 100,
        attack: 10,
        attackWeights: { head: 3, torso: 1, hands: 1, belly: 1, legs: 1 },
        defendWeights: { head: 1, torso: 1, hands: 1, belly: 3, legs: 1 },
        criticalChance: 0.25,
        criticalMult: 2,
        attackParts: 1,
        defenceParts: 2,
        fightPhrase: [
            'Enemy looks at you with a pity.',
            'Enemy chuckles nerveously, clutching his weapon.',
            'Enemy eyes dart, looking an escape!',
            'Enemy staring at you with no emotions.'
        ]
    },
    {
        name: "Yellow King",
        image: '../assets/pictures/enemy(9).png',
        health: 100,
        attack: 10,
        attackWeights: { head: 3, torso: 2, hands: 1, belly: 1, legs: 1 },
        defendWeights: { head: 2, torso: 1, hands: 1, belly: 1, legs: 0.5 },
        criticalChance: 0.25,
        criticalMult: 2,
        attackParts: 1,
        defenceParts: 2,
        fightPhrase: [
            'Enemy looks at you with a pity.',
            'Enemy chuckles nerveously, clutching his weapon.',
            'Enemy eyes dart, looking an escape!',
            'Enemy staring at you with no emotions.'
        ]
    },
    {
        name: "Marina",
        image: '../assets/pictures/enemy(1).png',
        health: 100,
        attack: 10,
        attackWeights: { head: 1, torso: 1, hands: 1, belly: 1, legs: 2 },
        defendWeights: { head: 1, torso: 3, hands: 2, belly: 1, legs: 2 },
        criticalChance: 0.25,
        criticalMult: 2,
        attackParts: 1,
        defenceParts: 2,
        fightPhrase: [
            'Enemy looks at you with a pity.',
            'Enemy chuckles nerveously, clutching his weapon.',
            'Enemy eyes dart, looking an escape!',
            'Enemy staring at you with no emotions.'
        ]
    },
    {
        name: "Mercenary",
        image: '../assets/pictures/enemy(8).png',
        health: 100,
        attack: 10,
        attackWeights: { head: 2, torso: 1.5, hands: 1, belly: 1, legs: 1.5 },
        defendWeights: { head: 1.5, torso: 1.5, hands: 1, belly: 1, legs: 1.5 },
        criticalChance: 0.25,
        criticalMult: 2,
        attackParts: 1,
        defenceParts: 2,
        fightPhrase: [
            'Enemy looks at you with a pity.',
            'Enemy chuckles nerveously, clutching his weapon.',
            'Enemy eyes dart, looking an escape!',
            'Enemy staring at you with no emotions.'
        ]
    }, {
        name: "Ghoul",
        image: '../assets/pictures/enemy(10).png',
        health: 100,
        attack: 10,
        attackWeights: { head: 2, torso: 1.5, hands: 1, belly: 1, legs: 1.5 },
        defendWeights: { head: 1.5, torso: 1.5, hands: 1, belly: 1, legs: 1.5 },
        criticalChance: 0.25,
        criticalMult: 2,
        attackParts: 1,
        defenceParts: 2,
        fightPhrase: [
            'Enemy looks at you with a pity.',
            'Enemy chuckles nerveously, clutching his weapon.',
            'Enemy eyes dart, looking an escape!',
            'Enemy staring at you with no emotions.'
        ]
    }, {
        name: "Gentleman",
        image: '../assets/pictures/enemy(4).png',
        health: 100,
        attack: 10,
        attackWeights: { head: 2, torso: 1.5, hands: 1, belly: 1, legs: 1.5 },
        defendWeights: { head: 1.5, torso: 1.5, hands: 1, belly: 1, legs: 1.5 },
        criticalChance: 0.25,
        criticalMult: 2,
        attackParts: 1,
        defenceParts: 2,
        fightPhrase: [
            'Enemy looks at you with a pity.',
            'Enemy chuckles nerveously, clutching his weapon.',
            'Enemy eyes dart, looking an escape!',
            'Enemy staring at you with no emotions.'
        ]
    }, {
        name: "Father Hugo",
        image: '../assets/pictures/enemy(7).png',
        health: 100,
        attack: 10,
        attackWeights: { head: 2, torso: 1.5, hands: 1, belly: 1, legs: 1.5 },
        defendWeights: { head: 1.5, torso: 1.5, hands: 1, belly: 1, legs: 1.5 },
        criticalChance: 0.25,
        criticalMult: 2,
        attackParts: 1,
        defenceParts: 2,
        fightPhrase: [
            'Enemy looks at you with a pity.',
            'Enemy chuckles nerveously, clutching his weapon.',
            'Enemy eyes dart, looking an escape!',
            'Enemy staring at you with no emotions.'
        ]
    },
    {
        name: "Abella",
        image: '../assets/pictures/enemy(2).png',
        health: 100,
        attack: 10,
        attackWeights: { head: 2, torso: 1.5, hands: 1, belly: 1, legs: 1.5 },
        defendWeights: { head: 1.5, torso: 1.5, hands: 1, belly: 1, legs: 1.5 },
        criticalChance: 0.25,
        criticalMult: 2,
        attackParts: 1,
        defenceParts: 2,
        fightPhrase: [
            'Enemy looks at you with a pity.',
            'Enemy chuckles nerveously, clutching his weapon.',
            'Enemy eyes dart, looking an escape!',
            'Enemy staring at you with no emotions.'
        ]
    },
];

// let activeEnemy = null;
let activeEnemyIndex = null;

const chooseEnemyIndex = function () {
    let activeEnemyIndex = Math.round(Math.random() * (enemies.length - 1));
    return activeEnemyIndex;
}

const activeEnemy = function () {
    const huh = enemies[chooseEnemyIndex()];
    return huh
}


export { enemies, activeEnemy, activeEnemyIndex, chooseEnemyIndex };
