const fibonacci = (num) => {
  if (num == 0) {
    return 0;
  }

  let a1 = 0;
  let a2 = 1;
  let a3;
  for (let i = 2; i <= num; i++) {
    a3 = a1 + a2;
    a1 = a2;
    a2 = a3;
  }
  return a3;
};

console.log(fibonacci(9));
