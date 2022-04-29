let usuarios = ["Adriano", "josé", "marcio"];


function inserirusuario(nome, callback) {

// aqui colocamos um 'delay' para que seja dado o push no nome 

    setTimeout(() => {
        usuarios.push(nome);
        callback()
    }, 1000)

}

function listarUsuarios() {
    console.log(usuarios)
}

listarUsuarios(); // Aqui vai aparecer no console log somente os nomes iniciais do array ("Adriano", "José", "Marcio"), 

inserirusuario("igor", listarUsuarios); // Aqui vai aparecer no console log os nomes iniciais do array + o nome que adicionamos na função ("Adriano", "José", "Marcio", "Igor") após 1 segundo;