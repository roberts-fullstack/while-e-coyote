// Write a program that takes a string and 'repeats it' until the string's length is greater than or equal to 10.
// Examples

// Enter a string:
// > abc

// abc
// abcabc
// abcabcabc
// abcabcabcabc

const prompt = require('prompt-sync')
({sigint: true});

let UserString = String(prompt("Enter a letter string: "));
let Accumulator = UserString

while (Accumulator.length <= 10){

    Accumulator = Accumulator + UserString;
    console.log(Accumulator);

}


