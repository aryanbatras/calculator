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

// fns

function plusfn() {
    if(valueone !== 0){
        valueone = +valueone + +display.textContent;
        display.textContent = '';
        console.log(valueone);
        console.log(operator);
    } else {
    valueone = display.textContent;
    display.textContent = '';
    console.log(valueone);
    console.log(operator);
}
}

function minusfn() {
    if(valueone !== 0){
        valueone = +valueone - +display.textContent;
        display.textContent = '';
    } else {
    valueone = display.textContent;
    display.textContent = '';
}
}

function mulfn() {
    if(valueone !== 0){
        valueone = +valueone * +display.textContent;
        display.textContent = '';
    } else {
    valueone = display.textContent;
    display.textContent = '';
    }
}

function divfn() {
    if(valueone !== 0){
        valueone = +valueone / +display.textContent;
        display.textContent = '';
    } else {
    valueone = display.textContent;
    display.textContent = '';
}
}

function powfn() {
    if(valueone !== 0){
        valueone = powvalue();
        display.textContent = '';
    } else {
    valueone = display.textContent;
    display.textContent = '';
    }
}

function factorialfn() {
    if(valueone !== 0){
        valueone = factorialvalue();
        display.textContent = '';
    } else {
        valueone = display.textContent;
        display.textContent = '';
    }
}
// cal display 
let operator = 0;
let valueone = 0;

plus.addEventListener('click', function() {
    
    if(operator === 0 || operator === '+') {
    operator = '+';
    sign.textContent = '+';
    plusfn();
    } else if(operator === '-'){
        operator = '+';
        sign.textContent = '+';
        minusfn();
    } else if(operator === '*'){
        operator = "+";
        sign.textContent = '+';
        mulfn();
    } else if (operator === '/'){
        operator = '+';
        sign.textContent = '+';
        divfn();
    } else if (operator === '^'){
        operator = '+';
        sign.textContent = '+';
        powfn();
    } else if (operator === '!'){
        operator = '+';
        sign.textContent = '+';
        factorialfn();    
    }

});

minus.addEventListener('click', function() {
    
    if(operator === 0 || operator === '-') {
        operator = '-';
        sign.textContent = '-';
        minusfn();
        } else if(operator === '+'){
            operator = '-';
            sign.textContent = '-';
            plusfn();
        } else if(operator === '*'){
            operator = "-";
            sign.textContent = '-';
            mulfn();
        } else if (operator === '/'){
            operator = '-';
            sign.textContent = '-';
            divfn();
        } else if (operator === '^'){
            operator = '-';
            sign.textContent = '-';
            powfn();
        } else if (operator === '!'){
            operator = '-';
            sign.textContent = '-';
            factorialfn();    
        }
    

});

divide.addEventListener('click', function() {

    if(operator === 0 || operator === '/') {
        operator = '/';
        sign.textContent = '/';
        divfn();
        } else if(operator === '-'){
            operator = '/';
            sign.textContent = '/';
            minusfn();
        } else if(operator === '*'){
            operator = "/";
            sign.textContent = '/';
            mulfn();
        } else if (operator === '+'){
            operator = '/';
            sign.textContent = '/';
            plusfn();
        } else if (operator === '^'){
            operator = '/';
            sign.textContent = '/';
            powfn();
        } else if (operator === '!'){
            operator = '/';
            sign.textContent = '/';
            factorialfn();    
        }
    

});

multiply.addEventListener('click', function() {

    if(operator === 0 || operator === '*') {
        operator = '*';
        sign.textContent = '*';
        mulfn();
        } else if(operator === '-'){
            operator = '*';
            sign.textContent = '*';
            minusfn();
        } else if(operator === '+'){
            operator = "*";
            sign.textContent = '*';
            plusfn();
        } else if (operator === '/'){
            operator = '*';
            sign.textContent = '*';
            divfn();
        } else if (operator === '^'){
            operator = '*';
            sign.textContent = '*';
            powfn();
        } else if (operator === '!'){
            operator = '*';
            sign.textContent = '*';
            factorialfn();    
        }
    
});


// other cal 

power.addEventListener('click', function() {

    if(operator === 0 || operator === '^') {
        operator = '^';
        sign.textContent = '^';
        powfn();
        } else if(operator === '-'){
            operator = '^';
            sign.textContent = '^';
            minusfn();
        } else if(operator === '*'){
            operator = "^";
            sign.textContent = '^';
            mulfn();
        } else if (operator === '/'){
            operator = '^';
            sign.textContent = '^';
            divfn();
        } else if (operator === '+'){
            operator = '^';
            sign.textContent = '^';
            plusfn();
        } else if (operator === '!'){
            operator = '^';
            sign.textContent = '^';
            factorialfn();    
        }
    

});

factorial.addEventListener('click', function() {

    if(operator === 0 || operator === '!') {
        operator = '!';
        sign.textContent = '!';
        factorialfn();
        } else if(operator === '-'){
            operator = '!';
            sign.textContent = '!';
            minusfn();
        } else if(operator === '*'){
            operator = "!";
            sign.textContent = '!';
            mulfn();
        } else if (operator === '/'){
            operator = '!';
            sign.textContent = '!';
            divfn();
        } else if (operator === '^'){
            operator = '!';
            sign.textContent = '!';
            powfn();
        } else if (operator === '+'){
            operator = '!';
            sign.textContent = '!';
            plusfn();    
        }
    
});


// special btns

dot.addEventListener('click', function() {
    display.textContent += '.';
});

let valuetwo = 0;
equal.addEventListener('click', function() {
    if(valueone === 0) {
        display.textContent;
    } else if ( display.tetContent = '') {
        display.textContent = valueone;
    } else {
    valuetwo = display.textContent;
    display.textContent = '';
    display.textContent = operate();
    valueone = 0;
    valuetwo = 0;
    operator = 0; 
    sign.textContent = '';
    }
});

clear.addEventListener('click', function() {
   display.textContent = display.textContent.toString().slice(0, -1);
});

allclear.addEventListener('click', function() {
    display.textContent = '';
    sign.textContent = '';
    valueone = 0;
    valuetwo = 0;
    operator = 0;
});



// display value

let result = 0;
display.addEventListener('click', function() {
    result = display.textContent;
});


// operation fns

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


// other fns

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



// end