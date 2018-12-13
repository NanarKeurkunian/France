var France = []
var touristSlider=500
var touristSlider2=500
var song
var Path

function preload(){
	France[0] = loadImage('image.png')
	France[1]= loadImage('image.png') 
	France[2]= loadImage('image.png')
	France[3]= loadImage('image.png')
	France[4]=loadImage('image.png')
	France[5]=loadImage('image.png')

	
	Path= loadImage('Path.jpg')
	
	song= loadSound("ArltetlesartistesdenfanceEstcequecestlevent.mp3")
} 

function setup(){
	createCanvas(600,600)
	
	touristSlider = createSlider(100,500,500)
	touristSlider.position (450,50)
	touristSlider.size (100,50)
	
	touristSlider2 = createSlider(0,500,500)
	touristSlider2.position(450,25)
	touristSlider2.size(100,50)
	
	
	for (var i=0;i<France.length;i++){
		France[i].resize(310,0)
	for (var i=1;i<France.length;i++){
		France[i].resize(150,0)
	for (var i=2;i<France.length;i++){
		France[i].resize(90,0)
	for (var i=3;i<France.length;i++){
		France[i].resize(50,0)
	for (var i=4; i<France.length;i++){
		France[i].resize(25,0)
	for (var i=5; i<France.length;i++){
		France[i].resize(15,0)
		
	song.loop()
	analyzer = new p5.Amplitude()
	
	analyzer.setInput(song)
	angleMode(DEGREES)
	}
	}
	}
	}
	}
	}
}

function draw(){
	image(Path,0,0,600,600)
	image(France[0],150,48)
	image(France[1],100,40)
	image(France[2],350,20)
	image(France[3],225,8)
	image(France[4],320,20)
	image(France[5],288,20)

	
	
	var touristNumber=touristSlider.value()
	var touristNumber2= touristSlider2.value()
	Person (touristSlider.value(),touristSlider2.value())
	
	fill(255)
	stroke(255)
	
	Lights(180,450)

}

function Lights(X,Y){
	ellipse(random(X,X+270),random(Y,Y+120),10,10)
		ellipse(random(X,X+270),random(Y,Y+120),10,10)
				ellipse(random(X,X+270),random(Y,Y+120),10,10)
	ellipse(random(X+70,X+170),random(Y-100,Y),10,10)
		ellipse(random(X+70,X+170),random(Y-100,Y),10,10)
				ellipse(random(X+70,X+170),random(Y-100,Y),10,10)
	ellipse(random(X+90,X+160),random(Y-220,Y-100),10,10)
		ellipse(random(X+90,X+160),random(Y-220,Y-100),10,10)
	ellipse(random(X+105,X+155),random(Y-350,Y-220),10,10)
}

function Person(X,Y){
	fill(210,105,30)
	stroke(210,105,30)
	line(touristSlider.value(),touristSlider2.value(),touristSlider.value(),touristSlider2.value()+50)
	line(touristSlider.value(),touristSlider2.value()+25,touristSlider.value()-25,touristSlider2.value()+25)
	line(touristSlider.value(),touristSlider2.value()+25,touristSlider.value()+25,touristSlider2.value()+25)
	line(touristSlider.value(),touristSlider2.value()+50,touristSlider.value()-20,touristSlider2.value()+75)
	line(touristSlider.value(),touristSlider2.value()+50,touristSlider.value()+20,touristSlider2.value()+75)
	ellipse(touristSlider.value(),touristSlider2.value(),20,20)
	fill(0)
	stroke(0)
	ellipse(touristSlider.value()-3,touristSlider2.value()-10,25,10)
	fill(255)
	stroke(255)
	rect(touristSlider.value()-25,touristSlider2.value()+20,1,10)
	fill(244,164,96)
	stroke(244,164,96)
	ellipse(touristSlider.value()+25,touristSlider2.value()+25,8,25)
}
