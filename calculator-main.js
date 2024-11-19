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