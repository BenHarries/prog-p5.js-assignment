# Let me run you through the Methods and Parameters in my sketch 'Orbits'

## In my Class 'Solar'

- `setup`: Takes no arguments and defines the starting environment:  - A canvas of width and height 500 
                                                            - An optional graphic/texture of the same dimension 
                                                            - A first 'Planet object 'planet'' which has parameters of colour: "red", radius: 40, speed: 0.002 
                                                            
- `draw`: is a method that performs all the displaying of the solar sytem as well as the 'noise' that is on top of the canvas (it may take the *parameter* g in which case it draws onto the Graphics called 'g' instead of the canvas)

- `printTrace`: Takes no arguments and creates the 'orbit ring'

- `reset`: Takes no arguments and makes the array 'planets' for that solar system back to empty therefore deleting all planets that were previously in it

- `makeNoise`: Takes no arguments and makes the sytle of the sketch have an old feel to it by putting lots of small white and grey particles over the canvas

- `newPlanet`: retrieves via 'getElementbyId('colour') ... /('radius')' the value of form control labelled in the sketch as 'Colour' and 'Radius' respectively and sets them to 'planet_colour' and 'planet_radius' respectively. It then makes a new planet with these as two of the parameters. The other parameters are speed (set elsewhere as a value between 0.0004 and 0.0007)

- `printHalfSun`: Takes the argument top in which case and makes a black arc as one half of the sun at the top. Else it makes a black arc at the bottom of the sun
