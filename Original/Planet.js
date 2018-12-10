class Planet {
  float x;
  float y;
  float r;
  float s;
  void setCoords(float millis, float rOrbit, float rOrbit2) {
    this.x = sin(millis * this.s) * rOrbit/2;
    this.y = cos(millis * this.s) * rOrbit2/2;
  }
  
  void display() {
    fill(240);
    strokeWeight(5);
    stroke(0);
    ellipse(this.x, this.y, this.r, this.r);
  }
  
  boolean overLapping() {
    if (this.y < 0) {
      return true;
    } else {
      return false;
    }
  }
}
