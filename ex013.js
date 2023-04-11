
function escreveLetras(palavra) {
    for(let i = 0; i < palavra.length; i++) {
        console.log(palavra[i]);
  }
}




function calculadoraAdicaoSubtracao(primeiroNumero, segundoNumero, operacao) {
    if(operacao === '+'){
        return primeiroNumero + segundoNumero;
    }else if(operacao === '-'){
        return primeiroNumero - segundoNumero;
    }else{
        return 'Operação Inválida!'

    }
}


function palindromo(palavra) {
    if(palavra === palavra.reverse(palavra)) {
        console.log('palindromo');
}
}


palindromo(ana)