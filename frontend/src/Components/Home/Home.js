import { Link } from "react-router-dom";
import Ingredients from "../Recipes/Ingredients";
import Recipes from "../Recipes/Recipes";
import React from "react";
import { useState } from "react";

function Home(props) {
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <h2> My recipes</h2>
          <Recipes setSelectedRecipeId={setSelectedRecipeId} />
        </div>

        <div className="column eight wide">
          <Ingredients selectedRecipeId={selectedRecipeId} />
        </div>
      </div>
    </div>
  );
}

export default Home;
