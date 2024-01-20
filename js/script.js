"use strict";

/* ---------------- Task 1 -------------------  */
console.log(" %c--------------- Task #1 ---------------", "color: violet;")
let isNumb = false;
let userTrays = 0;

do {
    let userNumber = 3.4;
    // let userNumber = prompt("Please, enter the number:");
    userTrays++;
    console.log(`You have entered a value "${userNumber}"`);

    if (!isNaN(userNumber) && userNumber !== "") {  // isNaN("") -> "0"
        console.log(`Even numbers from the interval ( 0; abs(${userNumber}) ):`);
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
        if (userTrays >= 3) {
            console.log(" %c Sorry! Game is over :-((( You didn't enter a number", "color: red;");
            break;
        }

        console.warn("Error! Please enter the number!");
    }
} while (!isNumb && userTrays < 4);

/* ---------------- Task 2 -------------------  */
console.log(" %c--------------- Task #2 ---------------", "color: violet;")

const maxNumber = 10;


if (!isNaN(maxNumber) && maxNumber > 0) {
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
}

/* ---------------- Task 3 -------------------  */
console.log(" %c--------------- Task #3 ---------------", "color: violet;")