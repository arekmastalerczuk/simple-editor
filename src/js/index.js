import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const loadButton = document.querySelector(".button__load--js");
const saveButton = document.querySelector(".button__save--js");
const resetButton = document.querySelector(".button__reset--js");
let textInfo = document.querySelector(".form__area--js");
textInfo.innerHTML = localStorage.getItem("cookie");

saveButton.addEventListener("click", () => {
  localStorage.setItem("cookie", textInfo.value);
});

loadButton.addEventListener("click", () => {
  textInfo.innerHTML = localStorage.getItem("cookie");
});

resetButton.addEventListener("click", () => {
  localStorage.removeItem("cookie");
  textInfo.innerHTML = "";
});
