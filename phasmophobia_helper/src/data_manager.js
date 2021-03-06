export function initGhosts() {
  var ghosts = [];

  var Spirit = { name: "Spirit", id: 1, evidences: [2,3,5], Str: "nothing", Weak: "Smudge" };
  var Wraith = { name: "Wraith", id: 2, evidences: [2,3,6], Str: "No footprints, Goes through walls", Weak: "Salt" };
  var Phantom = { name: "Phantom", id: 3, evidences: [1,4,6], Str: "Lowers sanity", Weak: "Photo" };
  var Poltergeist = { name: "Poltergeist", id: 4, evidences: [2,3,4], Str: "Throws stuff", Weak: "Empty rooms" };
  var Banshee = { name: "Banshee", id: 5, evidences: [1,3,6], Str: "Picks one target", Weak: "Crucifix" };
  var Jinn = { name: "Jinn", id: 6, evidences: [1,2,4], Str: "Longer distance -> faster", Weak: "Turn off power" };
  var Mare = { name: "Mare", id: 7, evidences: [2,4,6], Str: "Darkness", Weak: "Lights" };
  var Revenant = { name: "Revenant", id: 8, evidences: [1,3,5], Str: "Fast boi", Weak: "Hide behind a palm tree" };
  var Shade = { name: "Shade", id: 9, evidences: [1,4,5], Str: "Shy, hard to find", Weak: "Multiple players nearby" };
  var Demon = { name: "Demon", id: 10, evidences: [2,5,6], Str: "Attacks often", Weak: "Ouija Board won't lower sanity" };
  var Yurei = { name: "Yurei", id: 11, evidences: [4,5,6], Str: "Drains sanity", Weak: "Smudging stops it from wandering around" };
  var Oni = { name: "Oni", id: 12, evidences: [1,2,5], Str: "Active when near players, moves objects fast", Weak: "Easier to find and identify" };
  //var Unicel = { name: "Unicel", id: 13, evidences: [], Str: "nothing", Weak: "Smudge" };
  ghosts.push(Spirit, Wraith, Phantom, Poltergeist, Banshee, Jinn, Mare, Revenant, Shade, Demon, Yurei, Oni);

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