import * as ActionTypes from "./actionTypes";

export const Recipes = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.RENDER_RECIPES:
      return action.payload; // action.payload = [{}, {},...]

    case ActionTypes.ADD_RECIPE:
      return [...state, action.payload]; // [{}, {}, {}, {this is the new one}]
    // array and object desctructure in javascript
    default:
      return state;
  }
};
