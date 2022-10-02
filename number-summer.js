// number-summer.js

// In a file called number-summer.js file, write a program that continually prompts the user for numbers greater than 0 until the user enters a 0 at which point the sum of all the inputted numbers is logged out.
// Example

// Enter some numbers (type 0 when complete):
// > 20
// > 10
// > 3.2
// > 0

// Those numbers sum to 33.2
const prompt = require('prompt-sync')({sigint: true});


let num = Number(prompt("Enter some numbers (type 0 when complete)"));

let sum = 0;

while (num > 0){

    sum += num;
    num = Number(prompt("> "));
}

console.log("And here is your sum! ") + console.log(sum);


