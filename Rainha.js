function Rainha(id, i, j, cor) {
	Peca.call(this, id, i, j, cor);
	
	this.mover = function(tabuleiro, _i, _j) {	
		if (!this.mover(tabuleiro, _i, _j))
			return false;
		//horizontal ou vertical	
		if (i === _i || j === _j)
			return true;
		
		//diagonal	
		if (_i === _j || _i+_j === 7)
			return true;

		return false;
	}

}