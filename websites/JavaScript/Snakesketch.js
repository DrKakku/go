var s;
var scl = 20;
var food;
var speed = 20;
var score = 0;
let highScoreArr = [];
let cnv;

function setup() {
	cnv = createCanvas(windowWidth, windowHeight);
	var height = windowHeight;
	var width = windowWidth;
	s = new Snake;
	let h = windowHeight;
	let w = windowWidth;

	frameRate(8);
	LocateFood();

}

function draw() {
	screenChange();
	background(30, 30, 50);
	textSize(32);
	fill(100, 120, 153);
	textAlign(CENTER, CENTER);
	text("The current score is " + score, windowWidth / 2, 130);
	highScore();
	if (s.death()) {
		alert("You died");
		highScoreArr.push(score);
		score = 0;
	}
	s.update();
	s.show();
	s.bounds();

	KeyPressed();

	if (s.eat(food)) {
		score++;
		LocateFood();

	}

	fill(200);
	rectMode(RADIUS);
	rect(food.x, food.y, scl / 2, scl / 2);


}

function highScore() {
	highScoreArr.sort((a, b) => b - a);
	textSize(15);
	textAlign(RIGHT, BASELINE);
	text("Hich Scores", 110, height / 8 + width / 50);
	if (highScoreArr.length > 5) {
		for (let i = 0; i < 5; i++) {
			let y = height / 10 + width / 100 + (i + 1) * 18;
			let msg = ((i + 1) + " score:- " + highScoreArr[i]);

			text(msg, 110, 50 + y);
		}
	}
	else if (highScoreArr.length <= 5) {
		for (let i = 0; i < highScoreArr.length; i++) {
			let y = height / 10 + width / 100 + (i + 1) * 18;
			let msg = ((i + 1) + " score:- " + highScoreArr[i]);

			text(msg, 110, 50 + y);
		}
	}
}

function screenChange() {
	if (height != windowHeight || width != windowWidth) {
		cnv = createCanvas(windowWidth, windowHeight);
		height = windowHeight;
		width = windowWidth;
		LocateFood();
	}
}


function LocateFood() {
	var cols = floor(windowWidth / scl);
	var rows = floor(windowHeight / scl);
	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(20);
}



function KeyPressed() {

	if (keyCode == UP_ARROW) {
		s.dir(0, -speed);

	}
	else if (keyCode == DOWN_ARROW) {
		s.dir(0, speed);
	}
	else if (keyCode == LEFT_ARROW) {
		s.dir(-speed, 0);
	}
	else if (keyCode == RIGHT_ARROW) {
		s.dir(speed, 0);
	}
	// else if (keyCode == 32) {
	// 	s.total++;
	// }
}

// function mousePressed() {

// 	score++;
// 	s.total++;

// }
