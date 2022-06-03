const express = require('express')
const fs = require('fs')
const app = express()

let user = {
    id: 0,
    name: "Igor",
    phone: "(69) 98431-1483"
}

function render(data, obj){
    for(let key in obj){
        data = data.replace(`{{{${key}}}}`, obj[key])
    }

}

app.get("/", (req, res)=>{
    fs.readFile('./templates/user.html', 'UTF8', (err, data)=>{
        if(!err){

           
            res.send(render(data, user))
        }
})})


app.listen(3000, ()=>{
    console.log('Server rodando na porta 3000')
})