// Number-Star ladder

//Task
// Using n as a parameter in the function pattern, where n>0, complete the codes to get the pattern (take the help of examples):
//
// Note: There is no newline in the end (after the pattern ends)
//
// Examples
// pattern(3) should return "1\n1*2\n1**3", e.g. the following:
//
// 1
// 1*2
// 1**3

function pattern(n){
    let output = 1;
    let star = "*";

    for (let i = 1; i < n; i++) {
        output += '\n' + 1 + star + (i+1)
        star += '*'
    }
    return output;
}

