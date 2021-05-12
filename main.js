'use strict'
//const
const button = document.querySelector(".js-button");
const inputNumber = document.querySelector (".js-input");
const clue = document.querySelector (".js-clue");
const tryNumber = document.querySelector (".js-try");

// generate random number
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
const randomNumber = getRandomNumber(100);
console.log (randomNumber);

//try
function writeNumber(){
    const number = parseInt(inputNumber.value);
    if(number <= 0 || number >= 100){
        clue.innerHTML= 'El número deber de estar ente 0 y 100';
    }
    else if (number === randomNumber) {
        clue.innerHTML = 'Has ganado campeona';
    }
    else if (number < randomNumber){
        clue.innerHTML = 'Demasiado bajo';
    }
    else if (number > randomNumber) {
        clue.innerHTML = 'Demasiado alto';
    }
}

//funtion que agrupe a todas
function handlerClick(event){
    event.preventDefault();
writeNumber();
}

//eventListener
button.addEventListener('click', handlerClick);

