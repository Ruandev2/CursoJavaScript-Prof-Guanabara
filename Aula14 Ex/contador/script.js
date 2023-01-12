function contar() {
    var ini = document.getElementById('ini')
    var fn = document.getElementById('fn')
    var ps = document.getElementById('ps')
    var res = document.querySelector('div#res')

    if(ini.value.length == 0 || fn.value.length == 0 || ps.value.length == 0) {
        window.alert('[Erro]ao Digitar os dados!')
    } else {
        res.innerHTML = 'Contando:'
       let i = Number(ini.value)
       let f = Number(fn.value)
       let p = Number(ps.value)
       if(i < f){
        for(let c = i;c <= f ;c += p){
            res.innerHTML += `${c} &#128077; `
        } 
       }else {
        for(let c = i;c >= f ;c -= p){
            res.innerHTML += `${c} &#128077;`
        }    

       }
       res.innerHTML += `&#129470;`
   
    }
    
}