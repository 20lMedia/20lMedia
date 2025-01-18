

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


// 🌚 Darken Navbar on Scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

document.querySelectorAll('.service-btn').forEach(button => {
    button.addEventListener('click', () => {
      alert(`You clicked on ${button.textContent.trim()}`);
    });
  });

// Select the services container
const servicesSection = document.querySelector('.services-container');

// Create the Intersection Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the 'show' class to trigger the animation
      servicesSection.classList.add('show');
      observer.unobserve(entry.target); // Stops observing after animation
    }
  });
}, {
  threshold: 0.3 // Trigger when 30% of the section is visible
});

// Observe the services section
observer.observe(servicesSection);

// Select all service buttons
const serviceButtons = document.querySelectorAll('.service-btn');

// Create an Intersection Detector
const visibilityDetector = new IntersectionObserver((elements, visibilityChecker) => {
  elements.forEach(item => {
    if (item.isIntersecting) {
      item.target.classList.add('show'); // Add 'show' class when in view
      visibilityChecker.unobserve(item.target); // Stop tracking once visible
    }
  });
}, {
  threshold: 0.2 // Trigger when 20% of the element is visible
});

// Track visibility for each service button
serviceButtons.forEach(button => visibilityDetector.observe(button));
document.querySelector('button').addEventListener('click', () => {
  alert('Redirecting to Resume...');
});
/*about*/
document.querySelector('button').addEventListener('click', () => {
  alert('Redirecting to Resume...');
});
