'use strict'
//const
const button = document.querySelector(".js-button");
const inputNumber = document.querySelector (".js-input");
const clue = document.querySelector (".js-clue");
const tryNumber = docuement.querySelector (".js-try");

// generate random number
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
const randomNumber = getRandomNumber();

//try

function writeNumber(){
    let number = parseInt(inputNumber.value);
    if(number <= 0 || number >= 100){
        clue.innerHTML= 'Has ganado campeona';
    }else if (number === randomNumber) {
        clue.innerHTML = 'El número deber de estar ente 0 y 100';
    }else if (number < randomNumber){
        clue.innerHTML = 'Demasiado bajo';
    }else {
        clue.innerHTML = 'Demasiado alto';
    }
}

//funtion que agrupe a todas
function handlerClick(){
writeNumber();
}

//eventListener
button.addEventListener('click', handlerClick);

