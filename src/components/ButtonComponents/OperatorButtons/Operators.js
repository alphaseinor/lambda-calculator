import React, {useState} from "react";
import {operators} from "../../../data"
import {OperatorButton} from "./OperatorButton"


export const Operators = (props) => {
  const [ops] = useState(operators)

  return (
    <>
       {
         ops.map((op, index) => {
           return <OperatorButton key={index} operator={op}op={props.op}  />
         })
       }
    </>
  );
};
