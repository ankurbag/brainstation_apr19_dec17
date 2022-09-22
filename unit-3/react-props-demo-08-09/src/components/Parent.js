import Child from "./Child";
import Button from "./Button";
import Student from "./Student";

function Parent() {
  // Literal
  const name = "John";

  // Object
  const student = {
    name: "Will",
    birthYear: 2011,
    grade: "Eighth",
  };

  // Function
  const handleClick = () => {
    console.log("I have clicked");
  };

  // Array
  const studentList = [
    {
      name: "Will",
      birthYear: 2011,
      grade: "Eighth",
    },
    {
      name: "John",
      birthYear: 2000,
      grade: "Eighth",
    },
    {
      name: "Neel",
      birthYear: 2005,
      grade: "Eighth",
    },
  ];

  return (
    <>
      <h1>Hello World {name}</h1>
      <Child name={name}  />
      <Button handleClick={handleClick} />
      <ul>
      {
      // foreach 
      // for loop
      /*
      for(let i=0; i<studentList.length; i++){
        <Student student={student}/>
      }
      */
      studentList.map( (student) => (<StudentItem student={student}/>) )}
      </ul>
    </>
  );
}

export default Parent;
