// Unicode characters for visual mathematical operators

const divideSymbol = '\u00F7';
const multiplySymbol = '\u00D7';

// Calculator Functions

const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const multiply = function(num1, num2) {
    return num1 * num2;
  };

const divide = function(num1, num2) {
  return num1 / num2;
};


const operate = function(num1, operator, num2){
  switch(operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case multiplySymbol:
      return  multiply(num1, num2);
    case divideSymbol:
      return divide(num1, num2);
  }
}

// Test code
console.log(divideSymbol);
console.log(multiplySymbol);

console.log(operate(10, '+', 11));
console.log(operate(5, '-', 2));
console.log(operate(10, multiplySymbol, 11));
console.log(operate(10, divideSymbol, 2));

// HTML element generation with DOM

const container = document.querySelector("#container");

// Calculator display
screen = [];

// #box1, #box2 & #box3 are hidden so are assigned N/A to allow full list iteration
const calcList = ["N/A","N/A", "N/A",screen, "7", "8", "9", multiplySymbol, "4", "5", "6", "-", "1", "2", "3", "+", "C", "0", "=", divideSymbol];

boxNum = 1;
calcListCounter = 0;

// Button Functionality

const screenUpdate = function() {
    /* Getting hold of the <p> tag for the screen update */
    calcScreen = document.getElementById("box4").firstChild;
    calcScreen.innerHTML = screen.join('');
}

const digitClick = function(event) {

  const targetDigit = event.target.innerHTML;
  cleanTargetDigit = targetDigit.replace(/<\/p>|<p>/g, ""); // replacing the closing tag is not neccessary for my function to work (as parseFloat negates anything after the number) it's for clarity/futureproofing
  screen.push(parseFloat(cleanTargetDigit));
  screenUpdate();
  console.log(screen);
}

const operatorClick = function(event) {

  const targetOp = event.target.innerHTML;
  cleanTargetOp = targetOp.replace(/<\/p>|<p>/g, "");
  if (screen.includes("+") || screen.includes("-") || screen.includes(multiplySymbol)|| screen.includes(divideSymbol)) {
    calculate();
  }
  lastOpPress = cleanTargetOp;
  screen.push(cleanTargetOp);
  screenUpdate();
  console.log(screen);
}

const clearScreen = function() {
  calcScreen = document.getElementById("box4").firstChild;
  screen = [];
  calcScreen.innerHTML = screen;
}

// Stored variable operator for split in calculate function
lastOpPress = '';

const calculate = function () {
  calcScreen = document.getElementById("box4").firstChild;
  calcScreenString = calcScreen.innerHTML;
  calcScreenSplit = calcScreenString.split(lastOpPress);
  result = operate(parseFloat(calcScreenSplit[0]), lastOpPress, parseFloat(calcScreenSplit[1]));
  clearScreen();
  screen.push(result);
  screenUpdate();
}

// Calculator Generator

for (let i = 1; i < 6; i++) {
    /* Create the row */
    const row = document.createElement("div");
    row.setAttribute("class", `row`);
    container.appendChild(row);
    for (let i = 1; i < 5; i++){
        /* Create the boxes for the row */
        const div = document.createElement("div");
        div.setAttribute("id", `box${boxNum}`);
        div.setAttribute('class', "box");
        row.appendChild(div);
        /* Then add the text element */
        const para = document.createElement("p");
        div.appendChild(para);
        /* Iterating through the calculator interface list */
        para.innerHTML = calcList[calcListCounter];
        /* Adding the clickable 'buttons' on p */
        if (boxNum % 4 == 0){
          /* For operation buttons on far right column */
          document.getElementById(`box${boxNum}`).addEventListener("click", operatorClick);
        }
        else {
          document.getElementById(`box${boxNum}`).addEventListener("click", digitClick);
        }
        boxNum++;
        calcListCounter ++;
    }
}

// Removing the click event from the Calculator's screen
document.getElementById("box4").removeEventListener("click", operatorClick);

// Adding the clear button
document.getElementById("box17").removeEventListener("click", digitClick);
document.getElementById("box17").addEventListener("click", clearScreen);

// Adding the operate function to the equals button
document.getElementById("box19").removeEventListener("click", digitClick);
document.getElementById("box19").addEventListener("click", calculate);