import React, { useCallback } from 'react';

function Arrows() {
  const onKeypress = useCallback((e: any) => {
    e.preventDefault();
    if (e.target.id === 'up' || e.code === 'ArrowUp') {
      console.log(111);
    }
    if (e.target.id === 'down' || e.code === 'ArrowDown') {
      console.log(222);
    }
  }, [])

  const addEventList = useCallback((e: any) => {
    const arrowWrapper = e.target;
    arrowWrapper?.addEventListener('keydown', onKeypress);
    return () => {
      arrowWrapper?.removeEventListener('keydown', onKeypress);
    };
  }, [onKeypress]);

  return (
  <div className="wrapper" tabIndex={0} onKeyDown={addEventList}>
    <div className={"buttonUp"} id={'up'} onClick={onKeypress}></div>
    <div className="buttonDown" id={'down'} onClick={onKeypress} ></div>
  </div>
  )
}

export default Arrows;
