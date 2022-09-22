# Objects and Constructors Demo
[] Standup excercise
- Write a function that checks if all items in an array are numbers. Return a boolean.

function isNumber(array){
    // your code
}

let arr1 = [1, 2, 4];
let arr2 = [1, 'abc', 3];
 
console.log(isNumber(arr1)); // True
console.log(isNumber(arr2)); // False

[X] Everthing is Object
    - Primitives
    - Objects
[X] Object Constructors
    - OOP
    - Constructor
Break at 9.30 / 12.30 pm EST  : 30min
[X] Prototype
    - Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.
[] Ask me anything 15 min
Break 12.30 / 3.30 EST 
----
## Resources

- [Prototype Chain Image to help visualize](https://i.stack.imgur.com/d4bDt.png)
- [Another image showing the prototype chain](https://miro.medium.com/max/3430/1*Evoq9q8LCyxKteA9e-_31w.png)
- [MDN: Object prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
- [Javascript inheritance](https://hackernoon.com/understand-nodejs-javascript-object-inheritance-proto-prototype-class-9bd951700b29)

## Stretch Assignments 
1. Implement the following function
function isNumber(array){
    // your code
}
using `array.find` and `array.forEach`

2. Implement `Dive Deeper` Section of the Journal Application Code Along
