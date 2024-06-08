#include <stdio.h>
#include <locale.h>
//#include <stdlib.h>

//PASSAGEM DE PAR�METROS, POR REFER�NCIA, PARA FUN��ES
/*Fun��o simples de soma e subtra��o de dois valores predefinidos para entender como funciona a passagem
de par�metros por refer�ncia para fun��es -> Conceitos de ponteiros*/

int soma_e_sub(int x, int y, int* z){ //O tipo do endere�o � um ponteiro que aponta para um inteiro
    *z = x + y; //conceito de ponteiros
    return y-x;
}
int main(){
    setlocale(LC_ALL, "Portuguese");
    int a = 10;
    int b = 30;
    int soma; //Armazenamento de lixo de mem�ria

    int res = soma_e_sub(a, b, &soma); //passagem de uma c�pia das duas vari�veis definidade e do endere�o de c

    printf("A soma de %d e %d � %d\n", a, b, soma);
    printf("A subtra��o de %d e %d � %d", b, a, res);

    return 0;
}
