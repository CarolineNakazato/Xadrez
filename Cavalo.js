function Cavalo(id, i, j, cor) {
	Peca.call(this, id, i, j, cor);
	
	this.mover = function(tabuleiro, _i, _j) {	
		if (!Peca.call.mover(tabuleiro, _i, _j))
			return false;
		
		if(i-1 === _i && j-2 === _j)
			return true;
		if(i+1 === _i && j+2 === _j)
			return true;
		if(i+1 === _i && j-2 === _j)
			return true;
		if(i-1 === _i && j+2 === _j)
			return true;
		if(i-2=== _i && j-1 === _j)
			return true;
		if(i+2=== _i && j+1 === _j)
			return true;
		if(i+2=== _i && j-1 === _j)
			return true;
		if(i-2=== _i && j+1 === _j)
			return true;
			

		return false;
	}

}