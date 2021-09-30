// // Hoisting
// someName()
// function someName(){
//                              // this function can be used before it is declared, function declaration
// }

// var someName = function(){
//                              // this function CANNOT be used before it is declared, function expression
// }

// Self-invoking functions

// (function(num1, num2){
//     console.log("I'm a self-invoked function.");    // note parenthetical syntax
//     console.log(num1 + num2);
// })(5, 7);

//  pass-by-value and pass-by-reference

// var a = 5;
// var b = a;                      // pass-by-value, "b" gets new memory address

// var arrA = [4, 5, 6, 7]
// var arrB = arrA                 // pass-by-reference, changing arrB also changes arrA, both vars share the same memory address

// // spread operator

// var arrC = [4, 5, 6, 7]
// var arrD = [...arrC]            // like copy() in Python, makes new memory addess for arrD

// // A destabilizing pass-by-reference example
// var outside = {
//     num: 44
// };

// function testFunction(obj){
//     obj.num += 22;
// }

// var result = testFunction(outside);

// console.log(outside)

// SCOPE

// global and local, like Python

// CONST, LET, and VAR

// var a = 4;        // "a" is mutable, can be changed later

// const pi = 3.14;  // "pi" is immutable, use for things that should never change, short for "constant"

// // block-scope variables (let)
// var count = 0;

// for (let count = 0; count < 10; count++){

// }

// console.log(count)  // prints global scope "count" (0)

// // Anonymous Functions
// let nameFunc = function(name){
//     return `Hello, ${name}.`;
// }

// let greeting = nameFunc("Jeff");

// console.log(greeting)

// // CALLBACK
// let add = function(num1, num2){             // callbacks (here on down)
//     return num1 + num2;
// };

// let subtract = function(num1, num2){
//     return num1 - num2;
// };

// let multiply = function(num1, num2){
//     return num1 * num2;
// };

// let divide = function(num1, num2){
//     return num1 / num2;
// };

// let calc = function(num1, num2, callback){   // higher order function
//     return callback(num1, num2);
// };

// console.log(calc(5, 6, multiply));

// function opposite(boolVal){
//     return !boolVal;
// };

// console.log(opposite(true))

// ARROW FUNCTIONS
let opposite = (boolVal)=>!boolVal;   // no "return" needed if only one line in code block

console.log(opposite(true))

let greeting  = (name)=>`Hello, ${name}.`

console.log(greeting("Jeff"))