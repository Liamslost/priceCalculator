"use strict";

const result = document.querySelector(".displayPrice");
const selectTerm = document.querySelector("term");
const sliderbar = document.querySelector(".sliderbar");
const checkbox = document.querySelector(".switch");
const pageViewsDisplay = document.querySelector(".pageviews");
const pseudoTerm = document.querySelector(".displayPrice::after");

function displayPrice(value) {
  if (!document.querySelector("#yearly").checked) {
    result.textContent = `$${value}`;
  } else {
    let newResult = value * 12 * 0.75;
    result.textContent = `$${newResult}/year`;
  }
}

let monthlyRate = 36;

sliderbar.addEventListener("change", (event) => {
  if (sliderbar.value == 1) {
    pageViewsDisplay.textContent = "10k views";
    monthlyRate = 8;
  } else if (sliderbar.value == 2) {
    pageViewsDisplay.textContent = "50k views";
    monthlyRate = 12;
  } else if (sliderbar.value == 3) {
    pageViewsDisplay.textContent = "100k views";
    monthlyRate = 16;
  } else if (sliderbar.value == 4) {
    pageViewsDisplay.textContent = "500k views";
    monthlyRate = 24;
  } else if (sliderbar.value == 5) {
    pageViewsDisplay.textContent = "1M views";
    monthlyRate = 36;
  }
  displayPrice(monthlyRate);
  pseudoTerm.textContent = "/year";
});

checkbox.addEventListener("change", (event) => {
  displayPrice(monthlyRate);
});
