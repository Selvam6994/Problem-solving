// const checkPrime = (val) => {
//   if (val % 2 === 0) return false;
//   for (let i = 3; i < val; i++) {
//     if (val % i === 0) return false;
//   }
//   return true;
// };

// console.log(checkPrime(101));
// optimised
// const checkPrime = (val) => {
//   if (val % 2 === 0) return false;
//   for (let i = 3; i < val / 2; i++) {
//     if (val % i === 0) return false;
//   }
//   return true;
// };

// console.log(checkPrime(9));

// check array of elements prime or not
const array = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * 100)
);
const checkPrime = (array) => {
  const primeArray = [];
  const prime = (num) => {
    if (num % 2 === 0) return false;
    for (let i = 3; i < num / 2; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  for (let i = 0; i < array.length; i++) {
    let primeElement = prime(array[i]);
    if (primeElement) {
      primeArray[primeArray.length] = array[i];
    }
  }
  console.log(primeArray);
  console.log(primeArray.length);
};
checkPrime(array);
