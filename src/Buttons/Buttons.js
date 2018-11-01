import React, { Component } from 'react';

class Buttons extends Component {
  render() {
    return(
      <div className="buttons-container">
        <button id="multiply" value="multiply">*</button>
        <button id="divide" value="divide">/</button>
        <button id="add" value="add">+</button>
        <button id="subtract" value="subtract">-</button>
        <button id="clear" value="AC">AC</button>
        <button id="decimal" value="decimal">.</button>
        <button id="equal" value="equal">=</button>
 
        <button id="one" value="1">1</button>
        <button id="two" value="2">2</button>
        <button id="three" value="3">3</button>
        <button id="four" value="4">4</button>
        <button id="five" value="5">5</button>
        <button id="six" value="6">6</button>
        <button id="seven" value="7">7</button>
        <button id="eight" value="8">8</button>
        <button id="nine" value="9">9</button>
        <button id="zero" value="0">0</button>
      </div>
    )
  }
}

export default Buttons