import React from 'react';
import { useSelector } from 'react-redux';

function Favorites() {
  const favorites = useSelector((state: any) => state.favorites);
  const count = favorites?.length;
  return (
    <>
      <div>Список избранного (Всего {count} фильмов)</div>
      {favorites?.map((item: any) => (
        <>
          <div>{item}</div>
        </>
      ))}
    </>
  )
}

export default Favorites;
