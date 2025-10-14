// ===============================
// 🎞️ Slider Logik
// ===============================
const projects = [
  {
    image: "Images/Projekt 1.png",
    title: "WPF Animation/Games",
    description: "Meine Animationsserie mit dem Titel Super spannende Abenteuer mit Bruno und Fiete."
  },
  {
    image: "Images/Projekt 3.png",
    title: "Dokumentarfilm",
    description: "Mein Dokumentarfilm über das Thema Lichtverschmutzung."
  },
  {
    image: "Images/Projekt 2.png",
    title: "3D Visualisierung",
    description: "3D Visualisierung im Stil des Surrealismus."
  },
  {
    image: "Images/Projekt 4.png",
    title: "Print",
    description: "Mein Magazin, in welchem das Thema Vergänglichkeit angesprochen wird."
  }
];

let currentIndex = 0;

const img = document.getElementById("slider-image");
const title = document.getElementById("slider-title");
const description = document.getElementById("slider-description");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

function updateSlider() {
  if (!img || !title || !description) return;

  img.style.opacity = 0;
  setTimeout(() => {
    img.src = projects[currentIndex].image;
    img.alt = projects[currentIndex].title;
    title.textContent = projects[currentIndex].title;
    description.textContent = projects[currentIndex].description;
    img.style.opacity = 1;
  }, 300);
}

if (nextButton) {
  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % projects.length;
    updateSlider();
  });
}
if (prevButton) {
  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    updateSlider();
  });
}

updateSlider();


// ===============================
// 🪄 Section Expand / Collapse + Media Handling
// ===============================

// Konfiguration: bis zu 4 Bilder pro Section, außer Dokumentarfilm (Video)
const sectionMedia = {
  "WPF Animation": [
    "wpf1.png",
    "wpf2.jpg",
    "wpf3.jpg",
    "wpf4.jpg"
  ],
  "Dokumentarfilm": "Dokumentarfilm.mp4",

  "3D Visualisierung": [
    "3d1.png",
    "3d2.png",
    "3d3.png",
    "3d4.png"
  ],
  "Print": [
    "print1.png",
    "print2.png",
    "print3.png",
    "print4.png"
  ]
};

// Alle Sections holen
const expandableSections = document.querySelectorAll("main section");

expandableSections.forEach(section => {
  const sectionTitle = section.querySelector("h2")?.textContent?.trim();
  if (!sectionTitle) return;

  const extraContent = document.createElement("div");
  extraContent.classList.add("extra-content");

  // Falls diese Section Medien in der Config hat
  if (sectionMedia[sectionTitle]) {
    const media = sectionMedia[sectionTitle];

    // Wenn es ein Array ist → Bilder
    if (Array.isArray(media)) {
      media.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = `${sectionTitle} Bild`;
        extraContent.appendChild(img);
      });
    }

    // Wenn es ein String ist → Video
    else if (typeof media === "string") {
      const video = document.createElement("video");
      video.src = media;
      video.controls = true;
      video.loop = true;
      video.playsInline = true;
      video.style.maxWidth = "90%";
      extraContent.appendChild(video);

      // ❗Verhindert, dass der Klick auf das Video die Section wieder schließt
      video.addEventListener("click", e => {
        e.stopPropagation();
      });
    }
  }

  section.appendChild(extraContent);

  // Klick auf Section selbst: auf- und zuklappen
  section.addEventListener("click", () => {
    section.classList.toggle("expanded");
  });
});
