let isPrime = (n) => {
  for (let i = 2; i < n; i++) if (n % i == 0) return false;
  return true;
};

let countPrimeNumbers = () => {
  let primes = 0;
  for (let index = 2; index < 101; index++) {
    if (isPrime(index)) primes += 1;
  }
  return primes;
};

const start = performance.now();
for (let j = 0; j < 100; j++) {
  countPrimeNumbers();
}
const end = performance.now();
console.log(
  `Execution time of calculating prime numbers 100 times was ${
    end - start
  } milliseconds.`
);
