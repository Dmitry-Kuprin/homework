import {
  SET_FILM
} from './action-types';

export function setFilm(film: string) {
  return {
    type: SET_FILM,
    payload: film,
  };
}
