            //Variaveis compostas (array)

//variavel capaz de armazerar varios valores

// a cada colchete é um elemento da var com os valores

/* num[3] = 6 (adicionando o numero 6 a posição 3)
num.push(7) (adicionando o numero 7 a ultima posição)
num.length (ver quantos elementos tem na array)
num.sort() (coloca os elementos em ordem crescente)
num.indexOf(7) (mostra a posição do 7 na array)
*/

var num = [5,8,4,8,7,6]
num.push(1)
num.sort()

console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

/*for(var pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos}  tem o valor ${num[pos]}`)
}*/
//for simplificado
for(let pos in num){
    console.log(`A posição ${pos}  tem o valor ${num[pos]}`)
}





