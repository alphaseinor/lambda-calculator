import React from "react";

export const NumberButton = (props) => {
  return (
    <button 
      className="number_button" 
    >{props.key}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>

  );
};
