function ecuapp(x1, y1, x2, y2){
	if(x2 < x1)
	{
		let aux = x2;
		x2 = x1;
		x1 = aux;

		aux = y2;
		y2 = y1;
		y1 = aux;
	}
	const dx = x2 - x1;
	const dy = y2 - y1;
	const m = dy / dx;
	const b = y1 - (m * x1);
	point(x1, y1);

	if(x1 === x2){
		if(y1 > y2)
		{
			let aux = y1;
			y1 = y2;
			y2 = aux;
		}
		let y = y1 + 1;
		while(y != y2)
		{
			point(x1,y);
			y++;
		}
	}else{
		let x = x1 + 1;
		let y = m * x + b;
		while(x != x2){
			y = m * x + b;
			y = floor(y);
			point(x, y);
			x++;
		}
	}
}