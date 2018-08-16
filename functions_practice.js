//#1
function add7(num) {
  return num += 7;
};

//#2
function multiply(a,b) {
  return a * b;
};

//#3
let firstLetter;
let remainderOfString;

function capitalize(string) {
  let lowerCase = string.toLowerCase();
  let remainderOfString = lowerCase.slice(1);
  let upperCase = string.toUpperCase();
  let firstLetter = upperCase.slice(0,1);
  return firstLetter + remainderOfString;
};

//#4
function lastLetter(string) {
  return string.slice(-1);
};
