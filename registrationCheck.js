window.addEventListener("DOMContentLoaded", () => {
    const playerData = localStorage.getItem('name');
    if (!playerData) {
        window.location.href = "./register.html";
    }
    else {
    }
});
