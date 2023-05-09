// Объявляет постоянную переменную generator и присваивает ей значение первого элемента DOM,
// который соответствует CSS-селектору ".generator".
const generator = document.querySelector(".generator");
// Объявляет постоянную переменную generateBtn и присваивает ей значение
// элемента DOM с идентификатором "generateBtn".
const generateBtn = document.querySelector("#generateBtn");
// Определяет функцию generateRandomNumbers, которая генерирует случайный 11-значный номер телефона и добавляет его
// вместе с текстом а также создает две кнопки ("Да" и "Нет") к элементу generator в DOM.
function generateRandomNumbers() {
    const length = 11;
    const min = 0;
    const max = 9;
    const phoneNumber = Array.from(
        { length },
        () => Math.floor(Math.random() * (max - min + 1)) + min
    ).join("");
    // Создает новый элемент p, устанавливает его текстовое содержимое:
    // "Это верный номер телефона? ", и добавляет его к элементу generator в DOM.
    const text = document.createElement("p");
    text.textContent = "Это верный номер телефона? ";
    generator.appendChild(text);
    // Создает новый элемент p2, добавляет в качестве текста сгенерированный выше в функции номер телефона
    // а затем добавляет его к элементу генератора в DOM.
    const nomer = document.createElement("p2");
    nomer.textContent = phoneNumber;
    generator.appendChild(nomer);
    // Создает новый элемент div с классом "button-container" и добавляет его к элементу generator в DOM.
    // Затем создает два новых элемента-кнопки ("Да" и "Нет"), устанавливает их соответствующие
    // идентификаторы и текстовое содержимое и добавляет их к элементу btnGenerator.
    const btnGenerator = document.createElement("div");
    btnGenerator.classList.add("button-container");
    generator.appendChild(btnGenerator);

    const yesBtn = document.createElement("button");
    yesBtn.id = "yesButton";
    yesBtn.textContent = "Да";
    btnGenerator.appendChild(yesBtn);

    const noBtn = document.createElement("button");
    noBtn.id = "noButton";
    noBtn.textContent = "Нет";
    btnGenerator.appendChild(noBtn);
    // скрывает элемент generateBtn в DOM.
    generateBtn.style.display = "none";
    // Добавляет "слушатель события" click для кнопки "Нет", который удаляет элементы text,
    // nomer и btnGenerator из элемента generator и снова вызывает функцию generateRandomNumbers.
    noBtn.addEventListener("click", () => {
        generator.removeChild(text);
        generator.removeChild(nomer);
        generator.removeChild(btnGenerator);
        generateRandomNumbers();
    });
    // Добавляет слушатель события щелчка по кнопке "Да", который устанавливает свойство display элемента
    // fullscreen в "block" через 600 миллисекунд, воспроизводит аудиофайл и скрывает элемент генератора.
    // затем выскакивает скример :))
    yesBtn.addEventListener("click", () => {
        setTimeout(() => {
            fullscreen.style.display = "block";
        }, 600);
        let audio = new Audio("Photos_and_differentfiles/sound.mp3");
        audio.play();
    });
}
// К элементу generateBtn прикрепляется слушатель события click,
// который при нажатии запускает функцию generateRandomNumbers(). Когда пользователь нажмет на кнопку с идентификатором "generateBtn",
// будет вызвана функция generateRandomNumbers(), которая сгенерирует случайный номер телефона и отобразит его на странице.
generateBtn.addEventListener("click", generateRandomNumbers);
// Объявляет постоянную переменную fullscreen и присваивает ей значение элемента DOM с идентификатором "fullscreen".
// Затем объявляет постоянную переменную fullscreenImage и присваивает ей значение первого элемента img,
// найденного внутри элемента fullscreen.
const fullscreen = document.getElementById("fullscreen");
const fullscreenImage = fullscreen.querySelector("img");
// Добавляет слушатель события click для элемента fullscreenButton,
// который устанавливает свойство display элемента fullscreen в "block".

// Добавляет слушатель события click для элемента fullscreen,
// который при нажатии устанавливает свойство display в "none".
fullscreen.addEventListener("click", () => {
    fullscreen.style.display = "none";
});
// Добавляет слушатель события click для элемента fullscreenImage,
// который останавливает распространение события click на родительский элемент.
fullscreenImage.addEventListener("click", (event) => {
    event.stopPropagation();
});
