const largestElement = (arr) => {
  for (let i = 1; i <= arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        let val = arr[i];
        arr[i] = arr[j];
        arr[j] = val;
      }
    }
  }
  return arr[arr.length-1];
};

console.log(largestElement([9,5,3,700,100,8,6,6]));
