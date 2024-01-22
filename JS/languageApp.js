/* eslint-disable no-undef */
const imgElement = document.getElementById("languageToggler");

imgElement.addEventListener("click", toggleLanguage);

// Toggle between "en" and "ru" and update image
function toggleLanguage() {
    let currentLang = getCurrentLanguage();
    let lang = currentLang === "en" ? "ru" : "en";
    updateLanguage(lang);
}

// Function to get the current language from local storage
function getCurrentLanguage() {
    return localStorage.getItem("selectedLanguage") || "en"; // Default to English if not set
}

// Function to update the language in local storage and reload the page
function updateLanguage(lang) {
    localStorage.setItem("selectedLanguage", lang);
    location.href = window.location.pathname + "#" + lang;
    location.reload();
}
// Change flag icon based on the current language
function changeFlagIcon() {
    getCurrentLanguage() === "en"
        ? (imgElement.src = "Photos_and_differentfiles/en_icon.png")
        : (imgElement.src = "Photos_and_differentfiles/ru_icon.png");
}

// Redirect to the default language if the hash is not valid
function changeLanguage() {
    let lang = getCurrentLanguage();
    Object.keys(langArr).forEach((key) => {
        let elem = document.getElementById("lng-" + key);
        if (elem && langArr[key][lang] !== undefined) {
            elem.innerHTML = langArr[key][lang];
        }
    });
}

changeFlagIcon();
changeLanguage();
