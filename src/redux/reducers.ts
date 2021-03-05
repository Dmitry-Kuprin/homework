import { SET_FILMS, SET_FILMS_LOADING, SET_FILMS_ERROR, REMOVE_FILM_FROM_FAVORITES, SET_FILM_TO_FAVORITES } from './action-types';

const initialFilmsState = {
  films: [],
  loading: false,
  error: '',
};
export function filmReducer(state: any = initialFilmsState, action: any) {
  switch (action.type) {
    case SET_FILMS_LOADING:
      return {
        films: [],
        loading: true,
        error: '',
      }
    case SET_FILMS:
      return {
        films: action.payload,
        loading: false,
        error: '',
      };
    case SET_FILMS_ERROR:
      return {
        films: [],
        loading: false,
        error: action.payload,
      }
    default:
      return state;
  }
}

interface actionInt {
  type: string,
  payload: string,
}
export function favoritesReducer(state: any = [], action: actionInt) {
  switch (action.type) {
    case SET_FILM_TO_FAVORITES:
      if (!state.find((item: string) => item === action.payload)) {
        return [...state, action.payload];
      } else {
        return state;
      }
     case REMOVE_FILM_FROM_FAVORITES:
       return state.filter((item: string) => item !== action.payload)
    default:
      return state;
  }
}

export default {
  filmReducer,
};
