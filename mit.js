// Følgende har jeg brugt chatgpt til
// Funktion der scroller ned til en specifik sektion

function scrollToSection() {
  const targetSection = document.getElementById("target-section");
  targetSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

// finder pilen
const arrow = document.querySelector(".arrow");

// lytter til den har scrollet og skjuler pilen
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    arrow.classList.add("hidden");
  } else {
    arrow.classList.remove("hidden");
  }
});
