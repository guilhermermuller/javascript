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
    typedNumber.value = ''
    typedNumber.focus()
}

function finalize() {
    let resultsDiv = document.getElementById('results')
    let max = Math.max(...array)
    let min = Math.min(...array)
    let sum = sumArray(array)

    if (array.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        resultsDiv.innerHTML = ''
        resultsDiv.innerHTML += `<p>Ao todo, temos <strong>${array.length}</strong> números cadastrados.</p>` 
        resultsDiv.innerHTML += `<p>O maior valor informado foi <strong>${max}</strong>.</p>`
        resultsDiv.innerHTML += `<p>O menor valor informado foi <strong>${min}</strong>.</p>`
        resultsDiv.innerHTML += `<p>Somando todos os valores temos <strong>${sum}</strong>.</p>`
        resultsDiv.innerHTML += `<p>A média dos valores é <strong>${mediaArray(array)}</strong>.</p>`
    }
}

function sumArray(temp) {
    let resultado = 0
    for(i = 0 ; i < temp.length ; i++) {
        resultado += temp[i]
    }
    return resultado
}

function mediaArray(temp) {
    let sum = sumArray(temp)
    let length = temp.length
    return sum / length
}