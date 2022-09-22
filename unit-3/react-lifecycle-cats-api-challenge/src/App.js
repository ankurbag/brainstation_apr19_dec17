import { Switch, Route, Redirect } from 'react-router-dom';
import About from './components/About';
import ExampleMethods from './components/ExampleMethods';
import Timer from './components/Timer';
import Header from './components/Header';
import Cats from './components/Cats';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Cats />
    </div>
  );
}

export default App;
