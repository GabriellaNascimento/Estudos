#include <stdio.h>
#include <stdlib.h> //Usando Malloc e Calloc
#include <locale.h> //setlocale

int main()
{
    setlocale(LC_ALL, "Portuguese");

    //Aloca��o est�tica
    puts("\tAloca��o est�tica");
    int vetor[3] = {10, 9 ,24}; //� um pseudoponteiro

    printf("&vetor = %p, vetor = %p\n", &vetor, vetor);

    int i;
    for(i = 0; i < 3; i++){
        printf("vetor[%d] = %d, (vetor + %d) = %p\n", i, vetor[i], i, (vetor + i));
    }

    //Aloca��o din�mica usando Malloc
    puts("\n\tAloca��o din�minca");
    puts("Malloc");
    //Inicializa com "lixo de mem�ria"
    float *v_malloc = (float *)malloc(3 * sizeof(float));

    //Aqui, v_malloc � um ponteiro e armazena o valor do primeiro endere�o na heap
    printf("&v_malloc = %p, v_malloc = %p\n", &v_malloc, v_malloc); //Diferente da est�tica, aqui s�o diferentes


    int p;
    for(p = 0; p < 3; p++){
        printf("v_malloc[%d] = %f, (v_malloc + %d) = %p\n", p, v_malloc[p], p, (v_malloc + p));
    }

    //Aloca��o din�mica usando Calloc
    puts("Calloc");
    //Inicializa com o valor 0 do tipo
    int *v_calloc = (int *)calloc(3, sizeof(int));

    printf("&v_calloc = %p, v_calloc = %p\n", &v_calloc, v_calloc);

    int l;
    for(l = 0; l < 3; l++){
        printf("v_calloc[%d] = %d, &v_calloc[%d] = %p\n", l, v_calloc[l], l, v_calloc + l);
    }
    return 0;
}
