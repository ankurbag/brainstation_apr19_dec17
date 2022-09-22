import React from 'react';
import Recipe from '../Recipe/Recipe';
import './RecipesList.scss';

const RecipesList = props => {
  return (
    <ul className="recipes">
      {props.recipes.map(recipeVal => {
        const isSelected = props.selectedRecipe
          && recipeVal.idMeal === props.selectedRecipe.idMeal;

        return (
          <Recipe
            key={recipeVal.idMeal}
            isSelected={isSelected}
            recipe={recipeVal}
            handleRecipeSelect={props.handleRecipeSelect} />
        );
      })}
    </ul>
  )
}

export default RecipesList;