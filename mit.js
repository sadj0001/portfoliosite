function scrollToSection() {
  const targetSection = document.getElementById("target-section");
  targetSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
const arrow = document.querySelector(".arrow");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    arrow.classList.add("hidden");
  } else {
    arrow.classList.remove("hidden");
  }
});

function scrollToSection() {
  const targetSection = document.querySelector("#target-section");
  targetSection.scrollIntoView({ behavior: "smooth" });
}
