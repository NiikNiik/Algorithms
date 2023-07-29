// Recursive Sigma
// Write a recursive function that given a number returns the sum of integers from 1 to that number.
// Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.

function rSigma(num) {
    if(num > 0) {
        return rSigma(num-1) + num;
    }
    return 0
}

//console.log(rSigma(5))

// Recursive Factorial
// Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. If not an integer, truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).
function rFact(num) {
    if(num > 1) {
        console.log(rFact(num-1) * num)
    }
    return 1
}

//console.log(rFact(3))

function fib(n) {
    if (n === 1 || n === 0)
        return n

    return fib(n - 1) + fib(n - 2)
}
//console.log('fib:', fib(9))		// [Log]: fib: 34

function tribFib(n){
    //mimic Fibonacci, but instead add previous three values instead of two.
    if (n === 0 || n === 1 || n === 1){
        return n
    }
        
    return tribFib(n - 1) + tribFib(n - 2) + tribFib(n - 3)
}

console.log(tribFib(3))

function recursiveFibonacci(n){
	// base case
	if(n === 0) return 0
  	if(n === 1) return 1
  
  	// recursioin base
  	return recursiveFibonacci(n - 2) + recursiveFibonacci(n - 1);
}
//recursiveFibonacci(6) // should return 8

function ackermann(m, n) {
    if (m === 0) {
      return n + 1;
    } else if (m > 0 && n === 0) {
      return ackermann(m - 1, 1);
    } else if (m > 0 && n > 0) {
      return ackermann(m - 1, ackermann(m, n - 1));
    }
  }

function zibonacciSequence(n) {
let zibArray = [1, 2];

for (let i = 2; i < n; i++) {
    zibArray[i] = zibArray[i - 1] + 2 * zibArray[i - 2];
}

return zibArray;
}

function recBinarySearch(arr, num){
    
}