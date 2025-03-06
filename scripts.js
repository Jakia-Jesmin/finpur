// JavaScript for responsive navigation
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "☰";
    toggleButton.className = "menu-toggle";
    document.querySelector("header .header-right").prepend(toggleButton);

    toggleButton.addEventListener("click", () => {
        const nav = document.querySelector(".nav-list");
        nav.classList.toggle("active");
    });
});

// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

// JavaScript for email validation
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.querySelector("input[type='email']").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address!");
    } else {
        alert("Thank you for subscribing!");
        this.reset(); // Clear the form
    }
});

// JavaScript for sticky header
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});
