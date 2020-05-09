function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	//fill(0, 102, 153);
	clear();
	textSize(32);
	text('Punto pendiente', 10, 30);
	ellipse(200, 200, 300, 300);
	textSize(32);
	text('DDA', 650, 30);
	ellipse(800, 200, 300, 300);
	textSize(32);
	text('Bresenham', 1250, 30);
	ellipse(1400, 200, 300, 300);
	noLoop();
}
/*
function mousePressed() {
	clear();
	console.log("Limpia la pantalla");
}*/

function cortarFigura(){
	cortar = document.getElementById("nPartes").value;
	partes = parseInt(cortar);

	if(partes > 1)
	{
		let r = 150;
    	let g = 360 / partes;
    	let aux = g;
		draw();
		//stroke('orange');
  		strokeWeight(2);
    	while(g <= 360){
    	let sen = r * Math.sin(g * Math.PI / 180);
		sen = 200 + sen;
		sen = floor(sen);

		ecuapp(200, 200, floor(200 + (r * Math.cos(g * Math.PI / 180))), sen);
		dda(800, 200, floor(800 + (r * Math.cos(g * Math.PI / 180))), sen);
		bresenham(1400, 200, floor(1400 + (r * Math.cos(g * Math.PI / 180))), sen);
        
		g += aux;
    }/*else if{
    	redraw();
    }*/
  }
}