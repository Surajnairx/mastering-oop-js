// VALUE DATA TYPE
let a = 5;
let b = a;
a = 6;
console.log(a, b); //Notice that a logs 6 but b logs 5 (because they are primitive data types)

//REFERENCE DATA TYPES
let x = { value: 5 };
let y = x;
x.value = 6;
console.log(x, y); //Both log {value:6} as they are non-primitive (reference data types)

//////////

// ADDING/ REMOVING PROPERTIES FROM AN OBJECT

//ADDING
const m = {};
m.location = { x: 5, y: 6 };

//OR

m[location] = { x: 5, y: 6 };

//REMOVING
delete m.location;

// or delete m[location]

//////////

//ENUMERATING THROUGH OBJECTS
//1. FOR IN LOOP
for (let key in m) {
  console.log(key, m[key]);
}

//2. TO CHECK IF PROPERTY EXIST
if ("location" in m) {
  console.log("Location property ");
}

//3. ABSTRACTION
//private properties & methods

function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  let computeOptimumLocation = function (factor) {};
  this.draw = function () {
    computeOptimumLocation(0.1);
    console.log("draw");
  };
}

const circle = new Circle(10);
//these 2 are the only accessible methods and properties
circle.draw();
circle.radius;

//4. GETTERS / SETTERS
Object.defineProperty(this, "defaultLocation", {
  // way to define a property/function
  get: function () {
    // only returns the said property/method
    return defaultLocation;
  },
  set: function (value) {
    if (!value.x || !value.y) throw new Error("Invalid Location value"); //checking if the value provides has x and y units
    defaultLocation = value;
  },
});
