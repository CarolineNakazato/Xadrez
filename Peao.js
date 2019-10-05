function Peao(id, i, j, cor) {
	Peca.call(this, id, i, j, cor);
	//var peca = new Peca(id, i, j, cor);
	
	this.mover = function(tabuleiro, _i, _j) {
		
		//falta na posição inicial dois saltos!!!!!!!!!!!!!!
		
		if (_i > 7 || _i < 0 || _j > 7 || _j < 0)
			return false;

		if (i == _i && j == _j)
			return false;
	
		//vertical para frente
		if (i+1 == _i && j == _j){
			return true;
		
		}
		return false;
	}
}