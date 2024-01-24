"use strict";

console.log("______________ Task #2 ______________");

const maxNumber = 100;

if ((parseInt(maxNumber) === maxNumber) && maxNumber > 0) {
    for (let i = 1; i <= maxNumber; i++) {
        let remainder5 = i % 5;
        let remainder3 = i % 3;
        // v1 with switch/case 
        // switch (true) {

        //     case (remainder5 === 0 && remainder3 === 0):
        //         console.log("FizzBuzz");
        //         break;
        //     case (remainder5 !== 0 && remainder3 === 0):
        //         console.log("Fizz");
        //         break;
        //     case (remainder5 === 0 && remainder3 !== 0):
        //         console.log("Buzz");
        //         break;
        //     default:
        //         console.log(i);
        // };

        // v2 with if() {} else {} 

        if ((remainder3 === 0) && (remainder5 === 0)) {
            console.log("FizzBuzz");
        } else if (remainder3 === 0) {
            console.log("Fizz");
        } else if (remainder5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        };

    }
} else {
    console.warn(`Not correct start data! [${maxNumber}] is not a positive integer!`)
};