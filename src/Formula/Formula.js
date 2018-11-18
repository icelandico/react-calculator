import React, { Component } from 'react';

class Formula extends Component {
  render() {
    return (
      <div className="display-item formula">
        <p>{this.props.formula || 0}</p>
      </div>
    )
  }
}

export default Formula