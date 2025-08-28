# Day 6 — Scope, Closures, IIFE & `this`

Today we learned three big concepts that give JavaScript its "magic powers":  
**lexical scope, closures, and `this` (with call/apply/bind).**

---

## 🧩 Lexical Scope
- Functions can **see variables from their parent functions**.
- Inner functions can "look outward" but not the other way around.

Example:
```js
function grandParent() {
    let house = "villa";
    function Parent() {
        let bike = "Yamaha";
        function child() {
            let country = "US";
            console.log(house);  // villa
            console.log(bike);   // Yamaha
            console.log(country); // US
        }
        child();
    }
    Parent();
}
grandParent();

## 🔒 Closures

A closure is when an inner function remembers variables from the outer function, even after the outer function has finished running.

Useful for private state.

### Example:

```javascript
function makeCounter() {
    let count = 0;
    return {
        inc: () => ++count,
        dec: () => --count,
        reset: () => (count = 0),
        getCount: () => count,
    };
}

let counter = makeCounter();
console.log(counter.inc()); // 1
console.log(counter.inc()); // 2
console.log(counter.dec()); // 1
console.log(counter.reset()); // 0

