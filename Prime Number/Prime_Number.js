// A prime number is a whole number greater than 1 that cannot be formed by multiplying two smaller natural numbers.

const prime = (num) => {
  if (num == 2) return "Prime Number";
  if (num % 2 == 0) return "Not a prime number";
  for (let i = 3; i * i <= num; i = i + 2) {
    if (num % i == 0) return "Not a prime number";
  }
  return "Prime Number";
};

console.log(prime(7));
