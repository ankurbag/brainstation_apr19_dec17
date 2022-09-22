import logo from './logo.svg';
import './App.css';
import ClassComponent from './ClassComponent';
import Counter from './components/Counter';

const name = 'Nathan';
function App(props) {
  return (
    <div className="App">
      <ClassComponent name={name}/>
      <Counter />
    </div>
  );
}

export default App;
