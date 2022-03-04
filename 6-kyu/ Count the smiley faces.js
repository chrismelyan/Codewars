// Count the smiley faces!

// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.


// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]


// Note

// In case of an empty array return 0.
//  You will not be tested with invalid input (input will always be an array). 
//  Order of the face (eyes, nose, mouth) elements will always be the same.

function countSmileys(arr) {
    let inc = 0;
    const RegexObj = /[;:][~-]?[)D]/
    for (face of arr) {
      if (RegexObj.test(face)) {
        inc++
      }
    }
    return inc;
  }
  //arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;