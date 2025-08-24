# 📘 JavaScript OOP Concepts

## 1. Value Type vs Reference Type

- **Value Types (Primitives):** Stored directly in memory. Copying creates a new independent value. Examples include Number, String, Boolean, null, undefined, Symbol, BigInt.
- **Reference Types (Objects):** Stored by reference. Copying only copies the reference, meaning both variables point to the same object. Examples include Object, Array, Function, Date.

---

## 2. Adding and Removing Properties

- Properties can be added dynamically to an object using dot or bracket notation.
- Properties can be removed using the `delete` operator.

---

## 3. Enumeration of Objects

- **for...in loop** is used to iterate over an object’s enumerable keys.
- **Object.keys()** returns an array of property names.
- **Object.entries()** returns an array of key-value pairs.

---

## 4. Abstraction (Private Properties and Functions)

- Abstraction hides implementation details and exposes only necessary methods.
- Achieved using closures in traditional JavaScript.

---

## 5. Getters and Setters

- Provide controlled access to object properties.
- **Getter:** Used to read a property.
- **Setter:** Used to modify a property with validation or extra logic.
- They look like regular properties but internally behave like functions.
