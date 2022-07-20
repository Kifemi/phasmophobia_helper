import React from 'react';

import "../styles/ghost.css";

export default function Ghost(props) {

  function handleGhostClick(event) {
    event.preventDefault();
    props.ghostSelector(props.ghost.id);
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