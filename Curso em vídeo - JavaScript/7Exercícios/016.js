function Contar() {
    var i_inicio = document.querySelector('input#n_inicio').value
    var i_fim = document.querySelector('input#n_fim').value
    var i_passo = document.querySelector('input#n_passo').value

    var inicio = i_inicio.toString()
    var fim = i_fim.toString()
    var passo = i_passo.toString()

    var mensagem = document.querySelector('p#mensagem')
    var resultado = document.querySelector('p#resultado')

    var emoji = '&#x1F449;'
    var emoji_fim = '&#x1F3C1;'


    if(inicio.length = 0 || fim.length == 0 || passo.length == 0) {
        alert ('Todos os campos precisam conter valores. Tente novamente.')
    } else {
        mensagem.innerHTML = '' 
        resultado.innerHTML = ''

        n_inicio = Number(i_inicio)
        n_fim = Number(i_fim)
        n_passo = Number(i_passo)

        if (n_passo <= 0) {
            alert ('Opa... O passo não pode ser menor ou igual a 0. Tente novamente.')
        }

        if(n_inicio == n_fim){
            mensagem.innerHTML = '[ERRO] Confira os dados: <br>'
            mensagem.innerHTML += '- O número do início não pode ser igual ao número final <br>'
        } else{
            mensagem.innerHTML = 'Contando...'
            if (n_inicio < n_fim) {
    
                if(n_passo > n_fim){
                    mensagem.innerHTML = '[ERRO] Confira os dados: <br>'
                    mensagem.innerHTML += '- O número do passo não pode ser maior do que o número final'
                }else{
                    for (var i = n_inicio; i <= n_fim; i += n_passo) {
    
                    resultado.innerHTML += i
                    resultado.innerHTML += emoji
                    }
                }

            } else if (n_inicio > n_fim) {
                if(n_passo > n_inicio){
                    mensagem.innerHTML = '[ERRO] Confira os dados: <br>'
                    mensagem.innerHTML += '- O número do passo não pode ser maior do que o número inicial'
                }else{
                    for (var i = n_inicio; i >= n_fim; i -= n_passo) {
                        resultado.innerHTML += i
                        resultado.innerHTML += emoji
                    }
                }
            }
            resultado.innerHTML += emoji_fim
        }
    }
}