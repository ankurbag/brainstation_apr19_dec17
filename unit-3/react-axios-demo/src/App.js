import { BrowserRouter, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Welcome from "./components/Welcome";
import SingleRecipe from "./components/SingleRecipe";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Sidebar />
                <Switch>
                    <Route path="/" exact component={Welcome} />
                    <Route path="/recipe/:recipeId" component={SingleRecipe} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
