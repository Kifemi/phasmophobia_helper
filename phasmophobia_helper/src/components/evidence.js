import React, { Component } from 'react';

import "../styles/evidence.css"

class Evidence extends Component {

  handleClick(event) {
    this.props.evidenceSelector(this.props.evidence);
    event.preventDefault();
  }

  checkIfSelected() {
    if(this.props.selectedEvidence.includes(this.props.evidence.id)) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return(
      <div className={`evidenceBox 
        ${this.checkIfSelected() ? "selected" : ""} `} onClick={this.handleClick.bind(this)} >
        {this.props.evidence.name}
      </div>
    );
  };
}

export default Evidence;