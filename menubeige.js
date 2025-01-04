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
