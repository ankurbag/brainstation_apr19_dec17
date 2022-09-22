import "./App.css";
import ResultComponent from "./components/ResultComponent";
import WelcomeComponent from "./components/WelcomeComponent";

function App() {
  const name = "Ankur";
  const person = {
    firstName: "John",
    lastName: "Smith",
    birthYear: 2011,
  };

  const personList = [
    {
      firstName: "John",
      lastName: "Smith",
      birthYear: 2011,
    },
    {
      firstName: "Emma",
      lastName: "Wong",
      birthYear: 2000,
    },
    {
      firstName: "Charles",
      lastName: "Morris",
      birthYear: 1999,
    },
  ];
  return (
    <div className="App">
      <h1>Hello World, {name}!</h1>
      <ResultComponent personName={name} />
      {personList.map((person) => (
        <WelcomeComponent person={person} />
      ))}
    </div>
  );
}

export default App;
