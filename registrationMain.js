const registrationButton = document.getElementById('registration')
const nicknameInput = document.getElementById('nickname');

const enableButton = () => {
    const nickname = nicknameInput.value.trim();
    registrationButton.disabled = nickname === '';
};

nicknameInput.addEventListener('input', enableButton);

let wins = 0;
let loses = 0;
let avatar = 'default';
const registrate = () => {
    const nickname = nicknameInput.value;
    if (nickname.trim() !== '') {
        window.localStorage.setItem('name', nickname);
        window.localStorage.setItem('wins', wins);
        window.localStorage.setItem('loses', loses);
        window.localStorage.setItem('avatar', avatar)
        console.log(`Welcome, ${nickname}!`);
        window.location.href = "../index.html"
    } else {
        window.localStorage.setItem('name', 'Unnamed Warrior');
        console.log(`Welcome, Unnamed Warrior! You always can change your nickname during the game.`);
        console.log('Also, did you enter without name?')
    }
}


registrationButton.addEventListener('click', registrate);


