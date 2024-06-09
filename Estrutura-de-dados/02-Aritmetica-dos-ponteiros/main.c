#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

//FUNCIONAMENTO DA ARITIMÉTICA DE PONTEIROS

int main()
{
    setlocale(LC_ALL,"Portuguese");
    int inteiro = 189760;
    float pontoFlutuante = 24.4;
    double pontoFlutMaior = 453.3;
    char caract = 'g';

    int *inteiro_ptr = &inteiro;
    float *pontoFlutuante_ptr = &pontoFlutuante;
    double *pontoFlutMaior_ptr = &pontoFlutMaior;
    char *caract_ptr = &caract;

    printf("\nValores armazenados nos ponteiros:\n\n");
    printf("Inteiro: %p\n", inteiro_ptr); //ARMAZENAMENTO DE 4 A 8 BYTES
    printf("Float: %p\n", pontoFlutuante_ptr); //ARMAZENAMENTO DE 4 BYTES
    printf("Double: %p\n", pontoFlutMaior_ptr); //ARMAZENAMENTO DE 8 BYTES
    printf("Char: %p\n", caract_ptr); //ARMAZENAMENTO DE 1 BYTES

    printf("\n\t--------------\n\n");

    int v[5] = {1,2,4,5,6};

    printf("Formas de acessar o mesmo endereço:\n");
    printf("v = %p, &v[0] = %p, &v = %p\n\n", v, &v[0], &v);

    printf("Aritmética de ponteiros:\n");
    int i;
    for(i = 0; i < 5; i++){
        printf("v[%d] = %d, &v[%d] = %p\n", i, v[i], i, &v[i]);
        printf("*(v + %d) = %d, (v + %d) = %p\n\n", i, *(v + i), i, (v + i));
        /*(v + 1)
        v = endereço inicial
        (v + 1) = endereço inicial + (1 * quantidade de bytes do tipo) = endereço da posição, nesse caso 1 = &v[1]
        *(v + 1) = valor apontado por (v + 1) = v[1]*/
    }


    return 0;
}
