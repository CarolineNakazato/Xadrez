function Torre(id, i, j, cor) {
	Peca.call(this, id, i, j, cor);
	
	this.mover = function(tabuleiro, _i, _j) {	
		if (_i > 7 || _i < 0 || _j > 7 || _j < 0)
			return false;

		if (this.getI() == _i && this.getJ() == _j)
			return false;
		
		for(var l = 0; l < 8; l++) {
			for(c = 0; c < 8; c++)
				if(tabuleiro[l][c]!=0){
					if(tabuleiro[l][c].getColor()!=this.getColor()){//inimigo
						if(c == _j){}
					
					}
					
				}
		}
		
		if (this.getI() == _i || this.getJ() == _j)
			return true;

		return false;
	}

}