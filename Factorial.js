const fact = (num) => {
  if (num == 0) {
    return 1;
  } else {
    let mul = 1;
    for (let i = 1; i <= num; i++) {
      mul = i * mul;
    }
    return mul;
  }
};

console.log(fact(5));
