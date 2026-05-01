"use strict";

// ZMIENNE
const form = document.getElementById("comments-form");
const input = document.getElementById("comment-input");
const list = document.getElementById("comments-section");

// POBIERZ KOMENTARZ
function getComments() {
  const data = localStorage.getItem("comments");

  if (!data) {
    return [];
  }
  return JSON.parse(data);
}

// DODAJ KOMENTARZ
function addComments(text) {
  const comments = getComments();

  const newComment = {
    id: Date.now(),
    text: text,
    date: new Date().toLocaleString(),
  };

  comments.push(newComment);

  saveComments(comments);
}

// ZAPISZ KOMENTARZ
function saveComments(comments) {
  localStorage.setItem("comments", JSON.stringify(comments));
}

// RENDEROWANIE KOMENTARZY
function renderComments() {
  const container = document.getElementById("comments-section");
  container.innerHTML = "";

  const comments = getComments();

  comments.forEach((comment) => {
    const li = document.createElement("li");

    const text = document.createElement("div");
    text.innerHTML = `
      ${comment.text}<br>
      <small>${comment.date}</small>
    `;

    const btn = document.createElement("button");
    btn.textContent = "Usuń";
    btn.classList.add("btns");

    btn.addEventListener("click", () => {
      deleteComment(comment.id);
    });

    li.appendChild(text);
    li.appendChild(btn);

    container.appendChild(li);
  });
}

function deleteComment(id) {
  let comments = getComments();

  comments = comments.filter((comment) => comment.id !== id);

  saveComments(comments);
  renderComments();
}

function initComments() {
  renderComments();

  const btn = document.getElementById("addCommentBtn");
  const input = document.getElementById("comment-input");

  btn.addEventListener("click", () => {
    if (!input.value.trim()) return;

    addComments(input.value);
    input.value = "";

    renderComments();
  });
}

export { initComments };
