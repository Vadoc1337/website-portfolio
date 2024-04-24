const themes = ["light", "dark"];
let themesIndex = parseInt(localStorage.getItem("darkModeToggler")) || 0;

function iconsChanger() {
    const imgElement = document.getElementById("darkModeToggler");
    if (themes[themesIndex] === "light") {
        imgElement.src = "assets/moon.png";
    } else {
        imgElement.src = "assets/sun.png";
    }
}

function toggleDarkMode() {
    const htmlElement = document.querySelector("html");
    themesIndex = (themesIndex + 1) % themes.length;
    htmlElement.setAttribute("data-bs-theme", themes[themesIndex]);
    localStorage.setItem("darkModeToggler", themesIndex);
    iconsChanger();
    updateButtonClasses();
}
function updateButtonClasses() {
    const buttons = document.querySelectorAll(".lng-git-btn");
    buttons.forEach((button) => {
        if (themes[themesIndex] === "dark") {
            button.classList.remove("btn-dark");
            button.classList.add("btn-secondary");
        } else if (themes[themesIndex] === "light") {
            button.classList.remove("btn-secondary");
            button.classList.add("btn-dark");
        }
    });
}

const enableDarkMode = document.getElementById("darkModeToggler");
enableDarkMode.addEventListener("click", toggleDarkMode);

document.addEventListener("DOMContentLoaded", () => {
    const htmlElement = document.querySelector("html");
    htmlElement.setAttribute("data-bs-theme", themes[themesIndex]);
    iconsChanger();
    updateButtonClasses();
});
