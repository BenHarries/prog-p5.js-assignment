/*
  Author: Ben Kelvin Harries
  Adapted from Orbits by Santiago Fiorino https://www.openprocessing.org/sketch/567018 
  Licence: Creative Commons Attribution ShareAlike https://creativecommons.org/licenses/by-sa/3.0/

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
