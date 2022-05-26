import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import {Token} from './token'
import {User} from './user'
import {Recipes} from './recipes'
import {Ingredients} from './ingredients'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/*
    Winners embrace hard work.
    They love the discipline of it, the trade-off they’re making to win.
    Losers, on the other hand, see it as punishment. And that’s the difference.
    -- Thomas Jefferson
*/

// IS MY IS. NEVER STOP LEARNING. -- Yosri weld sara. hhhh

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            token: Token,
            user: User,
            recipes: Recipes,
            ingredients: Ingredients
        }),
        composeEnhancers(applyMiddleware(thunk)) 
    );

    return store;
}