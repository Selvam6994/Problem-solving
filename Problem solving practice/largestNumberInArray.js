const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

const sortArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] > arr[i + 1]) {
     let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  return arr;
};

console.log(sortArray(arr));
