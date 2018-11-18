import React, { Component } from 'react';
import './../Buttons/Buttons.css';

class Buttons extends Component {

  handleButtonClick = (e) => {
    this.props.handleButtonClick(e);
  }
  render() {
    return(
      <div
        onClick={(event) => this.handleButtonClick(event)}
        className="buttons-container"
      >
        <button className="single-button" id="clear" value="AC">AC</button>
        <button className="single-button" id="back" value="x">Delete</button>
        
        <button className="single-button" id="multiply" value="*">*</button>
        <button className="single-button" id="divide" value="/">/</button>
        <button className="single-button" id="add" value="+">+</button>
        <button className="single-button" id="subtract" value="-">-</button>

        <button className="single-button" id="decimal" value=".">.</button>

        <button className="single-button" id="equal" value="equal">=</button>
 
        <button className="single-button" id="one" value="1">1</button>
        <button className="single-button" id="two" value="2">2</button>
        <button className="single-button" id="three" value="3">3</button>
        <button className="single-button" id="four" value="4">4</button>
        <button className="single-button" id="five" value="5">5</button>
        <button className="single-button" id="six" value="6">6</button>
        <button className="single-button" id="seven" value="7">7</button>
        <button className="single-button" id="eight" value="8">8</button>
        <button className="single-button" id="nine" value="9">9</button>
        <button className="single-button" id="zero" value="0">0</button>
      </div>
    )
  }
}

export default Buttons