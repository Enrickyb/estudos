// + Adição
// - Subtração
// * Mutiplicação
// / Divisão 
// % = Resto da divisão
// ** = Potência
// ++ Incremento +1
// -- Decremento -1
// += A var recebe ela + (algum numero)

 // Operadores de comparação

// == igual a 
// === valor igual e igual (identico-determina str ou num)
// ! = não é igual
// !== não é igual ou nao igual
// > maior que 
// < menor de
// > = maior que ou igual a 
// <= menor ou igual a 

// var a = 10;
// var b = 15;

// var c = a + b;

// console.log(c);

// var a = 30;
// a--; 
// console.log(a);

// var a = 30;
// a++; 
// console.log(a);

var a = 2;
var b = 2;

console.log (a == b); //true

var a = 2;
var b = '2';

console.log (a === b); //false (string)

var n1 = Number(prompt('digite um numero'))
var n2 = Number(prompt('digite outro numero'))
var r = n1 + n2
alert(`A soma entre ${n1} e ${n2} é ${r}`)


//conversão de string pra numero real parseInt
//conversão de string pra numero decimal parseFloat
//OU NUMBER QUE FAZ TUDOOOOOOO
//De numero pra string é string()




    //Operadores Lógicos

// && e ()
// || ou
// ! Negativo

var idade = 35;

var maior20 = idade > 20;
var menor30 = idade < 30;

var entre = maior20 && menor30;

console.log('Idade', idade);

console.log('Maior que vinte', maior20);

console.log('Menor que trinta', menor30);

console.log('Entre 20 e 30', entre)
