export const Ingredients = (state = null, action) => {
    switch (action.type) {
      case "RENDER_INGREDIENT":
        return action.payload;
  
      default:
        return state;
    }
  };