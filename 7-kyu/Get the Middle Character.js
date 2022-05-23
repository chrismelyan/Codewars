// Get the Middle Character

/*
You are going to be given a word. Your job is to return the middle character of the word.
If the word's length is odd, return the middle character.
If the word's length is even, return the middle 2 characters.

Examples:
Kata.getMiddle("test") should return "es"
Kata.getMiddle("testing") should return "t"*/

function getMiddle(s) {
    let index = s.length/2 - 1
    if (s.length%2 === 0) {
        return s.slice(index, index+2)
    } else {
        return s.slice(Math.ceil(index), Math.ceil(index+1))
    }
}
