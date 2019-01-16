class Solar {
  constructor(
    width = 500,
    height = 500,
    traceOrbit = 500,
    traceOrbit2 = 100,
    rSun = 300
  ) {
    this.planets = []; //changed to p5.js way of arrays
    this.planetsB = [];
    this.planetsT = [];

    this.traceOrbit = traceOrbit; //affects the diameter of the orbit
    this.traceOrbit2 = traceOrbit2; //affects the orientation/angle of the orbit
    this.rSun = rSun;
    console.log(this);
  }
  setup() {
    //this.canvas = createCanvas (windowWidth, windowHeight, WEBGL);
    //this.g = createGraphics (400, 400);
    // this.graphics = createGraphics (400, 400);
    // this.graphics.background (25);
    var planet = new Planet(0, 0, 40, 0.002, 'white');
    this.planets.push(planet);
  }

  draw(g) {
    if (g) {
      g.translate(0.5, 0.5); //location of the solar system
      g.rotate(radians(-25)); //rotation of whole solar system
      this.planetsB = [];
      this.planetsT = [];

      for (var p in this.planets) {
        //change the for loop
        var planet = this.planets[p];
        planet.setCoords(millis(), this.traceOrbit, this.traceOrbit2);
        if (planet.overLapping()) {
          this.planetsB.push(planet);
        } else {
          this.planetsT.push(planet);
        }
      } //***holding the mouse down for a longer time gives you the mass of the planet***
      this.printHalfSun(false, g); //bottom half of sun
      this.printTrace(g); // *** line for planets to go around **

      for (var f in this.planetsT) {
        var planet = this.planetsT[f];
        planet.display(g);
      }
      for (var j in this.planetsB) {
        var planet = this.planetsB[j];
        planet.display(g);
      }
      this.printHalfSun(true, g);

      this.makeNoise(g);

      background('aliceblue');
      rotateX(frameCount * 0.001);
      //rotateY(frameCount * 0.001);
      texture(g);
      box(800);
    } else {
      translate(width / 2, height / 2); //location of the solar system
      rotate(radians(-25)); //rotation of whole solar system
      background('AliceBlue'); //*** colour of the background ***
      this.planetsB = [];
      this.planetsT = [];

      for (var p in this.planets) {
        //change the for loop
        var planet = this.planets[p];
        planet.setCoords(millis(), this.traceOrbit, this.traceOrbit2);
        if (planet.overLapping()) {
          this.planetsB.push(planet);
        } else {
          this.planetsT.push(planet);
        }
      } //***holding the mouse down for a longer time gives you the mass of the planet***
      this.printHalfSun(false, false); //bottom half of sun
      this.printTrace(); // *** line for planets to go around **

      for (var f in this.planetsT) {
        var planet = this.planetsT[f];
        planet.display();
      }
      for (var j in this.planetsB) {
        var planet = this.planetsB[j];
        planet.display();
      }
      this.printHalfSun(true, false);
      this.makeNoise();
    }
  }

  printTrace(g) {
    if (g) {
      g.noFill();
      g.stroke(233);
      g.strokeWeight(12); //outline grey padding of trace
      g.ellipse(0, 0, this.traceOrbit, this.traceOrbit2);

      g.noFill();
      g.stroke(0);
      g.strokeWeight(4); //outline of black padding of trace
      g.ellipse(0, 0, this.traceOrbit, this.traceOrbit2);
    } else {
      noFill();
      stroke(233);
      strokeWeight(12); //outline grey padding of trace
      ellipse(0, 0, this.traceOrbit, this.traceOrbit2);

      noFill();
      stroke(0);
      strokeWeight(4); //outline of black padding of trace
      ellipse(0, 0, this.traceOrbit, this.traceOrbit2);
    }
  }

  reset() {
    this.planets = []; //resets to no planets when a key is pressed by making the planets array again
    //***this use of <> can be changed to the way of making arrays in java script which includes [] and var***
  }

  makeNoise(g) {
    if (g) {
      g.rotate(radians(25));
      g.noStroke();
      g.strokeWeight(1);
      // for (var i = -width / 2; i < width / 2 - 1; i += 5) {
      //   for (var j = -height / 2; j < height / 2 - 1; j += 5) {
      //     fill (random (100, 255), random (20, 40));
      //     rect (
      //       random (i - 5, i),
      //       random (j - 5, j),
      //       random (1, 2),
      //       random (1, 2)
      //     );
      //   }
      // }
      for (var i = 0; i < 15; i++) {
        g.fill(random(0, 255), 255);
        g.rect(random(-width, width / 2), random(-height, height / 2), 2, 2);
      }
    } else {
      rotate(radians(25));
      noStroke();
      strokeWeight(1);
      // for (var i = -width / 2; i < width / 2 - 1; i += 5) {
      //   for (var j = -height / 2; j < height / 2 - 1; j += 5) {
      //     fill (random (100, 255), random (20, 40));
      //     rect (
      //       random (i - 5, i),
      //       random (j - 5, j),
      //       random (1, 2),
      //       random (1, 2)
      //     );
      //   }
      // }
      for (var i = 0; i < 15; i++) {
        fill(random(0, 255), 255);
        rect(random(-width, width / 2), random(-height, height / 2), 2, 2);
      }
    }
  }

  newPlanet() {
    var planet_color = document.getElementById('colour').value;
    var planet_radius = parseInt(document.getElementById('radius').value);
    var planet_speed = random(0.0001, 0.004); //making the new planet have a random speed

    var planet1 = new Planet(0, 0, planet_radius, planet_speed, planet_color); //making a new planet

    this.planets.push(planet1);
  }

  printHalfSun(top, g) {
    if (g) {
      g.strokeWeight(4);
      if (top) {
        //outline of bottom hemispere of sun
        g.fill(0);
        g.stroke(233);
        g.arc(0, 0, this.rSun, this.rSun, PI, TWO_PI);
      } else {
        //outline of bottom hemisphere of sun
        g.fill(0);
        g.stroke(223);
        g.arc(0, -0.3, this.rSun, this.rSun, 0, PI);
      }
    } else {
      strokeWeight(4);
      if (top) {
        //outline of bottom hemispere of sun
        fill(0);
        stroke(233);
        arc(0, 0, this.rSun, this.rSun, PI, TWO_PI);
      } else {
        //outline of bottom hemisphere of sun
        fill(0);
        stroke(223);
        arc(0, -0.3, this.rSun, this.rSun, 0, PI);
      }
    }
  }
}
