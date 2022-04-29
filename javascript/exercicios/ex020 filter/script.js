

function novoAluno(nome,idade){
    return {nome, idade}
}
let alunos = [
    novoAluno('Mário', 23),
    novoAluno('João', 17),
    novoAluno('Pedro', 53),
    novoAluno('Matheus', 33),
]


//////primeira maneira de imprimir por idade///////
// for (let aluno of alunos){
//     if (aluno.idade < 30){
//         console.log(aluno)
//     }
// } 

///segunda maneira////
function temmenosde30(aluno){
    return aluno.idade < 30
}
function temmaisde30(aluno){
    return aluno.idade > 30
}

let alunosmenosde30 = alunos.filter(temmenosde30)

console.log(alunosmenosde30)