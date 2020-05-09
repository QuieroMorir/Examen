function dda(x1, y1, x2, y2) {

	let dx = x2 - x1;
	let dy = y2 - y1;

	let aux;
	if(Math.abs(dx) > Math.abs(dy)){
		aux = Math.abs(dx);
	}else{
		aux = Math.abs(dy);
	}
    let xi = dx / aux;
    let yi = dy / aux;
	let x = x1;
	let y = y1;
  
	for(let i = 0;i < aux; i++)
	{
    	point(x, y)
    	x += xi;
    	y += yi;
	}
}
