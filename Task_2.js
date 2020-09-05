const primeNumber = (number) => {
  //initializing isPrime boolean to be true
  let isPrime = true;
  if (number > 1) {
    // this condition check if number is positive and also make 1 and 0 non-prime number
    //check if any number from 2 to the half of the number can divide it evenly for-loop initializer is 2 because prime number must be divisible by 1 and itself
    for (let i = 2; i <= Math.ceil(number / 2); i++) {
      if (number % i === 0) {
        isPrime = false;
      }
    }
  } else {
    // this make all negative integer, 1 and 0 false
    isPrime = false;
  }
  return isPrime;
};
