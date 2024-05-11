const arr = [1,2,3,4,5]
let k = 13

k=k%arr.length
for(let i=0;i<k;i++){
arr.unshift(arr.pop())
}

console.log(arr)