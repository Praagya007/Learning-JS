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
console.log(multiply(5));    // 5
console.log(multiply(5, 3)); // 15
```

---

### 3. Rest Parameters

Rest Parameters collect multiple arguments into an array-like object.

```js
function sum(...nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        total += Number(nums[i]);
    }
    return total;
}
console.log(sum(1, 2, 3, "4")); // 10
```

---

### 4. Return vs Log

- `return` gives back a value that can be reused.
- `console.log` only prints to the console; no value is returned.

---

### 5. Pure vs Impure Functions

#### Pure Functions

- Output depends only on input.
- No side effects (don’t change anything outside the function).
- Always predictable.

```js
function add(a, b) {
    return a + b;
}

function square(n) {
    return n * n;
}
```

#### Impure Functions

- Depend on or modify things outside the function.
- Cause side effects.

```js
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
```

#### Why it matters

- Pure functions are easy to test and reuse.
- Impure functions are sometimes necessary (like logging, updating UI, saving data).

---

### 6. Coding Tasks
- Refer to the source code file.
