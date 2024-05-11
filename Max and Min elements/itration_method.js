const maxMin = (arr) => {
    for (let i = 1; i <= arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let x = arr[i];
                arr[i] = arr[j];
                arr[j] = x;
            }
        }
    }

    if (arr[0] === arr[arr.length - 1]) {
        return "There is no max and min elements";
    } else {
        return [arr[arr.length - 1], arr[0]];
    }
};

console.log(maxMin([3, 6, 2, 8, 7, 5, 4, 9, 90]));



