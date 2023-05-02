/*
const add = require('./utility-module/add.js');
const minus = require('./utility-module/minus.js');
const divide = require('./utility-module/divide.js');
const multiply = require('./utility-module/multiply.js');

const a = 10;
const b = 20;

console.log(add(a,b));
console.log(minus(a,b));
console.log(divide(a,b));
console.log(multiply(a,b));
*/

const MathModule = require('./math-module/math-class.js');

const a = 10;
const b = 20;

console.log(MathModule.add(a, b));
console.log(MathModule.minus(a, b));
console.log(MathModule.divide(a, b));
console.log(MathModule.multiply(a, b));
