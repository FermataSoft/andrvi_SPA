"use strict"

function translate_label(element) {
  if (element.innerHTML !== "") {
    element.toggleclass("_filled");
  }
  console.log("click!")
}

document.addEventListener("DOMContentLoaded", () => {
  let target = document
    .querySelector("submitForm")
    .addEventListener("click", (e) => {
      return e.target;
    });
  translate_label(target);
});

// document.querySelector("h2_accentColor")
