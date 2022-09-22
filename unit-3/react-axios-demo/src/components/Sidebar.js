import { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../util";
import "./Sidebar.scss";

class Sidebar extends Component {
    state = {
        recipes: [],
    };

    componentDidMount() {
        axios.get(API_URL + "/filter.php?c=Seafood").then((response) => {
            this.setState({
                recipes: response.data.meals,
            });
        });
    }

    render() {
        return (
            <header>
                <nav>
                    {this.state.recipes.map((recipe) => (
                        <NavLink key={recipe.idMeal} to={"/recipe/" + recipe.idMeal}>
                            {recipe.strMeal}
                        </NavLink>
                    ))}
                </nav>
            </header>
        );
    }
}

export default Sidebar;
