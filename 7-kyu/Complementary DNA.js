// Complementary DNA

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells 
// and carries the "instructions" for the development and functioning of living organisms.

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
// You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. 
// DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// Example: (input --> output)
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// dnaStrand []        `shouldBe` []
// dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
// dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
// dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]

function DNAStrand(dna){
    let sequance = {
      'A': 'T',
      'T': 'A',
      'C': 'G',
      'G': 'C'
    }
    
    return dna.replace(/A|T|C|G/g, function(matched) {
      return sequance[matched];
    })
  }