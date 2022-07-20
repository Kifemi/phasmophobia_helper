import React, { Component } from 'react';

import { ghosts, evidences } from '../data_manager';
import Evidence from './evidence';
import Ghost from './ghost';
import Timer from './timer';

import "../styles/main_window.css";

class MainWindow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      evidenceList: evidences,
      ghostList: ghosts,
      selectedEvidence: [],
      selectedGhost: 0,
      possibleGhosts: ghosts,
      possibleEvidence: evidences
    };
  }

  handleEvidenceSelection = (evidence) => {
    if(this.state.selectedEvidence.includes(evidence.id)) {
      const index = this.state.selectedEvidence.indexOf(evidence.id);
      if(index > -1) {
        let arrayCopy = this.state.selectedEvidence.slice();
        arrayCopy.splice(index, 1);
        this.setState({ selectedEvidence: arrayCopy, selectedGhost: 0 }, this.checkPossibleGhosts);
      };
    } else {
      let arrayCopy = this.state.selectedEvidence.slice();
      arrayCopy.push(evidence.id);
      this.setState({ selectedEvidence: arrayCopy, selectedGhost: 0 }, this.checkPossibleGhosts);
    };
  }

  handleGhostSelection = (ghostId) => {
    const newGhostId = this.state.selectedGhost === ghostId ? 0 : ghostId;
    this.setState({ selectedGhost: newGhostId });
  }

  checkPossibleGhosts() {
    let possibleGhostsTemp = [];
    for (let i = 0; i < this.state.ghostList.length; i++) {
      let isPossible = true;
      for (let j = 0; j < this.state.selectedEvidence.length; j++) {
        if(!this.state.ghostList[i].evidences.includes(this.state.selectedEvidence[j])) {
          isPossible = false;
        };
      }
      if(isPossible){
        possibleGhostsTemp.push(this.state.ghostList[i]);
      }
    }
    this.setState({ possibleGhosts: possibleGhostsTemp }, this.checkPossibleEvidence);
  }

  checkPossibleEvidence() {
    let possibleEvidenceSet = new Set();
    this.state.possibleGhosts.forEach(ghost => ghost.evidences.forEach(evidence => possibleEvidenceSet.add(evidence)));
    let possibleEvidenceTemp = this.state.evidenceList.filter(evidence => possibleEvidenceSet.has(evidence.id));
    this.setState({ possibleEvidence: possibleEvidenceTemp });
  }

  handleClear(event) {
    event.preventDefault();
    this.setState({ 
      selectedEvidence: [], 
      selectedGhost: 0,
      ghostList: ghosts 
    }, this.checkPossibleGhosts);
  }

  render() {
    return (
      <div className='container'>
        <div className="row tools">
          <Timer />
          <button className="btn clearButton" onClick={this.handleClear.bind(this)}>Clear Evidence</button>
        </div>
        <div className="row evidences">
          {this.state.possibleEvidence.map(evidence => {
            return <Evidence 
              key={evidence.id} 
              evidence={evidence} 
              evidenceSelector={this.handleEvidenceSelection} 
              selectedEvidence={this.state.selectedEvidence} 
              selectedGhost={this.state.ghostList[this.state.selectedGhost - 1]} 
            />;
          })}
        </div>
        <div className="row ghosts">
          {this.state.possibleGhosts.map(ghost => {
            return <Ghost 
              key={ghost.id} 
              ghost={ghost} 
              ghostSelector={this.handleGhostSelection} 
              selectedGhost={this.state.selectedGhost} 
            />;
          })}
        </div>
      </div>
    );
  };
}

export default MainWindow;