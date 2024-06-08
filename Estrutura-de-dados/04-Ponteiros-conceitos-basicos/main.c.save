#include <stdio.h>
#include <stdlib.h>

//CONCEITOS BÁSICOS SOBRE PONTEIROS

int main()
{
    int num = 24;
    int* p1 = NULL; //É O INDICADO A FAZER
    int *p2; //VAI ARMAZENAR LIXO DE MEMÓRIA

    /* p2 = &p1
    TENTATIVA DE APONTAR p2 PARA O ENDEREÇO DE UM PONTEIRO QUE APONTA PARA UM INTEIRO
     ISSO NÃO É POSSÍVEL, POIS p2 APONTA APENAS PARA O ENDEREÇO DE UM INTEIRO */

    int **p3 = &p1; //AGORA É POSSÍVEL -> PONTEIRO PARA UM PONTEIRO PARA INT

    printf("&num = %p, num = %d\n", &num, num);
    printf("&p1 = %p, p1 = %p\n", &p1, p1);
    printf("&p2 = %p, p2 = %p\n", &p2, p2);
    printf("&p3 = %p, p3 = %p\n\n", &p3, p3);

    p1 = &num;
    p2 = p1; //POSSÍVEL POIS TÊM O MESMO TIPO

    printf("&num = %p, num = %d\n", &num, num); //ENDEREÇO E VALOR DE NUM
    printf("&p1 = %p, p1 = %p, %d\n", &p1, p1, *p1); //ENDEREÇO, ENDEREÇO DO VALOR APONTADO E VALOR APONTADO
    printf("&p2 = %p, p2 = %p, %d\n", &p2, p2, *p2);
    printf("&p3 = %p, p3 = %p, %p\n", &p3, p3, *p3); //ENDEREÇO, ENDEREÇO DO VALOR APONTADO E VALOR APONTADO

    /*
    int * -> Int pointer
    int ** -> int* * -> ponteiro para um ponteiro para inteiro
    int *** ...
    COMO TODOS SÃO PONTEIROS -> TAMANHO DE TODOS = 8BYTES
    */
    return 0;
}
