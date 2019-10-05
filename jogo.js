function JogoXadrez() {
	var vez = 1;//branco
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

	//var tabuleiro = [];
	var tabuleiro = new Array(8);
	var t = [];
	
	let peca  = new Peao(B_PAWN,1,3,1);
	
	
	let B_ROOK1   = new Torre(B_ROOK,0,0,1);
	let B_KNIGHT1 = new Cavalo(B_KNIGHT,0,1,1);	
	let B_BISHOP1 = new Bispo(B_BISHOP,0,2,1);
	let B_KING1   = new Rei(B_KING,0,3,1);
	let B_QUEEN1  = new Rainha(B_QUEEN,0,4,1);
	let B_ROOK2   = new Torre(B_ROOK,0,7,1);
	let B_KNIGHT2 = new Cavalo(B_KNIGHT,0,6,1);	
	let B_BISHOP2 = new Bispo(B_BISHOP,0,5,1);
	
	let B_PAWN1 = new Peao(B_PAWN,1,0,1);
	let B_PAWN2 = new Peao(B_PAWN,1,1,1);	
	let B_PAWN3 = new Peao(B_PAWN,1,2,1);
	let B_PAWN4 = new Peao(B_PAWN,1,3,1);
	let B_PAWN5 = new Peao(B_PAWN,1,4,1);
	let B_PAWN6 = new Peao(B_PAWN,1,5,1);
	let B_PAWN7 = new Peao(B_PAWN,1,6,1);	
	let B_PAWN8 = new Peao(B_PAWN,1,7,1);
	
	let W_ROOK1   = new Torre(W_ROOK,6,0,1);
	let W_KNIGHT1 = new Cavalo(W_KNIGHT,6,1,1);	
	let W_BISHOP1 = new Bispo(W_BISHOP,6,2,1);
	let W_KING1   = new Rei(W_KING,6,3,1);
	let W_QUEEN1  = new Rainha(W_QUEEN,6,4,1);
	let W_ROOK2   = new Torre(W_ROOK,6,7,1);
	let W_KNIGHT2 = new Cavalo(W_KNIGHT,6,6,1);	
	let W_BISHOP2 = new Bispo(W_BISHOP,6,5,1);
	
	let W_PAWN1 = new Peao(W_PAWN,7,0,1);
	let W_PAWN2 = new Peao(W_PAWN,7,1,1);	
	let W_PAWN3 = new Peao(W_PAWN,7,2,1);
	let W_PAWN4 = new Peao(W_PAWN,7,3,1);
	let W_PAWN5 = new Peao(W_PAWN,7,4,1);
	let W_PAWN6 = new Peao(W_PAWN,7,5,1);
	let W_PAWN7 = new Peao(W_PAWN,7,6,1);	
	let W_PAWN8 = new Peao(W_PAWN,7,7,1);
	// Esse método inicia o jogo.
	this.iniciar = function() {
		for(var i = 0; i < 8; i++) {
			tabuleiro[i] = new Array(8);
			for(j = 0; j < 8; j++)
				tabuleiro[i][j] = 0; // ID_1 = 0
		}
		
		
		
		tabuleiro[B_ROOK1.getI()][B_ROOK1.getJ()] = B_ROOK1;
		tabuleiro[0][1] = B_KNIGHT1;
		tabuleiro[0][2] = B_BISHOP1;
		tabuleiro[0][3] = B_KING1;
		tabuleiro[0][4] = B_QUEEN1;
		tabuleiro[0][5] = B_BISHOP2;
		tabuleiro[0][6] = B_KNIGHT2;
		tabuleiro[0][7] = B_ROOK2;
		tabuleiro[1][0] = B_PAWN1;
		tabuleiro[1][1] = B_PAWN2;
		tabuleiro[1][2] = B_PAWN3;
		tabuleiro[1][3] = B_PAWN4;
		tabuleiro[1][4] = B_PAWN5;
		tabuleiro[1][5] = B_PAWN6;
		tabuleiro[1][6] = B_PAWN7;
		tabuleiro[1][7] = B_PAWN8;
		
		tabuleiro[6][0] = W_ROOK1;
		tabuleiro[6][1] = W_KNIGHT1;
		tabuleiro[6][2] = W_BISHOP1;
		tabuleiro[6][3] = W_KING1;
		tabuleiro[6][4] = W_QUEEN1;
		tabuleiro[6][5] = W_BISHOP2;
		tabuleiro[6][6] = W_KNIGHT2;
		tabuleiro[6][7] = W_ROOK2;
		tabuleiro[7][0] = W_PAWN1;
		tabuleiro[7][1] = W_PAWN2;
		tabuleiro[7][2] = W_PAWN3;
		tabuleiro[7][3] = W_PAWN4;
		tabuleiro[7][4] = W_PAWN5;
		tabuleiro[7][5] = W_PAWN6;
		tabuleiro[7][6] = W_PAWN7;
		tabuleiro[7][7] = W_PAWN8;
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
		if(tabuleiro[i][j]<=6 && vez == 1)
			return null;
		if(tabuleiro[i][j]>6 && vez == 0)
			return null;
		
		//if (i == peca.getI() && j == peca.getJ())
		return tabuleiro[i][j];
		// >>>>>>>
		return null;
	}

	// Esse método move a peça para a posição i, j do tabuleiro.
	this.moverPeca = function(peca, i, j) {
		//verificar se é sua vez ||
		if(peca.getId()>6 && vez == 0){
			return false;
		}
		if(peca.getId()<=6 && vez == 1){
			return false;
		}
		//verificar se é um amigo
		if(vez===0){// se for branco
			if(tabuleiro[i][j]<=6)
				return false;
		}else{
			if(tabuleiro[i][j]>6)
				return false;
		}
		
		if(!peca.mover(tabuleiro, i, j)){
			return false;
		}
		
		tabuleiro[peca.getI()][peca.getJ()] = 0;
		tabuleiro[i][j] = peca;
		peca.setI(i);
		peca.setJ(j);
		if(vez===0){
			vez++;
		}else{
			vez = 0;
		}
		return true;
	}
}
