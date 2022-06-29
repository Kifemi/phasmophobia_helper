import React from 'react';

import "../styles/ghost.css";

export default function Ghost(props) {

  function handleGhostClick(event) {
    event.preventDefault();
    props.ghostSelector(props.ghost);
  }

  function checkIfGhostIsSelected() {
    return props.selectedGhost === props.ghost.id ? true : false;
  }

  return(
    <div className={`ghostBox
      ${checkIfGhostIsSelected() ? "selectedGhost" : ""} `} onClick={handleGhostClick}>
      {props.ghost.name}
      <ul className="ghostInfo">
        <li>Str: {props.ghost.Str}</li>
        <li>Weak: {props.ghost.Weak}</li>
      </ul>
    </div>
  );
}

// OLD CLASS BASED COMPONENT
// class Ghost extends Component {

//   handleGhostClick(event) {
//     this.props.ghostSelector(this.props.ghost);
//     event.preventDefault();
//   }

//   checkIfGhostIsSelected() {
//     if(this.props.selectedGhost === this.props.ghost.id) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   render() {
//     return(
//       <div className={`ghostBox
//         ${this.checkIfGhostIsSelected() ? "selectedGhost" : ""} `} onClick={this.handleGhostClick.bind(this)}>
//         {this.props.ghost.name}
//         <ul className="ghostInfo">
//           <li>Str: {this.props.ghost.Str}</li>
//           <li>Weak: {this.props.ghost.Weak}</li>
//         </ul>
//       </div>
//     );
//   };
// }

// export default Ghost;