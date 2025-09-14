const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".Currency-Value-to-convert")// valor em real 
    const currencyValueConverted = document.querySelector(".Currency-Value")// Outras moedas 




    const dolarToday = 5.4 // valor do dolar hoje.
    const euroToday = 6.2 // valor do euro hoje.
   


    if (currencySelect.value == "dolar") { // se select estiver selecionado o valor de dolar, entre aqui 

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", // estilo da moeda
            currency: "USD" // qual moeda?

        }).format(inputCurrencyValue / dolarToday)


    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
 


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {

        style: "currency", // estilo da moeda
        currency: "BRL" // qual moeda?
    }).format(inputCurrencyValue)



}

function changeCurrency() {   
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "dólar Americano"
        currencyImg.src = "./assets/Dolar(1) 1.png"
         
    }
  
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "euro"
        currencyImg.src = "./assets/Euro.png"
}

convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)