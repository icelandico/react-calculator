import React, { Component } from 'react';
import './App.css';
import './ResultDisplay/ResultDisplay'
import ResultDisplay from './ResultDisplay/ResultDisplay';
import Formula from './Formula/Formula'

class App extends Component {

  render() {
    return (
      <div className="App">
        <ResultDisplay/>
        <Formula />
      </div>
    );
  }
}

export default App;
