/* eslint-disable max-len */
/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */
"use strict";

// document.addEventListener("DOMContentLoaded", function () {
//   setInterval(addRandomShift, 4000);
// });

// function addRandomShift() {
//   const element = document.querySelector(".header__letter-M");
//   const randomX = getRandomInt(-10, 10);
//   const randomY = getRandomInt(-10, 10);
//   const randomZ = getRandomInt(95, 105);

//   element.style.transform = `translateX(${randomX}px) translateY(${randomY}px) scale(${randomZ}%)`;
// }

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

const arrowUp = document.querySelector(".footer__up-arrow");

window.addEventListener("scroll", function () {
  if (
    document.body.scrollTop > 500
    || document.documentElement.scrollTop > 500
  ) {
    arrowUp.classList.add("footer__up-arrow--show");
  } else {
    arrowUp.classList.remove("footer__up-arrow--show");
  }
});
