// The highest profit wins!

// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples
// minMax([1,2,3,4,5])   == [1,5]
// minMax([2334454,5])   == [5, 2334454]
// minMax([1])           == [1, 1]

function minMax(arr){
    arr.sort((a, b) => a-b);
    return [arr[0],arr[arr.length-1]];
}

// function minMax(arr){
//   return [Math.min(...arr), Math.max(...arr)];
// }