// Fibonacci Rabbits

/*
In his publication Liber Abaci Leonardo Bonacci, aka Fibonacci, posed a problem involving a population
of idealized rabbits. These rabbits bred at a fixed rate, matured over the course of one month,
had unlimited resources, and were immortal.

Beginning with one immature pair of these idealized rabbits that produce b pairs of offspring at the end of each month.
Create a function that determines the number of pair of mature rabbits after n months.

To illustrate the problem, consider the following example:
fib_rabbits(5, 3) returns 19

Month	Immature Pairs	Adult Pairs
0	           1	        0
1	           0	        1
2	           3	        1
3	           3	        4
4	           12	        7
5	           21	        19
*/

function fib_rabbits(n, b) {
    let adults = 0;
    let children = 1;
    let existingAdults = 0;

    for (let i = 1; i <= n; i++) {
        adults += children
        children = (existingAdults * b)
        existingAdults = adults
    }
    return (existingAdults)
}

// function fib_rabbits(n, b) {
//     let [mature, immature] = [0, 1];
//     for (let i = 0; i < n; i++) {
//         [mature, immature] = [immature + mature, mature * b];
//     }
//     return mature;
// }