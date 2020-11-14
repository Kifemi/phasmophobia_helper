import React, { Component } from 'react';

import "../styles/evidence.css"

class Evidence extends Component {

  handleEvidenceClick(event) {
    this.props.evidenceSelector(this.props.evidence);
    event.preventDefault();
  }

  checkIfEvidenceIsSelected() {
    if(this.props.selectedEvidence.includes(this.props.evidence.id)) {
      return true;
    } else {
      return false;
    }
  }

  checkGhostSelection(ghost) {
    if(ghost) {
      if(ghost.evidences.includes(this.props.evidence.id) && !this.checkIfEvidenceIsSelected()) {
        return true;
      } else {
        return false;
      }
    }
    
  }

  render() {
    return(
      <div className={`evidenceBox 
        ${this.checkIfEvidenceIsSelected() ? "selectedEvidence" : ""} 
        ${this.checkGhostSelection(this.props.selectedGhost) ? "evidencesForGhost" : "" }`} onClick={this.handleEvidenceClick.bind(this)} >
        {this.props.evidence.name}
      </div>
    );
  };
}

export default Evidence;