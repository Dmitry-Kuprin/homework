import React from 'react';
import { useSelector } from 'react-redux';

function Favorites() {
  const favorites = useSelector((state: string[]) => state);
  const count = favorites.length;
  return (
    <>
      <div>Список избранного (Всего {count} фильмов)</div>
      {favorites.map(item => (
        <>
          <div>{item}</div>
        </>
      ))}
    </>
  )
}

export default Favorites;
