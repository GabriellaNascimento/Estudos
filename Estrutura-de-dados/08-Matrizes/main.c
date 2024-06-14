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

    printf("&m = %p, m = %p\n\n", &m, m);

    int b;
    for(b = 0; b < n_linha; b++){
        printf("Linha -> %d, endere�o -> %p, m[%d] = %p\n", b, &m[b], b, m[b]);
        int c;
        for(c = 0; c < n_colunas; c++){
            printf("m[%d][%d] = %d, &m[%d][%d] = %p\n", b, c, m[b][c], b, c, &m[b][c]);
        }
    }

    free(m);

    puts("\n-----------------------");
    puts("\nMatrizes 3D\n");
    puts("Est�ticas\n");

    int n[2][2][3] = {
    //Fatia [0]
        {
            {1, 2, 3}, //Linha 0
            {4, 5, 6}  //Linha 1
        },
    //Fatia [1]
        {
            {7, 8, 9}, //Linha 0
            {10, 11, 12} //Linha 1
        }
    };

    printf("&n = %p, n = %p\n", &n, n);

    puts("\nDin�micas\n");
    int nFatias = 2;
    int nLinhas = 2;
    int nColunas = 3;

    int ***v = NULL;

    v = (int ***) calloc(nFatias, sizeof(int));

    int x;
    for(x = 0; x < nFatias; x++){
        int z;
        v[x] = (int **) calloc(nLinhas, sizeof(int));
        for(z = 0; z < nLinhas; z++){
            v[x][z] = (int *) calloc(nColunas, sizeof(int));
        }
    }

    printf("&v = %p, v = %p\n", &v, v);

    int c;
    for (c = 0; c < nFatias; c++){
        printf("&v[%d] = %p, v[%d] = %p\n", c, &v[c], c, v[c]);
        int i;
        for (i = 0; i < nLinhas; i++){
            printf("&v[%d][%d] = %p, v[%d][%d] = %p\n", c, i, &v[c][i], c, i, v[c][i]);
            int j;
            for(j = 0; j < nColunas; j++){
                printf("&v[%d][%d][%d] = %p, v[%d][%d][%d] = %d\n", c, i, j, &v[c][i][j], c, i, j, v[c][i][j]);
            }
        }
    }
    return 0;
}
