var palettes = [
["#3A405A","#AEC5EB","#F9DEC9","#E91FA3","#685044"],
["#271F30","#95BF74","#659B5E","#556F44","#283F3B"],
["#AAA","#BBB","#CCC","#DDD","#EEE"],
["#70D6FF","#FF70A6","#FF9770","#FFD670","#E9FF70"]];



//["#","#","#","#","#"]];



var canvas_x = 320;//1000;
var canvas_y = 480;//600;
var margin = 20;//60;
var square_size = 30;//50;
var square_radius = 2;//8;

var cols = 6;//12;
var rows = 8;//7;

function setup() {
	createCanvas(canvas_x, canvas_y);
	noLoop(); // prevents draw being executed more than once
	//frameRate(1);
}

function draw() {
	var palette = random(palettes);
	background(palette[0]);
	strokeWeight(3);
	rectMode(CENTER);
	for (var i=0; i < cols; i++){
		for (var j = 0; j < rows; j++){
			// select a random color from the palette but not the background color
			var rnd_color = palette[random([1,2,3,4])]
			stroke(rnd_color);
			// random solid squares
			if (random() < 0.2){
				fill(rnd_color);	
			}else{
				fill(palette[0]);
			}
			// save current position and rotation
			push();
			// add some random offset to square position
			var offset_x = random(10);
			var offset_y = random(10);
			// calculate position for current square
			var square_x = margin + (i+0.5)*((canvas_x-(2*margin))/cols)+offset_x
			var square_y = margin + (j+0.5)*((canvas_y-(2*margin))/rows)+offset_y
			// move to squares position
			translate(square_x, square_y );
			// add random rotation
			rotate(random(-PI/4,PI/4) /PI);
			//draw the square
			rect(0, 0, square_size, square_size, square_radius);
			// restore position and rotation
			pop();
		}
	}
}