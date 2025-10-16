const projects = [
  { image: "Images/Projekt1.png", title: "Projekt 1", description: "Meine Animationsserie mit Bruno und Fiete." },
  { image: "Images/Projekt2.png", title: "Projekt 2", description: "Dokumentarfilm über Lichtverschmutzung." },
  { image: "Images/Projekt3.png", title: "Projekt 3", description: "3D Visualisierung im Stil des Surrealismus." },
  { image: "Images/Projekt4.png", title: "Projekt 4", description: "Mein Printmagazin." }
];

let currentIndex = 0;

const img = document.getElementById("slider-image");
const title = document.getElementById("slider-title");
const description = document.getElementById("slider-description");
const nextButton = document.getElementById("next-button");

function updateSlider() {
  if (!img || !title || !description) return;

  img.style.opacity = 0;
  setTimeout(() => {
    img.src = projects[currentIndex].image;
    img.alt = projects[currentIndex].title;
    title.textContent = projects[currentIndex].title;
    description.textContent = projects[currentIndex].description;
    img.style.opacity = 1;
  }, 200);
}

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % projects.length;
  updateSlider();
});

// Initial
updateSlider();
