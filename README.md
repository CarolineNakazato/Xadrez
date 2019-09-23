# Xadrez

1 Objetivo
Implemente de forma orientada `a objeto o movimento das pe¸cas rei, pe˜ao e torre de um jogo de xadrez. N˜ao ´e
necessario criar uma interface gr´afica. Use o esqueleto fornecido pelo professor.

2 Questoes
Questao 1: Crie uma superclasse Peca, que dever´a ser salva no arquivo peca.js. (1.0pt)
O construtor deve receber como parˆametros os atributos:
• tipo: determina se a pe¸ca ´e branca ou preta.
• posI: determina a posi¸c˜ao i da pe¸ca no tabuleiro.
• posJ: determina a posi¸c˜ao j da pe¸ca no tabuleiro.
• id: determina o identificador da pe¸ca.
A super classe tamb´em dever´a ter 1 m´etodo abstrato puro que dever´a ser implementado nas classes filhas (Rei,
Pe˜ao e Torre):
• mover(tabuleiro, i, j): esse m´etodo move a peca para a posi¸c˜ao i, j do tabuleiro. Se o movimento n˜ao for
poss´ıvel, esse m´etodo deve retornar false. Caso contr´ario, deve retornar true;
Quest˜ao 2: Criar uma classe tabuleiro, que dever´a ser salva no arquivo: tabuleiro.js (3.0pt)
O tabuleiro dever´a ter os m´etodos:
• addPeca(peca): esse m´etodo deve colocar a pe¸ca na posi¸c˜ao i, j no tabuleiro.
• rmPeca(i,j): esse m´etodo deve remover a pe¸ca da posi¸c˜ao i, j do tabuleiro.
• getPeca(i,j): esse m´etodo deve retornar uma referˆencia para o objeto localizado na posi¸c˜ao i, j do tabuleiro.
• getRepresentacao(): esse m´etodo deve retornar uma matriz 8x8. As posi¸c˜oes vazias do tabuleiro devem
ter 0. As demais, deve conter o id de cada pe¸ca.
Dica: use o c´odigo de JogoXadrez como referˆencia.

Quest˜ao 3: Implementar uma classe para as pe¸ca Rei, Pe˜ao e Torre. As classes dever˜ao herdar de Peca e
implementar o movimento de acordo com o jogo oficial. (3.0pt)

Quest˜ao 4: Implementar o m´etodo reiniciar da classe JogoXadrez. Esse m´etodo deve colocar todas as pe¸cas
em suas respectivas posi¸c˜oes. Contudo, a pe¸cas bispo, rainha e cavalo devem ser substitu´ıdas por pe˜oes. (1.0pt)

Quest˜ao 5: Implementar o m´etodo moverPeca da classe JogoXadrez. Esse m´etodo deve chamar o m´etodo mover de pe¸ca e fazer as valida¸c˜oes necess´arias. Retorne false, sempre que o movimento n˜ao for poss´ıvel. (1.0pt)

Quest˜ao 6: Modifique a classe JogoXadrez para que o aplicativo funcione corretamente de acordo com a l´ogica
esperada pela interface. (1.0pt)
