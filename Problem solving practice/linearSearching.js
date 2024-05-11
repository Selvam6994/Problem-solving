const search=(arr,searchValue)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]===searchValue)
            return i
    }
    return -1
}

console.log(search([1,2,3,4,5,6,5,8,9],5))