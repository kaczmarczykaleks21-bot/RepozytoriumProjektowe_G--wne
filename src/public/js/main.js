'use strict';

import { initComments } from './comments.js';
initComments();

// === ZMIENNE ===
const stylesheet = document.getElementById('stylesheet');
const toggleStyleBtn = document.getElementById('toggleStyleBtn');
let isRed = true;

const contactMeBtn = document.getElementById('contactMeBtn');
const addCommentBtn = document.getElementById('addCommentBtn');
const displaySectionBtn = document.getElementById('displaySectionBtn');
const sectionExperience = document.getElementById('experience-container');
let isExperienceDisplayed = true;

// Funkcja do zmiany stylu strony
function changeStyle() {
  if (isRed) {
    stylesheet.href = '/stylesheets/green.css';
    isRed = false;
  } else {
    stylesheet.href = '/stylesheets/red.css';
    isRed = true;
  }
}

// Funkcja do ukrywania sekcji doświadczenie
function displayExperience() {
  if (isExperienceDisplayed) {
    displaySectionBtn.classList.remove('fa-angle-down');
    displaySectionBtn.classList.add('fa-angle-up');
    sectionExperience.classList.add('hidden');
    isExperienceDisplayed = false;
  } else {
    displaySectionBtn.classList.remove('fa-angle-up');
    displaySectionBtn.classList.add('fa-angle-down');
    sectionExperience.classList.remove('hidden');

    isExperienceDisplayed = true;
  }
}

// CONTACT ME FORM
function goToContactForm() {
  window.location.href = '/AleksKaczmarczyk/CV/contact';
}

// EVENT PO KLIKNIECIU GUZIKA DO ZMIANY STYLU
toggleStyleBtn.addEventListener('click', () => {
  changeStyle();
});

displaySectionBtn.addEventListener('click', () => {
  displayExperience();
});

contactMeBtn.addEventListener('click', () => {
  goToContactForm();
});
