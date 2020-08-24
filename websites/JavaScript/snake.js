
function Snake() {
	this.x = windowWidth/2+1;
	this.y = windowHeight/2 ;
	this.xspeed = 20;
    this.yspeed = 0;
    this.total = 1;
    this.tail=[];

	this.update = function()
	{   

    if(this.total == this.tail.length)
    {
        for(var i = 0; i < this.total - 1;i++)
        {
            this.tail[i] = this.tail[i+1];
        }
    }
        this.tail[this.total-1] = createVector(this.x,this.y);

        this.x = this.x + this.xspeed;
		this.y = this.y + this.yspeed;

    }
    
    this.death = function()
    {
        for(var i =0;i<this.tail.length;i++)
        {
            var pos = this.tail[i];
            var d = dist(this.x,this.y,pos.x,pos.y);
            if(d<1)
            {   
                this.total = 1;
                this.tail = [];
                this.x = 0;this.y = 0;
                return true;
            }
        }
    }

	this.show = function()
	{
        fill(200,240,120);
        for(var i = 0; i<this.total ;i++)
        {
            rect(this.tail[i].x,this.tail[i].y,20,20);
        }
    }
    
    this.eat = function (pos) {
        
        var d = dist(this.x,this.y,pos.x,pos.y);
        if(d < 10)
        {
            this.total++;
            console.log("True");
            return true;
        }
        else{return false;}
        
    }

    this.bounds = function() {
        if(this.x > windowWidth)
        {
            this.x = 0;
        }
        if(this.y > windowHeight)
        {
            this.y = 0;
        }
        if(this.x < 0)
        {
            this.x = windowWidth;
        }
        if(this.y < 0)
        {
            this.y = windowHeight;
        }
    }

    this.dir = function (x,y) {
            this.xspeed = x;
            this.yspeed = y; 
    }
}