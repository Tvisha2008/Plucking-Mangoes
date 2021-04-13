class stone
{
	constructor(x,y,r)
	{
		var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2			
			
        }
		this.body=Bodies.circle(x, y, r, options);
		this.x=x;
		this.y=y;
		this.r=r;
		this.img=loadImage("images/stone.png");
 		World.add(world, this.body);

	}
	display()
	{
			var stonePos=this.body.position;		
			push()
			translate(stonePos.x, stonePos.y);
			ellipseMode(CENTER)
			imageMode(CENTER)
			image(this.img,0,0,this.r, this.r);
			pop()
			
	}

}