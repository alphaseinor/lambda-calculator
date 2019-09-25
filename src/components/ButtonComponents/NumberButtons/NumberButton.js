import React from 'react';

export const NumberButton = props => {
  const classNameValue = props.number === '0'? `zero button dk_color` : `row_one button dk_color`


  return (
    <button className={classNameValue} key={props.id}>
      {props.number}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};
