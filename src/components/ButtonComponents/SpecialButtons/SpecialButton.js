import React from "react";

export const SpecialButton = (props) => {
  return (
    <button 
      className="row_one button med_color"
      key={props.id}
      value={props.special}
    >
    {props.special}  
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>

  );
};
