import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Home, ContactPage } from "./components/pages/";
import Nav from "./components/Nav";
//import Home from "./components/pages/Home";
//import ContactPage from "./components/pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact >
          <Home name="Ankur"/>
          </Route>
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </BrowserRouter>
/*
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
    */
  );
}

export default App;
