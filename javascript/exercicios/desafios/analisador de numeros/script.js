    
    let nu = document.getElementById ('fnum')
    let res = document.getElementById ('res')  
    let lista = document.getElementById ('flista')
    
    let m = []

function adicionar(){
    let num = Number(nu.value)
    
    if (num != 0 && num < 100) {
        m.push(num)
        
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado `
        lista.appendChild(item)

    } else {
        alert('Erro, confira os dados')
    }
 
}

function finalizar() {
       
        let qnt = m.length
        m.sort()
        let last = m[m.length-1];
        let first = m[0];

        res.innerHTML = `<p>Ao todo, temos ${qnt} numeros cadastrados</p>`

        res.innerHTML += `<p>O maior valor informado foi ${last}</p>`

        res.innerHTML += `<p>O menor valor informado foi ${first}</p>`
        
        var soma = 0
        var i = 0
        while (i < m.length){
            soma += m[i]
            i++
        }        
        var media = soma / m.length
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média de todos os valores digitados é ${media}</p>`

}