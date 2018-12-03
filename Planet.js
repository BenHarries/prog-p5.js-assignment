
class Planet {
	constructor(x, y, r, s) {

  this.x = x;
  this.y = y;
  this.r = r;
  this.s = s;
}

  setCoords(millis, rOrbit, rOrbit2) {
    this.x = sin(millis * this.s) * rOrbit/2;
    this.y = cos(millis * this.s) * rOrbit2/2;
  }
  
  display() {
    fill(240);
    strokeWeight(5);
    stroke(0);
    ellipse(this.x, this.y, this.r, this.r);
  }
  
  overLapping() {
    if (this.y < 0) {
      return true;
    } else {
      return false;
    }
  }
}
