# Day 6 — Scope, Closures & `this`

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
