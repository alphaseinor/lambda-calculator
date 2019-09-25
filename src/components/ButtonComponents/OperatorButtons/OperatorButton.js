import React from "react";

export const OperatorButton = (props) => {
  return (
      
    <button className="operator_button" 
      
      key={props.id} 
      value= {props.operator.value}> 
        {props.operator.char}
        {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};
