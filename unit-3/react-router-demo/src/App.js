import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import Nav from "./components/Nav";

function App() {
    return (
        <BrowserRouter>
            <Nav />

            {/* Switch will stop at the first match. So if you go
          to /about, it will stop at HomePage, because /about is both '/'
          and '/about'. If you want to avoid that 'exact' specifies exact path */}
            <Switch>
                <Route path="/" exact component={HomePage}></Route>
                <Route path="/about" component={AboutPage}></Route>
                <Route path="/contact" component={ContactPage}></Route>
                <Redirect from="/contact-us" to="/contact" />
                <Route component={NotFoundPage}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
