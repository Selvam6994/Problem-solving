const arr = [5, 6, 7, 8, 9, 10];

let sum = 0;
for (let i = arr.length - 1; i >= 0; i--) {
  sum += arr[i];
  arr[i] = sum - arr[i];
}
console.log(arr);
