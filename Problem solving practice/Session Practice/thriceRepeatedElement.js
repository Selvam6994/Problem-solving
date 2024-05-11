const thriceRepeatedElement = (arr) => {
  const n = arr.length;
  const tempArr = Array(n).fill(0);
  let elementThrice = -1;
  for (let i = 0; i < n; i++) {
    tempArr[arr[i] - 1]++;
    if (tempArr[arr[i] - 1] === 3) {
      elementThrice = arr[i];
    }
  }
  console.log(elementThrice);
};

thriceRepeatedElement([5, 8, 8, 5, 6, 7, 5, 3, 4, 6]);
