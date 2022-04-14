// The Supermarket Queue

// There is a queue for the self-checkout tills at the supermarket.
// Your task is write a function to calculate the total time required for all the customers to check out!
//
// input
// customers: an array of positive integers representing the queue. Each integer represents a customer,
// and its value is the amount of time they require check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

// Clarifications
// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list)
// proceeds to a till as soon as it becomes free.
// N.B. You should assume that all the test input will be valid, as specified above.

function queueTime(customers, n) {
    let arr = new Array(n).fill(0);

    for (let i=0; i< customers.length; i++) {
        let fastest = arr.indexOf(Math.min(...arr))
        arr[fastest] += customers[i]
    }

    return Math.max(...arr);
}