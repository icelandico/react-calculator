import React, { Component } from 'react';
import './App.css';
import './ResultDisplay/ResultDisplay'
import ResultDisplay from './ResultDisplay/ResultDisplay';
import Formula from './Formula/Formula';
import Buttons from './Buttons/Buttons';

class App extends Component {

  state = {
    formula: '',
    result: null
  }

  handleButtonClick = (event) => {
    const calcValue = event.target.value;

    switch (calcValue) {
      case 'AC':
        this.setState({
          formula: '',
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
        formula: (!this.state.formula && !parseInt(calcValue) ? '' : this.state.formula + calcValue)
      })
      break;
    }
  }

  handleResult = () => {
    const formula = this.state.formula;
    this.setState({
      result: eval(formula)
    })
  }

  removeLast = () => {
    const formulaLength = this.state.formula.length
    this.setState({
      formula: this.state.formula.substring(0, formulaLength - 1)
    })
  }

  render() {
    return (
      <div className="App">
        <ResultDisplay
          result={this.state.result}
        />
        <Formula
          formula={this.state.formula}
        />
        <Buttons
          handleButtonClick={this.handleButtonClick}
        />
      </div>
    );
  }
}

export default App;
