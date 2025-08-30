const enemies = [
    {
        name: "The Huh Cat",
        image: '../assets/pictures/enemy(6).png',
        health: 100,
        attack: 5,
        criticalChance: 0.7,
        criticalMult: 5,
        attackParts: 1,
        defenceParts: 3,
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
        health: 50,
        attack: 15,
        criticalChance: 0.25,
        criticalMult: 2,
        attackParts: 2,
        defenceParts: 0,
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
        health: 50,
        attack: 10,
        criticalChance: 0.25,
        criticalMult: 2,
        attackParts: 2,
        defenceParts: 1,
        fightPhrase: [
            'Enemy looks at you with a pity.',
            'Enemy chuckles nerveously, clutching his hands.',
            'Enemy eyes dart, looking an escape!',
            'Enemy staring at you with no emotions.'
        ]
    },
    {
        name: "Mercenary",
        image: '../assets/pictures/enemy(8).png',
        health: 30,
        attack: 50,
        criticalChance: 0.25,
        criticalMult: 2,
        attackParts: 1,
        defenceParts: 5,
        fightPhrase: [
            'Enemy looks at you with a pity.',
            'Enemy chuckles nerveously, clutching his weapon.',
            'Enemy eyes dart, looking an escape!',
            'Enemy staring at you with no emotions.'
        ]
    }, {
        name: "Ghoul",
        image: '../assets/pictures/enemy(10).png',
        health: 35,
        attack: 5,
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
        health: 150,
        attack: 20,
        criticalChance: 0.25,
        criticalMult: 2,
        attackParts: 1,
        defenceParts: 0,
        fightPhrase: [
            'Enemy looks at you with a pity.',
            'Enemy chuckles nerveously, clutching his weapon.',
            'Enemy eyes dart, looking an escape!',
            'Enemy staring at you with no emotions.'
        ]
    }, {
        name: "Father Hugo",
        image: '../assets/pictures/enemy(7).png',
        health: 70,
        attack: 15,
        criticalChance: 0.25,
        criticalMult: 2,
        attackParts: 1,
        defenceParts: 1,
        fightPhrase: [
            'Enemy looks at you with a pity.',
            'Enemy chuckles nerveously, clutching his hands.',
            'Enemy eyes dart, looking an escape!',
            'Enemy staring at you with no emotions.'
        ]
    },
    {
        name: "Abella",
        image: '../assets/pictures/enemy(2).png',
        health: 100,
        attack: 9,
        criticalChance: 0.25,
        criticalMult: 2,
        attackParts: 1,
        defenceParts: 3,
        fightPhrase: [
            'Enemy looks at you with a pity.',
            'Enemy chuckles nerveously, clutching her weapon.',
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
