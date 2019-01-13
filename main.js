/*

Based on: http://www.dailyminimal.com/post/172999683369/no-142-a-new-geometric-design-every-day
Daily Minimal.

*/

var solar;

var traceOrbit = 500; //affects the diameter of the orbit
var traceOrbit2 = 100; //affects the orientation/angle of the orbit
var rSun = 300; //*** affects radius of the 'sun' ***
var i;

function setup () {
  solar = new Solar ();
  solar.setup ();
  solar.draw ();
  //canvas = createCanvas(500, 500);
  //canvas.position(100, 0);
  //planet = new Planet(0, 0, 40, 0.002, "red");
  //planets.push(planet);
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

// function newPlanet () {
//   var planet_color = document.getElementById ('colour').value;
//   var planet_radius = parseInt (document.getElementById ('radius').value);
//   var planet_speed = random (0.0001, 0.004); //making the new planet have a random speed

//   planet1 = new Planet (0, 0, planet_radius, planet_speed, planet_color); //making a new planet

//   planets.push (planet1);
// }

// function printHalfSun(top) {
//   strokeWeight(4);
//   if (top) { //outline of bottom hemispere of sun
//     fill(0);
//     stroke(233);
//     arc(0, 0, rSun, rSun, PI, TWO_PI);
//   } else { //outline of bottom hemisphere of sun
//     fill(0);
//     stroke(223);
//     arc(0, -0.3, rSun, rSun, 0, PI);
//   }
// }

// function printTrace () {
//   noFill ();
//   stroke (233);
//   strokeWeight (12); //outline grey padding of trace
//   ellipse (0, 0, traceOrbit, traceOrbit2);

//   noFill ();
//   stroke (0);
//   strokeWeight (4); //outline of black padding of trace
//   ellipse (0, 0, traceOrbit, traceOrbit2);
// }

// document.addEventListener("keydown", spacebarPressed, false);

// function spacebarPressed(evt) {
//     if (evt.keyCode == "32") {
//     Reset();
//     }
// }

// function Reset(){
//   planets = []; //resets to no planets when a key is pressed by making the planets array again
// 	//***this use of <> can be changed to the way of making arrays in java script which includes [] and var***
// }

// function makeNoise () {
//   rotate (radians (25));
//   noStroke ();
//   strokeWeight (1);
//   for (var i = -width / 2; i < width / 2 - 1; i += 5) {
//     for (var j = -height / 2; j < height / 2 - 1; j += 5) {
//       fill (random (100, 255), random (20, 40));
//       rect (random (i - 5, i), random (j - 5, j), random (1, 2), random (1, 2));
//     }
//   }
//   for (var i = 0; i < 15; i++) {
//     fill (random (0, 255), 255);
//     rect (random (-width, width / 2), random (-height, height / 2), 2, 2);
//   }
// }
