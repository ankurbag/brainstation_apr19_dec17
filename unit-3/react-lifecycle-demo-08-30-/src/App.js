import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import HomePage from "./components/pages/HomePage";
import ContactPage from "./components/pages/ContactPage";
import AboutPage from "./components/pages/AboutPage";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
