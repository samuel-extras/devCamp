const findStandardDeviation = (array) => {
  // sum up numbers in the array using reduce method
  let arraySum = array.reduce((a, b) => a + b, 0);
  let size = array.length;
  // find the mean of the array
  let mean = arraySum / size;
  // initialize an empty array for the square of the differences between each number of the array and mean
  let meanDis = [];
  //looping through the array to calculate the square of the difference btw each number of the array and the mean
  for (let i = 0; i < size; i++) {
    // populate the meanDis array with the result
    meanDis.push(Math.pow(array[i] - mean, 2));
  }
  // find the square root of the sum of meanDis array divided by the total number of the data point i.e size
  return Math.sqrt(meanDis.reduce((a, b) => a + b, 0) / size);
};
console.log(findStandardDeviation([1, 2, 3, 6]));
