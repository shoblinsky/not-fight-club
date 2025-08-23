const changeNicknameButton = document.getElementById('change')
const nicknameInput = document.getElementById('nickname');

const charName = document.getElementById('name');
charName.textContent = window.localStorage.getItem('name');

const enableButton = () => {
    const nickname = nicknameInput.value.trim();
    changeNicknameButton.disabled = nickname === '';
};

nicknameInput.addEventListener('input', enableButton);

const change = () => {
    const nickname = nicknameInput.value;
    if (nickname.trim() !== '') {
        window.localStorage.setItem('name', nickname);
        console.log(`Your new nickname is... ${nickname}!`);
        charName.textContent = window.localStorage.getItem('name');
    }
}

changeNicknameButton.addEventListener('click', change);