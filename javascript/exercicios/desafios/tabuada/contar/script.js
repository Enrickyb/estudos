
function gerar() {
    var num = document.getElementById('txtn')
    var res = document.getElementById('seltab')

    var n = Number(num.value)
    var vr = 1
    res.innerHTML = ''
    while (vr <= 10){
        var tab = n * vr
        var item = document.createElement('option')
        item.text = `${n} x ${vr} = ${tab}`
        res.appendChild(item)
        vr++
    }
    
}

