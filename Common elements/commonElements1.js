const arr1 = [2,3,5,1,8,6,4,7]
const arr2 = [2,10,2,1,8,9,4,7]
const common=[]
for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
        if(arr1[i]==arr2[j]){
           common[common.length] =arr1[i]
        }
    }
}
console.log(common);