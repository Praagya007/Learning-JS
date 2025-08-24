📅 JavaScript — Day 3: Variables, Hoisting & Coercion

A collection of notes and code snippets covering Day 3 concepts in JavaScript learning.

<details> <summary>🔹 <strong>Variables: <code>var</code>, <code>let</code>, <code>const</code></strong></summary> <br>
Keyword	Scope	Hoisted	TDZ (Temporal Dead Zone)	Reassignable	Redeclarable
var	Function	✅ Yes	❌ No TDZ	✅ Yes	✅ Yes
let	Block	✅ Yes	✅ Yes	✅ Yes	❌ No
const	Block	✅ Yes	✅ Yes	❌ No	❌ No

var is hoisted and initialized with undefined.

let and const are hoisted but not initialized — accessing them before declaration throws a ReferenceError.

const must be declared and initialized at the same time.

</details>
<details> <summary>🔹 <strong>Temporal Dead Zone (TDZ)</strong></summary> <br>

The time between entering a block and declaring a variable with let or const — the variable exists but is “off-limits.”

JavaScript knows the variable exists due to hoisting.

Accessing it before declaration causes a ReferenceError.

</details>
<details> <summary>🔹 <strong>Hoisting</strong></summary> <br>

✅ Function Declarations (Fully Hoisted)

sayHello(); // "Hello!"

function sayHello() {
  console.log("Hello!");
}


❌ Function Expressions (Only Variable is Hoisted)

greet(); // ❌ TypeError: greet is not a function

var greet = function() {
  console.log("Hi!");
};

</details>
<details> <summary>🔹 <strong>Type Coercion</strong></summary> <br>

Implicit Coercion (done automatically by JS)

'5' + 1     // "51"  → string
'5' - 1     // 4     → number
true + 1    // 2


Explicit Coercion (done manually)

Number("10")  // 10
String(123)   // "123"
Boolean(0)    // false

</details>
<details> <summary>🔹 <strong>Truthy & Falsy Values</strong></summary> <br>

Falsy Values — these behave like false in conditions:

0

"" (empty string)

null

undefined

NaN

false

✅ Everything else is truthy.

</details>
<details> <summary>🔹 <strong>Equality: <code>==</code> vs <code>===</code></strong></summary> <br>
Operator	Description	Example	Result
==	Loose equality (type coercion)	'5' == 5	true
===	Strict equality (no coercion)	'5' === 5	false

Special Cases:

false == 0          // true
false === 0         // false

null == undefined   // true
null === undefined  // false

</details>