const calculator = document.querySelector(".calculator");
const themeToggleBtn = document.querySelector(".theme-toggle");

function play() {
    let audio = document.getElementById("audio");
    audio.play();
}

let isDark = true;

themeToggleBtn.addEventListener("click", function () {
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = !isDark;
    play();
})
