// const closeButton = document.querySelector('.close-nav');
// const openButton = document.querySelector('.open-nav');
// const nav = document.querySelector('.nav');

// closeButton.addEventListener("click", () => {
//     nav.classList.remove('navigation-open');
// });

// openButton.addEventListener("click", () => {
//     nav.classList.add('navigation-open');
// });
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}