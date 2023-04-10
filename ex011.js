//Estrutura de Repetição

let index = 10;


for (let index = 10; index >= 1; index = index - 2) {
    console.log(index);
    }
    

    const listaDeCompras = [
        'maçã',
        'gengibre',
        'miojo',
        'biscoito/bolacha',
        'banana',
        'feijão carioquinha',
        'pasta de dente',
      ]; 

      

    const carrinho = []; 

    for (let i = 0; i < listaDeCompras.length; i++) {
        carrinho.push(listaDeCompras[i]);
    }

    console.log(carrinho);


const amizadesDaJuliana = ['Erickson', 'Cleyton', 'Laura', 'Claudio', 'Sheila', 'Vinicius', 'Leticia'];
const amizadesDoAdilson = ['Leticia', 'Guilherme', 'Cleyton', 'Ivan', 'Vinicius', 'Gisele'];
const amizadesEmComum = [];

for (let indexDaJuliana = 0; indexDaJuliana < amizadesDaJuliana.length; indexDaJuliana = indexDaJuliana + 1) {
  console.log(amizadesDaJuliana[indexDaJuliana]);
}


const jogos = [2, 5, 10, 22, 36, 43, 49, 55];
const resultado = [3, 7, 20, 22, 36, 49];


for (let index = 0; index < jogos.length; index = index + 1) {
    for (let index2 = 0; index2 < resultado.length; index2 = index2 + 1) {
        if (jogos[index] === resultado[index2]){
        console.log(jogos[index])
        }
}
}
const numero = [1, 2, 3, 4, 5];

function exibeItem(numero){
    for (let i = 0; i < numero.length; i = i + 1){
        console.log(numero[i]);
    }
}

exibeItem(numero);


const valoresProdutos = [10, 12, 8];
let somaTotal = 0;


for(i = 0; i < valoresProdutos.length; i = i + 1){
    somaTotal = somaTotal + valoresProdutos[i];
}

console.log(somaTotal);



const listaDeFrutas = ['banana', 'maçã', 'mamão', 'goiaba'];

listaDeFrutas.push('manga')

for(let i = 0; i < listaDeFrutas.length; i = i + 1){
    console.log(listaDeFrutas[i]);
}


const multiplicador = [3, 7];

for (let i = 0; i < multiplicador.length; i = i + 1){
    for(let j = 1; j <= 9; j++){
    console.log(`${multiplicador[i]} x ${j} = ${multiplicador[i] * j}`);
} 
}
