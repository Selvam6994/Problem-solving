const repeatingAndMissing = (arr) => {
  const n = arr.length;
  const temp = Array(n).fill(0);
  let repeating = -1;
  let missing = -1;

  for (let i = 0; i < n; i++) {
    temp[arr[i] - 1]++;
    if (temp[arr[i] - 1] > 1) {
      repeating = arr[i];
    }
  }
  for (let i = 0; i < n; i++) {
    if (temp[i] === 0) {
      missing = i + 1;
      break;
    }
  }
  console.log(repeating);
  console.log(missing);
};

repeatingAndMissing([1, 3, 3, 4, 5]);
