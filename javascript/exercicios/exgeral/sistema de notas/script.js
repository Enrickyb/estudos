let convrt = document.querySelector('#convert')
let allalunos = document.getElementById('verAlunos')

let nome = document.getElementById('nome')
let nota1 = document.getElementById('nota1')
let nota2 = document.getElementById('nota2')
let nota3 = document.getElementById('nota3')
let nota4 = document.getElementById('nota4')
let qualAluno = document.getElementById('qualaluno')
const res = document.getElementById('resultado')

 
convrt.addEventListener("click", addAluno)

allalunos.addEventListener("click", verAlunos)
    
function addAluno() {
    let nm = nome.value
    let nt1 = nota1.value
    let nt2 = nota2.value
    let nt3 = nota3.value
    let nt4 = nota4.value
    
    listaN.push(nm)
    listan1.push(nt1)
    listan2.push(nt2)
    listan3.push(nt3)
    listan4.push(nt4)

    let ntt1 = parseInt(nt1)
    let ntt2 = parseInt(nt2)
    let ntt3 = parseInt(nt3)
    let ntt4 = parseInt(nt4)
    

    listaM.push((ntt1 + ntt2 + ntt3 + ntt4) / 4)
    
    console.log(listaN)
    console.log(listan1)
    console.log(listan2)
    console.log(listan3)
    console.log(listan4)
    console.log(listaM)
}

 
    var listaN = []
    var listan1 = []
    var listan2 =[]
    var listan3 =[]
    var listan4 =[]
    var listaM = []

    
    
function verAlunos() {
    var qaluno = qualAluno.value
    var al = listaN.indexOf(qaluno)
    
    res.innerHTML = ` <br>Nome: ${listaN[al]} <br>Nota1: ${listan1[al]}  <br>Nota2: ${listan2[al]}  <br>Nota3: ${listan3[al]} <br>Nota4: ${listan4[al]} <br>média: ${listaM[al]}`
}