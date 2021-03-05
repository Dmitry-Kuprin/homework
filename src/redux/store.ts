import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { filmReducer, favoritesReducer } from './reducers';


const store = createStore(combineReducers({
  films: filmReducer,
  favorites: favoritesReducer,
}),
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

export default store;
