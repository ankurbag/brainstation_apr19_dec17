import logo from './logo.svg';
import './App.css';
import StudentDemo from './components/StudentDemo';
import InstructorsList from './components/InstructorsList';
import StudentsList from './components/StudentsList';

function App() {

  // Students
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
  ];

  return (
    <div className="App">
      <header className='main__content'>My Class </header>
      <StudentsList  students={studentList} />
      <InstructorsList instructors={instructorsList} />
    </div>
  );
}

export default App;
