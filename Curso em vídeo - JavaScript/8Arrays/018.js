let numeros = [0, 9, 1, 7]

//MOSTRAR VALOR QUE ESTÁ NO INDICE 1
console.log(numeros[1])

//MOSTRA O NÚMERO DE CARACTERES
console.log(numeros.length)

//COLOCA OS VALORES EM ORDEM CRESCENTE - CONSIDERA APENAS A PRIMEIRA CASA DECIMAL
// EXEMPLO NO FIM DESSE ARQUIVO
console.log(numeros.sort())

//ACRESCENTA O NÚMERO QUE ESTÁ ENTRE OS PARÊNTESES, NO FIM DO ARRAY
console.log(numeros.push(7))

console.log(numeros)

//MODIFICA OS VALORES DO ARRAY
console.log(numeros[2]=8) //NO ÍNDICE 2 VAI FICAR O VALOR 8

console.log(numeros)

//MOSTRA O INDICE DE DO NÚMERO ENTRE PARÊNTESES, NO ARRAY
console.log(numeros.indexOf(7))

//SE O NÚMERO NÃO ESTIVER NO ARRAY ELE MOSTRA: -1
console.log(numeros.indexOf(3))

//FORMA MAIS SIMPLES DE MOSTRAR TODOS OS VALORES COM MENOS FORMATAÇÃO
//LÊ: PARA - DENTRO
for (var ola in numeros) {
    console.log(numeros[ola])
}

console.log(numeros)

//OUTRA FORMA
// PARA - VARIAVEL - CONDIÇÃO - INCREMENTO
for (var pos = 0 ; pos <= numeros.length ; pos++){
    console.log(numeros[pos])
}


var teste = [20 , 10 , 300 , 40 , 9]
console.log(teste.sort())