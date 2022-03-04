//Sort the odd


//Task

// You will be given an array of numbers. 
//You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(array) {
    let oddArr = [];
    let evenArr = [];
    let resultArr = [];
    for (let i = 0; i < array.length; i++) {
      array[i]%2 === 0 ? evenArr.push(array[i]) : oddArr.push(array[i])
    }
    
    oddArr.sort((a, b) => a-b)
    
    for (let i = 0; i < array.length; i++) {
      array[i]%2 === 0 ? resultArr.push(evenArr.shift()) : resultArr.push(oddArr.shift())
    }
    return resultArr
  }