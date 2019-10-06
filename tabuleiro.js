function tabuleiro() {
	var tabuleiro = new Array(8);
	
	this.iniciar = function() {
		tabuleiro[i] = new Array(8);
			for(j = 0; j < 8; j++)
				tabuleiro[i][j] = 0; 
		}
		return tabuleiro;
	}
	
	this.getPeca = function(i,j) {
		return tabuleiro[i][j];
	}
	this.getRepresentacao = function() {
		return tabuleiro;
	}
	
	this.addPeca = function(peca){// esse m ́etodo deve colocar a pe ̧ca na posi ̧c ̃ao i, j no tabuleiro.
		tabuleiro[peca.getI()][peca.getJ()] = peca;
	}
	this.rmPeca= function(i,j){// esse m ́etodo deve remover a pe ̧ca da posi ̧c ̃ao i, j do tabuleiro.
		return tabuleiro[i][j] = 0;
	}
}
