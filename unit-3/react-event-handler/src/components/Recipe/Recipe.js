import React from 'react';
import './Recipe.scss';

const Recipe = props => {
  const handleClick = () => {
    props.handleRecipeSelect(props.recipe);
  }

  return (
    <li
      className={`recipe ${props.isSelected ? 'recipe--selected' : ''}`}
      onClick={handleClick}>
      <img
        className="recipe__img"
        src={props.recipe.strMealThumb}
        alt={props.recipe.strMeal} />
      <h3>{props.recipe.strMeal}</h3>
    </li>
  )
}

export default Recipe;