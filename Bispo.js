function Bispo(id, i, j, cor) {
	Peca.call(this, id, i, j, cor);
	
	this.mover = function(tabuleiro, _i, _j) {	
		if !(Peca.call.mover(tabuleiro, _i, _j))
			return false;
		
		//diagonal	
		if (_i === _j || _i+_j === 7)
			return true;

		return false;
	}

}