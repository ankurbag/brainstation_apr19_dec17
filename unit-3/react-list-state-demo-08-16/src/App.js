import logo from './logo.svg';
import './App.css';
import StudentDemo from './components/StudentDemo';
import InstructorsList from './components/InstructorsList';
import StudentsList from './components/StudentsList';
import React from 'react';

class App extends React.Component {

  // intial State : No data
  state = {
    studentList: [{
      name: "Will",
      birthYear: 2011,
      grade: "Eighth",
    }],
    instructorsList :['No Student']
  }
  // Final State
  // Students
  /*
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

  const instructorsList = [
    {
      name: "Nathan",
      course: "Web Dev"
    },
    {
      name: "Ankur",
      course: "Web Dev"
    },
  ];*/

  showClass = () => {
    // Modify the state
    let currentState = this.state;
    currentState.studentList.push({
      name: "John",
      birthYear: 2000,
      grade: "Eighth",
    });
    // this.state.push() // No NO
    // Mutation
    this.setState(
      {
        studentList: currentState.studentList,
        instructorsList :[
          {
            name: "Nathan",
            course: "Web Dev"
          },
          {
            name: "Ankur",
            course: "Web Dev"
          },
        ]
      }
    );
  }

  render() {
    return (
      <div className="App">
        <header className='main__content'><h1>My Class</h1></header>
        <StudentsList  students={this.state.studentList} />
        <InstructorsList instructors={this.state.instructorsList} />
        <button onClick={this.showClass}> Show Class</button>
      </div>
    );
  }
  
}

export default App;
