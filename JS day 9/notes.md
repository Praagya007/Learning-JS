# Day 10 - Objects Deep Dive Notes

## 1️⃣ Object Literals & Nested Objects

* Dot vs bracket access  
* Special characters in keys require bracket access  
* Dynamic keys using variables with bracket syntax  

## 2️⃣ Destructuring & Spread/Rest

* `const { name, ...rest } = person` → pull out properties  
* Shallow copy: `const copy = {...obj}` → only copies top-level, nested objects remain references  
* Deep copy: `structuredClone(obj)` → independent copy including nested objects  

## 3️⃣ Merge Defaults Safely

* Deep merge is necessary for nested objects  
* `structuredClone` ensures defaults are not mutated  
* Loop through keys and recursively merge nested objects  

## 4️⃣ Safely Read Nested Data

* Optional chaining `?.` prevents runtime errors if property is missing  
* Nullish coalescing `??` provides default values when undefined or null  
* Example: `person?.playerProfile?.Strengths?.[2] ?? "No extra strength"`  

## 📂 Code Reference

You can run all code examples in this folder:  
[objects.js](./day10_objects_summary.js)
