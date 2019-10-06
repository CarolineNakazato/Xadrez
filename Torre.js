function Torre(id, i, j, cor) {
	Peca.call(this, id, i, j, cor);
	
	this.mover = function(tabuleiro, _i, _j) {	
		if (_i > 7 || _i < 0 || _j > 7 || _j < 0)
			return false;

		if (this.getI() == _i && this.getJ() == _j)
			return false;
			
		if (this.getI() == _i || this.getJ() == _j)
			return true;

		return false;
	}

}