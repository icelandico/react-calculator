import React, { Component } from 'react';
import './App.css';
import '../ResultDisplay/ResultDisplay'
import ResultDisplay from '../ResultDisplay/ResultDisplay';
import Formula from '../Formula/Formula';
import Buttons from '../Buttons/Buttons';

class App extends Component {

  state = {
    formula: '0',
    result: null
  }

  handleButtonClick = (event) => {
    const calcValue = event.target.value;
    switch (calcValue) {
      case 'AC':
        this.setState({
          formula: '0',
          result: null
        });
      break;
      case 'equal':
        this.handleResult()
      break;
      case 'x':
        this.removeLast()  
      break;
      default:
      this.setState({
        formula: this.validateFormula(calcValue)
      })
      break;
    }
  }

  validateFormula = (value) => {
    switch (value) {
      case '0':
        return this.state.formula !== '0' ? this.state.formula + value : '0';
      case '.':
        return this.state.formula[-1] === value ? null : this.state.formula + value;
      default:
        return this.state.formula === '0' ?  value : this.state.formula + value;
    } 
  }

  handleResult = () => {
    const formula = this.state.formula;
    function checkEval(formula) {
      let result = '';
      try {
        eval(formula);
        result = eval(formula) 
      } catch (error) {
        if (error instanceof SyntaxError) {
          result = 'Syntax Error!'
        } else if (error instanceof ReferenceError) {
          result = 'Syntax Error!'
        }
      }
      return result
    }
    this.setState({
      result: checkEval(formula)
    })
  }

  removeLast = () => {
    const formulaLength = this.state.formula.length
    this.setState({
      formula: formulaLength === 1 ? '0' : this.state.formula.substring(0, formulaLength - 1)
    })
  }

  render() {
    return (
      <div className="App">
      <div className="display">
        <ResultDisplay
          result={this.state.result}
        />
        <Formula
          formula={this.state.formula}
        />      
      </div>
        <Buttons
          handleButtonClick={this.handleButtonClick}
        />
      </div>
    );
  }
}

export default App;
