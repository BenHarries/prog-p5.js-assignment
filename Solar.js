class Solar {
  constructor () {
    this.planets = []; //changed to p5.js way of arrays
    this.planetsB = [];
    this.planetsT = [];
    this.canvas;

    this.traceOrbit = 500; //affects the diameter of the orbit
    this.traceOrbit2 = 100; //affects the orientation/angle of the orbit
    this.rSun = 300; //*** affects radius of the 'sun' ***
    this.i;
  }
  setup () {
    this.canvas = createCanvas (500, 500);
    var planet = new Planet (0, 0, 40, 0.002, 'red');
    this.planets.push (planet);
  }

  draw () {
    translate (width / 2, height / 2); //location of the solar system
    rotate (radians (-25)); //rotation of whole solar system
    background (223); //*** colour of the background ***
    this.planetsB = [];
    this.planetsT = [];

    for (var p in this.planets) {
      //change the for loop
      var planet = this.planets[p];
      planet.setCoords (millis (), this.traceOrbit, this.traceOrbit2);
      if (planet.overLapping ()) {
        this.planetsB.push (planet);
      } else {
        this.planetsT.push (planet);
      }
    } //***holding the mouse down for a longer time gives you the mass of the planet***
    this.printHalfSun (false); //bottom half of sun
    this.printTrace (); // *** line for planets to go around **

    for (var f in this.planetsT) {
      var planet = this.planetsT[f];
      planet.display ();
    }
    for (var j in this.planetsB) {
      var planet = this.planetsB[j];
      planet.display ();
    }
    this.printHalfSun (true);
    this.makeNoise ();
  }

  printTrace () {
    noFill ();
    stroke (233);
    strokeWeight (12); //outline grey padding of trace
    ellipse (0, 0, traceOrbit, traceOrbit2);

    noFill ();
    stroke (0);
    strokeWeight (4); //outline of black padding of trace
    ellipse (0, 0, traceOrbit, traceOrbit2);
  }

  makeNoise () {
    rotate (radians (25));
    noStroke ();
    strokeWeight (1);
    for (var i = -width / 2; i < width / 2 - 1; i += 5) {
      for (var j = -height / 2; j < height / 2 - 1; j += 5) {
        fill (random (100, 255), random (20, 40));
        rect (
          random (i - 5, i),
          random (j - 5, j),
          random (1, 2),
          random (1, 2)
        );
      }
    }
    for (var i = 0; i < 15; i++) {
      fill (random (0, 255), 255);
      rect (random (-width, width / 2), random (-height, height / 2), 2, 2);
    }
  }

  newPlanet () {
    console.log ('newPlanet');
    var planet_color = document.getElementById ('colour').value;
    var planet_radius = parseInt (document.getElementById ('radius').value);
    var planet_speed = random (0.0001, 0.004); //making the new planet have a random speed

    var planet1 = new Planet (0, 0, planet_radius, planet_speed, planet_color); //making a new planet

    this.planets.push (planet1);
  }

  printHalfSun (top) {
    strokeWeight (4);
    if (top) {
      //outline of bottom hemispere of sun
      fill (0);
      stroke (233);
      arc (0, 0, rSun, rSun, PI, TWO_PI);
    } else {
      //outline of bottom hemisphere of sun
      fill (0);
      stroke (223);
      arc (0, -0.3, rSun, rSun, 0, PI);
    }
  }
}
