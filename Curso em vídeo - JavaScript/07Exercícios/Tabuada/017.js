function Gerar() {
    var numero = document.querySelector('input#inumero').value
    var tabuada = document.querySelector('select#itabuada')
/*
    APPENDCHILD PARA CRIAR OPTION NO SELECT
    var option1 = document.createElement("option");
    option1.value = "valor1";
    option1.text = "Opção 1";

    tabuada.appendChild(option1);
*/
    
    tabuada.innerHTML = ''

    if(numero.length == 0){
        alert ('Por favor, digite um número')
    }else {
        for (contagem = 0 ; contagem <= 10; contagem++){
            var n_numero = Number(numero)
            var n_multiplicação = n_numero * contagem
            var multiplicação = `${n_numero} x ${contagem} = ${n_multiplicação}`

            var option = document.createElement('option')
            option.text = multiplicação
            tabuada.appendChild(option);
        }
    }
}