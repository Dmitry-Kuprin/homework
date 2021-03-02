import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFilm, setFilm } from './redux/actions';

function Films() {
  const films = [{name: 'Mist', date: '12.05.2004'}, {name: '1408', date: '8.11.2016'}, {name: 'Alien', date: '22.09.1978'}]
  const dispatch = useDispatch();
  function addFilm(e: any) {
    dispatch(setFilm(e.target.name));
  }
  function deleteFilm(e: any) {
    dispatch(removeFilm(e.target.name));
  }

  return (
    <>
      {films.map(item => (
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
