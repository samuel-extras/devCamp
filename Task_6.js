const addUpToNumber = (array, number) => {
  let result = -1; // initializing our result to be -1
  let element1 = 0; // declare a variable to hold all our first picked value and set it initial value to 0
  let element2 = 0; // declare a variable to hold all our second picked value and set it initial value to 0
  // iterate the array to pick the first two value
  for (let i = 0; i < array.length; i++) {
    element1 = array[i]; // set the first value to the index
    element2 = array[i + 1]; // set the second value to the next index to it
    // iterate the array again starting from the third element
    for (let j = i + 2; j < array.length; j++) {
      if (element1 + element2 + array[j] === number) {
        // check if the sum of element1, element2 and the current value of the index of this loop is equal to number
        result = [element1, element2, array[j]]; // if condition is true then make result equal to array of element1, element2 and the current value of the index of this loop
      }
    }
  }
  return result; // returning the value of result
};
