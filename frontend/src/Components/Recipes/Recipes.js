import { render } from "@testing-library/react";
import React from "react";
import { connect } from "react-redux";
import { renderRecipes } from "../../actions";
import { renderIngredients } from "../../actions";







class Recipes extends React.Component {
    componentDidMount (){
        this.props.renderRecipes();
      

      
    }

  renderList(){
    return this.props.recipes.map((recipe) => {
       
        return (
            <div className="item" key={recipe.recipeId}> 
            <div className="right floated content">
            <button onClick={() => this.props.renderIngredients(recipe.recipeId)} className="ui button primary">Ingredients</button>
            </div>
            <div className="content">{recipe.recipeName}</div>
            </div>
        )
    })
}


    render(){
        return <div className="ui divided list">{this.renderList()}</div>
        
    
    }
}





const mapStateToProps = (state) =>{
    return {recipes: state.recipes}
    
   
  
 
}




export default connect(mapStateToProps, {
    renderRecipes: renderRecipes,
    renderIngredients: renderIngredients,
    

    
})(Recipes);