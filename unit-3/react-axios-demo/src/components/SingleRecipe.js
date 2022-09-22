import axios from "axios";
import { Component } from "react";
import { API_URL } from "../util";
import { Link } from "react-router-dom";

class SingleRecipe extends Component {
    state = {
        recipeData: null,
    };

    componentDidMount() {
        const { recipeId } = this.props.match.params;

        axios.get(`${API_URL}/lookup.php?i=${recipeId}`).then((response) => {
            this.setState({
                recipeData: response.data.meals[0],
            });
        });
    }

    componentDidUpdate(prevProps) {
        const { recipeId } = this.props.match.params;

        if (prevProps.match.params.recipeId !== recipeId) {
            axios.get(`${API_URL}/lookup.php?i=${recipeId}`).then((response) => {
                this.setState({
                    recipeData: response.data.meals[0],
                });
            });
        }
    }

    render() {
        if (this.state.recipeData === null) {
            return <main>Loading recipe...</main>;
        }

        const { strMeal, strMealThumb, strInstructions } = this.state.recipeData;

        return (
            <main>
                <h1>{strMeal}</h1>
                <img src={strMealThumb} alt={strMeal} />
                <h2>Instructions</h2>
                <p>{strInstructions}</p>
                <Link to="/">Back to home</Link>
            </main>
        );
    }
}

export default SingleRecipe;
