const smallscreen = document.getElementById('small_screen');
const bigscreen = document.getElementById('big_screen');
const btns = document.querySelectorAll('.btn');
const operaters = document.querySelectorAll('.operater');
const equal_key = document.querySelector('.equal');
const clear_key = document.querySelector('.clear');

smallscreen.textContent = '';
bigscreen.textContent = '';
let storednum = ''
bigscreen.textContent = 0;
let firstnum = '';
let clicked_operater = '';
let result = "";


function add(n1,n2){
  num = n1+n2;
  return num;
}
function subtract(n1,n2){
  num = n1-n2;
  return num;
}
function multiply(n1,n2){
  num = n1*n2;
  return num;
}
function divide(n1,n2){
  if(n2==0){
    alert("you can't divide by zero");
    
    return 0;
  }
  else{
  num = n1/n2;
  return num;}
}

function operate(num1, num2, operator) {
        switch (operator) {
          case "+":
            return add(num1, num2);
          case "-":
            return subtract(num1, num2);
          case "*":
            return multiply(num1, num2);
          case "/":
            return divide(num1, num2);
        }
      };



btns.forEach(btn => btn.addEventListener('click', ()=> {
storednum += btn.value;
bigscreen.textContent = storednum;
})); 

operaters.forEach(operator => operator.addEventListener('click',()=>{
    //save the 1st number
    firstnum = storednum;

    //get operator
    clicked_operater = operator.textContent;
    //display 1st number and selected operator
    smallscreen.textContent = firstnum+clicked_operater;
    storednum='';
}));

function calculate()
{
  smallscreen.textContent = firstnum+clicked_operater+storednum;
  const result = operate(parseFloat(firstnum),parseFloat(storednum),clicked_operater);
  if(result==0){
    clear();
  }
  else{
  bigscreen.textContent = result;
  storednum = result; 
}}


equal_key.addEventListener('click',calculate);

//clears the display
function clear(){
    bigscreen.textContent = '0';
    smallscreen.textContent = '';
    clicked_operater='';
    firstnum = '';
    storednum='';
}

clear_key.addEventListener('click',clear);