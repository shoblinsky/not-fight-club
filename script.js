const registrationButton = document.getElementById('registration')
const nicknameInput = document.getElementById('nickname');

const enableButton = () => {
    const nickname = nicknameInput.value.trim();
    registrationButton.disabled = nickname === '';
};

nicknameInput.addEventListener('input', enableButton);


const registrate = () => {
    const nickname = nicknameInput.value;
    if (nickname.trim() !== '') {
        window.localStorage.setItem('name', nickname);
        console.log(`Welcome, ${nickname}!`);
    } else {
        window.localStorage.setItem('name', 'Unnamed Warrior');
        console.log(`Welcome, Unnamed Warrior! You always can change your nickname during the game.`);
    }
}


registrationButton.addEventListener('click', registrate);



