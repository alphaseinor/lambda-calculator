import React from 'react';

export const NumberButton = props => {
  const classNameValue = props.number === '0'? `zero button dk_color` : `row_one button dk_color`


  return (
    <button 
      className={classNameValue} 
      key={props.id} 
      onClick={props.num}
      value={props.number}
    >
      {props.number}
    </button>
  );
};
