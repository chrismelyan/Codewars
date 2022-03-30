// Dot Calculator

// You have to write a calculator that receives strings for input.
// The dots will represent the number in the equation.
// There will be dots on one side, an operator, and dots again after the operator.
// The dots and the operator will be separated by one space.

// Here are the following valid operators :
//
//     + Addition
//     - Subtraction
//     * Multiplication
//     // Integer Division
//
// Examples (Input => Output)
// * "..... + ..............." => "...................."
// * "..... - ..."             => ".."
// * "..... - ."               => "...."
// * "..... * ..."             => "..............."
// * "..... * .."              => ".........."
// * "..... // .."             => ".."
// * "..... // ."              => "....."
// * ". // .."                 => ""
// * ".. - .."                 => ""

function dotCalculator (equation) {
    let num = 0;
    let arr = equation.replace(/\s/g, '').split('');
    const findOperator = (operator) => {
        return operator === '+'|| operator === '-'|| operator === '*'|| operator === '/';
    }
    let operator = arr.findIndex(findOperator);

    const leftPart = arr.slice(0, operator);
    const rightPart = arr.slice(operator +1);

    if (arr[operator] === '+') {
        num = leftPart.length+rightPart.length;
    } else if (arr[operator] === '-') {
        num = leftPart.length-rightPart.length;
    } else if (arr[operator] === '*') {
        num = leftPart.length*rightPart.length;
    } else if (arr[operator] === '/') {
        if(leftPart.length < rightPart.length-1) {
            num = 0;
        } else {
            num = leftPart.length/(rightPart.length-1);
        }
    }
    return num === 0 ? '' : '.'.repeat(num);
}

// const dotCalculator = (equation) => {
//     const operations = {
//         '+' : (a, b) => a + b,
//         '-' : (a, b) => a - b,
//         '*' : (a, b) => a * b,
//         '//': (a, b) => a / b,
//     };
//     const [left, operator, right] = equation.split(' ');
//     return '.'.repeat(operations[operator](left.length, right.length));
// }