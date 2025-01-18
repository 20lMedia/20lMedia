

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

// ✅ Remove Preloader Once the Page Loads
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";
    preloader.style.visibility = "hidden";
    preloader.style.transition = "opacity 0.5s ease-out";
    setTimeout(() => {
        preloader.remove();
    }, 500); // Remove after transition
});

window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    const typingText = document.querySelector(".typing");

    // Fade out preloader
    preloader.style.opacity = "0";
    preloader.style.visibility = "hidden";
    preloader.style.transition = "opacity 0.5s ease-out";

    // Start typing animation after preloader disappears
    setTimeout(() => {
        preloader.remove();

        // ✨ Show and start the typing animation
        typingText.style.opacity = "1";
        typingText.style.animationPlayState = "running";
    }, 500); // Adjust delay if needed
});
