const fibonacciSeries = (num) => {
  const series = [];
  let fib1 = 0;
  let fib2 = 1;
  series.push(fib1, fib2);
  for (let i = 2; i <= num ; i++) {
    let fib3 = fib1 + fib2;
    series.push(fib3);
    fib1 = fib2;
    fib2 = fib3;
  }

  return series;
};

console.log(fibonacciSeries(10));
