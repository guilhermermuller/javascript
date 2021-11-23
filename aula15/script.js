let array = []

function addNumber() {
    let typedNumber = document.getElementById('addNumberId')
    let typedNumberValue = parseInt(typedNumber.value)
    let tab = document.getElementById('NumberListId')
    
    if (typedNumberValue <= 0 || typedNumberValue > 100) {
        window.alert('[ERRO] Digite um número de 1 a 100 para adicionar um valor')
    } else {
        let item = document.createElement('option')
        item.text = `Valor ${typedNumberValue} adicionado.`
        array.push(typedNumberValue)
        tab.appendChild(item)
    }
}

function finalize() {
    let resultsDiv = document.getElementById('results')
    let max = Math.max(...array)
    let min = Math.min(...array)
    let sum = sumArray(array)
    resultsDiv.innerHTML = `Ao todo, temos ${array.length} números cadastrados.<br> O maior valor informado foi ${max}. <br> O menor valor informado foi ${min}.`
}

function sumArray(array) {
    resultado = 0
} 