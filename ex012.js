/*

function imprimeSaudacao(nome, sobrenome, idade) {
    const saudacao = 'Olá, ' + nome + ' ' + sobrenome + '!';
    const exibeIdade = 'Você tem ' + idade + ' anos.';
  
    return saudacao + ' ' + exibeIdade;
  }
  
  console.log(imprimeSaudacao('Alberto', 'Cavalcanti', 85));
  console.log(imprimeSaudacao('Cleyton', 'Oliveira', 32));
  console.log(imprimeSaudacao('Sandra', 'Cardoso', 58));





  function calculaDespesa(luz, internet) {
    const despesaTotal = luz + internet;
  
    return 'Esse mês, a despesa foi de: R$ ' + despesaTotal;
  }
  
  console.log(calculaDespesa(230, 125));  


  function dividas(luz, alugal, internet) {
    const despesaTotal = luz + alugal + internet;
    return 'Esse mês, a despesa foi de: R$'+ despesaTotal;
  }

  console.log(dividas(230, 125, 125));




function saudacao(nome){
    return 'Olá, ' + nome + '!';

saudacao(Julia)

*/


function total(valor){
    let soma = 0;

    for (let i = 0; i < valor.length; i++){
        soma = soma + valor[i];
    }
        return soma;
}

let dinheiro = [10, 10, 20];

console.log(total(dinheiro));
