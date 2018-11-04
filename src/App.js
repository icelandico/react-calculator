import React, { Component } from 'react';
import './App.css';
import './ResultDisplay/ResultDisplay'
import ResultDisplay from './ResultDisplay/ResultDisplay';
import Formula from './Formula/Formula';
import Buttons from './Buttons/Buttons';

class App extends Component {

  state = {
    formula: ''
  }

  handleButtonClick = (event) => {
    this.setState({
      formula: this.state.formula += event.target.value
    })
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
