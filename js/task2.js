"use strict";

console.log("______________ Task #2 ______________");

const maxNumber = 100;

if ((parseInt(maxNumber) === maxNumber) && maxNumber > 0) {
    for (let i = 1; i <= maxNumber; i++) {
        // v1 with switch/case 
        // switch (true) {

        //     case (i % 15 === 0):
        //         console.log("FizzBuzz");
        //         break;
        //     case (i % 3 === 0):
        //         console.log("Fizz");
        //         break;
        //     case (i % 5 === 0 ):
        //         console.log("Buzz");
        //         break;
        //     default:
        //         console.log(i);
        // };

        // v2 with if() {} else {} 

        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        };

    }
} else {
    console.warn(`Not correct start data! [${maxNumber}] is not a positive integer!`)
};