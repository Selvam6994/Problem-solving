let arr = [1,2,3,4,5,6,7,8,9,10]
let sum 
for(let s =0, e = arr.length-1; s<e;s++,e--){
sum= arr[s]+arr[e]
arr[s]=sum-arr[s]
arr[e]=sum-arr[e]
}

console.log(arr)

