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
          formula: '0'
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
        formula: this.state.formula + calcValue
      })
      break;
    }
  }

  render() {
    return (
      <div className="App">
        <ResultDisplay/>
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
