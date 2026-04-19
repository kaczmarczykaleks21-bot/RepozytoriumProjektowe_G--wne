"use strict";

// === ZMIENNE ===
const stylesheet = document.getElementById("stylesheet");
const toggleStyleBtn = document.getElementById("toggleStyleBtn");
let isRed = true;

const displaySectionBtn = document.getElementById("displaySectionBtn");
const sectionExperience = document.getElementById("experience-container");
let isExperienceDisplayed = true;

// FUNKCJA DO ZMIANY STYLU
function changeStyle() {
  if (isRed) {
    stylesheet.href = "./stylesheets/green.css";
    isRed = false;
  } else {
    stylesheet.href = "./stylesheets/red.css";
    isRed = true;
  }
}

// Funkcja do ukrywania sekcji doświadczenie
function displayExperience() {
  if (isExperienceDisplayed) {
    displaySectionBtn.classList.remove("fa-angle-down");
    displaySectionBtn.classList.add("fa-angle-up");
    sectionExperience.classList.add("hidden");
    isExperienceDisplayed = false;
  } else {
    displaySectionBtn.classList.remove("fa-angle-up");
    displaySectionBtn.classList.add("fa-angle-down");
    sectionExperience.classList.remove("hidden");

    isExperienceDisplayed = true;
  }
}

function goToContactForm() {
  window.location.href = "pages/contactMe.html";
}

// EVENT PO KLIKNIECIU GUZIKA DO ZMIANY STYLU
toggleStyleBtn.addEventListener("click", () => {
  changeStyle();
});

displaySectionBtn.addEventListener("click", () => {
  displayExperience();
});
