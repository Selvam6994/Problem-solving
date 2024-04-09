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
  let flag = false;
  let val;
  for (let l = arr.length - 1; l >= 0; l--) {
    if (l === 0) {
      break;
    }
    if (arr[l] != arr[l - 1]) {
      flag = true;
      val = arr[l - 1];
      break;
    } else if (arr[l] === arr[l - 1]) {
      flag = false;
    }
  }
  if (flag == true) {
    return val;
  } else if (flag == false) {
    return "There is no second largest number";
  }
};

console.log(largestElement([9, 9, 2]));
