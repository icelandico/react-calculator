import React, { Component } from 'react';
import './App.css';
import './ResultDisplay/ResultDisplay'
import ResultDisplay from './ResultDisplay/ResultDisplay';
import Formula from './Formula/Formula';
import Buttons from './Buttons/Buttons';

class App extends Component {

  render() {
    return (
      <div className="App">
        <ResultDisplay/>
        <Formula />
        <Buttons />
      </div>
    );
  }
}

export default App;
