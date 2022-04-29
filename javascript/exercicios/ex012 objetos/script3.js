                //Objetos Construtores

//calcula media
var calcmedia = function () {
        return (this.nota1 + this.nota2) / 2
    }

//cria o aluno
function criaraluno(nome,n1,n2){
    
    return { 
    nome: nome,
    nota1: n1,
    nota2: n2,
    media: calcmedia
    }    
}


//adiciona os alunos
var turma = [ 
    criaraluno('Igor', 9, 6),
    criaraluno('Matheus', 7, 4),
    criaraluno('joao', 5, 3)
]


//seleciona o aluno
var aluno = turma[2]
 console.log(aluno);
 console.log(aluno.media())


 ///////////////////////////////////////////////////

// 1 maneira
 for (var aluno of turma) {
     console.log(`Nome: ${aluno.nome} - Media ${aluno.media()}`)
 }
 
// 2 maneira
// turma.forEach( function(elemento){ //forEach pega todos os elementos da array

//     console.log(elemento)

// })

