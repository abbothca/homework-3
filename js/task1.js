"use strict";

/* ---------------- Task 1 -------------------  */
console.log("______________ Task #1 ______________");
let userNumber = undefined;

userNumber = prompt("Please, enter some number:");
console.log(`You have entered a value "${userNumber}"`);

let userNumberParsed = parseFloat(userNumber);
console.log(`Parsed value "${userNumberParsed}"`);

if (!isNaN(userNumberParsed)) { 
    console.log(`Even numbers:`);
    if (userNumberParsed >= 2) {
        let smallestInteger = Math.floor(userNumberParsed);
        for (let i = 2; i <= smallestInteger; i += 2) {
            console.log(i);
        };
    } else if (userNumberParsed <= -2) {
        let smallestInteger = Math.ceil(userNumberParsed);
        for (let i = -2; i >= smallestInteger; i -= 2) {
            console.log(i);
        };
    } else {
        console.log(`!!! There are no even numbers satisfying the condition`);
    };
} else {

    console.warn("Warning! Please enter the number!");
};

// --------------------------------------------------------------------------------------------------

userNumber = prompt("Please, enter some number:");
console.log(`You have entered a value "${userNumber}"`);

userNumberParsed = parseFloat(userNumber);
console.log(`Parsed value "${userNumberParsed}"`);

if (!isNaN(parseFloat(userNumberParsed))) { 
    console.log(`Even numbers:`);
    if (userNumberParsed >= 2) {
        let smallestInteger = Math.floor(userNumberParsed);
            let i = 2;
            while (i <= smallestInteger) {
                console.log(i);
                i += 2;
            }
        //__________________________________________________________________________________________
    } else if (userNumberParsed <= -2) {
        let smallestInteger = Math.ceil(userNumberParsed);
            let i = -2;
            while (i >= smallestInteger) {
                console.log(i);
                i -= 2;
            }
    } else {
        console.log(`!!! There are no even numbers satisfying the condition`);
    };
} else {

    console.warn("Warning! Please enter the number!");
}