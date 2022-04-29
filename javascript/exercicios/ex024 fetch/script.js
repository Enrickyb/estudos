var url = "https://economia.awesomeapi.com.br/last/USD-BRL"


function converter() {
    let input = document.getElementById('valor')
    let value = input.value

    fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((data)=>{
            let rate = data.rates.BRL
            console.log(rate)

            document.getElementById ('resultado').innerHTML = rate * valor
    })
}