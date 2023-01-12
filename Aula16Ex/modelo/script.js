let num = document.querySelector('input#num')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) < 100){
        return true
    }else {
        return false
    }

}

function linLista(n ,l){
    if(l.indexOf (Number(n) != -1)){
        return true
    } else {
        return false
    }


}

function adicionar(){
    if(isNumero(num.value)&& linLista(num.value,valores) ){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} adicinado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else {
        window.alert('Erro')
    }
    num.value = ''
    num.focus()

}

function finalizar(){
    if(valores.length == 0 ){
        window.alert('Adicione valores')
    } else {
        let tot = valores.length
        let menor = valores[0]
        let maior = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            } if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma/ tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} valores cadastrados</p>`
        res.innerHTML += `<p>O maior Valor informado ${maior} valores cadastrados</p>`
        res.innerHTML += `<p>O menor Valor informado ${menor} valores cadastrados</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A Media do Valores são ${media}</p>`
    }

}
    
   