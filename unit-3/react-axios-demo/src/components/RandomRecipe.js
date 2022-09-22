import axios from "axios";
import { Component } from "react";
import { API_URL } from "../util";

class RandomRecipe extends Component {
    state = {
        recipeData: null,
    };

    getRandomRecipe = () => {
        axios.get(API_URL + "/random.php").then((result) => {
            this.setState({
                recipeData: result.data.meals[0],
            });
        });
    };

    render() {
        return (
            <section>
                <button onClick={this.getRandomRecipe}>Get Random Recipe</button>
                {this.state.recipeData && <p>{this.state.recipeData.strMeal}</p>}
            </section>
        );
    }
}

export default RandomRecipe;
