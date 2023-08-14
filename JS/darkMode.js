const themes = ["light", "dark"];
let themesIndex = parseInt(localStorage.getItem("darkModeToggler")) || 0;

function iconsChanger() {
    const imgElement = document.getElementById("darkModeToggler");
    if (themes[themesIndex] === "light") {
        imgElement.src = "Photos_and_differentfiles/moon.png";
    } else {
        imgElement.src = "Photos_and_differentfiles/sun.png";
    }
}

function toggleDarkMode() {
    const htmlElement = document.querySelector("html");
    themesIndex = (themesIndex + 1) % themes.length;
    htmlElement.setAttribute("data-bs-theme", themes[themesIndex]);
    localStorage.setItem("darkModeToggler", themesIndex);
    iconsChanger();
}

const enableDarkMode = document.getElementById("darkModeToggler");
enableDarkMode.addEventListener("click", toggleDarkMode);
document.addEventListener("DOMContentLoaded", () => {
    const htmlElement = document.querySelector("html");
    htmlElement.setAttribute("data-bs-theme", themes[themesIndex]);
    iconsChanger();
});
