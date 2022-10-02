const prompt = require('prompt-sync')
({sigint: true});


let num1 = Number(prompt("Enter a number for X: "));
let num2 = Number(prompt("Enter a number for Y: "));


while(num1 % num2 !== 0){
    console.log(num1)   
    num1++
 }


console.log(num1 +  " is divisible by "  + num2)