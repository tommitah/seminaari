// higher order functions vs loops
// higher order functions:
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

const isPrime = n =>
	n <= 1
		? false
		: !Array.from(new Array(n), (el, i) => i + 1)
			.filter(x => x > 1 && x < n)
			.find(x => n % x === 0);

const primes = array.filter(isPrime);

console.log(`All the numbers: ${array}`);
// output: 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17
console.log(`All the primes: ${primes}`);
// output: 2,3,5,7,11,13,17
