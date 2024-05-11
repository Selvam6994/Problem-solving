const arr1 = [1, 2, 3, 5, 8, 4, 6, 7];
const arr2 = [12, 3, 8, 5, 9, 1];
const res = [];

for (let i = 0; i < arr2.length; i++) {
  for (let j = 0; j < arr1.length; j++) {
    if (arr2[i] === arr1[j]) {
      res[res.length] = arr2[i];
    }
  }
}

console.log(res);
