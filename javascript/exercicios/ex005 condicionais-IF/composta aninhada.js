    
            //Sistema de votos brasileiro
    // var idade = 16
    // console.log(´Você tem ${idade}´)
    //     if (idade < 16) {
    //         console.log('Não vota')
    //     } else if (idade < 18 || idade > 65) {
    //             console.log('Voto opcional')
    //         } else {
    //             console.log('Voto obrigatório')
    //         }


        //pegando hora do sistema
    var agora = new Date()
    var hora = agora.getHours()
    console.log(`Agora são exatamente ${hora} horas`)
    if (hora < 12) {
        console.log('Manhã')
    } else if (hora < 18) {
        console.log('Tarde')
    } else {
        console.log('noite')
    }

    
