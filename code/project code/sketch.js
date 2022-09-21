//The Angle between the trunk
var arg = 0;
var senceNum = 0;
var rotateAngle = 0;

var startX=0;
var startY=0;

var stopX=0;
var stopY=0;

let slider1;
let slider2;
let slider3;
let slider4;
let valR = 0;
let valG = 0;
let valB = 0;
let penW = 1;

var img1;
var img2;
var img3;

function preload()
{
	img1 = loadImage("1.jpg");
	img2 = loadImage("2.png");
	img3 = loadImage("3.png");
}

function setup() {
	textAlign(CENTER);
	createCanvas(1400, 800);
	textSize(24);
	arg = PI / 15;

	distance = 10;
	spring = 0.5;
	friction = 0.5;
	size = 8;
	diff = size/8;
	x = y = ax = ay = a = r = f = 0;

	slider1 = createSlider(0, 255, 0, 1);
	slider1.position(10, 10);
	slider1.style('width', '150px');

	slider2 = createSlider(0, 255, 0, 1);
	slider2.position(200, 10);
	slider2.style('width', '150px');

	slider3 = createSlider(0, 255, 0, 1);
	slider3.position(400, 10);
	slider3.style('width', '150px');


	slider4 = createSlider(1, 4, 1, 0.1);
	slider4.position(width/2+10, 10);
	slider4.style('width', '150px');
}

function draw(){

	valR =  slider1.value();
	valG =  slider2.value();
	valB =  slider3.value();
	penW =  slider4.value();
	if(senceNum == 0)
	{
		slider1.hide();
		slider2.hide();
		slider3.hide();
		slider4.hide();
		startSence();
	}
	else if(senceNum == 1)
	{
		slider1.hide();
		slider2.hide();
		slider3.hide();
		slider4.hide();
		Sence1();
	}
	else if(senceNum == 2)
	{
		/* slider1.show();
		slider2.show();
		slider3.show();
		slider4.show(); */
		Sence2();
	}
	else if(senceNum == 3)
	{
		/* slider1.show();
		slider2.show();
		slider3.show();
		slider4.show(); */
		Sence3();
	}
	else if(senceNum == 4)
	{
		/* slider1.show();
		slider2.show();
		slider3.show();
		slider4.show(); */
		Sence4();
	}


}

function startSence(){
	background(255);
	fill(233,223,197);//the color of bg
	noStroke();
	rect(0,0,width,height);
	fill(0);
	strokeWeight(3);
	textSize(25);
	text("Fractalling Calligraphy",width/2,120);
	textSize(15);
	text("This project is an interactive experience about calligraphy and fractal art. ",width/2,210);
	text("In this project you can experience a conceptual experience of digital calligraphy and controlled fractals.",width/2,240);
	text(" Fractal art and calligraphy are both nature-based art forms.",width/2,270);
	text("By constructing elements that are repeated over and over again the complete art form is formed",width/2,300);
	text("This project will bring together a new experience of both.",width/2,330);
	//fill(232,192,107);//the color of button
	noFill();
	stroke(208,58,58);
	strokeWeight(2);
	rect(width/2-50,height/2,100,40);
	strokeWeight(2);
	//interface line

	line(220,160,250,160);
	line(1180,160,1210,160);
	line(220,380,250,380);
	line(1180,380,1210,380);

	line(220,160,220,190);
	line(1210,160,1210,190);
	line(220,350,220,380);
	line(1210,350,1210,380);

	fill(208,58,58);
	textSize(20);
	strokeWeight(1);
	noStroke();
	text("START",width/2,height/2+30);
	textSize(15);
	noStroke();
	fill(0);
	text("by Yiran Zhu",width/2,height/2+300);

}

function Sence1(){
	fill(233,223,197);//the color of bg
	rect(0,0,width,height);
	fill(0);
	strokeWeight(2);
	textSize(15);
	text("You can keep experiencing calligraphy here.",width/4,220);
	text("practice a few times to",width/4,250);
	text("get the skills right	",width/4,280);
	//fill(232,192,107);//the color of button
	noFill();
	stroke(208,58,58);
	rect(width/4-50,height/2,100,40);
	fill(208,58,58);
	textSize(20);
	noStroke();
	text("Draw",width/4,height/2+30);
	
	textSize(15);
	fill(0);
	text("You can control the fractal ",width/2,220);
	text("by controlling the direction",width/2,250);
	text("and length of the writing",width/2,280);
	stroke(208,58,58);
	//fill(232,192,107);//the color of button
	noFill();rect(width/2-50,height/2,100,40);
	fill(208,58,58);
	textSize(20);
	noStroke();
	text("Line",width/2,height/2+30);

	textSize(15);
	fill(0);
	text("Try to draw your own fractal tree,",3*width/4,220);
	text(" it may take some time,",3*width/4,250);
	text("but please be patient!",3*width/4,280);
	//fill(232,192,107);//the color of button
	noFill();
	stroke(208,58,58);
	rect(3*width/4-50,height/2,100,40);
	fill(208,58,58);
	textSize(20);
	noStroke();
	text("Other",3*width/4,height/2+30);

}

