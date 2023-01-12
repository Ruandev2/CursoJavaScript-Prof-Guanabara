function verificar() {
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.getElementById( 'txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(`[ERRO]verifique os dados tente novamente`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = "";
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homen'
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src','img/criançaM.jpeg')
            }else if (idade < 21) {
                img.setAttribute('src','img/jovemM.jpeg')
            }else if (idade < 50) {
                img.setAttribute('src','img/adultoM.webp')
            }else {
                img.setAttribute('src','img/idosoM.jpeg')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src','img/criançaF.jpg')
            }else if (idade < 21) {
                img.setAttribute('src','img/jovemF.jpeg')
            }else if (idade < 50) {
                img.setAttribute('src','img/adultoF.webp')
            }else {
                img.setAttribute('src','img/idosoF.jpeg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
       
    }
   
}