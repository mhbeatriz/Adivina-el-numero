"use strict";
//const
const btn = document.querySelector(".js-button");
const inputNumber = document.querySelector(".js-input");
const clueText = document.querySelector(".js-clue");
const tryNumber = document.querySelector(".js-try");

// generate random number
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100);
console.log(randomNumber);

//counter
let counter = 0;
function handlerCounter() {
  tryNumber.innerHTML = `numero de intentos: ` + (counter += 1);
}

//try
function writeNumber() {
  let htmlCode = "";
  const number = parseInt(inputNumber.value);

  if (number <= 0 || number >= 100) {
    htmlCode = "El número deber de estar ente 0 y 100🙄";
  } else if (number === randomNumber) {
    htmlCode = "¡¡Has ganado campeona!! 🤟🏻";
  } else if (number < randomNumber) {
    htmlCode = "Demasiado bajo 🧐";
  } else if (number > randomNumber) {
    htmlCode = "Demasiado alto 🧐";
  }
  clueText.innerHTML = htmlCode;
}

//funtion que agrupe a todas
function handlerClick(event) {
  event.preventDefault();
  writeNumber();
  handlerCounter();
}

//eventListener
btn.addEventListener("click", handlerClick);
