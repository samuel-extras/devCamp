const primeNumbersArray = (array) => {
  // initializing an array with empty value to hold the prime number
  let primeArray = [];

  array.forEach((element) => {
    //initializing prime boolean to be true
    let isPrime = true;
    // this condition check if number is positive and also make 1 and 0 non-prime number
    if (element > 1) {
      //check if any number from 2 to the half of the number can divide it evenly
      //  for-loop initializer is 2 because prime number must be divisible by 1 and itself
      for (let i = 2; i <= Math.ceil(element / 2); i++) {
        if (element % i === 0) {
          isPrime = false;
        }
      }
    } else {
      // this make all negative integer, 1 and 0 false
      isPrime = false;
    }
    // this condition only push the element that is true to the primeArray
    if (isPrime) {
      primeArray.push(element);
    }
  });
  return primeArray;
};
