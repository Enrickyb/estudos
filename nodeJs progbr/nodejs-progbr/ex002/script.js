let fs = require('fs')

fs.unlink('teste.txt',(error)=>{
    if(error) {throw error}

    console.log('arquivo apagado com sucesso')
})
