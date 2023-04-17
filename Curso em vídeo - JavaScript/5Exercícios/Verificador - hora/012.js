var hoje  = new Date()
var hora = hoje.getHours()
var minutos = hoje.getMinutes()

var mostrarhora = document.getElementById('hora')
var imgmanha = document.getElementById('manha')
var imgtarde = document.getElementById('tarde')
var imgnoite = document.getElementById('noite')

var mensagem = document.querySelector('div#mensagem')

mostrarhora.innerHTML = `Agora são exatamente ${hora} horas e ${minutos} minutos`

if (hora >= 00 & hora < 12) {
    imgmanha.style.display = 'inline-block'
    document.body.style.background = '#B76406'
    mensagem.innerText = 'Bom dia!'
    
} else if (hora < 18){
    imgtarde.style.display = 'inline-block'
    document.body.style.background = '#d2c3b0'
    mensagem.innerText = 'Boa tarde!'

} else{
    imgnoite.style.display = 'inline-block'
    document.body.style.background = '#081D20'
    mensagem.innerText = 'Boa noite!'
}