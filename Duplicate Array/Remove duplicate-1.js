const removeDuplicteElement = (arr) => {
  const unique = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let count = 0;
    for (let j = 0; j < i; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count == 0) {
      unique[unique.length] = arr[i];
    }
  }
  return unique;
};

console.log(removeDuplicteElement([1, 3, 6, 7, 6, 5, 3]));
