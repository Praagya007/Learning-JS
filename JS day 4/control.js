// FizzBuzz
function fizzBuzz(n) {
    if (n % 15 === 0) return "FizzBuzz";
    if (n % 3 === 0) return "Fizz";
    if (n % 5 === 0) return "Buzz";
    return n;
}

// Factorial
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
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
