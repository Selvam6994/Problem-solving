const arr1 = [1, 2, 3, 5, 8];
const arr2 = [12, 3, 8, 5];
const res = [];
if (arr1.length > arr2.length) {
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) {
      res.push(arr2[i]);
    }
  }
} else {
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      res.push(arr1[i]);
    }
  }
}
console.log(res);
