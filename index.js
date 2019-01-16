/*
  Author: Ben Kelvin Harries
  Adapted from Orbits by Santiago Fiorino https://www.openprocessing.org/sketch/567018 
  Licence: Creative Commons Attribution ShareAlike https://creativecommons.org/licenses/by-sa/3.0/
*/

var solar;
var g;
var canvas;
var flag;

function setup(flag = '1') {
  solar = new Solar();
  solar.setup();
  console.log(flag)
  if ((flag == '1') || (flag == 1)) {
    TwoDimensionalCanvas = createCanvas(windowWidth, windowHeight);
  }
  else if ((flag == '2') || (flag == 2)) {
    ThreeDimensionalCanvas = createCanvas(windowWidth, windowHeight, WEBGL);
    g = createGraphics(800, 800);
  }
}

function draw() {
  solar.draw(g);
}

document.addEventListener('keydown', enterPressed, false);

function enterPressed(evt) {
  if (evt.keyCode == '13') {
    solar.newPlanet();
  }
}

document.addEventListener('keydown', spacebarPressed, false);

function spacebarPressed(evt) {
  if (evt.keyCode == '32') {
    solar.reset();
  }
}

function galaxy() {
  var menu = document.getElementById("mode");
  flag = menu.options[menu.selectedIndex].value;


  setup(flag);
}
