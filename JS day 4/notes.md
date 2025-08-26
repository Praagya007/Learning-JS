# 📅 Day 04 — Control Flow & Loops

## ✅ Topics Covered

### 1. Conditional Statements
- **if / else** → Standard branching.
- **switch** → Cleaner when checking against multiple fixed values.
- **ternary** → Compact syntax for simple conditionals.

### 2. Loops
- **for** → Use when index is needed.
- **while** → Run until condition is false.
- **for...of** → Cleaner iteration over arrays/strings.
- **for...in** → Iterate object keys (⚠️ not recommended for arrays).
- **break** → Exits loop completely.
- **continue** → Skips to next iteration.

---

## 🧑‍💻 Practice Implementations

### FizzBuzz
```js
for (let i = 1; i <= 20; i++) {
  if (i % 15 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}
Factorial
js
Copy
Edit
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
Fibonacci
js
Copy
Edit
function fibonacci(n) {
  const seq = [0];
  if (n > 1) seq.push(1);
  for (let i = 2; i < n; i++) {
    seq.push(seq[i-1] + seq[i-2]);
  }
  return seq;
}
Palindrome Check
js
Copy
Edit
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}
✅ Console Tests
Factorial
js
Copy
Edit
factorial(5) // 120
factorial(0) // 1
Fibonacci
js
Copy
Edit
fibonacci(6) // [0, 1, 1, 2, 3, 5]
fibonacci(1) // [0]
Palindrome Check
js
Copy
Edit
isPalindrome("level")   // true
isPalindrome("chatgpt") // false
📝 Key Takeaways
if/else → Flexible for multiple conditions.

switch → Better readability when checking fixed values.

ternary → Compact for one-liners.

Loops:

Use for when index is needed.

Use for...of for cleaner array iteration.

Use for...in only for objects.

Keywords:

break stops the loop entirely.

continue skips current iteration, continues to next.

<details> <summary>💡 Pro Tips</summary>
Always prefer === instead of == inside conditions.

Avoid using for...in on arrays → it iterates over keys, not values.

Use for...of for cleaner, more modern code when working with arrays/strings.

Factorial can be written recursively, but iterative is more memory-friendly.

</details> ```