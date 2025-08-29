# 📘 Day 08 — Arrays Basics

## ✅ Concepts Learned

> #### 1. Creating, Reading & Updating Arrays
>
> - Arrays store ordered collections of values.
> - Example:
> 
> ```js
> let numbers = [1, 2, 3];
> console.log(numbers[0]); // 1
> numbers[1] = 42; // update
> ```

> #### 2. Adding & Removing Elements
> 
> - `push()` → add at the end  
> - `pop()` → remove last  
> - `shift()` → remove first  
> - `unshift()` → add at the start  
> 
> ```js
> let arr = [1, 2, 3];
> arr.push(4);    // [1, 2, 3, 4]
> arr.pop();      // [1, 2, 3]
> arr.shift();    // [2, 3]
> arr.unshift(0); // [0, 2, 3]
> ```

> ---
> 
> #### 3. Slice vs Splice
> 
> - `slice(start, end)` → returns a shallow copy (does not change original).
> - `splice(start, deleteCount, ...items)` → modifies the original array.
> 
> ```js
> let arr = [1, 2, 3, 4];
> console.log(arr.slice(1, 3)); // [2, 3]
> arr.splice(1, 2, 99); 
> console.log(arr); // [1, 99, 4]
> ```

> ---
> 
> #### 4. Iteration
> 
> - `for` loop  
> - `for...of` loop  
> - `Array.from()` → useful to convert array-like objects
> 
> ```js
> let arr = [10, 20, 30];
> 
> // for loop
> for (let i = 0; i < arr.length; i++) {
>   console.log(arr[i]);
> }
> 
> // for...of
> for (let val of arr) {
>   console.log(val);
> }
> 
> // Array.from
> let str = "hello";
> console.log(Array.from(str)); // ['h','e','l','l','o']
> ```
---
### 🛠️ Functions Implemented
- Refer to [array-basics.js](./array-basics.js) for the implementation.
