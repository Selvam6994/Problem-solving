const arr = [2, 8, 4, 6, 2, 3, 4, 8, 7, 9, 2, 5, 9, 4];

const unique = [];
const obj = {};

for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]] === undefined) {
    unique[unique.length] = arr[i];
  }
  obj[arr[i]] = 1;
}
console.log(unique);
