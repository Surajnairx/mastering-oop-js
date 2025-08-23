# 🧑‍💻 Constructor Function, Factory Function & Constructor Property in JavaScript

This section explains three important concepts in JavaScript OOP: **constructor functions**, **factory functions**, and the **constructor property**.

---

## 🔹 Constructor Functions

- Special functions used to create and initialize objects.
- Invoked with the `new` keyword.
- By convention, constructor function names start with a capital letter.
- Properties and methods are assigned to `this`.
- For efficiency, methods should be defined on the prototype instead of inside the constructor.

---

## 🔹 Factory Functions

- Normal functions that return objects.
- Do not require the `new` keyword.
- Very flexible – can return different object shapes.
- Easier to work with when using closures (private variables).
- Follow standard function naming conventions (camelCase).

---

## 🔹 Constructor Property

- Every object has a `constructor` property that points to the function that created it.
- For objects created with literals:
  - `{}` → `constructor === Object`
  - `[]` → `constructor === Array`
- Can be reassigned, but it’s generally not recommended.

---

## 🔹 Quick Comparison

| Feature              | Constructor Function | Factory Function      |
| -------------------- | -------------------- | --------------------- |
| Requires `new`       | ✅ Yes               | ❌ No                 |
| Object return type   | Implicit via `this`  | Explicit return       |
| Uses `this`          | ✅ Yes               | Optional              |
| Private data support | ❌ Difficult         | ✅ Easy with closures |
| Naming convention    | Capitalized function | Normal function name  |

---

## ✅ Summary

- **Constructor functions** → used with `new` to create objects.
- **Factory functions** → return objects without `new`.
- **Constructor property** → identifies which function created an object.

---

## 🔹 Functions Are Objects

- In JavaScript, functions are **first-class objects**.
- This means they can:
  - Be assigned to variables
  - Be passed as arguments to other functions
  - Be returned from functions
  - Have their own properties and methods

### Function Constructor

- Every function is created from the built-in **`Function` constructor**.
