//metodos
function calcmedia(){return (this.nota1+this.nota2) / 2}

var aluno1 = {nome:'Jose', 
nota1: 7.5, 
nota2: 9.5,
media: calcmedia

}
var aluno2 = {nome:'Pedrinho', 
nota1: 7.5, 
nota2: 10,
media: calcmedia

}

console.log('Nome: ' + aluno1.nome)
console.log('Nota 1: ' + aluno1.nota1)
console.log('Nota 2: ' + aluno1.nota2)
console.log('Média: ' + aluno1.media(aluno1.nota1, aluno1.nota2))

