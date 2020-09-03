// function that returns array of sum of even and odd numbers.
const oddEvenSumArray = (array) => {
  // initiallize odd and even numbers total
  let totalOdd = 0;
  let totalEven = 0;
  // looping to find odd and even numbers from the array
  for (let i = 0; i < array.length; i++) {
    // check if number is odd and positive
    if (array[i] % 2 === 1 && array[i] >= 0) {
      //increment odd initiallizer
      totalOdd += array[i];
      //check if number is even and positive
    } else if (array[i] % 2 === 0 && array[i] >= 0) {
      // increment even initiallizer
      totalEven += array[i];
    }
  }
  // return array of total value of odd and even numbers
  return [totalEven, totalOdd];
};
