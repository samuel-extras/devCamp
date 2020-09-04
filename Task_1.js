// function that returns array of sum of even and odd numbers.
const oddEvenSumArray = (array) => {
  //  odd and even numbers total variable initialization
  let totalOdd = 0;
  let totalEven = 0;
  // iterate array to find odd and even numbers from the array
  for (let i = 0; i < array.length; i++) {
       if (array[i] % 2 === 1 && array[i] >= 0) {  // check if number is odd and positive
            totalOdd += array[i]; //increment odd initializer
          } else if (array[i] % 2 === 0 && array[i] >= 0) { //check if number is even and positive
      
      totalEven += array[i]; // increment even initiallizer
    }
  }
  // return array of total value of odd and even numbers
  return [totalEven, totalOdd];
};
