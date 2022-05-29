import { render } from "@testing-library/react";
import React from "react";
import { connect } from "react-redux";
import { addRecipe, renderRecipes, renderIngredients } from "../../actions";

class Recipes extends React.Component {
  state = {
    recipeName: "",
  };

  componentDidMount() {
    this.props.renderRecipes();
  }

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  renderList() {
    return this.props.recipes.map((recipe) => {
      return (
        <div className="item" key={recipe.recipeId}>
          <div className="right floated content">
            <button
              onClick={() => {
                this.props.renderIngredients(recipe.recipeId);
                this.props.setSelectedRecipeId(recipe.recipeId);
              }}
              className="ui button primary"
            >
              {" "}
              Ingredients{" "}
            </button>
          </div>
          <div className="content">{recipe.recipeName}</div>
        </div>
      );
    });
  }

  handleSubmit = () => {
    this.props.addRecipe(this.state.recipeName);
  };

  render() {
    return (
      <div>
        <div className="ui divided list">{this.renderList()}</div>
        <div className="item">
          <label className="sr-only">Recipe name</label>
          <input
            type="text"
            id="recipeName"
            name="recipeName"
            className="form-control"
            placeholder="Recipe name"
            v-model="recipeName"
            onChange={this.handleInputChange}
            required
          />
          <div className="right floated content">
            <button className="ui button primary" onClick={this.handleSubmit}>
              Add Recipe
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state.user.id);
  // you will find userId in this.props.userId inside the component.

  return { recipes: state.recipes, userId: state.user.id };
};

export default connect(mapStateToProps, {
  renderRecipes: renderRecipes,
  renderIngredients: renderIngredients,
  addRecipe: addRecipe,
})(Recipes);
