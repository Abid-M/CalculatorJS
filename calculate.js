const prompt = require('prompt-sync')();
const c = require('ansi-colors');

const calculate = (num1, num2, str) => {
    if (isNaN(num1) || isNaN(num2)) {
        console.log(c.yellow("\nInvalid input: Please enter valid numbers"));
    }

    num1 = Number(num1)
    num2 = Number(num2)

    if (str === "+") {
        return num1 + num2;
    } else if (str === "-") {
        return num1 - num2
    } else if (str === "/") {
        return num1 / num2
    } else if (str === "*") {
        return num1 * num2
    } else {
        console.log(c.yellow("\nInvalid Operator: Please use '+', '-', '/', '*'"))
    }
}

module.exports = {
    calculate
}