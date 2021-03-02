import { REMOVE_FILM, SET_FILM } from './action-types';

interface actionInt {
  type: string,
  payload: string,
}

export function filmReducer(state: any = [], action: actionInt) {
  switch (action.type) {
    case SET_FILM:
      if (!state.find((item: string) => item === action.payload)) {
        return [... state, action.payload];
      } else {
        return state;
      }
     case REMOVE_FILM:
       return state.filter((item: string) => item !== action.payload)
    default:
      return state;
  }
}

export default {
  filmReducer,
};
