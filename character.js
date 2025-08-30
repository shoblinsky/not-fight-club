const wins = document.getElementById('wins');
const loses = document.getElementById('loses');
const charName = document.getElementById('name');

wins.textContent = window.localStorage.getItem('wins');
loses.textContent = window.localStorage.getItem('loses');
charName.textContent = window.localStorage.getItem('name');


document.addEventListener('DOMContentLoaded', () => {
    const avatars = document.querySelectorAll('.avatar');
    const confirmButton = document.querySelector('.confirm');
    const cont = document.querySelector('.character__avatar')
    let selectedAvatar = cont.firstChild;


    avatars.forEach(avatar => {
        avatar.addEventListener('click', () => {
            avatars.forEach(img => img.classList.remove('selected'));
            avatar.classList.add('selected');
            selectedAvatar = avatar.src;
            confirmButton.disabled = false;
        });
    });
    confirmButton.addEventListener('click', () => {
        if (selectedAvatar) {
            window.localStorage.setItem('avatar', selectedAvatar);
            alert('Done.');
        } else {
        }
    });
});