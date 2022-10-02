// Write a program that prompts the user for a number, then repeatedly doubles that number until it is greater than or equal to 100 

const prompt = require('prompt-sync')
({sigint: true});

let num = Number(prompt("Enter a number: "));

while (num < 100){

    num = num * 2;
    console.log("Here is that number doubled: ") + console.log(num);
    console.log("\n");
}


