import jsonRecipe from "../apis/jsonRecipe";
import * as ActionTypes from "../Redux/actionTypes";

export const renderRecipes = () => async (dispatch, getState) => {
  const state = getState(); // { token = { token: 'alsdkjfalksjdfl' }, user, recepies } state of the store

  const response = await jsonRecipe.get("/recipes", {
    headers: {
      Authorization: `Bearer ${state.token.token}`,
    },
  });

  dispatch({ type: ActionTypes.RENDER_RECIPES, payload: response.data });
};

// --- ingredient query GET

export const renderIngredients = (id) => async (dispatch, getState) => {
  const state = getState(); // { token = { token: 'alsdkjfalksjdfl' }, user, recepies } state of the store

  const response = await jsonRecipe.get(`/ingredient/${id}`, {
    headers: {
      Authorization: `Bearer ${state.token.token}`,
    },
  });

  dispatch({ type: ActionTypes.RENDER_INGREDIENT, payload: response.data });
};

// --- add recipe query POST

export const addRecipe = (recipeName) => async (dispatch, getState) => {
  const state = getState();

  const data = { userId: state.user.id, recipeName: recipeName };

  const response = await jsonRecipe.post("recipe/add", data, {
    headers: {
      Authorization: `Bearer ${state.token.token}`,
    },
  });

  //   response.data = {
  //     "recipeName": "Marga",
  //     "recipeId": 69,
  //     "userId": 3
  // }

  dispatch({ type: ActionTypes.ADD_RECIPE, payload: response.data });
};
