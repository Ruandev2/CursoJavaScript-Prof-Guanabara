function tabuada() {
    let num = document.getElementById('num')
    let tb = document.getElementById('seltab')
    if (num.value.length == 0 ) {
        window.alert('[Erro]Por favor Digite outro Numero')
    } else {
        let n = Number(num.value)
        let c = 1
        tb.innerHTML = '';
        while( c <= 10)  {  
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${c*n}`
            item.value = `tab${c}`
            tb.appendChild(item)
            c++
        }
    }
}