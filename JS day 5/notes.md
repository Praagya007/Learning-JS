# Day 5 — Functions Fundamentals

## What I Learned Today

### 1. Functions Basics
- Functions are like recipes: you give inputs (parameters), the function processes them, and returns an output.
- Three main ways to write functions:
  - **Function Declaration**
    ```js
    function greet(name) {
        return `Hello, ${name}!`;
    }
    ```
  - **Function Expression**
    ```js
    const greet = function(name) {
        return `Hello, ${name}!`;
    };
    ```
  - **Arrow Function**
    ```js
    const greet = (name) => `Hello, ${name}!`;
    ```
- Function declarations are hoisted (can be called before they’re defined), while expressions and arrow functions are not.

---

### 2. Parameters
- **Default Parameters** allow us to provide a fallback when a parameter is not passed.
  ```js
  function multiply(a, b = 1) {
      return a * b;
  }
  console.log(multiply(5)); // 5
  console.log(multiply(5, 3)); // 15
Rest Parameters collect multiple arguments into an array-like object.

js
Copy
Edit
function sum(...nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        total += Number(nums[i]);
    }
    return total;
}
console.log(sum(1, 2, 3, "4")); // 10
Return vs Log

return gives back a value that can be reused.

console.log only prints to the console, no value is returned.

3. Pure vs Impure Functions
Pure Functions

Output depends only on input.

No side effects (don’t change anything outside the function).

Always predictable.

js
Copy
Edit
function add(a, b) {
    return a + b;
}
function square(n) {
    return n * n;
}
Impure Functions

Depend on or modify things outside the function.

Cause side effects.

js
Copy
Edit
let counter = 0;
function increment() {
    counter++; // modifies external state
    return counter;
}

const numbers = [1, 2, 3];
function addNumber(num) {
    numbers.push(num); // modifies external array
    return numbers;
}
Why it matters

Pure functions are easy to test and reuse.

Impure functions are sometimes necessary (like logging, updating UI, saving data).

4. Coding Tasks
Sum
js
Copy
Edit
function sum(...nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        total += Number(nums[i]);
    }
    return total;
}
console.log(sum(1, 2, 3, "4")); // 10
Average
js
Copy
Edit
function average(...nums) {
    if (nums.length === 0) return 0;
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    return parseFloat((total / nums.length).toFixed(2));
}
console.log(average(24, 77, 42)); // 47.67
Unique (Remove Duplicates)
js
Copy
Edit
function removeDuplicates(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let exists = false;
        for (let j = 0; j < result.length; j++) {
            if (arr[i] === result[j]) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            result.push(arr[i]);
        }
    }
    return result;
}
let fruits = ["Apple", "Banana", "Cherry", "Kiwi", "Apple", "Grapes"];
console.log(removeDuplicates(fruits)); // ["Apple","Banana","Cherry","Kiwi","Grapes"]
Compose (Function Composition)
js
Copy
Edit
const double = n => n * 2;
const square = n => n * n;

const doubleThenSquare = x => square(double(x));
console.log(doubleThenSquare(4)); // 64