import React from 'react';

const RecipeDetails = props => {
  return (
    <section>
      <img
        width="100%"
        src={props.recipe.strMealThumb}
        alt={props.recipe.strMeal} />
      <h2>{props.recipe.strMeal}</h2>
      <h3>{props.recipe.strCategory}: {props.recipe.strArea}</h3>
      <p>{props.recipe.strInstructions}</p>
    </section>
  );
}

export default RecipeDetails;