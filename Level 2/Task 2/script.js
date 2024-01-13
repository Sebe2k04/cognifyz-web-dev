document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-right");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
