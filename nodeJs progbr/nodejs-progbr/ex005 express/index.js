const express = require("express")
const path = require("path")

let alunos = [
    {id: 0, nome: 'Jose'},
    {id: 1, nome: 'Enricky'},
    {id: 2, nome: 'Maria'},
    {id: 3, nome: 'Joaquim'},
    {id: 4, nome: 'Pedro'}
]

const app = express()


app.use(express.urlencoded())

app.get("/", (req, res)=>{
    res.send("Hello World")
})


app.get("/alunos",(req, res)=>{
    res.json(JSON.stringify(alunos))
})
app.get("/aluno/:id", (req, res)=>{
    console.log(req.params.id)
    let aluno = alunos[req.params.id]
    res.json(aluno)
})


const PORT = 5000
app.listen(PORT, ()=>{
    console.log("Server running on port 5000")
})