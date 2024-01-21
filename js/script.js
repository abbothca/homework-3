"use strict";

/* ---------------- Task 1 -------------------  */
console.log("______________ Task #1 ______________");
let isNumb = false;
let userTries = 0;
let userNumber = undefined;


do {
    // let userNumber = 3.4;
    userNumber = prompt("Please, enter some number:");
    userTries++;
    console.log(`You have entered a value "${userNumber}"`);

    // if (!isNaN(userNumber) && userNumber !== "" && userNumber !== true && userNumber !== false) {  // false <-> "" <-> "0"; true <-> 1
    if (!isNaN(userNumber) && !isNaN(+userNumber)) {  // to float -> isNaN
        console.log(`Even numbers:`);
        if (userNumber >= 2) {
            let smallestInteger = Math.floor(userNumber);
            //__________________________________________________________________________________________
            // v1 with for () {}
            for (let i = 2; i <= smallestInteger; i += 2) {
                console.log(i);
            };
            //__________________________________________________________________________________________
            // v2 with while () {}
            /*
                let i = 2;
                while (i <= smallestInteger) {
                    console.log(i);
                    i += 2;
                }
            */
            //__________________________________________________________________________________________
        } else if (userNumber <= -2) {
            let smallestInteger = Math.ceil(userNumber);
            //__________________________________________________________________________________________
            // v1 with for () {}
            for (let i = -2; i >= smallestInteger; i -= 2) {
                console.log(i);
            };
            //__________________________________________________________________________________________
            // v2 with while () {}
            /*
                let i = -2;
                while (i >= smallestInteger) {
                    console.log(i);
                    i -= 2;
                }
            */
        } else {
            console.log(`!!! There are no even numbers satisfying the condition`);
        };

        isNumb = true;
    } else {
        if (userTries >= 3) {
            console.log(" %c Sorry! Game is over :-((( You didn't enter a number", "color: red;");
            isNumb = true;
           // break;
        }

        console.warn("Warning! Please enter the number!");
    }
} while (!isNumb);

/* ---------------- Task 2 -------------------  */
console.log("______________ Task #2 ______________");

const maxNumber = 10;

if (!isNaN(parseInt(maxNumber)) && maxNumber > 0) { // isNaN(true) = isNaN (1) = false
    for (let i = 1; i <= maxNumber; i++) {
        let remainder5 = i % 5;
        let remainder3 = i % 3;
        // v2 with switch/case 
        switch (true) {

            case (remainder5 === 0 && remainder3 === 0):
                console.log("FizzBuzz");
                break;
            case (remainder5 !== 0 && remainder3 === 0):
                console.log("Fizz");
                break;
            case (remainder5 === 0 && remainder3 !== 0):
                console.log("Buzz");
                break;
            default:
                console.log(i);
        };
        /*
        // v2 with if() {} else {} 
        if ((remainder3 === 0) && (remainder5 !== 0)) {
            console.log("Fizz");
        } else
            if ((remainder5 === 0) && (remainder3 !== 0)) {
                console.log("Buzz");
            } else
                if ((remainder3 === 0) && (remainder5 === 0)) {
                    console.log("FizzBuzz");
                } else {
                    console.log(i);
                }
        */
    }
} else {
    console.warn(`Not correct start data! [${maxNumber}] is not a positive integer!`)
};

/* ---------------- Task 3 -------------------  */
console.log("______________ Task #3 ______________");

// let string = '42559125';
let string = prompt("Enter a string of numbers (for example 123467):");
let result = "";

let stringLength = string.length;

// for every string
for (let i = 0; i<= stringLength-1; i++) {
    let currentChar = string[i];
    if (+currentChar < 5) {
        result = `${result}0`
    } else if (+currentChar >= 5 ) {
        result = `${result}1`;
    } else {
        result = `${result}${currentChar}`;
    }
}

// if we need only strings of numbers we can check some conditions
// "-23efds" parseInt(-23efds)=-23 != -23efds; 
// "-23" parseint(-23efds) == -23efds && -23efds != Math.abs(-23efds)
if(parseInt(string) == string && string == Math.abs(+string) ) {
    console.log("You got it! You entered exactly what was needed!")
} else {
    console.log("It is such a pity! You didn't understand us... But don't worry! We can do something with your string");
}

console.log("string: ", string);
console.log("result: ", result);

console.log("_____________________________________")