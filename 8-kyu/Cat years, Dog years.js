// Cat years, Dog years

// I have a cat and a dog.
// I got them at the same time as kitten/puppy. That was humanYears years ago.
// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that

// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

var humanYearsCatYearsDogYears = function(humanYears) {
    let arr;

    if (humanYears === 1) {
        return arr = [1, 15, 15]
    };
    if (humanYears === 2)  {
        return arr = [2, 24, 24]
    };
    if (humanYears >= 3) {
        let dog = 24;
        let cat = 24;
        for (let i = 3; i <= humanYears; i++) {
            dog += 5;
            cat += 4;
        }
        arr = [humanYears, cat, dog]
    }
    return arr;
}

//var humanYearsCatYearsDogYears = function(y) {
//   if (y == 1) return [1, 15, 15]
//   if (y == 2) return [2, 24, 24]
//   return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]