import React, {useState} from 'react';
import './App.css';
import { Numbers } from './components/ButtonComponents/NumberButtons/Numbers';
import {Operators} from './components/ButtonComponents/OperatorButtons/Operators'
import {Specials} from './components/ButtonComponents/SpecialButtons/Specials'
import {Display} from './components/DisplayComponents/Display.js'

import Logo from './components/DisplayComponents/Logo';

function App() {
  const [disp, dispState] = useState('0')
  const [decimal, decimalState] = useState(false)


  function num (x) {
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

            />
            <Numbers 
            num={num} />
          </div>
          <div className="flex wrap column one">
            <Operators />
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
