/*

Based on: http://www.dailyminimal.com/post/172999683369/no-142-a-new-geometric-design-every-day
Daily Minimal.

*/

var solar;

function setup () {
  solar = new Solar ();
  solar.setup ();
  solar.draw ();
}

function draw () {
  solar.draw ();
}

document.addEventListener ('keydown', enterPressed, false);

function enterPressed (evt) {
  if (evt.keyCode == '13') {
    solar.newPlanet ();
  }
}

document.addEventListener ('keydown', spacebarPressed, false);

function spacebarPressed (evt) {
  if (evt.keyCode == '32') {
    solar.reset ();
  }
}
