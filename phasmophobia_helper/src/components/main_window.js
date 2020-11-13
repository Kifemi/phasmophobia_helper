import React, { Component } from 'react';

import { initGhosts, initEvidence } from '../data_manager';
import Evidence from './evidence';
import Ghost from './ghost';

import "../styles/main_window.css";

class MainWindow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      evidence: initEvidence(),
      ghosts: initGhosts(),
      selectedEvidence: [],
    };
  }

  handleEvidenceSelection = (evidence) => {
    if(this.state.selectedEvidence.includes(evidence.id)) {
      const index = this.state.selectedEvidence.indexOf(evidence.id);
      if(index > -1) {
        let arrayCopy = this.state.selectedEvidence.slice();
        arrayCopy.splice(index, 1);
        this.setState({ selectedEvidence: arrayCopy });
      };
    } else {
      let arrayCopy = this.state.selectedEvidence.slice();
      arrayCopy.push(evidence.id);
      this.setState({ selectedEvidence: arrayCopy });
    };
  }

  printTile() {
    console.log(this.state.selectedEvidence);
  }

  render() {
    return (
      <div className='container'>
        <div className="row evidences">
          {this.state.evidence.map(evidence => {
            return <Evidence key={evidence.id} evidence={evidence} evidenceSelector={this.handleEvidenceSelection} 
              selectedEvidence={this.state.selectedEvidence} />;
          })}
        </div>
        <div className="row ghosts">
          {this.state.ghosts.map(ghost => {
            return <Ghost key={ghost.id} ghost={ghost} />;
          })}
        </div>
      </div>
    );
  };
}

export default MainWindow;