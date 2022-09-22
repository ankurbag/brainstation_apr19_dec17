# Advanced Function
-- Compiled / Interpretted
- Functions Basic
  - create 
    - function <function_name>() {

    }
  - invoke
    - function_name();


let result = calculator(1, 5, "+");

-- Declarative / Imperative
--- GEN Z -----------
- Function Expression
- Anonymous Functions
   - Immediately Invoked Function Expression
- Arrow Functions

let result = (a, b) => { return a+b };

SLIDE

- Function as Parameter / Argument 
-----------------
- CALL Stack
-----------------
printArea(reactangelArea(10, 5), 'cm')
  -->reactangelArea(10, 5) : 50
  --> printArea(50, 'cm')
     --> Output

printHello(){
    console.log("Heloo");
}

setTimeout( <function as a Argument>, <time in MilliSecond> );
- Pl note , we can pass named and unnamed function

setTimeout(printHello, 3000);  // 
 ---> printHello --> console.log only after 3000 milii second
      -->setTimeout(<finished>, 3000)
         -->console.log


- Fucntion as Values
-------------------------------
function sum(num1, num2){
    return num1 + num2;
}

let sum = function(num1, num2){
    return num1 + num2;
}

sum(5, 6);

- Anonymous Function
------------------------------
- Remove the name
function sum(num1, num2){
    return num1 + num2;
}

function (num1, num2){
    return num1 + num2;
}

<function>() {

}

function printHello(){
    console.log("Heloo");
}

function (){
    console.log("Heloo");
}

To invoke
- Inline
- As argument


setTimeout(function(){
    console.log("Hello")
}, 3000);

 Call Stack
 -------------
 setTimeout(function(),3000)
 ---> <anonympus> --> console.log only after 3000 milii second
      -->setTimeout(<finished>, 3000)
         -->console.log


ES 6 
- Arrow functions
------------------------
function sum(num1, num2){
    return num1 + num2;
}

function (num1, num2){
    return num1 + num2;
}
- Lamda ->
(num1, num2) => {return num1 + num2;}; // Anonympus

let myFun = (num1, num2) => {return num1 + num2;}; // Named Arrow
console.log(myFun)
// myFun(5, 6);

[1, 1 ,1 , 5, 6]

function removeDuplicatesFromArray(arr){
    let temp = arr[0];
    let resut = [];
    resut.push(temp);
    for(let i=1; i<arr.length; i++ ){
        if(arr[i] == arr[i-1]) 
          continue;
        resut.push(arr[i]);
        temp = arr[i];
    }
    return resut;
}

// [1, 5, 6]
result =  arr.map(() => {arr[i] !== arr[i-1]}).push();

arr.filter
arr.select


- Scope
 - Global
 - Local
  - Block
  - Function

let name = 'Jay'; // global

function myFun(name) { // local : Steve
    console.log(name); --> Steve
}

myFun('Steve');


- Let Var Const

function blockScope(){
    console.log(i); // Undefined --> Hoisting
    console.log(localLet); // Reference Errpr
    console.log(localConst); // Reference Errpr
    for(var i=0; i<5; i++){
        let localLet = 'block Scope';
        const localConst = 'constant';
    }

    console.log(i); // 5 --> Hoisting
    console.log(localLet); // undefined
    console.log(localConst); // undefined
}

console.log(i); // undefined
console.log(localLet); // undefined
console.log(localConst); // undefined

















      