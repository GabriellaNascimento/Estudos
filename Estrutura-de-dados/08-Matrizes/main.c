#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main()
{
    setlocale(LC_ALL, "Portuguese");

    puts("Matrizes est�ticas\n");

    int linhas = 2;
    int colunas = 3;

    int matriz[2][3] = {{2,4,6},{8,10,12}};
    //Em matrizes est�ticas temos PSEUDO-PONTEIROS, assim como acontece com vetores

    printf("matriz = %p\n&matriz = %p\n&matriz[0][0] = %p\n\n", matriz, &matriz, &matriz[0][0]);

    int i;
    int j;
    for(i = 0; i < linhas; i++){
        for(j = 0; j < colunas; j++){
            printf("&matriz[%d][%d] = %p, matriz[%d][%d] = %d\n", i, j, &matriz[i][j], i, j, matriz[i][j]);
        }
    }

    puts("\n-----------------------");
    puts("\nMatrizes din�micas\n");
    //Dividido em dimens�es, primeiro as linhas e depois as colunas

    int **m = NULL, n_linha = 2, n_colunas = 3; //Armazenado na stack

    m = (int **) calloc(n_linha, sizeof(int *));
    int a;
    for (a = 0; a < n_linha; a++){
        m[a] = (int *) calloc(n_colunas, sizeof(int));
    }

    //stack -> heap linhas -> heap colunas

    printf("&m = %p, m = %p\n", &m, m);


    return 0;
}