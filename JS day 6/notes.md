# Day 6 — Scope, Closures, IIFE & `this`

Today we learned three big concepts that give JavaScript its "magic powers":

**lexical scope, closures, and `this` (with call/apply/bind).**

---

## 🧩 Lexical Scope

- Functions can **see variables from their parent functions**.
- Inner functions can "look outward" but not the other way around.

### Example:
```javascript
function grandParent() {
    let house = "villa";

    function Parent() {
        let bike = "Yamaha";

        function child() {
            let country = "US";

            console.log(house); // villa
            console.log(bike);  // Yamaha
            console.log(country); // US
        }

        child();
    }

    Parent();
}

grandParent();
```

---

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
console.log(counter.inc());    // 1
console.log(counter.inc());    // 2
console.log(counter.dec());    // 1
console.log(counter.reset());  // 0
```
--- 
## ⚡ IIFE (Immediately Invoked Function Expression)

Sometimes we just want a function to run immediately and not pollute the global scope.
### Example:
```javascript
(function () {
    let name = "James";
    console.log(`Good Morning, ${name}.`);
})();
```
--- 
## 🧑‍🤝‍🧑 this Basics + call/apply/bind

- this usually refers to the object that calls the function.
- Sometimes we want to control what this is.

### call

- Calls immediately, pass arguments one by one.

```javascript
introduce.call(user1, "Kathmandu", "Nepal");
```

### apply

- Calls immediately, pass arguments as an array.
```javascript
introduce.apply(user2, ["Beijing", "China"]);
```

### bind

- Does not call immediately, returns a new function we can call later. Needs to be stored in a variable.
```javascript
let introLater = introduce.bind(user3, "Athens", "Greece");
introLater();
```