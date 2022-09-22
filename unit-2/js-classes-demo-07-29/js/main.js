// Inheritance Demo
/*
 */
// Create Person
// Person --> name, age, height | sayHello()
class Person {
  constructor(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
  }

  sayHello() {
    console.log(`${this.name} says hello`); // literal Notation
  }
}

// Create Student inheriting Person
// Student --> gpa
class Student extends Person {
  constructor(name, age, height, gpa) {
    super(name, age, height); // invoke parent.constructor
    this.gpa = gpa;
  }
}

// Create Array of Students
const student1 = new Student("Alex", 18, 165, 3.0);
const student2 = new Student("Kevin", 21, 165, 4.0);
const student3 = new Student("Victor", 21, 165, 4.0);
const studentArr = [student1, student2, student3]; // traditional
/*const studentArr1 = new Array();
studentArr1.push(student1);
studentArr1.push(student2);
studentArr1.push(student3);*/

// Create Instructor inheriting Person
// Instructor --> courseName
class Instructor extends Person {
  constructor(name, age, height, courseName) {
    super(name, age, height); // invoke parent.constructor
    this.courseName = courseName;
  }
}

// Create Array of Instructors
const instructor1 = new Instructor("I1", 18, 165, "Intor to JS");
const instructor2 = new Instructor("I2", 21, 165, "Into to HTML");
const instructorArr = [instructor1, instructor2];

// Console Log All the students
console.log(studentArr);

// Console log all the instructors
console.log(instructorArr);

// UI
// Display them on the UI
function createListItem(name) {
  let li = document.createElement("li");
  li.textContent = name;
  return li;
}

function showClass() {
  // get the ul#menu
  const studentsList = document.querySelector("#students-list");
  studentsList.innerHTML = "";
  // Add students from Array
  // Hint : Use for loop and use
  // studentsList.appendChild(createListItem('Student 1'));
  /*for(let i=0; i<studentArr.length; i++){
    studentsList.appendChild(createListItem(studentArr[i].name+ " "+studentArr[i].gpa)); // <li> Student 1 </li>
  }*/

  // Array.foreach
  studentArr.forEach((student) =>{
    studentsList.appendChild(createListItem(student.name+ " "+student.gpa));
  });
  const instrutorsList = document.querySelector("#instructors-list");
  instrutorsList.innerHTML = "";

  // Add instructors from Array
  // Hint : Use for loop and use
  // studentsList.appendChild(createListItem('Student 1'));
  instructorArr.forEach((instructor) =>{
    instrutorsList.appendChild(createListItem(instructor.name+ " "+instructor.courseName));
  });
}
