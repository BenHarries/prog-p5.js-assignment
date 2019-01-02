/*

Based on: http://www.dailyminimal.com/post/172999683369/no-142-a-new-geometric-design-every-day
Daily Minimal.

*/
var planets = []; //changed to p5.js way of arrays
var planetsB = [];
var planetsT = [];
var canvas;
var planet1;

function setup() {
  
  canvas = createCanvas(500, 500);
  planet0 = new Planet(); //makes new orbiting planet using class on other page 'Planet' (changed from Planet to var)
  planet0.s = 0.002; //***speed of orbit of new planet***
  planet0.radius = 25; //*** radius of new orbiting planet ***
  planets.push(planet0);
}

var traceOrbit = 500; //affects the diameter of the orbit
var traceOrbit2 = 100; //affects the orientation/angle of the orbit
var rSun = 25; //*** affects radius of the 'sun' ***
var i;

var planet_color = "white";
var planet_radius = 20;

function draw() {
  translate(width/2, height/2); //location of the solar system
  rotate(radians(-25)); //rotation of whole solar system
  background(223); //*** colour of the background ***
  planetsB = [];
  planetsT = [];
  for (p in planets) { //change the for loop
	planet = planets[p]    
	planet.setCoords(millis(), traceOrbit, traceOrbit2);
    if (planet.overLapping()) {
      planetsB.push(planet);
    } else {
      planetsT.push(planet);
    }
  } //***holding the mouse down for a longer time gives you the mass of the planet***
  printHalfSun(false); //bottom half of sun
  printTrace(); // *** line for planets to go around **
  

  for (f in planetsT) {
    planet = planetsT[f]
    planet.display();
  }
  for (j in planetsB) {
    planet = planetsB[j]
    planet.display();
  }
  printHalfSun(true);
  makeNoise();
}

document.addEventListener("keydown", checkKeyPressed2, false);

function checkKeyPressed2(evt) {
    if (evt.keyCode == "13") { 
    newPlanet();
    }
}

function newPlanet() {
    
    planet_color = document.getElementById("colour").value;
    planet_radius = parseInt(document.getElementById("radius").value);
  
    planet1 = new Planet(); //making a new planet
    planet1.s = random(0.0001, 0.004); //making the new planet have a random speed
    //planet1.r = random(20, 70);  //making the new planet have a random radius
    planet.setRadius(planet_radius)
    planet.setColour(planet_color)
    planets.push(planet1);
}

function printHalfSun(top) {
  strokeWeight(4);
  if (top) { //outline of bottom hemispere of sun
    fill(0);
    stroke(233);
    arc(0, 0, rSun, rSun, PI, TWO_PI);
  } else { //outline of bottom hemisphere of sun
    fill(0);
    stroke(223);
    arc(0, -0.3, rSun, rSun, 0, PI);
  }
}

function printTrace() {
  noFill();
  stroke(233);
  strokeWeight(12); //outline grey padding of trace
  ellipse(0, 0, traceOrbit, traceOrbit2); 

  noFill();
  stroke(0);
  strokeWeight(4); //outline of black padding of trace 
  ellipse(0, 0, traceOrbit, traceOrbit2);
}

document.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(evt) {
    if (evt.keyCode == "32") { 
    Reset();
    }
}

function Reset(){
  planets = []; //resets to no planets when a key is pressed by making the planets array again
	//***this use of <> can be changed to the way of making arrays in java script which includes [] and var***
}

function makeNoise() {
  rotate(radians(25));
  noStroke();
  strokeWeight(1);
  for (var i = -width/2; i < width/2 - 1; i += 5) {
    for (var j = -height/2; j < height/2 - 1; j += 5) {
      fill(random(100, 255), random(20, 40));
      rect(random(i - 5, i), random(j - 5, j), random(1, 2), random(1 ,2));
    }
  }
  for (var i = 0; i < 15; i++) {
    fill(random(0, 255), 255);
    rect(random(-width, width/2), random(-height, height/2), 2, 2);
}}
