import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilms, removeFilm, setFilm } from './redux/actions';

function Films() {
  const dispatch = useDispatch();
  useMemo(() => dispatch(getFilms()), [dispatch]);
  const films = useSelector((state: any) => state.films.films);
  function addFilm(e: any) {
    dispatch(setFilm(e.target.name));
  }
  function deleteFilm(e: any) {
    dispatch(removeFilm(e.target.name));
  }

  return (
    <>
      {films?.map((item: any) => (
        <>
          <div>{item.name}</div>
          <div>{item.date}</div>
          <button name={item.name} onClick={addFilm}>Добавить в избранное</button>
          <button name={item.name} onClick={deleteFilm}>Удалить из избранного</button>
        </>
      ))}
    </>
  )
}

export default Films;
