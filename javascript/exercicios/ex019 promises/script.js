let usuarios = ["Adriano", "josé", "marcio"];


function inserirusuario(nome) {

    //criando a promisse
    let promise = new Promise(function(resolve, reject){
        
        // aqui colocamos um 'delay' para que seja dado o push no nome 
    setTimeout(() => {
        usuarios.push(nome)
        let error = false
        if(!error){
            resolve()
        }else{
            reject({msg:'Error de qualquer coisa'})
        }
    }, 1000)
    })

    return promise


}

function listarUsuarios() {
    console.log(usuarios)
}

//primeira maneira
// inserirusuario("igor").then(listarUsuarios); // Aqui vai aparecer no console log os nomes iniciais do array + o nome que adicionamos na função ("Adriano", "José", "Marcio", "Igor") após 1 segundo;

 //segunda maneira
async function executar(){
    await inserirusuario('igor')
    listarUsuarios()
}
executar()

