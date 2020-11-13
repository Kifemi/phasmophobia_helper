import React, { Component } from 'react';

import "../styles/ghost.css";

class Ghost extends Component {
  render() {
    return(
      <div className="ghostBox">
        {this.props.ghost.name}
      </div>
    );
  };
}

export default Ghost;