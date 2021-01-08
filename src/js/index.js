import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const loadButton = document.querySelector(".button__load--js");
const saveButton = document.querySelector(".button__save--js");
const resetButton = document.querySelector(".button__reset--js");
const textInfo = document.querySelector(".form__area--js");

saveButton.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("entry", textInfo.value);
});

loadButton.addEventListener("click", (e) => {
  e.preventDefault();
  textInfo.value = localStorage.getItem("entry");
});

resetButton.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("entry");
  textInfo.value = "";
});
