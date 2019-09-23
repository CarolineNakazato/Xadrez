function Peca(id, i, j, cor){

	this.getId = function() {
		return id;
	}

	this.getI = function() {
		return i;
	}
	
	this.getJ = function() {
		return j;
	}
	
	this.getCor = function() {
		return cor;
	}
	
	this.setCor = function(_cor) {
		cor = _cor;
	}
	
	this.setI = function(_i) {
		i = _i;
	}
	
	this.setJ = function(_i) {	
		i = _i;
	}
	
	
	this.mover = function(tabuleiro, _i, _j) {	
		//falta verificar se existe um amigo seu ali
	
		// Não pode mover uma peça para fora do tabuleiro.
		if (_i > 7 || _i < 0 || _j > 7 || _j < 0)
			return false;

		// Não pode mover uma peça para o mesmo lugar.
		if (i == _i && j == _j)
			return false;

		return true;
	}
	
	
	this.toString = function() {
		return id + ": cor:" + cor +", pos i:"+i+", pos j:"+j;
	}


}