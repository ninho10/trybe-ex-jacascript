let valor = 3 + 4 * 5
console.log(valor)



let valor2 = (7 + 7) % 3
console.log(valor2)



const idade1 = 18;
if (idade1 >= 18) {
  console.log('Maior de idade');
} else {
  console.log('Menor de idade');
}


const nome = 'Link';
const idade = 21;

if (nome === 'Luigi' || idade < 21) {
  console.log('Olá, mundo!');
} else if (nome !== 'Link' && idade === 22 ) {
  console.log('Eu sou o Link!');
} else if (nome === 'Luigi' || idade !== 21) {
  console.log('Olá, mundo! Eu sou o Link!');
} else if (nome === 'Link' && idade === '21' ) {
  console.log("Hello, world! I'm Link!");
} else if (nome === 'Link' && idade === 21 ) {
  console.log('Eu sou o Link e tenho 21 anos!');
}

let valor3 = (2 ** 3);
console.log(valor3)