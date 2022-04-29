var agora = new Date()
var horas = agora.getHours() 
// var horas = 14
var horario = document.getElementById ('horas') // span horas
var foto = document.getElementById ('foto') // imagem
var fundo = document.getElementById ('fundo') //background
horario.innerHTML = horas
if (horas >= 6 && horas < 12) {
    foto.src = 'imagem/manha.jpg'
} else if (horas > 18 || horas < 6){
    foto.src = 'imagem/noite.jpg'
    fundo.style.backgroundColor = 'black'
} else {
    foto.src = 'imagem/tarde.jpg'
    fundo.style.backgroundColor = '#964b00'
}
