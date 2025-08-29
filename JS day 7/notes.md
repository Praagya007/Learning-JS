# Day 08 — Arrays Basics

## 📌 Overview

This day focused on learning the fundamentals of working with arrays in JavaScript.

### Covered Topics:
- Creating, reading, and updating arrays.
- Common array operations: `push`, `pop`, `shift`, `unshift`.
- Differences between `slice` vs `splice`.
- Iterating with `for`, `for...of`, and `Array.from`.

To practice, a few small utility functions were implemented.

## 🛠️ Implemented Functions

### `min(arr)`
Returns the minimum value in an array.
```js
min([3, 1, 4]); // 1
```
### `max(arr)`
Returns the maximum value in an array.
```js
max([3, 1, 4]); // 4
```
### `chunk(array, size)`
Splits an array into subarrays of a given size.
```js
chunk([1, 2, 3, 4, 5], 2); // [[1,2],[3,4],[5]]
```
### `flattenOneLevel(arr)`
Flattens an array by one level (shallow flatten).
```js
flattenOneLevel([1, [2, 3], [4], 5]); // [1, 2, 3, 4, 5]
```
## ✅ Tests & Output

```bash
> node arrays-basic.js
1
4
[ [1,2], [3,4], [5] ]
[ 1, 2, 3, 4, 5 ]
```


