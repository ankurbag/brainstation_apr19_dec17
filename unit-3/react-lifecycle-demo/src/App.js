import { Switch, Route, Redirect } from 'react-router-dom';
import About from './components/About';
import ExampleMethods from './components/ExampleMethods';
import Timer from './components/Timer';
import Header from './components/Header';
import Users from './components/Users';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={About} exact />
        <Route path="/lifecyclemethods" component={ExampleMethods} />
        <Route path="/timer" component={Timer} />
        <Route path="/users" component={Users} exact />
        <Route path="/users/:id" component={Users} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
