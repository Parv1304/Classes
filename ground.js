class Ground
{
    constructor()
    {
        var option2={
            isStatic:true
        }
        this.body=Bodies.rectangle(200,300,400,50,option2);
        this.width = 400;
        this.height= 50;
        World.add(world,this.body);
    }
    display()
    {
        var pos=this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x,pos.y,this.width,this.height);
    }
}