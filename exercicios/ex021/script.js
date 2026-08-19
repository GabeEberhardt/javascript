function gerar () {
    let numTxt = document.getElementById('txtnum').value

    if (numTxt === '') {
        window.alert('Preencha o campo Número para continuar.')
        return
    }

    let num = parseInt(numTxt)
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = ''

    for (let c = 0;c <= 10;c++) {
        resultado.innerHTML += `<li>${num} x ${c} = ${num * c}</li>`
    }
}