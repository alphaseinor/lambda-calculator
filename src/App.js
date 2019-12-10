import React, {useState} from 'react';
import './App.css';
import { Numbers } from './components/ButtonComponents/NumberButtons/Numbers';
import {Operators} from './components/ButtonComponents/OperatorButtons/Operators'
import {Specials} from './components/ButtonComponents/SpecialButtons/Specials'
import {Display} from './components/DisplayComponents/Display.js'

import Logo from './components/DisplayComponents/Logo';

function App() {
  const [disp, dispState] = useState('0') //display for calculator
  const [decimal, decimalState] = useState(false) //decimal is only used once
  const [dispMem, dispMemState] = useState('') //memory for when an operator is pushed
  const [op, opState] =useState('') //stores the current operator
  const [spec, specialState] = useState('');

  function special (x){
    let special = x.target.value; 
    console.log(special)
  }


  function ops (x) {
    let operator = x.target.value;
    console.log(`x: ${operator} dispMem: ${dispMem} disp: ${disp}, operator: ${op}, decimal: ${decimal}`);

    const mathsAreFun = {
      '+': function (x,y){ return x+y},
      '-': function (x,y) {return x-y},
      '*': function (x,y) {return x*y},
      '/': function (x,y) {return x/y}
    }

    //is this the 1st or nth time op was pushed?
    if(op === ''){
      console.log('first')
      //first time op is pushed
      //Set op to operator
      if(operator === '=' ){
        //do nothing, this is the first time through
        console.log(`don't hit = yet`)
      }else{
        //copy disp state to dispMem
        dispMemState(disp)
        //set the operator
        opState(operator)   
        //reset display
        dispState('0')
        //reset decimal
        decimalState(false)
      }
    }else{
      console.log('second')
      //more than first time op is pushed
      if(operator === '='){
        //do the stored operation with disp and dispMem, and dispState the total. 
        dispState(`${mathsAreFun[op](parseFloat(dispMem), parseFloat(disp))}`)
        dispMemState('')
        opState('')
        decimalState(false)
      }else{
        dispMemState(`${mathsAreFun[op](parseFloat(dispMem), parseFloat(disp))}`)
        //set the operator
        opState(operator)   
        //reset display
        dispState('0')
        //reset decimal
        decimalState(false)
      }
    }
  }

  function nums (x) { //stores numbers into display
    let digit = x.target.value;
    //console.log(digit);
    if(decimal === false){
      if(digit === '.'){ 
        //if the digit is a '.' then prevent more '.' from being added to the display in future key presses. 
        decimalState(true)
      }
      //update state for display without conditions
      dispState(disp === '0' ? digit : disp + digit)
    }else{
      //decimal has been pressed... no more decimals allowed, also don't need to check for a leading 0 because it cannot be 0.
      digit === '.' ? dispState(disp) : dispState(disp + digit)
    }
  }

  return (
    <div className="container">
      <Logo />
      <div className="App">
        <div className="Display">
          <Display
            display={disp}
          />
        </div>
        <div className="flex row height">
          <div className="flex wrap three">
            <Specials 
              specials={special}
            />
            <Numbers 
            num={nums} />
          </div>
          <div className="flex wrap column one">
            <Operators 
              op={ops}
            />
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
