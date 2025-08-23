// CONSTRUCTOR FUNCTION
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const circle = new Circle(1);
circle.draw();

// FACTORY FUNCTION
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}
const another = createCircle(1);
another.draw();

// CONSTRUCTOR PROPERTY (reference the function that created the object)

console.log(circle.constructor);
/*return ƒ Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}*/

console.log(another.constructor);
//returns ƒ Object() { [native code] }

//FUNCTIONS ARE OBJECTS
console.log(Circle.name, Circle.length); //logs name of the function and the length of the parameter array

// FUNCTION CONSTRUCTOR
const Circle1 = new Function(
  "radius",
  `this.radius - radius; this.draw = fucntion(){console.log('draw');}`
);
