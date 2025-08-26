// FizzBuzz
function fizzBuzz() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// Factorial
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Fibonacci
function fibonacci(n) {
  const seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq.slice(0, n);
}

// Palindrome
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

// ✅ Console Tests
console.log("=== FizzBuzz ===");
fizzBuzz();

console.log("\n=== Factorial ===");
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1

console.log("\n=== Fibonacci ===");
console.log(fibonacci(6)); // [0, 1, 1, 2, 3, 5]
console.log(fibonacci(1)); // [0]

console.log("\n=== Palindrome ===");
console.log(isPalindrome("level"));   // true
console.log(isPalindrome("chatgpt")); // false
