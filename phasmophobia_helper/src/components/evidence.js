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
// OLD CLASS BASED COMPONENT
// class Evidence extends Component {

//   handleEvidenceClick(event) {
//     this.props.evidenceSelector(this.props.evidence);
//     event.preventDefault();
//   }

//   checkIfEvidenceIsSelected() {
//     if(this.props.selectedEvidence.includes(this.props.evidence.id)) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   checkGhostSelection(ghost) {
//     if(ghost) {
//       if(ghost.evidences.includes(this.props.evidence.id) && !this.checkIfEvidenceIsSelected()) {
//         return true;
//       } else {
//         return false;
//       }
//     }
    
//   }

//   render() {
//     return(
//       <div className={`evidenceBox 
//         ${this.checkIfEvidenceIsSelected() ? "selectedEvidence" : ""} 
//         ${this.checkGhostSelection(this.props.selectedGhost) ? "evidencesForGhost" : "" }`} onClick={this.handleEvidenceClick.bind(this)} >
//         {this.props.evidence.name}
//       </div>
//     );
//   };


// }

// export default Evidence;