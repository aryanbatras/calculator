
function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

let num1 = firstNumber;
let num2 = secondNumber;

// input are css buttons
// plus minus mul div
 
let operator = sign();

function sign() {
if(input === plus){
    return '+';
} else if(input === minus){
    return '-';
} else if(input === mul) {
    return '*';
} else if(input === div){
    return '/';
}
}

function operate() {
if(operator === '+') {
    add();
} else if(operator === '-') {
    subtract();
} else if(operator === '*') {
    multiply();
 } else if(operator === '/') {
    divide();
 }
}

