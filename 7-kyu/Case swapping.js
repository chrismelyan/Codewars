//Case swapping

// Given a string, swap the case for each of the letters.
//
// e.g. CodEwArs --> cODeWaRS

function swap(str){
    let arr = str.split('');
    let a = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i].toLowerCase()) {
            a.push(arr[i].toUpperCase());
        } else if (arr[i] === arr[i].toUpperCase()) {
            a.push(arr[i].toLowerCase());
        } else {
            a.push(arr[i]);
        }
    }
    return a.join('');
}

// Второй вариант
function swapCase(x) { return x == x.toLowerCase() ? x.toUpperCase() : x.toLowerCase() }

function swap(str) { return str.split("").map(swapCase).join("") }