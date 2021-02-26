import { SET_FILM } from './action-types';

interface actionInt {
  type: string,
  payload: string,
}

export function filmReducer(state = '', action: actionInt) {
  switch (action.type) {
    case SET_FILM:
      return action.payload;
    default:
      return state;
  }
}

export default {
  filmReducer,
};
