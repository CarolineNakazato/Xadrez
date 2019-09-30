function JogoXadrez() {
	var vez = 0;//branco
	// Identificador de cada peça!
	const W_KING   = 1;  // "&#9812" ♔
	const W_QUEEN  = 2;  // "&#9813" ♕
	const W_ROOK   = 3;  // "&#9814" ♖
	const W_BISHOP = 4;  // "&#9815" ♗
	const W_KNIGHT = 5;  // "&#9816" ♘
	const W_PAWN   = 6;  // "&#9817" ♙
	const B_KING   = 7;  // "&#9818" ♚
	const B_QUEEN  = 8;  // "&#9819" ♛
	const B_ROOK   = 9;  // "&#9820" ♜
	const B_BISHOP = 10; // "&#9821" ♝
	const B_KNIGHT = 11; // "&#9822" ♞
	const B_PAWN   = 12; // "&#9823" ♟

	// Esse é um código de exemplo
	// <<<<<<<
	var tabuleiro = new Array(8);
	
	var peca  = new Peao("B_PAWN",1,3,1);

	// Esse método inicia o jogo.
	this.iniciar = function() {
		for(var i = 0; i < 8; i++) {
			tabuleiro[i] = new Array(8);
			for(j = 0; j < 8; j++)
				tabuleiro[i][j] = 0; // ID_1 = 0
		}
		
		tabuleiro[0][0] = B_ROOK;
		tabuleiro[0][1] = B_KNIGHT;
		tabuleiro[0][2] = B_BISHOP;
		tabuleiro[0][3] = B_KING;
		tabuleiro[0][4] = B_QUEEN;
		tabuleiro[0][5] = B_BISHOP;
		tabuleiro[0][6] = B_KNIGHT;
		tabuleiro[0][7] = B_KING;
		tabuleiro[1][0] = B_PAWN;
		tabuleiro[1][1] = B_PAWN;
		tabuleiro[1][2] = B_PAWN;
		tabuleiro[1][3] = B_PAWN;
		tabuleiro[1][4] = B_PAWN;
		tabuleiro[1][5] = B_PAWN;
		tabuleiro[1][6] = B_PAWN;
		tabuleiro[1][7] = B_PAWN;
		
		tabuleiro[6][0] = W_ROOK;
		tabuleiro[6][1] = W_KNIGHT;
		tabuleiro[6][2] = W_BISHOP;
		tabuleiro[6][3] = W_KING;
		tabuleiro[6][4] = W_QUEEN;
		tabuleiro[6][5] = W_BISHOP;
		tabuleiro[6][6] = W_KNIGHT;
		tabuleiro[6][7] = W_KING;
		tabuleiro[7][0] = W_PAWN;
		tabuleiro[7][1] = W_PAWN;
		tabuleiro[7][2] = W_PAWN;
		tabuleiro[7][3] = W_PAWN;
		tabuleiro[7][4] = W_PAWN;
		tabuleiro[7][5] = W_PAWN;
		tabuleiro[7][6] = W_PAWN;
		tabuleiro[7][7] = W_PAWN;
	}
	
	// Esse método retorna um array 8x8 contendo o estado do tabuleiro.
	this.getTabuleiro = function() {
		// return tabuleiro.getRepresentacao();
		return tabuleiro;
	}

	// Esse método reinicia o jogo.
	this.reiniciar = function() {

	}

	// Esse método retorna uma referência para o objeto peça que está na posição i,j do tabuleiro.
	// Se a posição não tiver uma peça pertencente ao jogador atual, esse método deve retornar null;
	this.getPeca = function(i, j) {
		// Esse é um código de exemplo.
		// <<<<<<<
		if (i == peca.getI() && j == peca.getJ())
			return peca;
		// >>>>>>>
		return null;
	}

	// Esse método move a peça para a posição i, j do tabuleiro.
	this.moverPeca = function(peca, i, j) {
		if(!peca.mover(tabuleiro, i, j)){
			return false;
		}
		
		tabuleiro[peca.getI()][peca.getJ()] = 0;
		tabuleiro[i][j] = peca.getId();
		peca.setI(i);
		peca.setJ(j);
		return true;
	}
}
