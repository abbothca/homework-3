"use strict";

console.log("______________ Task #3 ______________");

let string = "42559125";
let result = "";

let stringLength = string.length;

// Спростила, записала через тернарний оператор, але якщо в рядку буде символ - не цифра, він заміниться на 1 
for (let i = 0; i < stringLength; i++) {
    result = (string[i] < 5) ? `${result}0` : `${result}1`;
};
console.log("Маємо перед перетворення для коду із тернарним оператором: ", string);
console.log("Результат перетворення для коду із тернарним оператором:   ", result);

console.log("______________");
console.log("Результат для старого 'мого' коду (через prompt, будь-які символи):");
let stringSpare = prompt("Enter a string of numbers (for example 123467):");
let resultSpare = "";

if (stringSpare) {
    let stringSpareLength = stringSpare.length;
    for (let i = 0; i <= stringSpareLength - 1; i++) {
        let currentChar = stringSpare[i];
        if (isNaN(parseInt(currentChar))) {
            resultSpare = `${resultSpare}${currentChar}`;
        } else if (+currentChar < 5) {
            resultSpare = `${resultSpare}0`
        } else {
            resultSpare = `${resultSpare}1`;
        }
        // Старий код
        // if (+stringSpare[i] < 5) {
        //     resultSpare = `${resultSpare}0`
        // } else if (currentChar >= 5 ) {
        //     resultSpare = `${resultSpare}1`;
        // } else {
        //     resultSpare = `${resultSpare}${currentChar}`;
        // }
    };
    console.log("string: ", stringSpare);
    console.log("result: ", resultSpare);
} else console.warn(`${stringSpare} не валідне значення`);

