// 2015 : ES6
// Objects and Classes
// Array

// Object
// Way 1 
let bookObj = { title : 'My Ttile', author: 'My Author' };
console.log(bookObj);

// Way 2
// Construtor
// OOP way
// this keyword points / references to the current instance
function BookOld(x, y) {
    console.log('I m in Constructor');
    this.title = x;
    this.author = y;
}

const bookObj2 = new BookOld('Title 1', 'Author 1');
console.log(bookObj2);

/*
    [X] ES6 : Classes
    - Classes are in fact "special functions", and just as you can define function expressions and function declarations
    the class syntax has two components: class expressions and class declarations.
    - Class declarations
    - Hoisting : Reference error
*/
// Way 3
// The oop Way
// class


class Book {
    // properties
    // constructor 
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    // methods
    displayDetails() {
        console.log(`Book : ${this.title} | ${this.author}`)
    }
}

const bookObj3 = new Book('Title 2', 'Author 2');
bookObj3.displayDetails();

// (Almost)Everything is Object
console.log(typeof bookObj3);
console.log(bookObj3.__proto__);

console.log(typeof Book);

// Difference between Classes and Functions
// Hoisting : Reference error

doSomething();

function doSomething() {
    console.log('Do Something!');
}

// Be Back at 5.40 PST / 8.40 EST

/*
[ ] Extending CLasses : is OOP principle 'Inheritance'
    - extends : class ChildClass extends ParentClass <...ParentClass2..>
    - super : extends the parent class constructor
*/

// Person --> name, age, height | sayHello()
   // Student --> gpa

class Person {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }

    sayHello() {
        console.log(`${this.name} says hello`);
    }
}

class Student extends Person {
    constructor(name, age, height, gpa) {
        super(name, age, height); // invoke parent.constructor
        this.gpa = gpa;
    }
}

const student1 = new Student('Abc', 18, 165, 3.0);
const student2 = new Student('Pqr', 21, 165, 4.0);
student1.sayHello();

student2.sayHello();

function callName(callback) {
    console.log('I m in callName');
    callback.call(student2);
} 
// Where is callName : Global
//console.log(this);
//callName(student1.sayHello); // global context
// Convert it into local context
//callName( () => { student1.sayHello(); })
callName(student2.sayHello);

// Action Item : Provide more examples of Multiple Interheritance





