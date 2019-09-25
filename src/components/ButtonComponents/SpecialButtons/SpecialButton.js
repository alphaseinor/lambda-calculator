import React from "react";

export const SpecialButton = (props) => {
  console.log(props)
  return (
    <button 
      className="special_button"
      key={props.id}
      value={props.special}
    >
    {props.special}  
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>

  );
};
