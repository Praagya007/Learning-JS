# 📅 JavaScript — Day 2: Basics Deep Dive

A structured recap of core JavaScript concepts: primitives, the `typeof` operator, operators, and string methods — with hands-on practice.

---

## ✅ Topics Covered

---

### 1. Primitives vs Objects

#### 🔹 Primitives

- Types: `number`, `string`, `boolean`, `null`, `undefined`, `bigint`, `symbol`
- Immutable
- Copied by value
- Stored in **stack memory**
- `typeof` returns basic type  
  ⚠️ **Quirk**: `typeof null === "object"`

#### 🔹 Objects

- Types: arrays, functions, plain objects
- Mutable
- Copied by reference
- Stored in **heap memory**
- `typeof` returns `"object"` or `"function"`

---

### 2. `typeof` Operator

Tested `typeof` on:

```js
typeof 42            // "number"
typeof "hello"       // "string"
typeof true          // "boolean"
typeof undefined     // "undefined"
typeof null          // "object"   <-- Quirk!
typeof []            // "object"
typeof {}            // "object"
typeof function(){}  // "function"
typeof Symbol()      // "symbol"
typeof 10n           // "bigint"
```

---

### 3. Operators

#### 🔹 Arithmetic

```js
+ , - , * , / , % , **
```

#### 🔹 Comparison

```js
== , === , != , !== , > , < , >= , <=
```

- `==` does type coercion  
- `===` checks value **and** type

#### 🔹 Logical

```js
&& , || , !
```

- Operator precedence matters: `!` > `&&` > `||`

---

### 4. String Methods

Common methods practiced:

```js
"hello".toUpperCase();       // "HELLO"
"HELLO".toLowerCase();       // "hello"
"test".includes("es");       // true
"javascript".slice(0, 4);    // "java"
"hi there".split(" ");       // ["hi", "there"]
["a", "b"].join("-");        // "a-b"
"openai".length;             // 6
```

---

### 5. Practice Code Written

#### ✅ Reverse a string

```js
let str = "hello";
let reversed = str.split("").reverse().join(""); // "olleh"
```

#### ✅ Count vowels

```js
let count = 0;
for (let char of "hello") {
  if ("aeiou".includes(char)) count++;
}
```

#### ✅ Sum array elements

```js
let sum = 0;
let arr = [1, 2, 3];
for (let num of arr) sum += num;
```

#### ✅ `typeof` and logic testing

```js
typeof null;        // "object"
true && false;      // false
!true || true;      // true
```

---
