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
const prompt = require('prompt-sync')({sigint: true});

let DesiredSteps = Number(prompt("Enter a number. This will determine the number of steps the Fibonacci Sequence is calculated: "));

let x = 0
let y = 1
let z = ""
let Accumulator = 0

let LoopCounter = 0


while LoopCounter < DesiredSteps
    do
        Accumulator = x + y
        x = y
        


LoopCounter = LoopCounter + 1


