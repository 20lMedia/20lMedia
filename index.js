

const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav-bar");

hamburger.onclick = function() {
    navbar.classList.toggle("active");
    hamburger.classList.toggle("active"); // Adds animation to the hamburger icon
};

const text = "🚀 Elevate Your Brand,";
let index = 0;
const typingElement = document.querySelector(".typing-text");

function typeEffect() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100); // Adjust speed here (100ms per letter)
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);