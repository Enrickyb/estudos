const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

let users = [
    {
        id: 0,
        name: "Igor",
        phone: "(69)984311483"
    },
    {
        id: 1,
        name: "Enricky",
        phone: "(69)984311483"
    },
    {
        id: 2,
        name: "Maria",
        phone: "(69)984311483"
    }

]



app.set("views", path.join(__dirname, 'views'))
app.set("view engine", "ejs")

app.get("/", (req, res)=>{
    res.render('user', {users})
})



app.listen(3000, ()=>{
    console.log('Server rodando na porta 3000')
})