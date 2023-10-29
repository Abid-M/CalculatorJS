const { calculate } = require('./calculate')
const prompt = require('prompt-sync')();
const c = require('ansi-colors');

console.log(c.cyan.bold.underline("\nPerform Calculations!"))

let exit = false;

while (!exit) {
    let num1 = prompt("Enter a number: ")
    let num2 = prompt("Enter another number: ")
    let operatorInput = prompt("Enter an operator, '+', '-', '/', '*': ");

    let result = calculate(num1, num2, operatorInput)

    try {
        if (result > 0) {
            console.log(c.red(`\nAnswer: ${result}`))
        } else if (result < 0) {
            console.log(c.green(`\nAnswer: ${result}`))
        } else if (result == 0) {
            console.log(c.yellow(`\nAnswer: ${result}`))
        }
    } catch (error) {
        console.log(c.yellow("An error occured: " + error.message))
    }

    let again = prompt("Another calculation? (y/n): ")
    if (again !== "y") {
        exit = true;
    }
}

console.log(c.blue("\nThanks for using this calculator!"))