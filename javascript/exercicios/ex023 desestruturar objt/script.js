var aluno = {
    matricula: 1234,
    nome: 'Marcos',
    telefone: 984311483,
    cidade: 'Barra do pirai'   
}

var {matricula, nome, ...resto} = aluno //pegando somente a matricula

console.log (matricula) //tb funciona pra array
