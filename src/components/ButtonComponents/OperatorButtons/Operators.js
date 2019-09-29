import React, {useState} from "react";
import {operators} from "../../../data"
import {OperatorButton} from "./OperatorButton"


export const Operators = () => {
  const [ops] = useState(operators)

  return (
    <>
       {
         ops.map((op, index) => {
           return <OperatorButton key={index} operator={op} />
         })
       }
    </>
  );
};
