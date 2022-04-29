/*var pessoa = {
    name: 'José Silva',
    idade: 32,
}
var contato = {
    telefone: 8765432,
    email: 'jose@gmail.com'

}
//copia da var pessoa
var copia = {...pessoa, cidade: 'Rio de Janeiro', ...contato} //os pontos fazer a alteração ser somente na copia
copia.idade = 88  //alterando a idade da pessoa APENAS NA COPIA O ORIGINAL NAO MUDA


console.log(pessoa)
console.log(copia)*/

var notas_turma1 = [10,8,4,3]
var notas_turma2 = [4,5,4,6]

var todas_notas = [...notas_turma1, ...notas_turma2]
console.log(todas_notas)