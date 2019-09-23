function Torre(id, i, j, cor) {
	Peca.call(this, id, i, j, cor);
	
	this.mover = function(tabuleiro, _i, _j) {	
		if !(Peca.call.mover(tabuleiro, _i, _j))
			return false;
			
		if (i === _i || j === _j)
			return true;

		return false;
	}

}