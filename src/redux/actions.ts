import {
  REMOVE_FILM, SET_FILM
} from './action-types';

export function setFilm(film: string) {
  return {
    type: SET_FILM,
    payload: film,
  };
}

export function removeFilm(film: string) {
  return {
    type: REMOVE_FILM,
    payload: film,
  };
}
