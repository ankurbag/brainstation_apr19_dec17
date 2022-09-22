// import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import TeaPage from './components/TeaPage';
import Header from './components/Header';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={TeaPage} />
        <Route path="/teas" exact component={TeaPage} />
        <Route path="/teas/:id" component={TeaPage} />
      </Switch>
    </div>
  );
}

export default App;
