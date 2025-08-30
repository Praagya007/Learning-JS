# Day 9 — Array Methods Power-Ups

This exercise focuses on mastering JavaScript array methods, immutability, and common data transformations.

## Topics Covered
1. **map** — Transform arrays (numbers, strings, objects).
2. **filter** — Keep only elements that match a condition.
3. **reduce** — Collapse an array into a single value (sum, product, objects, grouping).
4. **find** — Retrieve the first matching element.
5. **some / every** — Boolean checks for arrays.
6. **sort** — Ordering arrays (with comparator, immutably using `[...array]`).
7. **groupBy** — Group objects by a property using reduce.

## Key Concepts
- **Immutability:** Methods like `map`, `filter`, `reduce`, `find`, `some`, `every` do not mutate the source array. `sort` **does mutate**, so we copy the array using `[...array]` before sorting.
- **Accumulators:** `reduce` builds up a value step by step. The initial value is important (e.g., `0` for sum, `1` for product, `{}` for objects).
- **Comparator functions:** Used in `sort` to determine order (`a-b` for numbers, `localeCompare` for strings).

## Exercises Done
- Compute **active users**.
- Compute **average age**.
- Produce **names sorted by last name**.
- Reduce exercises: **sum**, **product**, **groupBy**.
- `groupBy` function demonstrated working for `role`.
- For exercises, please refer to the [array-advanced.js](./array-advanced.js) file.


