# Day 11 — Prototypes & Classes

---

## Prototype Chain
Objects can inherit from other objects using `Object.create`.  
If a property or method isn’t found, JS looks “up the chain” in the prototype.  

---

## Class Syntax
- `constructor` initializes properties when you create a new object.  
- **Instance methods** belong to objects made from the class.  
- **Static methods** belong to the class itself (not instances).  

---

## Inheritance with Classes
- `extends` allows one class to reuse methods from another.  
- You can **add new methods** or **override** existing ones.  

---

## When to Prefer Plain Objects + Functions
- **Classes** → best when you want inheritance, multiple instances, or static methods.  
- **Factory functions** → best for lightweight objects and easy private state (via closures).  

---

## Classes vs Factory Functions

| Aspect           | Class                     | Factory Function          |
|------------------|---------------------------|---------------------------|
| Syntax           | `new Timer()`             | `createTimer()`           |
| Inheritance      | Built-in (`extends`)      | Manual / harder           |
| Static methods   | Supported (`Timer.info`)  | Not natural               |
| Private state    | Needs `#` fields          | Easy with closures        |
| Best use case    | Complex, reusable systems | Simple, lightweight code  |

---

**Please access all the codes from today from [`prototypes.js`](./prototypes.js).**