//LINE  Control the direction of the tree
function Sence2(){
	fill(232,192,107);
	strokeWeight(2);
	stroke(0);
	rect(0,height-40,100,40);
	fill(0);
	noStroke();
	textSize(20);
	text("back",50,height-40+30);
	if(mouseX<width/2 && mouseY>60){
		penDraw();
	}
	
	//drawTree(3*width/4,height,Math.PI/2,0.82,75);
}

//brush
function Sence4(){
	if(mouseY<height-40 && mouseX<1000){
		if(mouseIsPressed) {
			if(!f) {
				f = true;
				x = mouseX;
				y = mouseY;
			}
			vx += ( mouseX - x ) * spring;
			vy += ( mouseY - y ) * spring;
			vx *= friction;
			vy *= friction;

			v += sqrt( vx*vx + vy*vy ) - v;
			v *= 0.8;

			oldR = r;
			r = size - v;

			for( let i = 0; i < splitNum; ++i ) {
				oldX = x;
				oldY = y;
				x += vx / splitNum;
				y += vy / splitNum;
				oldR += ( r - oldR ) / splitNum;
				strokeWeight( oldR+diff );
				line( x, y, oldX, oldY );
				strokeWeight( oldR );
				line( x+diff*2, y+diff*2, oldX+diff*2, oldY+diff*2 );
				line( x-diff, y-diff, oldX-diff, oldY-diff );
			}

		} else if(f) {
			vx = vy = 0;
			r = 0;
			f = false;
		}
	}
  
	fill(232,192,107); 
	strokeWeight(2);
	rect(0,height-40,100,40);
	fill(0);
	textSize(20);
	text("back",50,height-40+30);
	
	fill(232,192,107);
	strokeWeight(2);
	rect(200,height-40,100,40);
	fill(0);
	textSize(20);
	text("clear",250,height-40+30);
	
	
	fill(232,192,107);
	strokeWeight(2);
	rect(1000,height-40,50,40);
	fill(0);
	textSize(20);
	text("1",1025,height-40+30);
	
	fill(232,192,107);
	strokeWeight(2);
	rect(1100,height-40,50,40);
	fill(0);
	textSize(20);
	text("2",1125,height-40+30);
	
	fill(232,192,107);
	strokeWeight(2);
	rect(1200,height-40,50,40);
	fill(0);
	textSize(20);
	text("3",1225,height-40+30);

	fill(0);
	textSize(15);
	strokeWeight(0.5);
	text("open the picture",1120,height-55);
}

function penDraw() {
  oldR = r;
  stroke(valR,valG,valB);
  if(mouseIsPressed) {
    mX = mouseX;
    mY = mouseY;
    if(!f) {
      f = 1;
      x = mX;
      y = mY;
    }
    ax += ( mX - x ) * spring;
    ay += ( mY - y ) * spring;
    ax *= friction;
    ay *= friction;
    a += sqrt( ax*ax + ay*ay ) - a;
    a *= 0.6;
    r = size - a;

    for( i = 0; i < distance; ++i ) {
      oldX = x;
      oldY = y;
      x += ax / distance;
      y += ay / distance;
      oldR += ( r - oldR ) / distance;
      if(oldR < 1) oldR = 1;
      strokeWeight( oldR+diff );
      line( x, y, oldX, oldY );
      strokeWeight( oldR );
      line( x+diff*2, y+diff*2, oldX+diff*2, oldY+diff*2 );
      line( x-diff, y-diff, oldX-diff, oldY-diff );
    }
  } else if(f) {
    ax = ay = f = 0;
  }
}


function drawTree(px, py, ang, scale, len) {
	//Use offset random angle to change shape
	var rn = 0.01*10 * (PI / 180);
	var x =(scale*len*cos(ang));
	var y =(scale*len*sin(ang));   //Math.floor
	//the color of line 
	//stroke(0);
	 stroke(valR,valG,valB);
	// the weight of line
	strokeWeight(penW);
	//draw line
	line(px, py,px+x, py-y)
	//end
	if (scale*len<12)
		return;
	//Recursively draw the left and right branches
	drawTree(px + x, py - y, ang - arg + rn, scale, scale*len);
	drawTree(px + x, py - y, ang + arg + rn, scale, scale*len);
}

var kkk = 0;
var isStart = 0;
var imgInfo = [];
var imgLen = 0;

