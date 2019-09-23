function Peao(id, i, j, cor) {
	Peca.call(this, id, i, j, cor);
	
	this.mover = function(tabuleiro, _i, _j) {	
	//falta na posição inicial dois saltos!!!!!!!!!!!!!!
		if !(Peca.call.mover(tabuleiro, _i, _j))
			return false;
		//vertical para frente
		if (i == _i++ && j == _j)
			return true;

		return false;
	}

}