#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

//VERIFICAR A ORGANIZA��O DOS BYTES NA MEM�RIA

int main()
{
    setlocale(LC_ALL, "portuguese");// Aceitar acentua��es

    unsigned int x = 1; //unsigned - "sem sinal" - naturais - evitar erros

    char *c = (char*)&x;/* (char*) - "casting" - dizendo ao compilador para
    interpretar o endere�o de mem�ria de 'x' como se fosse um ponteiro para um
    array de caracteres ('char')*/

    //Endere�o de mem�ria de x
    printf("Endere�o de mem�ria de x: %p\n", &x);

    //Valor armazenado no primeiro byte
    printf("Valor armazenado no primeiro byte de x: %d\n", *c);

    //Verifica��o
    if(*c)
        printf("Little endian\n");
    else
        printf("Big endian\n");

    return 1;
}
