import React from 'react';

function RecipeList({ recipes }) {
  if (recipes.length === 0) {
    return <h1>Sorry, there are no recipes.</h1>;
  }

  return (
    <div>
      {/* code for displaying recipes */}
    </div>
  );
}

export default RecipeList;
