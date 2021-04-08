// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (() => {
  // you can add any code you want within this function scope
  // console.log(abc)
  const abc = "abcdefghijklmnopqrstuvwxyz";

  function otherCharacters(input) {
    const foo = input.split("").reduce((acc, char) => {
      acc[char] = true;
      return acc;
    }, {});

    return Object.keys(foo).length === input.length;
  }

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet || alphabet.length !== 26) return false;
    if (!otherCharacters(alphabet)) return false;
    const [main, secondary] = encode ? [abc, alphabet] : [alphabet, abc]
    const key = main.split("").reduce((acc, letter, index) => {
      acc[letter] = secondary[index]
      return acc;
    },
    { " ": " " }
    );
    return input.toLowerCase().split("").map(letter => key[letter]).join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };