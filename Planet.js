class Planet {
    constructor(x, y, radius, speed, colour) {
        this.x = x;
        this.y = y;
        this.radius = radius || 70;
        this.speed = speed;
        this.colour = colour || 240;
    }

    setColour(colour){
        this.colour = colour;
    }
    
    setRadius(radius){
        this.radius = radius;
    }
    
    setSpeed(speed){
        this.speed = speed;
    }

    setCoords(millis, rOrbit, rOrbit2) {
        this.x = sin(millis * this.speed) * rOrbit/2;
        this.y = cos(millis * this.speed) * rOrbit2/2;
    }

    display() {
        fill(this.colour);
        strokeWeight(5);
        stroke(0);/**/
        ellipse(this.x, this.y, this.radius, this.radius);
    }

    overLapping() {
        if (this.y < 0) {
        return true;
        } else {
        return false;
        }
    }
}
