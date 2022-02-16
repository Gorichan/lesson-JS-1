"use strict";

const question = prompt(
  "What do you want to do? 1-addition 2-subtraction 3-multiplication 4-division"
);

function addition(number1, number2 ) {
  if (question == 1) {
    const number1 = prompt("Your favorite number?");
    const number2 = prompt("Your least favorite number?");
    const add = +number1 + +number2;
    console.log(number1, "+", number2, "=", add);
  }
}
addition();

function subtraction(number1, number2 ) {
  if (question == 2) {
    const number1 = prompt("Your favorite number?");
    const number2 = prompt("Your least favorite number?");
    const sub = number1 - number2;
    console.log(number1, "-", number2, "=", sub);
  }
}
subtraction();

function multiplication(number1, number2 ) {
  if (question == 3) {
    const number1 = prompt("Your favorite number?");
    const number2 = prompt("Your least favorite number?");
    const nul = number1 * number2;
    console.log(number1, "*", number2, "=", nul);
  }
}
multiplication();

function division(number1, number2 ) {
  if (question == 4) {
    const number1 = prompt("Your favorite number?");
    const number2 = prompt("Your least favorite number?");
    const div = number1 / number2;
    console.log(number1, "/", number2, "=", div);
  }
}
division();

