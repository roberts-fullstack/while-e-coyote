// fibonacci.js

// Write a program, fibonacci.js that accepts a number, n, from the user and consequently logs the first n values in the fibonacci sequence.

// The fibonacci sequence starts with 0 then 1. Each subsequent value can be obtained by summing the previous two values:

// 0 1 1 2 3 5 8 13 21 34 ...

// Example

// Enter a value for "n":
// > 9

// 0
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
const prompt = require('prompt-sync')
({sigint: true});

let seriesLength = Number(prompt("Enter your desired Fibonacci Series length: > "));

let Sum1 = 0; 
let Sum2 = 1; 
let nextNum = 0;
let i = 1;

console.log('Fibonacci Series:');

for (let i = 1; i <= seriesLength; i++) {

    console.log(nextNum);

    nextNum = Sum1 + Sum2;
    Sum1 = Sum2;
    Sum2 = nextNum;
}

