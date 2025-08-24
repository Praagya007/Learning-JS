# 📅 JavaScript — Day 1: Statements, Expressions & Debugging

A quick overview of fundamental JavaScript concepts including the difference between statements and expressions, and debugging tools in developer tools.

---

## 🧠 Statement vs Expression

### ✅ Statement
A **statement** is a complete instruction that performs an action. It doesn't necessarily return a value.

**Example:**
```js
let x = 5; // This is a variable declaration (a statement)
✅ Expression
An expression is any code that produces a value. Expressions can be used inside statements.

Example:

js
Copy code
x + 3 // This is an expression. It evaluates to 8 if x = 5
Used inside a statement:

js
Copy code
let y = x + 3; // The expression (x + 3) is used inside a statement
🛠️ Debugging in JavaScript
🔹 What is a Breakpoint?
A breakpoint is a marker you set in your code to pause execution at a specific line.

Lets you inspect variables and control flow step-by-step.

Set in browser dev tools or editors like VS Code.

🔹 What is Step Over?
Step Over runs the current line and moves to the next, without entering functions.

Useful for skipping over internal details of functions.

Keeps focus on higher-level logic.

🔹 What is a Watch Expression?
A watch expression tracks the value of a variable (or any expression) while code is paused.

Lets you monitor how variables change during execution.

Examples: x, y, x * y, user.name

🧪 What I Learned
Breakpoints help visualize how JavaScript runs.

Step Over gives control to run code one line at a time.

Watch Expressions are powerful tools for inspecting logic and variables.

These debugging tools are essential for understanding code flow — not just advanced, but fundamental.