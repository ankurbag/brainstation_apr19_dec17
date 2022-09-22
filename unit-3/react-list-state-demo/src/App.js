import logo from "./logo.svg";
import "./App.css";
import StudentDemo from "./components/StudentDemo";
import InstructorsList from "./components/InstructorsList";
import StudentsList from "./components/StudentsList";
import React from "react";

class App extends React.Component {
  state = {
    count: 0,
    studentList: [],
    instructorsList: [],
  };

  showClass = () => {
    console.log("YOu clicked me!");
    this.setState({
      studentList: [
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
      ],

      instructorsList: [
        {
          name: "Nathan",
          course: "Web Dev",
        },
        {
          name: "Ankur",
          course: "Web Dev",
        },
      ],
    });
  }

  counter() {
    this.setState({count : this.state.count+1});
  }
  render() {
    return (
      <div className="App">
        <header className="main__content">My Class </header>
        <StudentsList students={this.state.studentList} />
        <InstructorsList instructors={this.state.instructorsList} />
        <button onClick={this.showClass}> Click me </button>
        <div>
          <button onClick={()=>{this.counter()}}> Increment Counter </button>
          <p>{this.state.count}</p>
        </div>
      </div>
    );
  }
}

export default App;
