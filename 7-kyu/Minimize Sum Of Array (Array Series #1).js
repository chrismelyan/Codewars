// Minimize Sum Of Array (Array Series #1)

/*
Given an array of integers.
Find the minimum sum which is obtained from summing each Two integers product.

Notes
Array/list will contain positives only.
Array/list will always have even size*/

function minSum(arr) {
    let n = arr.sort((a, b) => a-b);
    let sum = 0;
    for (let i = 0; i < arr.length/2; i++) {
        sum += (n[i] * n[n.length-1-i])
    }
    return sum
}

function minSum(arr) {
    return arr.sort( (a,b) => a-b )
        .slice(0, arr.length/2)
        .reduce( (acc,curr,index) => acc += curr * arr[ arr.length - index - 1 ], 0 )
}