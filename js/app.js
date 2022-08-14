const calculator = document.querySelector(".calculator");
const themeToggleBtn = document.querySelector(".theme-toggle");
const toggleIcon = document.querySelector(".toggle-icon");

let isDark = true;

themeToggleBtn.onclick = () => {
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = !isDark;
};