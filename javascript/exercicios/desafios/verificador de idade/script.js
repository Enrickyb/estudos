function verificar() {
        var data = new Date()
        var ano = data.getFullYear()
        var fano = document.getElementById('data')
        var res = document.getElementById('res')
        if (fano.value.length == 0 || fano.value > ano) {
            alert('Verifique os dados e tente novamente!')
        } else {
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var genero = ''
            var img = document.createElement ('img')
            // img.setAttribute ('id', 'foto')
            if (fsex[0].checked) {
                genero = 'Homem'
                if (idade >=0 && idade < 18) {
                    //Jovem
                    img.setAttribute ('src', 'imagem/masculinojovem.jpg')
                } else if (idade < 50) {
                    //adulto
                    img.setAttribute ('src', 'imagem/homem.jpg')
                } else {
                    //Idoso
                    img.setAttribute ('src', 'imagem/idoso.jpg')
                }
            }else if (fsex[1].checked){
                genero = 'Mulher'
                if (idade >=0 && idade < 18) {
                    //Jovem
                    img.setAttribute ('src', 'imagem/femininojovem.jpg')
                } else if (idade < 50) {
                    //adulto
                    img.setAttribute ('src', 'imagem/mulher.jpg')
                } else {
                    //Idoso
                    img.setAttribute ('src', 'imagem/idosa.jpg')
                }
            }

            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            res.appendChild(img)
        }
}

