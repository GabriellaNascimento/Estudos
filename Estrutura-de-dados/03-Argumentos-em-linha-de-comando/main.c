#include <stdio.h>
//#include <stdlib.h>

//PASSAGEM DE COMANDO POR LINHA DE COMANDO

//ARGC - NÚMERO DE ARGUMENTOS, INCLUINDO NOME DO PROGRAMA
//ARGV - ARRAY DE STRINGS(PONTEIROS PARA CHAR)
int main(int argc, char *argv[])
{
    printf("Quantidade de argumentos: %d\n", argc);

    int i;
    //EXIBIR TODOS OS PARÂMETROS
    for (i = 0; i < argc; i++){
        printf("argv[%d]: %s\n", i, argv[i]);
    }

    return 0;
}
