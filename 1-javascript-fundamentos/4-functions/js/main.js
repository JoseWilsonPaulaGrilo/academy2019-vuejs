/*
  soma
  subtrai
  multiplica
  divide
  full-name
*/

function minhaFuncao(name) {
  return `Olá, ${name}`
}

function soma(x,y){
  return (x + y);
}
function subtracao(x,y){
  return x-y;
}
function multiplicacao(x,y){
  return x*y;
}
function divisao(x,y){
  return (x/y);
}
function fullName(nome,sobrenome){
  return nome + sobrenome;
}

// const minhaFuncao = function (name) {
//   return `Olá, ${name}`
// }

// const minhaFuncao = name => `Olá, ${name}`

console.log(minhaFuncao());
console.log(soma());
console.log(subtracao());
console.log(multiplicacao());
console.log(divisao());
console.log(fullName());