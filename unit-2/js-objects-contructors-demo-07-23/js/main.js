// Is Javascript a OOP langauage ? No
// Strictly Typed language ? No

// JS is a loosely typed Object based Language
// Strictly typed example :
// int x =10;
// x ='Ankur' // Error 

// Losely typed example:
// var x = 'Ankur';
// x = 123;
// x = x + 'X';

// Object based vs Object Oriented
// OOP :
// String mystr = "Brainstation";
 // myStr is a object

 // Object based langauge paradigm
// var myStr = "Brainstation"
 // mystr is a literal / variable
// var obj = { key : value}


// 2015 : ES6
// Objects and Classes
// Array

// (Almost) Everything is an object
// Datatypes : type of Data
 // - Primitive : string, integer(number), boolean
 // - Object : Array, Object, Promise...custom
// Object in JS : Dt which encapsulates <key:value>(properties), methods
var str = "BrainStation";
console.log(typeof str);
console.log(str.length);
// console.dir(typeof str); ???
console.log(str.__proto__);

// array
const arr = [1, 2, 3];
console.log(typeof arr);
console.log(arr.__proto__);

// functions
// Function is also an object
const addNumber = (x, y) => {
    return x+y;
}
console.log(typeof addNumber);
console.dir(addNumber);
console.log(addNumber(5, 6));
console.log(addNumber.call(this, 5, 6)); // method call

// Added a new property
addNumber.title = 'This is a Function Object';
console.log(addNumber.title);
console.dir(addNumber);


// Object
// Way 1 
let bookObj = { title : 'My Ttile', author: 'My Author' };
console.log(bookObj);

// Way 2
// Construtor
// OOP way
// this keyword points / references to the current instance
function Book(x, y) {
    console.log('I m in Constructor');
    this.title = x;
    this.author = y;
}

const bookObj2 = new Book('Title 1', 'Author 1');
console.log(bookObj2);

// Add Methods using this keyword
function Book(title, author) {
    // Setting value
    this.title = title;
    //this.author = author;

    // Getters and Setters
    this.setAuthor = function(author) {
        this.author = author;
    }

    this.getAuthor = function() {
        return this.author;
    }
}

const bookObj3 = new Book('my title 3');
console.log(bookObj3);
bookObj3.setAuthor('author name 3');
console.log(bookObj3.getAuthor());

// Add Methods using prototype keyword
Book.prototype.getTitle = function() {
    return this.title;
}

console.log(bookObj3.getTitle());



