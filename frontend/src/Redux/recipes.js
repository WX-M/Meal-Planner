export const Recipes = (state = [], action) => {
    switch (action.type) {
      case "RENDER_RECIPES":
        return action.payload;
  
      default:
        return state;
    }
  };