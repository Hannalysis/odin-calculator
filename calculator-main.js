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

// operations = {'+' : add, '-' : subtract, '*' : multiply, "/" : divide}

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

//Test code
console.log(divideSymbol);
console.log(multiplySymbol);

console.log(operate(10, '+', 11));
console.log(operate(5, '-', 2));
console.log(operate(10, multiplySymbol, 11));
console.log(operate(10, divideSymbol, 2));

//HTML element generation with DOM

const container = document.querySelector("#container");

// #box1, #box2 & #box3 are hidden so are assigned N/A to allow full list iteration
calcList = ["N/A","N/A", "N/A","1234567890", "7", "8", "9", multiplySymbol, "4", "5", "6", "-", "1", "2", "3", "+", "C", "0", divideSymbol, "="];

boxNum = 1;
calcListCounter = 0;

for (let i = 1; i < 6; i++) {
    /* Create the row*/
    const row = document.createElement("div");
    row.setAttribute("class", `row`);
    container.appendChild(row);
    for (let i = 1; i < 5; i++){
        /* Create the boxes for the row*/
        const div = document.createElement("div");
        div.setAttribute("id", `box${boxNum}`);
        div.setAttribute('class', "box");
        row.appendChild(div);
        const para = document.createElement("p");
        div.appendChild(para);
        para.innerHTML = calcList[calcListCounter];
        // document.getElementById(`box${boxNum}`).innerHTML = 'PH';
        boxNum++;
        calcListCounter ++;
    }
}