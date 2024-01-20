"use strict";

/* ---------------- Завдання 1 -------------------  */
let isNumb = false;
let userTrays = 0;

do {
    let userNumber = prompt("Please, enter the number:");
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
        if (userTrays >=3 ) {
            console.log(" %c Sorry! Game is over :-((( You didn't enter a number", "color: red;");
            break;
        }

        console.warn("Error! Please enter the number!");
    }
} while (!isNumb && userTrays < 4);
