import getList from './api';
import {
  SET_FILMS, SET_FILMS_LOADING, SET_FILMS_ERROR, REMOVE_FILM_FROM_FAVORITES, SET_FILM_TO_FAVORITES
} from './action-types';

export function getFilms() {
  return async function (dispatch: any) {
    dispatch(loadingFilms());
    try {
      dispatch(setFilms(await getList()));
    } catch (err) {
      dispatch(errorFilm(err));
    }
  }
}

export function setFilms(films: any) {
  return {
    type: SET_FILMS,
    payload: films,
  }
};

export function loadingFilms() {
  return {
    type: SET_FILMS_LOADING,
  }
}

export function errorFilm(err: any) {
  return {
    type: SET_FILMS_ERROR,
    payload: err,
  }
}

export function setFilm(film: string) {
  return {
    type: SET_FILM_TO_FAVORITES,
    payload: film,
  };
}

export function removeFilm(film: string) {
  return {
    type: REMOVE_FILM_FROM_FAVORITES,
    payload: film,
  };
}
