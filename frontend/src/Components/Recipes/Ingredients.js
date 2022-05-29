import { render } from "@testing-library/react";
import React, { useState } from "react";
import { connect } from "react-redux";

const Ingredients = ({ ingredients, selectedRecipeId }) => {
  const [inputValue, setInputValue] = useState("");

  if (ingredients == null) {
    return <div>add ingredient</div>;
  }

  const onInputChange = (event) => {
    setInputValue(event.target.value);
    // e.target.value = ingredientName = inputValue
  };

  const renderIngredients = ingredients.map((ingredient) => {
    return <div className="content">{ingredient.ingredientName}</div>;
  });

  const onButtonClick = () => {
    console.log("recipe id = ", selectedRecipeId);
    console.log("input value = ", inputValue);
    console.log(
      "action creators will be called here to add ingredent in the database"
    );
  };

  return (
    <div>
      <div>{renderIngredients}</div>
      <div className="ui divided list"></div>
      <div className="item">
        <label className="sr-only">Recipe name</label>
        <input
          type="text"
          name="recipeName"
          className="form-control"
          placeholder="Ingredient name"
          onChange={onInputChange}
          value={inputValue}
        />
        <div className="right floated content">
          <button className="ui button primary" onClick={onButtonClick}>
            Add Ingredient
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { ingredients: state.ingredients };
};

export default connect(mapStateToProps)(Ingredients);
