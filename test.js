// higher order functions vs loops
// procedural loops:
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
let primes = [];
let flag = true;

for (number in array) {
	flag = true;
	if (number == 0 || number == 1) flag = false;
	else if (number > 1) {
		for (let i = 2; i <= number / 2; ++i) {
			if (number % i == 0) {
				flag = false;
				break;
			}
		}
	}
	if (flag == true) primes.push(number);
}

console.log(`All the numbers: ${array}`);
// output: 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17
console.log(`All the primes: ${primes}`);
// output: 2,3,5,7,11,13,17
