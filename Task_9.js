const palindrome = (string) => {
    let newString = ""; // declare a variable with empty string value to hold string reverse value
    for (let i = string.length - 1; i >= 0; i--) { // decrementing loop that returns string from the highest index value to 0 index value
        newString += string[i]; // concate the string index to the new string value above
    }
    return newString === string ? "Yes": "No" // this check if the string is the same as the reverse or not and return the "Yes" and "No" respectively
};
