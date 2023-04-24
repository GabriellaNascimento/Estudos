function verificar(){
    var hoje = new Date()
    var ano = hoje.getFullYear()

    var data_nascimento = Number(document.querySelector('input#inascimento').value)
    var idade = ano - data_nascimento

    var resultado = document.querySelector('p#resultado')
    var imagem = document.querySelector('img#img')
    var mensagem = document.querySelector('p#mensagem')

    resultado.innerHTML = ''
    imagem.setAttribute('src', '')
    
    if(data_nascimento == ''){
        mensagem.innerText = '[ERRO] Por favor, preencha os campos acima!'
    } else if (data_nascimento > ano){
        alert('Valor inválido! Por favor, digite um ano válido.')
    }else{
        mensagem.innerHTML = ''

        var sexo = document.getElementsByName('sexo')
        var genero = ''

        if(sexo[0].checked){
            var genero = 'Homem'
        }else{
            var genero = 'Mulher'
        }

        if(idade <= 13){imagem.setAttribute('src', `imagens/${genero}/criança.jpg`)}
        else if(idade <= 22){imagem.setAttribute('src', `imagens/${genero}/jovem.jpg`)}
        else if(idade <= 50){imagem.setAttribute('src', `imagens/${genero}/adulto.jpg`)}
        else{imagem.setAttribute('src', `imagens/${genero}/idoso.jpg`)}

        resultado.innerText = `Detectamos: ${genero} com ${idade} anos`
    }
}