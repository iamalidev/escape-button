"use strict";

const btn = document.querySelector("button");

btn.addEventListener("mouseover", moveHover);

function moveHover() {
  const i = Math.floor(Math.random() * 500) + 1;
  const j = Math.floor(Math.random() * 500) + 1;

  btn.style.left = i + "px";
  btn.style.top = j + "px";
}
