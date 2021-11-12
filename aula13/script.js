function verificar() {
    var date = new Date()
    var year = date.getFullYear()
    var dateOfBirth = document.getElementById('txtyear')
    var res = document.getElementById('result')
    if (dateOfBirth.value.lenght == 0 || Number(dateOfBirth.value) > year) {
        window.alert('[ERRO] Ano de nascimento inválido')
    }
    var gender = document.getElementsByName('radsex')
    var age = year - Number(dateOfBirth.value)
}