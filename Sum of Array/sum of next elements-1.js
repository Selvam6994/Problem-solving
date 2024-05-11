const arr = [5, 6, 7, 8, 9, 10]
let sum = arr.reduce((a,b)=>a+b)
for (let i = 0; i < arr.length; i++) {
    sum = arr[i] = sum - arr[i]
}
console.log(arr)