"use strict";

let question = prompt(
  "What do you want to do? 1-addition 2-subtraction 3-multiplication 4-division"
);

function addition(number1, number2 ) {
  if (question == 1) {
    let number1 = prompt("Your favorite number?");
    let number2 = prompt("Your least favorite number?");
    let add = +number1 + +number2;
    console.log(number1, "+", number2, "=", add);
  }
}
addition();

function subtraction(number1, number2 ) {
  if (question == 2) {
    let number1 = prompt("Your favorite number?");
    let number2 = prompt("Your least favorite number?");
    let sub = number1 - number2;
    console.log(number1, "-", number2, "=", sub);
  }
}
subtraction();

function multiplication(number1, number2 ) {
  if (question == 3) {
    let number1 = prompt("Your favorite number?");
    let number2 = prompt("Your least favorite number?");
    let nul = number1 * number2;
    console.log(number1, "*", number2, "=", nul);
  }
}
multiplication();

function division(number1, number2 ) {
  if (question == 4) {
    let number1 = prompt("Your favorite number?");
    let number2 = prompt("Your least favorite number?");
    let div = number1 / number2;
    console.log(number1, "/", number2, "=", div);
  }
}
division();

