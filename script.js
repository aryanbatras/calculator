// getting values

let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let zero = document.querySelector('.zero');


let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let divide = document.querySelector('.divide');
let multiply = document.querySelector('.multiply');

let dot = document.querySelector('.dot');
let equal = document.querySelector('.equals');

let power = document.querySelector('.power');
let factorial = document.querySelector('.factorial');

let clear = document.querySelector('.clear');
let allclear = document.querySelector('.allclear');

let display = document.querySelector('.display-green');
let sign = document.querySelector('.cal-sign');

// display values

one.addEventListener('click', function() {
    display.textContent += 1;
});

two.addEventListener('click', function() {
    display.textContent += 2;
});

three.addEventListener('click', function() {
    display.textContent += 3;
});

four.addEventListener('click', function() {
    display.textContent += 4;
});

five.addEventListener('click', function() {
    display.textContent += 5;
});

six.addEventListener('click', function() {
    display.textContent += 6;
});

seven.addEventListener('click', function() {
    display.textContent += 7;
});

eight.addEventListener('click', function() {
    display.textContent += 8;
});
    
nine.addEventListener('click', function() {
    display.textContent += 9;
});

zero.addEventListener('click', function() {
    display.textContent += 0;
});

// cal display 
let operator = 0;

let valueone = 0;
plus.addEventListener('click', function() {
    operator = '+';
    sign.textContent = '+';

    if(valueone !== 0){
        valueone = +valueone + +display.textContent;
        display.textContent = '';
    } else {
    valueone = display.textContent;
    display.textContent = '';

    
}
});

minus.addEventListener('click', function() {
      operator = '-';
      sign.textContent = '-';


    if(valueone !== 0){
        valueone = +valueone - +display.textContent;
        display.textContent = '';
    } else {
    valueone = display.textContent;
    display.textContent = '';
}
});

divide.addEventListener('click', function() {
    operator = '/';
    sign.textContent = '/';


    if(valueone !== 0){
        valueone = +valueone / +display.textContent;
        display.textContent = '';
    } else {
    valueone = display.textContent;
    display.textContent = '';
}
});

multiply.addEventListener('click', function() {
    operator = '*';
    sign.textContent = '*';


    if(valueone !== 0){
        valueone = +valueone * +display.textContent;
        display.textContent = '';
    } else {
    valueone = display.textContent;
    display.textContent = '';
    }

});

power.addEventListener('click', function() {
    operator = '^';
    sign.textContent = '^';


    if(valueone !== 0){
        valueone = powvalue();
        display.textContent = '';
    } else {
    valueone = display.textContent;
    display.textContent = '';
    }
});

factorial.addEventListener('click', function() {
    operator = '!';
    sign.textContent = '!';


    if(valueone !== 0){
        valueone = factorialvalue();
        display.textContent = '';
    } else {
        valueone = display.textContent;
        display.textContent = '';
    }
});

dot.addEventListener('click', function() {
    display.textContent += '.';
});

// special btns
let valuetwo = 0;
equal.addEventListener('click', function() {
    if(valueone === 0) {
        display.textContent;
    } else {
    valuetwo = display.textContent;
    display.textContent = '';
    display.textContent = operate();
    valueone = 0;
    valuetwo = 0;
    operator = 0;
    }
});


clear.addEventListener('click', function() {
   display.textContent = display.textContent.toString().slice(0, -1);
});

allclear.addEventListener('click', function() {
    display.textContent = '';
    valueone = 0;
    valuetwo = 0;
});



// display value

let result = 0;
display.addEventListener('click', function() {
    result = display.textContent;
});


// 

function operate() {
if(operator === '+') {
    return add();
} else if(operator === '-') {
   return sub();
} else if(operator === '*') {
    return mul();
 } else if(operator === '/') {
    return div();
 } else if(operator === '^') {
    return pow();
 } else if(operator === '!') {
    return fac();
 }
}


function add(){
    return +valueone + +valuetwo;
}
function sub(){
    return +valueone - +valuetwo;
}
function mul(){
    return +valueone * +valuetwo;
}
function div(){
    return +valueone / +valuetwo;
}
function pow(){
    let answer = 1;
  for (i = 0; i < +valuetwo; i++){
    answer *= +valueone;
  }
  return answer;
}
function fac(){
    let value = 1;
    while(valueone > 1) {
      value *= valueone;
      valueone--;
    }
    return value;
}


function powvalue() {
    let powval = 1;
        for (i = 0; i < +display.textContent; i++)
        {
          answer *= valueone;
        }
        return powval;
}


function factorialvalue() {
    let facvalue = 1;
    while(valueone > 1) {
      facvalue *= valueone;
      facvalueone--;
    }
    return value;
}