//alert("I am alerting from the script file!");

// Writing to the HTML body
document.write("<p>Hi I am Ankur</p>");
document.write("<h2>Primitive Datatypes</h2>");

// Log / Warn / Debug
console.log("Hello I m logging");
console.debug("Hello I m debugging");
console.info("Hello I m Info");
console.error("Error : It is an error!");
console.warn("Warning : Please do it nicely next time!");

// Primitive Datatypes
console.log(1);
console.log(0.26);
// Big Int
console.log(1844674407370955);
// Boolean
console.log(true); // false
// Strings
console.log("I m learning JS!");

// Null
x = null;
console.log(x);

// Undefined
//console.log(x == y);
// console.log(y);


// Operators
// 1. Arithmetic operators
console.log(5+5); // 5 * 5 // '5 / 5'
// BODMAS
console.log((5 + 7) * 2);

// Bitwise Operation
console.log(1 & 5); // Bit operation
console.log(5 & 6); // Bit operation

// 2. Logical Operator
// not true is equivalent to false
console.log(1 && 5); 
// 001
// 101
// 1 0 1
console.log(true && true);
console.log(true || false);

// 3. Comparison operator
// Loosely typed Language and Strongly type language
// What is better?
console.log(1 == '1'); // true
console.log(1 === '1');// Recommends

console.log(2 != '1');
console.log(2 !== '1');

console.log(5 > 2); // <
console.log(5 >= 5); // <=


// Back at 1:09 / 4:09

// typeof Operator
console.log(typeof(100)); // number // typeof 100
console.log(typeof 101.5); 
console.log(typeof('I am ankur')); // string
console.log(typeof(true)); // boolean

// Variables
// Loosely typed Language
x = 10;
console.log(x);
console.log(typeof x); // number

x = 'Brainstaion';
console.log(x);
console.log(typeof x); // string

// Declare Variables
// var
// Scope - global
var x = 10; // x = 10
// let
let x1 = 20; 
// const
const y = 30;
// y  = 40;
console.log(y);

x3 = null;
console.log(typeof(x3));
console.log(typeof(z));

if(typeof z !== 'undefined'){
    console.log(z + 100);
}else {
    let z = 200;
    console.log("I m safe");
    console.log(z + 100);
}


// Functions :
// { ... }
// 1. Signature
function funName() {
// 2. Definition
    console.log("I m in a function");
    let x = 10;
    let y = 20;
    console.log(x + y);
}
// 3. Call -- > return some value
//         -- > just output the value
funName();



// Functions without parameter
function funNameWithoutParam() {
    // 2. Definition
    console.log("I m in a function without param");
    let x = 10;
    let y = 20;
    console.log(x + y);
}
funNameWithoutParam();

// Functions with parameter
// Scope - local
function funNameWithParam(a , b, c, d) {
    // let
    console.log("I m in a function with param");
    console.log(a + b);
}
funNameWithParam(5, 10);
funNameWithParam("Ankur", " Bag");
//console.log(a);

