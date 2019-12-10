import React from "react";

export const OperatorButton = (props) => {
  return (
      
    <button className="one_col button" 
      key={props.id} 
      value= {props.operator.value}
      onClick={props.op}
    > 
        {props.operator.char}
    </button>
  );
};
