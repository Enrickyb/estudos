//localStorage.setItem('nome','igor') grava um dado na memoria do navegador 
//localStorage.getItem() pega o dado gravado no navegador
//localStorage.removeItem() apaga o dado da memoria do navegador

onload = function() {
    let nome = this.localStorage.getItem('nome')
    let h1 = this.document.getElementById('nome')
    h1.innerHTML = nome
}
function atualizar(element) {
    let valor = element.value;
    console.log(valor)
    let h1 = document.getElementById ('nome')
    h1.innerHTML = valor
    localStorage.setItem('nome', valor)
}