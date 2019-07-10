const a = 10
const b = 5
const c = '5'

console.log('igual a ', b == c);
console.log('identico a ', b === c);
console.log('diferente ', b!= c);
console.log('realmente é diferente ', b !== c);
console.log('maior ', a > b);
console.log('maior ou igual ', a >= b);
console.log('menor ', a < b);
console.log('maior ou igual', a <= b);

if(4 > 2){
  console.log('é');
}else{
  console.log('não é');
}

const maior = (4 > 2) ? 'é' : 'não é';
console.log(maior);

console.log('maior ->', a > b && b == c);
console.log('maior ->', a > b || b == c);
console.log('maior ->', !(a > b) && b == c);

/*
  Operadores de comparação
  - igual a
  - identico a 
  - diferente
  - maior que
  - maior ou igual a
  - menor que
  - menor ou igual a
*/


/*
 Operadores Lógicos
 - e &&
 - ou ||
 - negação
*/

/*
 - If
 - ternário
*/