function Sence3(){
	fill(232,192,107);//the color of button
	strokeWeight(2);
	stroke(0);
	rect(0,height-40,100,40);
	fill(0);
	noStroke();
	text("back",50,height-40+30);
	if(isStart == 1){
		frameRate(5);
		fill(233,223,197);
		noStroke();
		rect(0,0,width,height-240);
		kkk = kkk +1;
		translate(1*width/2,height*0.5);
		if(kkk>20){
			//kkk = 0;
		}
		if(kkk<10)
		{
			tree(100,39,1,1,kkk);
		}
		else
		{
			tree(100,39,1,1,10);
		}
	}else{
		frameRate(50);
		kkk = 0;
		if(mouseX>(width/2-50) &&mouseX< (width/2+50) &&mouseY>(height-200) &&mouseY< (height-200+100)){
			if(mouseIsPressed) {
				imgInfo[imgLen] = {mouseX,mouseY};
				imgLen++;
				//print(imgInfo);
				noStroke();
				fill(valR,valG,valB);
				circle(imgInfo[imgLen-1].mouseX,imgInfo[imgLen-1].mouseY,6);
			}
		}
	}
}

//fractal tree
function branch(len){
   stroke(0);
   strokeWeight(len/15+1);
   line(0, 0, 0, -len); 
   translate (0, -len);
   if (len > 4){
   push();
   rotate (angle);
   branch (len*0.67);
   pop();
		 
   push();
   rotate (-angle);
   branch (len*0.67);
   pop();
  }
    noStroke();
    fill(255)
    ellipse(2,-3,A,A);
    
  }

function tree(length,ang,r1,r2,level){
  if(level == 0){
    strokeWeight(1);
  }else{
    push();
	scale((level)/10);
	for(var i=0;i<imgLen;i++){
		noStroke();
		fill(valR,valG,valB);
		circle(imgInfo[i].mouseX - (width/2-50),imgInfo[i].mouseY - (height-200),6);
	}
    translate(0,-length);
    rotate(radians(ang));
    tree(length*r1,ang,r1,r2,level-1);
    rotate(-2*radians(ang));
    tree(length*r2,ang,r1,r2,level-1);
    pop();
  }
}

