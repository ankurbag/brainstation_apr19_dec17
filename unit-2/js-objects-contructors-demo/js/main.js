const str = "hello";
console.log(typeof str);
console.log(str.__proto__);

const str1 = new String("Hello");
console.log(typeof str1);

const myarr = [1, 2, 3];
console.log(typeof myarr);
console.log(myarr.__proto__); 
console.log(myarr.__proto__.__proto__); 
console.log(myarr.__proto__.__proto__.__proto__); 

function myFunction() {
  console.log("Hello 2");
}
console.log(typeof myFunction);
console.dir(myFunction);

// Objects
const myObject = {
  city: 'Madrid',
  greet() {
    console.log(`Greetings from ${this.city}`);
  }
}
console.dir(myObject);
myObject.greet();

// Constructors in Objects
function Book(title, author, pages){
  this.title = title;
  this.author = author;
  this.pages = pages;
}
// Prototype way
Book.prototype.getTitle = function() {
  return this.title;
};

const bookObj = new Book('Introduction to Js', 'Mark Myers', '500');
console.log(bookObj);
console.log(bookObj.title);

console.log(bookObj.getTitle());