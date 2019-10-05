function Peao(id, i, j, cor) {
	Peca.call(this, id, i, j, cor);
	//var peca = new Peca(id, i, j, cor);
	
	this.mover = function(tabuleiro, _i, _j) {
		
		if (_i > 7 || _i < 0 || _j > 7 || _j < 0)
			return false;

		if (this.getI() == _i && this.getJ() == _j)
			return false;
		
		//dois passos na primeira jogada
		if (this.getI() == 1  || this.getI() == 6 ){
			if ((this.getCor() ==1 && this.getI() == _i-2 && this.getJ() == _j)||(this.getCor() ==0 && this.getI() == _i+2 && this.getJ() == _j)){
			return true;
		
			}
			
		}
		//vertical para frente
		if ((this.getCor() ==1 && this.getI() == _i-1 && this.getJ() == _j)||(this.getCor() ==0 && this.getI() == _i+1 && this.getJ() == _j)){
			return true;
		
		}
		return false;
	}
}