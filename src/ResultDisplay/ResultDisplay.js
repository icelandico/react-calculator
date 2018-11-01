import React, { Component } from 'react';

class ResultDisplay extends Component {
  render() {
    return (
      <div className="result-display">
        <p>{this.props.result}</p>
      </div>
    )
  }
}

export default ResultDisplay