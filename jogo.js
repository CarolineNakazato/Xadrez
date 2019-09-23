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
	

	var peca = {};

	// Esse método inicia o jogo.
	this.iniciar = function() {
		for(var i = 0; i < 8; i++) {
			tabuleiro[i] = new Array(8);
			for(j = 0; j < 8; j++)
				tabuleiro[i][j] = 0; // ID_1 = 0
		}
		peca.id = B_PAWN;
		peca.i = 1;
		peca.j = 3;
		tabuleiro[peca.i][peca.j] = peca.id;
		
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
		if (i == peca.i && j == peca.j)
			return peca;
		// >>>>>>>
		return null;
	}

	// Esse método move a peça para a posição i, j do tabuleiro.
	// Se o movimento não for possível, esse método deve retornar false. Caso contrário, deve retornar true;
	// Não é necessário se preocupar com a existência de outra peça. Caso a posição final da peça esteja ocupada por outra, a peça deverá ser substituída pela nova.
	// Sempre que esse método for executado com sucesso (retornando true) o turno deve ser atualizado, passando o controle para o outro jogador. Obs: não é permitido que o usuário mova uma peça de outro jogador.
	this.moverPeca = function(peca, i, j) {
		// Não pode mover uma peça para fora do tabuleiro.
		if (i > 7 || i < 0 || j > 7 || j < 0)
			return false;

		// Não pode mover uma peça para o mesmo lugar.
		if (peca.i == i && peca.j == j)
			return false;

		// Esse é um comportamento de exemplo.
		// <<<<<<<
		tabuleiro[peca.i][peca.j] = 0;
		tabuleiro[i][j] = peca.id;
		peca.i = i;
		peca.j = j;
		// >>>>>>>
		return true;
	}
}
