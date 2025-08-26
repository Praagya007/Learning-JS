# 📅 JavaScript — Day 3: Variables, Hoisting & Coercion

A collection of notes and code snippets covering Day 3 concepts in JavaScript learning.

---

<details>
<summary>🔹 Variables: <code>var</code>, <code>let</code>, <code>const</code></summary>

<br>

| Keyword | Scope    | Hoisted | TDZ (Temporal Dead Zone) | Reassignable | Redeclarable |
|---------|----------|---------|---------------------------|--------------|--------------|
| `var`   | Function | Yes     | ❌ No TDZ                 | ✅ Yes       | ✅ Yes       |
| `let`   | Block    | Yes     | ✅ Yes                    | ✅ Yes       | ❌ No        |
| `const` | Block    | Yes     | ✅ Yes                    | ❌ No        | ❌ No        |

- `var` is hoisted and initialized with `undefined`.
- `let` and `const` are hoisted but not initialized → accessing them before declaration causes a **ReferenceError**.
- `const` must be declared and initialized at the same time.

</details>

---

<details>
<summary>🔹 Temporal Dead Zone (TDZ)</summary>

<br>

> The period between entering the scope and declaring the variable with `let` or `const`.

- JavaScript knows the variable exists, but it’s “off-limits” until the line where it's declared is executed.
- Trying to access it early throws a **ReferenceError**.

</details>

---

<details>
<summary>🔹 Hoisting</summary>

<br>

✅ **Function Declarations**

```js
sayHello(); // "Hello!"

function sayHello() {
  console.log("Hello!");
}
```

Fully hoisted: the entire function is available before its definition.

---

❌ **Function Expressions**

```js
// greet(); // TypeError

var greet = function() {
  console.log("Hi!");
};
```

Only the `var` is hoisted (as `undefined`), not the function body.

</details>

---

<details>
<summary>🔹 Type Coercion</summary>

<br>

**Implicit Coercion**  
JavaScript automatically converts types:

```js
'5' + 1     // "51" → string
'5' - 1     // 4    → number
true + 1    // 2
```

**Explicit Coercion**  
You convert it manually:

```js
Number("10")  // 10
String(123)   // "123"
```

</details>

---

<details>
<summary>🔹 Truthy & Falsy Values</summary>

<br>

**Falsy values** behave like `false` in conditions:

- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`
- `false`

Everything else is **truthy**.

</details>

---

<details>
<summary>🔹 Equality: <code>==</code> vs <code>===</code></summary>

<br>

| Operator | Description        | Example         | Result |
|----------|--------------------|------------------|--------|
| `==`     | Loose (coerces types) | `'5' == 5`      | `true` |
| `===`    | Strict (no coercion) | `'5' === 5`     | `false` |

**Special Cases:**

```js
false == 0          // true
false === 0         // false

null == undefined   // true
null === undefined  // false
```

</details>
