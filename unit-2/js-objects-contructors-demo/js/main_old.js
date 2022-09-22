// const myArray = [1, 2, 3];

// console.log(typeof myArray);
// console.log(myArray.__proto__); // what constructed myArray?
// console.log(myArray.__proto__.__proto__.__proto__);

// function test() {}
// console.dir(test.__proto__);

// console.log(myArray.toString());
// console.log(myArray);

// Constructor Function
function Book(title, author) {
  this.title = title;
  this.author = author;
  this.isPublished = false;
  this.publishBook = function () {
    this.isPublished = true;
  };
}

Book.prototype.unpublishBook = function () {
  this.isPublished = false;
};

const allAboutCats = new Book('all about cats', 'Jim');
console.log(allAboutCats);

const allAboutDogs = new Book('all about dogs', 'Neo');
console.log(allAboutDogs);

// console.log(allAboutDogs.isPublished);
// allAboutDogs.isPublished = true;
// allAboutDogs.publishBook();
// console.log(allAboutDogs.isPublished);

// const myArray = [];

// Array.prototype.secretMessage = 'hello world';
// console.log(myArray.secretMessage);

// console.log(Array.prototype.__proto__);

// Date.prototype.oneMillionYears = 'test';

// const date = new Date();
// console.log(date.oneMillionYears);

function Character(name, catchphrase) {
  this.name = name;
  this.catchphrase = catchphrase;
  this.inventory = [];
}

Character.prototype.speak = function () {
  return this.catchphrase;
};

Character.prototype.health = 100;

const garfield = new Character('Garfield', 'I hate Mondays');
console.log(garfield);
console.log(garfield.speak());

const odie = new Character('Odie', 'Bark bark');
console.log(odie);
console.log(odie.speak());

const objectLiteral = {
  description: 'testing the this keyword',
  testThis: function () {
    console.log(this);
  },
};

objectLiteral.testThis();

function testThis() {
  console.log(this);
}
testThis();
