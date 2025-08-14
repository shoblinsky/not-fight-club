window.addEventListener("DOMContentLoaded", () => {
    const playerData = localStorage.getItem('name');
    if (!playerData) {
        window.location.href = "./pages/register.html";
    }
    else {
    }
});