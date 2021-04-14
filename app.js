'use strict';

console.log (5+5);

console.log (parseInt('31'));

console.log (parseFloat('33.3'));

// Assignment Operators

let name = "Omar Munoz"

let age = 31;

console.log (name);

console.log (age);

console.log (5 === 5);

let doesEqual = 5 === 5;

console.log (doesEqual)
// Truthy vs Falsey
age = 0;
if (age) {
  console.log('Age is zero');
} else {
  console.log('Age is not zero')
}

let stopLight = "red";

if (stopLight === 'green') {
  console.log('Go');
} else if (stopLight === 'red') {
  console.log('Stop');
} else {
  console.log('Slow Down');
}