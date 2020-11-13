export function initGhosts() {
  var ghosts = [];

  var Spirit = { name: "Spirit", id: 1, evidences: [2,3,5], information: "" };
  var Wraith = { name: "Wraith", id: 2, evidences: [2,3,6], information: "" };
  var Phantom = { name: "Phantom", id: 3, evidences: [1,4,6], information: "" };
  var Poltergeist = { name: "Poltergeist", evidences: [2,3,4], id: 4, information: "" };
  var Banshee = { name: "Banshee", id: 5, evidences: [1,3,6], information: "" };
  var Jinn = { name: "Jinn", id: 6, evidences: [1,2,4], information: "" };
  var Mare = { name: "Mare", id: 7, evidences: [2,4,6], information: "" };
  var Revenant = { name: "Revenant", id: 8, evidences: [1,3,5], information: "" };
  var Shade = { name: "Shade", id: 9, evidences: [1,4,5], information: "" };
  var Demon = { name: "Demon", id: 10, evidences: [2,5,6], information: "" };
  var Yurei = { name: "Yurei", id: 11, evidences: [4,5,6], information: "" };
  var Oni = { name: "Oni", id: 12, evidences: [1,2,5], information: "" };
  var Unicel = { name: "Unicel", id: 13, evidences: [], information: "" };
  ghosts.push(Spirit, Wraith, Phantom, Poltergeist, Banshee, Jinn, Mare, Revenant, Shade, Demon, Yurei, Oni, Unicel);

  return ghosts;
}

export function initEvidence() {
  var evidences = [];

  var emf5 = { name: "EMF Level 5", id: 1 };
  var spiritBox = { name: "Spirit Box", id: 2 };
  var fingerprints = { name: "Fingerprints", id: 3 };
  var ghostOrb = { name: "Ghost Orb", id: 4 };
  var ghostWriting = { name: "Ghost Writing", id: 5 };
  var freezingTemp = { name: "Freezing Temperatures", id: 6 };
  evidences.push(emf5, spiritBox, fingerprints, ghostOrb, ghostWriting, freezingTemp);

  return evidences;
}