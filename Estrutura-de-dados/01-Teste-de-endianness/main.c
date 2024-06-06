#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

//VERIFICAR A ORGANIZAÇÃO DOS BYTES NA MEMÓRIA

int main()
{
    setlocale(LC_ALL, "portuguese");// Aceitar acentuações

    unsigned int x = 1; //unsigned - "sem sinal" - naturais - evitar erros

    char *c = (char*)&x;/* (char*) - "casting" - dizendo ao compilador para
    interpretar o endereço de memória de 'x' como se fosse um ponteiro para um
    array de caracteres ('char')*/

    //Endereço de memória de x
    printf("Endereço de memória de x: %p\n", &x);

    //Valor armazenado no primeiro byte
    printf("Valor armazenado no primeiro byte de x: %d\n", *c);

    //Verificação
    if(*c)
        printf("Little endian\n");
    else
        printf("Big endian\n");

    return 1;
}
