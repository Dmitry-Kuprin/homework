import React, { useCallback, useEffect } from 'react';

function Arrows() {
  useEffect(() => {
    document.addEventListener('keydown', onKeypress);
    return () => {
      document.removeEventListener('keydown', onKeypress);
    };
  }, []);

  const onKeypress = useCallback((e: any) => {
    e.preventDefault();
    if (e.code === 'ArrowUp' || e.target.id === 'up') {
      console.log(111);
    }
    if (e.code === 'ArrowDown' || e.target.id === 'down') {
      console.log(222);
    }
  }, [])

  return (
  <div className="wrapper">
    <div className="button" id={'up'} onClick={onKeypress}>123</div>
    <div className="button" id={'down'} onClick={onKeypress} >345</div>
  </div>
  )
}

export default Arrows;
