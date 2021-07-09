class Drops {
    constructor(x, y) {
        var options = {
            isStatic: false,
            restituition: 0.1,
            friction: 0.001
        }
        this.rain = Bodies.circle(x, y, 5, options)
        this.radius = 5
        World.add(world, this.rain)


    }
    display() {
        fill('blue')
        ellipseMode(CENTER)
        ellipse(this.rain.position.x,this.rain.position.y,this.radius)
    }
}