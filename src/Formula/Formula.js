import React, { Component } from 'react';

class Formula extends Component {
  render() {
    return (
      <div className="formula">
        <p>{this.props.formula}</p>
      </div>
    )
  }
}

export default Formula