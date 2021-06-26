let num = 100;
let angle = 0;

let boxes = [];
let img, bell;

function preload() {
	bell = loadSound('bell15.mp3')
	img = loadImage('buddha4.png');
}

function setup() {
	bell.loop();
	frameRate(30);
	imageMode(CENTER);
	createCanvas(windowWidth, windowHeight);
	noFill();
	colorMode(HSB, 255);
	background(0);
		// timer
	let counter = 0;
	let min = 0;
	noStroke();
	fill(255);
	textSize(20);
	text('Be Focused ' + nf(min, 2) + ':' + nf(counter, 2), 10, height - 20);

	function timeIt() {
		if (counter == 59) {
			min++;
			counter = 0;
		}
		counter++;
		fill(0);
		noStroke();
		rect(100, height - 30, 200, 40);
		fill(255);
		textSize(20);
		text('Be Focused ' + nf(min, 2) + ':' + nf(counter, 2), 10, height - 20);
	}

	setInterval(timeIt, 1000);
	//



	for (let i = 0; i < num; i++) {

		boxes[i] = new Box(width / 2 - 200, height / 2 - 200, i * (255 / num), i);

	}
}

function draw() {

	noStroke();
	fill(0, 255, 0)
	rectMode(CENTER);
	rect(width / 2, height / 2, 400, 400);
	let r = frameCount % 255 + 300;
	let r2 = (frameCount % 255 + 150) * 2;

	for (let i = 0; i < 100; i++) {
		let alpha = 255 * (i / 100);
		fill(255, 255, 255, alpha / 20);
		r = r + noise(i / 100);
		ellipse(width / 2, height / 2, r / 2);
	}
	image(img, width / 2, height / 2 - 5, r2 / 3.4 * 1.2, r2 / 2 * 1.2)

	for (let b of boxes) {
		b.display();
		b.update();

	}


}