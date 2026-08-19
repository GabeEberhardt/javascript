function contar() {
    let inicioTxt = document.getElementById('txtinicio').value
    let fimTxt = document.getElementById('txtfim').value
    let passoTxt = document.getElementById('txtpasso').value
    let resultado = document.getElementById('resultado')


if (inicioTxt === '') {
    window.alert('Preencha o campo Início para continuar.')
    return
}

let inicio = parseInt(inicioTxt)
let fim = parseInt(fimTxt)
let passo = parseInt(passoTxt)

if (inicio === fim) {
    window.alert('Início e Fim não podem ser iguais.')
    return
}
 
if (passo === 0 ) {
    resultado.innerHTML = 'Passo não pode ser 0.'
    return
}

passo = Math.abs(passo)

resultado.innerHTML = 'Contagem: '

if (inicio < fim) {
    for (let c = inicio;c <= fim;c += passo) {
        resultado.innerHTML += `${c} \u{1F449}`
    }
} else {
    for (let c = inicio;c >= fim;c -= passo) {
        resultado.innerHTML += `${c} \u{1F449}`
    }
}
 resultado.innerHTML += `\u{1F3C1}`
}