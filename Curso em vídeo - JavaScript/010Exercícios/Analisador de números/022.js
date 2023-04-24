/*
--- MEU CÓDIGO ---
var lista = []
var resposta = document.querySelector('div#resultado')

function adicionar(){
    var numero = document.querySelector('input#inumero')
    var n_numero = Number(numero.value)
    
    if (numero.value.length == 0){
        alert ('Por favor, adicione um número!')
    } else{
        if(lista.indexOf(n_numero) != -1 || n_numero < 1 || n_numero >100){
            alert('O valor digitado é inválido ou já está na lista! Por favor, tente novamente.')
        } else {
            resposta.innerHTML = ''
            lista.push(n_numero)

            var analisador = document.querySelector('select#ianalisador')
            var texto = document.createElement('option')
            texto.text = `Valor ${n_numero} adicionado`
            analisador.appendChild(texto)
        }
        numero.value = ''
        numero.focus()
    }
}

function finalizar(){
    total_n = lista.length

    if(total_n == 0){
        alert  ('Não é possível finalizar! Adicione valores')
    }else{

    soma = 0
    for (let i = 0 ; i < total_n ; i++){
        soma += lista[i]
    }

    resposta.innerHTML = ''
    resposta.innerHTML += `Ao todo, temos ${total_n} números cadastrados. <br>`
    resposta.innerHTML += `O menor valor informado foi ${Math.min(...lista)}. <br>`
    resposta.innerHTML += `O maior valor informado foi ${Math.max(...lista)}. <br>`
    resposta.innerHTML += `Somando todos os valores, temos ${soma}. <br>`
    resposta.innerHTML += `A média dos valores informados é ${soma / total_n}.` 
    }
}*/

//--- Código Guanabara ---
let num = document.getElementById('inumero')

let c_lista = document.querySelector('select')
let lista = []

let res = document.querySelector('div#resultado')

function p_num(n){ //n vai receber o valor q esta na função adicionar
    if(Number(n) < 1 || Number(n) > 100){
        return false
    }else{
        return true
    }
}

function p_lista(n , l){
    if(l.indexOf(n) != -1){
        return false
    }else{
        return true
    }
}

function adicionar(){
    if(p_num(num.value) & p_lista(num.value, lista)){ //Isso irá acontecer se as duas funções retornarem 'true'
        res.innerHTML = ''
        lista.push(num.value)

        //Criar uma nova opção para o select
        let v_lista = document.createElement('option')
        v_lista.text = (`Valor ${num.value} adicionado.`)
        c_lista.appendChild(v_lista)

    }else if(num.value == ''){
        alert('Informe um valor!')
    }else{
        alert(`O valor ${num.value} é inválido ou já foi adicionado! Tente novamente.`)
    }

    num.focus() //Manter p cursor ativo
    num.value =''
}

function finalizar(){
    let t_lista = lista.length
    if(t_lista == 0){
        alert('Não é possível finalizar! Por favor, adicione valores.')
    }else{
        let n_maior = Math.max(...lista) //Outro modo de encontrar o maior número de um array
        let n_menor = Math.min(...lista)
        let soma = 0

        for (let valores in lista){ // Vai 'caminhar' por todos os elementos do array 'lista'
            soma += Number(lista[valores]) 
        }

        let media = soma / t_lista

        res.innerHTML = ''
        res.innerHTML += `No total, temos ${t_lista} valores! <br>`
        res.innerHTML += `O maior valor é ${n_maior}. <br>`
        res.innerHTML += `O menor valor é ${n_menor}. <br>`
        res.innerHTML += `A soma dos valores adicionados é ${soma}. <br>`
        res.innerHTML += `A média dos números é ${media}.`
    }
}