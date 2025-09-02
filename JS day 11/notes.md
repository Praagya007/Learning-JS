# Day 12 & 13 — DOM, Events, Forms & Delegation

## Table of Contents
1. [Day 12 — DOM Fundamentals](#day-12---dom-fundamentals)
2. [Day 13 — Events, Forms & Delegation](#day-13---events-forms--delegation)
3. [Hands-on Exercises & Deliverables](#hands-on-exercises--deliverables)
4. [Code Reference](#code-reference)

---

## Day 12 — DOM Fundamentals

### Selectors
- Use `querySelector()` to get **the first matching element**.  
- Use `querySelectorAll()` to get **all matching elements** as a NodeList.  
- Example: selecting a list item or all items in a list.

**Key concept:** Selecting elements is the first step to interacting with the DOM.

---

### Creating and Inserting Elements
- `document.createElement("tag")` creates new HTML elements.  
- Use `.append()`, `.prepend()` to insert inside a parent.  
- Use `.before()` or `.after()` to insert relative to an existing element.  

**Hands-on tip:** You can dynamically create lists, buttons, or any elements this way.

---

### `innerHTML` vs `textContent`
- `textContent` → inserts **plain text** only. HTML tags are shown as text.  
- `innerHTML` → inserts **HTML content**. Tags are parsed and rendered.  

**Pro tip:** Use `textContent` when you want to avoid HTML rendering and potential security issues.

---

### Attributes, classList, styles, dataset
- **Attributes:** `setAttribute()`, `getAttribute()` modify element properties like `src`, `alt`, `id`.  
- **classList:** add, remove, toggle classes dynamically.  
- **Styles:** change styles via `.style.property`.  
- **dataset:** access `data-*` attributes, e.g., `li.dataset.id`.  

**Why:** These allow dynamic control over how elements look and behave.

---

## Day 13 — Events, Forms & Delegation

### addEventListener & Event Object
- `addEventListener("event", callback)` attaches an event to an element.  
- The callback receives an `event` object, giving info like:  
  - `event.type` → type of event (click, submit, etc.)  
  - `event.target` → the element that triggered the event  

**Tip:** Always use `addEventListener` instead of inline `onclick` attributes.

---

### Bubbling vs Capturing
- **Bubbling (default):** event starts at target and bubbles up to ancestors.  
- **Capturing:** event starts from ancestor and goes down to the target.  
- Use the third parameter `true` in `addEventListener` to enable capturing.

---

### Event Delegation
- Attach **one listener** to a parent element.  
- Use `event.target` inside callback to detect which child element was clicked.  
- Great for handling dynamic elements or large lists efficiently.

---

### Forms
- **Submit event:** triggered when a form is submitted.  
- **preventDefault():** stops the page from reloading on submit.  
- **Validation:** check input values (e.g., email contains `@`, password length).  
- **Error messages:** use `<small>` tags under inputs to show hints/errors.  

**Pro tip:** Always specify `type` on buttons inside forms:  
- `submit` → triggers form submit  
- `button` → JS-only action  
- `reset` → clears the form

---

### Keyboard Shortcuts
- Listen globally using `document.addEventListener("keydown", callback)`.  
- Example: pressing `/` anywhere focuses a search box.  
- Use `event.preventDefault()` to stop default browser behavior.

---

## Hands-on Exercises & Deliverables

1. **Dynamic List Component (Day 12)**  
   - Add/remove items and highlight active items using DOM methods.

2. **Form Validator (Day 13)**  
   - Email + password validation with inline error messages using `<small>`.

3. **Event Delegation**  
   - Single listener on a parent `<ul>` handles multiple child `<li>` clicks.

4. **Keyboard Shortcut**  
   - `/` focuses on a search input anywhere on the page.

---

## Code Reference

- [Day 12 — DOM Fundamentals Code](Day12.html)  
- [Day 13 — Events, Forms & Delegation Code](Day13.html)  

---

**Notes:**  
- All concepts here are essential building blocks for interactive web pages.  
- Practice each exercise in a separate HTML file for maximum clarity.  
- Combine Day 12 and Day 13 code in one project later for a full demo.
