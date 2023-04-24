var hoje  = new Date()
var hora = hoje.getHours()
var minutos = hoje.getMinutes()

var mostrarhora = document.getElementById('hora')
var imagem = document.querySelector('img#imagens')

var mensagem = document.querySelector('div#mensagem')

mostrarhora.innerHTML = `Agora são exatamente ${hora} horas e ${minutos} minutos`

if (hora >= 00 & hora < 12) {
    imagem.src = 'imagens/manha.jpg'
    document.body.style.background = '#B76406'
    mensagem.innerText = 'Bom dia!'
    
} else if (hora < 18){
    imagem.src = 'imagens/tarde.jpg'
    document.body.style.background = '#d2c3b0'
    mensagem.innerText = 'Boa tarde!'

} else{
    imagem.src = 'imagens/noite.jpg'
    document.body.style.background = '#081D20'
    mensagem.innerText = 'Boa noite!'
}