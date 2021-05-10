class stone {
    constructor (x,y,radius){
        var options={isStatic:false}
        this.body=Matter.Bodies.circle(x,y,radius,options)
        Matter.World.add(world,this.body)
        this.radius=radius
        
        this.Image=loadImage("images/stone.png")
    }
    display(){
        imageMode(CENTER);
        image(this.Image,this.body.position.x,this.body.position.y,30,30)
    }
}