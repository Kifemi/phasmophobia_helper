import React, { Component } from 'react';

import { initGhosts, initEvidence } from '../data_manager';
import Evidence from './evidence';
import Ghost from './ghost';
import Timer from './timer';

import "../styles/main_window.css";

class MainWindow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      evidence: initEvidence(),
      ghostList: initGhosts(),
      selectedEvidence: [],
      selectedGhost: 0,
      possibleGhosts: initGhosts(),
      possibleEvidence: initEvidence(),
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

  handleGhostSelection = (ghost) => {
    if(this.state.selectedGhost === ghost.id) {
      this.setState({ selectedGhost: 0 });
    } else {
      let selectedGhostTemp = ghost.id;
      this.setState({ selectedGhost: selectedGhostTemp });
    }
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
    let possibleEvidenceTemp = [];
    this.state.evidence.map(evidence => {
      if(possibleEvidenceSet.has(evidence.id)) {
        possibleEvidenceTemp.push(evidence);
      };
    });
    this.setState({ possibleEvidence: possibleEvidenceTemp });
  }

  handleClear(event) {
    this.setState({ selectedEvidence: [], selectedGhost: 0,
      ghostList: initGhosts() }, this.checkPossibleGhosts);
    event.preventDefault();
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
            return <Evidence key={evidence.id} evidence={evidence} evidenceSelector={this.handleEvidenceSelection} 
              selectedEvidence={this.state.selectedEvidence} selectedGhost={this.state.ghostList[this.state.selectedGhost - 1]} />;
          })}
        </div>
        <div className="row ghosts">
          {this.state.possibleGhosts.map(ghost => {
            return <Ghost key={ghost.id} ghost={ghost} ghostSelector={this.handleGhostSelection} 
              selectedGhost={this.state.selectedGhost} />;
          })}
        </div>
      </div>
    );
  };
}

export default MainWindow;