'use strict';

// ==RENDER DATA===

// SKILLS
// #region Skills
function renderHardSkills(data) {
  const container = document.getElementById('hard-skills');

  container.innerHTML = '';

  data.umiejetnosci.twarde.forEach((skill) => {
    const li = document.createElement('li');
    li.textContent = skill.poziom
      ? `${skill.nazwa} (${skill.poziom})`
      : skill.nazwa;

    container.appendChild(li);
  });
}

function renderSoftSkills(data) {
  const container = document.getElementById('soft-skills');
  container.innerHTML = '';
  data.umiejetnosci.miekkie.forEach((skill) => {
    const li = document.createElement('li');
    li.textContent = skill;
    container.appendChild(li);
  });
}

// #endregion

// EDUCATION
// #region Eduction
function renderTechnoStack(data) {
  const container = document.getElementById('techno-stack');
  container.innerHTML = '';

  data.stack_technologiczny.forEach((education) => {
    const li = document.createElement('li');
    li.textContent = education;
    container.appendChild(li);
  });
}

function renderLanguages(data) {
  const container = document.getElementById('myLanguages');
  container.innerHTML = '';

  data.jezykiObce.forEach((education) => {
    const p = document.createElement('p');
    p.textContent = `${education.jezyk} - poziom:${education.poziom} (${education.opis})`;
    container.appendChild(p);
  });
}

function renderMyCourses(data) {
  const container = document.getElementById('myCourses');
  container.innerHTML = '';

  data.kursy.forEach((education) => {
    const li = document.createElement('li');
    li.textContent = `${education.nazwa} `;
    container.appendChild(li);
    const a = document.createElement('a');
    a.textContent = 'tutaj link';
    a.href = education.link;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    li.appendChild(a);
  });
}

// #endregion

// EXPERIENCE
// #region Experience
function renderPersonalProjects(data) {
  const container = document.getElementById('personal-projects');
  container.innerHTML = '';

  data.projekty_wlasne.opis.forEach((experience) => {
    const li = document.createElement('li');
    li.textContent = experience;
    container.appendChild(li);
  });
}

function renderUniProjects(data) {
  const container = document.getElementById('uni-projects');
  container.innerHTML = '';

  data.projekty_uczelniane.opis.forEach((experience) => {
    const li = document.createElement('li');
    li.textContent = experience;
    container.appendChild(li);
  });
}

function renderTechnologicalDevelopmentProjects(data) {
  const container = document.getElementById('technical-development');
  container.innerHTML = '';

  data.rozwoj_techniczny.opis.forEach((experience) => {
    const li = document.createElement('li');
    li.textContent = experience;
    container.appendChild(li);
  });
}

// #endregion

export {
  renderHardSkills,
  renderSoftSkills,
  renderMyCourses,
  renderPersonalProjects,
  renderTechnoStack,
  renderTechnologicalDevelopmentProjects,
  renderUniProjects,
  renderLanguages,
};
