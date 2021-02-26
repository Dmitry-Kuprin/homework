import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { filmReducer } from './reducers';
import thunkMiddleware from 'redux-thunk';

const preloadedState = window.localStorage.getItem('redux') ?? '{}';

const store = createStore((filmReducer),
  JSON.parse(preloadedState),
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

store.subscribe(() => {
  window.localStorage.setItem('redux', JSON.stringify(store.getState()));
});

export default store;
