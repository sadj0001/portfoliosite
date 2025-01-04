function scrollToSection() {
  const targetSection = document.getElementById("target-section");
  targetSection.scrollIntoView({
    behavior: "smooth", // Gør scrolle-effekten glidende
    block: "start", // Placerer sektionen øverst på skærmen
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