function mousePressed() {
  	if(senceNum == 0){
		//start
		if(mouseX>(width/2-50) &&mouseX< (width/2+50) &&mouseY>(height/2) &&mouseY< (height/2+40)){
			senceNum = 1;
		}
	}

	else if(senceNum == 1){
		//draw
		if(mouseX>(width/4-50) &&mouseX< (width/4+50) &&mouseY>(height/2) &&mouseY< (height/2+40)){
			background(233,223,197);
			senceNum = 4;
			x = y = vx = vy = v = r = 0;
			f = false;

			size = 20;//draw brush size
			spring = 0.5;
			friction = 0.5;
			splitNum = 10;
			diff = size/8;
			stroke(0, 10);
		}
		//LINE
		if(mouseX>(width/2-50) &&mouseX< (width/2+50) &&mouseY>(height/2) &&mouseY< (height/2+40)){
			senceNum = 2;
			background(233,223,197);
			fill(255);
			strokeWeight(2);
			//rect(0,0,width,height);
			line(width/2,0,width/2,height);
			push();
			translate(3*width/4,height/2);
			rotate(rotateAngle);
			drawTree(0,0,PI/2,0.82,75);
			pop();
			strokeWeight(2);
		}
		//OTHER
		if(mouseX>(3*width/4-50) &&mouseX< (3*width/4+50) &&mouseY>(height/2) &&mouseY< (height/2+40)){
			senceNum = 3;
			/* background(255);
			stroke(0);
			noFill();
			//rect(0,0,width,height);
			//line(width/2,0,width/2,height)
			rect(width/2-50,height-230,100,100);
			text("在这里画",width/2,height-100);
			rect(width/2-50,height-80,100,40);
			textSize(26);
			text("开始",width/2,height-50); */
			
			senceNum = 3;
			background(233,223,197);
			stroke(0);
			noFill();
			//rect(0,0,width,height);
			//line(width/2,0,width/2,height)
			stroke(208,58,58);
			rect(width/2-50,height-200,100,100);
			rect(width/2-50,height-80,100,40);
			textSize(15);
			strokeWeight(1);
			stroke(0);
			text("Draw Here",width/2,height-220);
			textSize(26);
			fill(208,58,58)
			noStroke();
			text("START",width/2,height-50);
			imgInfo = [];
			imgLen = 0;
		}
	}
	else if(senceNum == 2){
		startX=mouseX;
		startY=mouseY;
	}
	else if(senceNum == 3){
		if(mouseX>(width/2-50) &&mouseX< (width/2+50) &&mouseY>(height-80) &&mouseY< (height-40)){
		
		//if(mouseX>(width/2-50) &&mouseX< (width/2+50) &&mouseY>(height-80) &&mouseY< (height-40)){
			//saveFrames('out', 'png');
			if(isStart == 0)
			{
				isStart = 1;
			}
			else{
				isStart = 0;
				/* translate(-1*3*width/4,-1*height*0.8);
				translate(-1*width/2,-1*height*0.5);
				background(255);
				stroke(0);
				noFill();
				//rect(0,0,width,height);
				//line(width/2,0,width/2,height)
				rect(width/2-50,height-230,100,100);
				text("在这里画",width/2,height-100);
				rect(width/2-50,height-80,100,40);
				textSize(26);
				text("开始",width/2,height-50);
				imgInfo = [];
				imgLen = 0; */
				translate(-1*1*width/2,-1*height*0.5);
				//translate(-1*3*width/4,-1*height*0.8);
				background(233,223,197);
				stroke(0);
				noFill();
				//rect(0,0,width,height);
				//line(width/2,0,width/2,height)
				stroke(208,58,58);
				rect(width/2-50,height-200,100,100);
				rect(width/2-50,height-80,100,40);
				textSize(15);
				strokeWeight(1);
				stroke(0);
				text("Draw Here",width/2,height-220);
				textSize(26);
				fill(208,58,58);
				noStroke();
				text("START",width/2,height-50);
				imgInfo = [];
				imgLen = 0;
			}

		}
	}
	else if(senceNum == 4){
		//clear
		if(mouseX>(200) &&mouseX< (300) &&mouseY>(height-40) &&mouseY< (height)){
			background(233,223,197);
		}
		if(mouseX>(1050) &&mouseX< (1060) &&mouseY>(10) &&mouseY< (20)){
			//background(255);
			fill(233,223,197);
			noStroke();
			rect(1020,0,width-1020,height)
			strokeWeight(1);
		}
		if(mouseX>(1000) &&mouseX< (1050) &&mouseY>(height-40) &&mouseY< (height)){
			//1
			image(img1,1050,0);
			//fill(255);
			//rect(1050,10,10,10);
			//fill(0);
			//textSize(12)
			//text("X",1055,20)
		}
		if(mouseX>(1100) &&mouseX< (1150) &&mouseY>(height-40) &&mouseY< (height)){
			//2
			image(img2,1050,0);
			//fill(255);
			//rect(1050,10,10,10);
			//fill(0);
			//textSize(12)
			//ext("X",1055,20)
		}
		if(mouseX>(1200) &&mouseX< (1250) &&mouseY>(height-40) &&mouseY< (height)){
			//3
			image(img3,1050,0);
			//fill(255);
			//rect(1050,10,10,10);
			//fill(0);
			//textSize(12)
			//text("X",1055,20)
		}
		textSize(22)
	}

	//rect(0,height-40,100,40);
	if(mouseX>(0) &&mouseX< (100) &&mouseY>(height-40) &&mouseY< (height)){
		senceNum = 1;
		frameRate(30);
	}
}


function mouseReleased() {
	if(senceNum == 2){
		stopX=mouseX;
		stopY=mouseY;

		if(mouseX<width/2 && mouseY>60 && startX<width/2 && startY>60){
			if(stopX>startX)
			{
				rotateAngle = atan((startY-stopY)/(startX-stopX));
				rotateAngle = rotateAngle + PI/2;
			}
			else
			{
				rotateAngle = atan((startY-stopY)/(startX-stopX));
				rotateAngle = rotateAngle - PI/2;

			}
			var d1 = dist(stopX,stopY,startX,startY);
			print(rotateAngle);
			//brush
			background(255);
			fill(233,223,197);
			strokeWeight(2);
			rect(0,0,width,height);
			//line(width/2,0,width/2,height);
		
			textSize(15);
			strokeWeight(1);
			fill(0)
			text("Draw Here",width/4,height/2-300);
			push();
			translate(3*width/4,height/2);
			rotate(rotateAngle);
			//d1 = map(d1,0,height,50,100);
			//drawTree(0,0,PI/2+random(-PI/6,PI/6),0.82,d1);
			angle = map(sin(d1/50), -1,1, PI/4, 0);
			A = map(sin(d1/50), 1.8,-1, 0, 2);
			branch(100)
			pop();
		}
		else{
			background(255);
			fill(233,223,197);
			strokeWeight(1);
			rect(0,0,width,height);
			textSize(15);
			strokeWeight(1);
			fill(0)
			text("Draw Here",width/4,height/2-300);
			push();
			translate(3*width/4,height/2);
			rotate(0);
			//drawTree(0,0,PI/2+random(-PI/6,PI/6),0.82,50);
			angle = map(sin(1/50), -1,1, PI/4, 0);
			A = map(sin(1/50), 1.8,-1, 0, 2);
			branch(100)
			pop();
		}
	}
}
