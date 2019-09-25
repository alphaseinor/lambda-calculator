import React from 'react';

export const NumberButton = props => {
  const cNValue = props.number == 0? `zero button dk_color` : `row_one button dk_color`


  return (
    <button className={cNValue} key={props.id}>
      {props.number}
      {console.log(props)}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};
