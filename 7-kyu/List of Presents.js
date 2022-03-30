// List of Presents

// Task:
// Leo's girlfriend asked him to buy a gift list during his next trip,
// now he wants to know how many of them will he be able to buy.
//
// Write a function to help Leo out. The first parameter of the function is Leo's budget;
// the second one is an array containing the price of each gift.
// You should return an integer representing the maximum amount of gifts Leo can buy.
//
// Example:
// Maximum budget: 20
// Gift List: [13, 2, 4, 6, 1]
// Should return 4.
//
// NOTE: All numbers will be integers >= 0, and the array will never be empty.

function howManyGifts(maxBudget, gifts){
    let giftsSorted = gifts.sort((a, b) => a - b);
    let num = 0;
    let budget = 0;
    for (let i = 0; i < giftsSorted.length; i++) {
        if (budget <= maxBudget && maxBudget-budget >= giftsSorted[i]) {
            budget += giftsSorted[i];
            num = num + 1;
        }
    }
    return num;
}

// function howManyGifts(maxBudget, gifts){
//     gifts.sort((a,b) => a-b)
//     return gifts.filter(item => (maxBudget -= item) >= 0).length
// }