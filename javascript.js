function contar() {
    let ini = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let msg = document.getElementById('msg')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        msg.innerHTML = 'Impossível contar, faltam dados.'
    } else {
        msg.innerHTML = 'Contando... <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido, considerando como 1')
            p = 1
        }
        if (i < f) {
            // Contagem Crescente
            for(let c = i; c <= f; c += p) {
                msg.innerHTML += `${c} \u{1f449}`
            }
        } else {
            // Contagem Regressiva
            for(let c = i; c >= f; c -= p) {
                msg.innerHTML += `${c} \u{1f449}`
            }
        }
        msg.innerHTML += `\u{1f3c1}`
    }
}