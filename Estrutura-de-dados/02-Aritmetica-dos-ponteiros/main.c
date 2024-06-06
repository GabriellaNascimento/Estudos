#include <stdio.h>
#include <stdlib.h>

//FUNCIONAMENTO DA ARITIMÉTICA DE PONTEIROS EM DIFERENTES TIPOS DE DADOS

int main()
{
    int inteiro = 189760;
    float pontoFlutuante = 24.4;
    double pontoFlutMaior = 453.3;
    char caract = 'g';

    int *inteiro_ptr = &inteiro;
    float *pontoFlutuante_ptr = &pontoFlutuante;
    double *pontoFlutMaior_ptr = &pontoFlutMaior;
    char *caract_ptr = &caract;

    printf("Valores armazenados nos ponteiros:\n\n");
    printf("Inteiro: %p\n", inteiro_ptr); //ARMAZENAMENTO DE 4 A 8 BYTES
    printf("Float: %p\n", pontoFlutuante_ptr); //ARMAZENAMENTO DE 4 BYTES
    printf("Double: %p\n", pontoFlutMaior_ptr); //ARMAZENAMENTO DE 8 BYTES
    printf("Char: %p\n", caract_ptr); //ARMAZENAMENTO DE 1 BYTES

    return 0;
}
