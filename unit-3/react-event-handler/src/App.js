import React from 'react';
import './App.css';
import recipesData from './recipesData';
import RecipesList from './components/RecipesList/RecipesList';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';

console.log('Recipes Data: ', recipesData);

class App extends React.Component {
  state = {
    recipes: recipesData.meals,
    selectedRecipe: null
  }

  handleRecipeSelect = recipe => {
    console.log('Selected Recipe', recipe);
    
    this.setState({
      selectedRecipe: recipe
    });

    /* Alt functionality - filter current item
    this.setState({
      selectedRecipe: recipe,
      recipes: recipesData.meals.filter(recipeVal => {
        return recipe.idMeal !== recipeVal.idMeal;
      })
    });
    */
  }

  render() {
    return (
      <div className="App">
        <RecipesList
          selectedRecipe={this.state.selectedRecipe}
          handleRecipeSelect={this.handleRecipeSelect}
          recipes={this.state.recipes} />

        {this.state.selectedRecipe
          && <RecipeDetails recipe={this.state.selectedRecipe} />}
      </div>
    );
  }
}

export default App;
