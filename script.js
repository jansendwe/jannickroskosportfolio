// Slider-Projekt-Titel
const projects = [
  { fach: "WPF Animation" },
  { fach: "Dokumentarfilm" },
  { fach: "3D Visualisierung" },
  { fach: "Print" },
  { fach: "Weitere Arbeiten" }
];

let currentIndex = 0;
const title = document.getElementById("slider-title");
const slider = document.getElementById("slider-preview");

function updateSlider() {
  title.style.opacity = 0;
  setTimeout(() => {
    title.textContent = projects[currentIndex].fach;
    title.style.opacity = 1;
    currentIndex = (currentIndex + 1) % projects.length;
  }, 200);
}

slider.addEventListener("click", updateSlider);
updateSlider();

// Aufklappbare Sections
document.querySelectorAll("main section").forEach(section => {
  const extraContent = section.querySelector(".extra-content");
  if (!extraContent) return;

  section.addEventListener("click", () => {
    section.classList.toggle("expanded");
  });

  extraContent.addEventListener("click", e => e.stopPropagation());
});
