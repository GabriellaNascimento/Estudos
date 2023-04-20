function Contar() {
    var n_inicio = Number(document.querySelector('input#n_inicio').value)
    var n_fim = Number(document.querySelector('input#n_fim').value)
    var n_passo = Number(document.querySelector('input#n_passo').value)

    var mensagem = document.querySelector('p#mensagem')
    var resultado = document.querySelector('p#resultado')

    var emoji = '&#x1F449;'
    var emoji_fim = '&#x1F3C1;'

    resultado.innerHTML = ''
    mensagem.innerHTML = ''

    if(n_inicio.length == 0 || n_fim.length == 0 || n_passo.length == 0) {
        alert ('Todos os campos precisam conter valores. Tente novamente.')
    } else if (n_passo < 0) {
        alert ('Opa... O passo não pode ser menor que 0. Tente novamente.')
    } else{
        if (n_passo == 0) {
            alert('Passo inválido! Considerando PASSO = 1')
            n_passo = 1
        }
        
        if (n_inicio <= n_fim && n_passo <= n_fim) {
            mensagem.innerHTML = 'Contando...'
            for (var i = n_inicio; i <= n_fim; i += n_passo) {

                resultado.innerHTML += i
                resultado.innerHTML += emoji
            }
            resultado.innerHTML += emoji_fim

        } else if (n_inicio > n_fim && n_passo <= n_inicio) {
            mensagem.innerHTML = 'Contando...'
            for (var i = n_inicio; i >= n_fim; i -= n_passo) {

                resultado.innerHTML += i
                resultado.innerHTML += emoji
            }
            resultado.innerHTML += emoji_fim
        } else{
            mensagem.innerHTML = 'Passo inválido!'
        }
    }
}