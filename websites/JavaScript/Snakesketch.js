var s ;
var scl = 20;
var food ;
var speed = 20;
var score = 0;

let cnv;
function setup() {
	cnv = createCanvas(windowWidth, windowHeight);
	var height = windowHeight;
	var width = windowWidth;
	s = new Snake;

  	
	frameRate(8);
	LocateFood();

}

function draw() {
	screenChange();
	background(30,30,50); 
	textSize(32);
	fill(100,120,153);
	text("The current score is "+score,windowWidth/2-(windowWidth/9+12),130);
	if(s.death())
	{
		alert("You died");
		score = 0;
	}
	s.update();
	s.show();
	s.bounds();
	KeyPressed();
	
	if(s.eat(food))
	{	
		score++;
		LocateFood();
		
	}
	
	fill(200);
	rect(food.x,food.y +2,scl + 2,scl);
	
  
}

function screenChange()
{
	if(height != windowHeight || width != windowWidth){
		cnv = createCanvas(windowWidth, windowHeight);
		height = windowHeight;
		width = windowWidth;
		LocateFood();
	}
}


function LocateFood()
 {
	var cols = floor(windowWidth/scl);
	var rows = floor(windowHeight/scl);
	food = createVector(floor(random(cols)),floor(random(rows)));
	food.mult(20);	
}



function KeyPressed() {
	
	if(keyCode == UP_ARROW)
	{
		s.dir(0,-speed);
		
	}
	else if(keyCode == DOWN_ARROW )
	{
		s.dir(0,speed);
	}	
	else if(keyCode == LEFT_ARROW)
	{
		s.dir(-speed,0);
	}
	else if(keyCode == RIGHT_ARROW)
	{
		s.dir(speed,0);
	}
	else if(keyCode == 32)
	{
		s.total ++;
	}
}
