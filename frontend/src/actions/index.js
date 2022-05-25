import jsonRecipe from "../apis/jsonRecipe";
import * as ActionTypes from '../Redux/actionTypes'

export const renderRecipes = () => async (dispatch, getState) => {
  const state = getState(); // { token = { token: 'alsdkjfalksjdfl' }, user, recepies } state of the store



    const response = await jsonRecipe.get("/recipes", {
      headers: {
        Authorization: `Bearer ${state.token.token}`
      }
    });



    dispatch({ type: ActionTypes.RENDER_RECIPES, payload: response.data });
  };

  
