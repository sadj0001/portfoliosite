// Mikkels Menu
const burger = document.querySelector(".burgerbeige");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menubeige");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}

menu.addEventListener("click", menuClick);
function menuClick() {
  burger.classList.remove("active");
  nav.classList.remove("active");
}

// Følgende har jeg brugt chatgpt til
// Sætter en streg under den side man befinder sig på
// Finder menulinks
const menuLinksBeige = document.querySelectorAll(".menubeige a");

// Gennemgår hver link for at se hvilken side der er aktuel
menuLinksBeige.forEach((link) => {
  if (window.location.pathname.endsWith(link.getAttribute("href"))) {
    link.classList.add("active"); // Tilføj den aktive klasse
  }
});
