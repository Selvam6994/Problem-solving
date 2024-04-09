const maxMin = (arr) => {
  arr.sort((a, b) => a - b);
  if (arr[0] === arr[arr.length - 1]) {
    return "There is no max and min elements";
  } else {
    return [arr[arr.length - 1], arr[0]];
  }
};

console.log(maxMin([3, 6, 2, 8, 7, 5, 4, 9, 90]));
