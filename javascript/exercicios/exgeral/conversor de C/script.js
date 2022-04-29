let converter = document.querySelector('.converter')
    let tempC = document.querySelector('#tempC')
    let res = document.querySelector('.res')


function convert(){
    
    let tempconv = tempC.value

    let calcx = (tempconv *9)/5+32
    
    res.innerHTML = `A temperatura em graus fahrenheit é: ${calcx} °F`
    
}
