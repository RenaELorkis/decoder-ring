// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

// The caesar() function in the src/caesar.js file has three parameters:

// input refers to the inputted text to be encoded or decoded.
// shift refers to how much each letter is "shifted" by. A positive number means shifting to the right (i.e. "A" becomes "D") whereas a negative number means shifting to the left (i.e. "M" becomes "K").
// encode refers to whether you should encode or decode the message. By default it is set to true.
// When building the function, keep the following constraints and rules in mind:

// If the shift value is not present, equal to 0, less than -25, or greater thaif n 25, the function should return false.
// Spaces should be maintained throughout, as should other non-alphabetic symbols.
// Capital letters can be ignored.
// If a letter is shifted so that it goes "off" the alphabet (e.g. a shift of 3 on the letter "z"), it should wrap around to the front of the alphabet (e.g. "z" becomes "c").
// Examples
// caesar("thinkful", 3); //> 'wklqnixo'
// caesar("thinkful", -3); //> 'qefkhcri'
// caesar("wklqnixo", 3, false); //> 'thinkful'

// caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'
// caesar("BPQA qa I amkzmb umaaiom!", 8, false); //> 'this is a secret message!'

// caesar("thinkful"); //> false
// caesar("thinkful", 99); //> false
// caesar("thinkful", -26); //> false

const caesarModule = (function () {
  // you can add any code you want within this function scope

  // If a letter is shifted so that it goes "off" the alphabet (e.g. a shift of 3 on the letter "z"), 
  // it should wrap around to the front of the alphabet (e.g. "z" becomes "c").
  const letterLimit = {
    beginning: "a".charCodeAt(),
    ending: "z".charCodeAt()
  }
  function caesar(input, shift, encode = true) {
    // your solution code here
    // caesar("thinkful"); //> false
    //if(!shift) return false; // If the shift value is not present, 

    // caesar("thinkful", 99); //> false
    // caesar("thinkful", -26); //> false
    if(!shift || shift < -25 || shift > 25) return false;// equal to 0, less than -25, or greater than 25, the function should return false.
    if(!encode) shift *= -1;
    
    input = input.toLowerCase(); // Capital letters can be ignored.
    // caesar("thinkful", 3); //> 'wklqnixo' 
    // 1. split input into single values
    // 2. reduce input into single elements to target shifted letterLimit
    return input.split("").reduce((acc, character) => {
      // looking to reduce characters unicode index value at the specified location.
      const code = character.charCodeAt(); // Returns the Unicode value of the character at the specified location.
      if(code < letterLimit.beginning || code > letterLimit.ending) return acc + character;

      let shifted = code + shift; // get the shifted value by adding code value with the shift value = shifted
      if(shifted > letterLimit.ending){
        shifted = letterLimit.beginning + (shifted - letterLimit.ending - 1)
      } else if(shifted < letterLimit.beginning){
        shifted = letterLimit.ending - (letterLimit.beginning - shifted  - 1)
      }
      return acc + String.fromCharCode(shifted) // method returns a string created from the specified sequence of UTF-16 code units
    }, "")
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
