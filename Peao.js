function Peao(id, i, j, cor) {
	Peca.call(this, id, i, j, cor);
	//var peca = new Peca(id, i, j, cor);
	
	this.mover = function(tabuleiro, _i, _j) {
		
		//falta na posição inicial dois saltos!!!!!!!!!!!!!!
		//alert("a");
		if (_i > 7 || _i < 0 || _j > 7 || _j < 0)
			return false;
//alert("aa");
		if (this.getI() == _i && this.getJ() == _j)
			return false;
		
		//vertical para frente
		if ((this.getCor() ==1 && this.getI() == _i-1 && this.getJ() == _j)||(this.getCor() ==0 && this.getI() == _i+1 && this.getJ() == _j)){
			return true;
		
		}
		return false;
	}
}