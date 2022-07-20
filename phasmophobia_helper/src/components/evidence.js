import React from 'react';

import "../styles/evidence.css"

export default function Evidence(props) {
  
  function handleEvidenceClick(event) {
    event.preventDefault();
    props.evidenceSelector(props.evidence);
  }

  function checkIfEvidenceIsSelected() {
    return props.selectedEvidence.includes(props.evidence.id) ? true : false;
  }

  function checkGhostSelection(ghost) {
    if(ghost) {
      return ghost.evidences.includes(props.evidence.id) && !checkIfEvidenceIsSelected() ? true : false;
    }
  }

  return(
    <div className={`evidenceBox 
      ${checkIfEvidenceIsSelected() ? "selectedEvidence" : ""} 
      ${checkGhostSelection(props.selectedGhost) ? "evidencesForGhost" : "" }`} onClick={handleEvidenceClick} >
      {props.evidence.name}
    </div>
  );


}