export function initGhosts() {
  var ghosts = [];

  var Spirit = { name: "Spirit", id: 1, evidences: [1,3,6], Str: "nothing", Weak: "Smudge" };
  var Wraith = { name: "Wraith", id: 2, evidences: [1,3,7], Str: "No footprints, Sees through doors", Weak: "Salt" };
  var Phantom = { name: "Phantom", id: 3, evidences: [3,5,7], Str: "Lowers sanity", Weak: "Photo" };
  var Poltergeist = { name: "Poltergeist", id: 4, evidences: [3,5,6], Str: "Throws stuff", Weak: "Empty rooms" };
  var Banshee = { name: "Banshee", id: 5, evidences: [2,5,7], Str: "Picks one target", Weak: "Crucifix" };
  var Jinn = { name: "Jinn", id: 6, evidences: [1,4,5], Str: "Longer distance -> faster", Weak: "Turn off power" };
  var Mare = { name: "Mare", id: 7, evidences: [2,3,6], Str: "Darkness", Weak: "Lights" };
  var Revenant = { name: "Revenant", id: 8, evidences: [2,4,6], Str: "Fast boi", Weak: "Hide behind a palm tree" };
  var Shade = { name: "Shade", id: 9, evidences: [1,4,6], Str: "Shy, hard to find", Weak: "Multiple players nearby" };
  var Demon = { name: "Demon", id: 10, evidences: [4,5,6], Str: "Attacks often", Weak: "Ouija Board ANSWERS won't lower sanity" };
  var Yurei = { name: "Yurei", id: 11, evidences: [2,4,7], Str: "Drains sanity", Weak: "Smudging stops it from wandering around" };
  var Oni = { name: "Oni", id: 12, evidences: [1,4,7], Str: "Active when near players", Weak: "Easier to find and identify" };
  //var Unicel = { name: "Unicel", id: 13, evidences: [], Str: "nothing", Weak: "Smudge" };
  var Goryo = { name: "Goryo", id: 13, evidences: [1,5,7], Str: "DOTS only through camera when no players around", Weak: "Doesn't wander far" };
  var Hantu = { name: "Hantu", id: 14, evidences: [2,4,5], Str: "Faster in low temperatures", Weak: "Slower in warmer areas" };
  var Myling = { name: "Myling", id: 15, evidences: [1,5,6], Str: "Quieter footsteps", Weak: "Causes paranormal sounds often" };
  var Obake = { name: "Obake", id: 16, evidences: [1,2,5], Str: "Rarely leaves traces from interactions", Weak: "Sometimes leaves unique evidence" };
  var Onryo = { name: "Onryo", id: 17, evidences: [2,3,4], Str: "Extinguishing a flame might cause a hunt", Weak: "Less likely to hunt when threatened" };
  var Raiju = { name: "Raiju", id: 18, evidences: [1,2,7], Str: "Faster near electrical devices", Weak: "Distrupts electronics" };
  var TheTwins = { name: "Twins", id: 19, evidences: [1,3,4], Str: "Both twins can hunt", Weak: "Often two interactions at the same time" };
  var Yokai = { name: "Yokai", id: 20, evidences: [2,3,7], Str: "Talking near it may cause hunt", Weak: "Limited hearing during hunt" };
  var Mimic = { name: "Mimic", id: 21, evidences: [3,4,5], Str: "Copies other ghosts", Weak: "Orbs follow it"};
  var Deogen = { name: "Deogen", id: 22, evidences: [3,6,7], Str: "Knows your location", Weak: "Slow when near the player"};
  var Moroi = { name: "Moroi", id: 23, evidences: [3,4,6], Str: "Faster at low player sanity", Weak: "Blind from smudging lasts longer"}
  var Thaye = { name: "Thaye", id: 24, evidences: [2,6,7], Str: "Active in the beginning", Weak: "Becomes quieter and slower"}
  ghosts.push(Spirit, Wraith, Phantom, Poltergeist, Banshee, Jinn, Mare, Revenant, Shade, Demon, Yurei, Oni, Goryo, Hantu, Myling, Obake,
    Onryo, Raiju, TheTwins, Yokai, Mimic, Deogen, Moroi, Thaye);

  return ghosts;
}

export function initEvidence() {
  var evidences = [];

  var emf5 = { name: "EMF Level 5", id: 1 };
  var ghostOrb = { name: "Ghost Orb", id: 2 };
  var spiritBox = { name: "Spirit Box", id: 3 };
  var freezingTemp = { name: "Freezing Temperatures", id: 4 };
  var fingerprints = { name: "Fingerprints", id: 5 };
  var ghostWriting = { name: "Ghost Writing", id: 6 };
  var dotsProjector = { name: "D.O.T.S Projector", id: 7}
  evidences.push(emf5, ghostOrb, spiritBox,  freezingTemp, fingerprints, ghostWriting, dotsProjector);

  return evidences;
}