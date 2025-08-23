const changeNicknameButton = document.getElementById('change')



const enableButton = () => {
    const nickname = nicknameInput.value.trim();
    changeNicknameButton.disabled = nickname === '';
};

const change = () => {
    nicknameInput.addEventListener('input', enableButton);
    const nickname = nicknameInput.value;
    if (nickname.trim() !== '') {
        window.localStorage.setItem('name', nickname);
        console.log(`Your new nickname is, ${nickname}!`);
    }
}

changeNicknameButton.addEventListener('click', change);