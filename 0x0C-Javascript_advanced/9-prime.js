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
const numberofPrimeNumbers = countPrimeNumbers();
const end = performance.now();
console.log(
  `Execution time of printing countPrimeNumbers was ${
    end - start
  } milliseconds.`
);
