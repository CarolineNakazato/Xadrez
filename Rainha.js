function Rainha(id, i, j, cor) {
	Peca.call(this, id, i, j, cor);
	
	this.mover = function(tabuleiro, _i, _j) {	
	//pula as outras pecas!!!
		if (_i > 7 || _i < 0 || _j > 7 || _j < 0)
			return false;

		if (this.getI() == _i && this.getJ() == _j)
			return false;
		
		
		//existe amigo no caminho?
	
		
		//falta verificar diagonal!!!!!!
		
		
		
		//horizontal ou vertical	
		if (this.getI() == _i || this.getJ() == _j)
			return true;
		alert("this.getI() "+this.getI()+" _i "+_i+" this.getJ() "+this.getJ() + " _j "+_j);
		//diagonal	
		if (_i - _j == this.getI()-this.getJ() || _i+_j == this.getI()+this.getJ())
			return true;

		return false;
	}

}