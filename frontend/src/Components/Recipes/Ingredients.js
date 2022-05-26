import { render } from "@testing-library/react";
import React from "react";
import { connect } from "react-redux";
import { renderIngredients } from "../../actions";







const  Ingredients = ({ingredients}) => {
   
if (ingredients == null ){
  
    return <div>add ingredient</div>
  
}
 
    return ( ingredients.map((ingredient) => {
       
        return (
          
         
            
            <div className="content">{ingredient.ingredientName}</div>
         
        )
    })

    );


   



  
}





const mapStateToProps = (state) =>{
    return {ingredients: state.ingredients}
    
    
   
  
 
}




export default connect(mapStateToProps)(Ingredients);