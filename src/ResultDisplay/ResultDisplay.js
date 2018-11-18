import React, { Component } from 'react';

class ResultDisplay extends Component {
  render() {
    return (
      <div 
        id="display"
        className="display-item result-display"
      >
        <p>{this.props.result || 0}</p>
      </div>
    )
  }
}

export default ResultDisplay