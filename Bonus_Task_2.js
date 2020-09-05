const consonantReplacer = (string) => {
  let newString = ""; // declare a string to contain the new string after replacing with consonant
  const consonant = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]; // declare a constant that holds all consonants 
  const vowel = ["a", "e", "i", "o", "u"]; // declare a constant that holds all vowels

  for (let i = 0; i < string.length; i++) { // iterate the string to check for possible replacement.
    if (vowel.includes(string[i]) || string[i]=== " ") { // this check if the string index is a vowel or space
      newString += string[i]; // this concate the vowel or space with the value of newString at the moment
    } else { // this check otherwise
      for (let j = 0; j < consonant.length; j++) { // iterating through consonant
        if (string[i] === consonant[j]) { // checking if the string index is a consonant
          newString += consonant[j + 1]; // if the condition above is true this make string index the next consonant to it
        }
      }
    }
  }
  return newString; // returning the value of the new string 
};
