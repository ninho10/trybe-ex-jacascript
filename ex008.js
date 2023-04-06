let estaSol = false

if (estaSol === true) {
    console.log("vou a praia !!!");
} else {
    console.log("vou ficar em casa!!");

}   


let hoje = 'segunda'

if (hoje === 'sabado') {
    console.log('vou sair, sem hora para voltar...')
} else if (hoje === 'domingo') {
    console.log('vou sair, volto cedo segunda trabalho...')
} else {
    console.log('estou cansado vou ficar em casa...')
}


let atribuirMensagem = true
let mensagem 

if (atribuirMensagem === true) {
    mensagem = 'Olá, Tryber!';
} 




let nota1 = 8;
let nota2 = 6;
    
let media;
let resultado;

media = (nota1 + nota2)/2;

if (media > 7){
    resultado ='Pessoa estudante aprovade';
}else{
    resultado = 'Passoa estudante reprovada';
}

console.log(resultado);
console.log(media)



let idadeJulia = 10;
let idadeErick = 10;
let verificaIdadePessoas;
    
if(idadeJulia > idadeErick){
    verificaIdade = 'Julia é mais velha que Erick'
}else if (idadeErick > idadeJulia){
    verificaIdade = 'Erick é mais velho que Julia'
}else{
    verificaIdade = 'Possuem a mesma idade'
}

console.log(verificaIdade)



let dadoNumero = 16;
let classe = '';

if (dadoNumero < 4){
    resultado = 'Sua classe é: Guerreiro(a)'
    classe = 'Guerreiro(a)'
}else if (dadoNumero >= 4 && dadoNumero < 8){
    resultado = 'Sua classe é: Ladino(a)'
    classe = 'Ladino(a)'
}else if (dadoNumero >= 8 && dadoNumero < 12){
    resultado = 'Sua classe é: Curandeiro(a)'
    classe = 'Curandeiro(a)'
}else if (dadoNumero >= 12 && dadoNumero < 16){
    resultado = 'Sua classe é: Arqueiro(a)' 
    classe = 'Arqueiro(a)'
}else{
    resultado = 'Sua classe é: Feiticeiro(a)'
    classe = 'Feiticeiro(a)'
}
    

console.log(classe)
console.log(resultado)

