/**
 * Apex Marbles Essentials Core Engine 
 * Minimal footprint logic mapped strictly to mandatory interactive points.
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // Toggle Mobile Navigation Canvas
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("open");
            // Change standard toggle display text asset
            menuToggle.innerText = navMenu.classList.contains("open") ? "✕" : "☰";
        });

        // Auto collapse mobile drawer panel on link clicks
        const navLinks = navMenu.querySelectorAll("a");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("open");
                menuToggle.innerText = "☰";
            });
        });
    }

    // Processing Contact Pipeline Validation Feedback
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const submitBtn = contactForm.querySelector("button[type='submit']");
            const originalText = submitBtn.innerText;

            // Give the user instant visual confirmation that something is happening
            submitBtn.innerText = "Transmitting Data...";
            submitBtn.disabled = true;

            setTimeout(() => {
                alert("Thank you. Our structural sales desk will follow up with your inquiry shortly.");
                contactForm.reset();
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
            }, 1000);
        });
    }
});