const projects = [
  { fach: "WPF Animation" },
  { fach: "Dokumentarfilm" },
  { fach: "3D Visualisierung" },
  { fach: "Print" }
];

let currentIndex = 0;

const title = document.getElementById("slider-title");
const slider = document.getElementById("slider-preview");

function updateSlider() {
  // Fade-Out
  title.style.opacity = 0;

  setTimeout(() => {
    // Text ändern
    title.textContent = projects[currentIndex].fach;

    // Fade-In
    title.style.opacity = 1;

    // Nächster Slide
    currentIndex = (currentIndex + 1) % projects.length;
  }, 200);
}

// Klick auf den Slider wechselt zum nächsten Projekt
slider.addEventListener("click", updateSlider);

// Initial
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
