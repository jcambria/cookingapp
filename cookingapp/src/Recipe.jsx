import React, { useState } from 'react';
import { FaBatteryEmpty, FaHeart } from "react-icons/fa";
import { AiOutlineHeart, IconName } from "react-icons/ai";

import './recipe.css'

function Recipe() {
  const [query, setQuery] = useState('');
  
  const [recipes, setRecipes] = useState([
    {
      name: 'Spaghetti Bolognese',
      ingredients: ['spaghetti', 'ground beef', 'tomato sauce', 'onion', 'garlic'],
      directions: '1. Cook spaghetti according to package directions. 2. Brown ground beef in a large skillet over medium-high heat. 3. Add onion and garlic and cook until softened. 4. Add tomato sauce and simmer for 10 minutes. 5. Serve over spaghetti.',
    },
    {
      name: 'Grilled Cheese Sandwich',
      ingredients: ['bread', 'cheddar cheese', 'butter'],
      directions: '1. Butter one side of each slice of bread. 2. Place cheese between slices of bread, with buttered sides facing out. 3. Cook in a skillet over medium heat until bread is toasted and cheese is melted, about 2-3 minutes per side.',
    },
    {
      name: 'Chocolate Chip Cookies',
      ingredients: ['flour', 'butter', 'sugar', 'brown sugar', 'eggs', 'vanilla extract', 'baking soda', 'salt', 'chocolate chips'],
      directions: '1. Preheat oven to 375 degrees F. 2. Cream butter and sugars in a large bowl until light and fluffy. 3. Beat in eggs and vanilla. 4. In a separate bowl, combine flour, baking soda, and salt. 5. Gradually add flour mixture to butter mixture and mix well. 6. Stir in chocolate chips. 7. Drop by rounded tablespoonfuls onto ungreased baking sheets. 8. Bake for 8-10 minutes or until lightly browned. 9. Cool on wire racks.',
    },
    {
      name: 'tim',
      ingredients: ['hi,bye'],
      directions: '1.'
        

    }
  ]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleChange = (event) => {
    setQuery(event.target.value);
    setSelectedRecipe(null); // Reset the selected recipe when the query changes
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const matchingRecipes = recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(query.toLowerCase()) ||
      recipe.ingredients.some(ingredient =>
        ingredient.toLowerCase().includes(query.toLowerCase())
      )
    );
    if (matchingRecipes.length > 0) {
      setSelectedRecipe(matchingRecipes[0]);
    } else {
      setSelectedRecipe(null);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="What would you like to eat..." value={query} onChange={handleChange} />
        <button type="submit">GO</button>
        if(recipe)
      </form>
      {selectedRecipe && (
        <div>
          <h2>{selectedRecipe.name}</h2>
          <p>Ingredients: {selectedRecipe.ingredients.join(', ')}</p>
          <p>Directions: {selectedRecipe.directions}</p>
          <p id='like'>Like <button id='heartbutton'><AiOutlineHeart /></button> </p>
        </div>
      )}

    </div>
    
  );
  <button>View Favorites</button>
  
}

export default Recipe;