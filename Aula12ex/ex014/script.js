function carregar() {
    var msg = window.document.getElementById('msg')
    var img =window.document.getElementById('imagem')
    var date = new Date()
    var hora =date.getHours()
    msg.innerHTML = `Agora são ${hora}horas`
    if(hora >= 0 && hora < 12) {
        img.src = 'img/manha.jpg' //Imagem de Bom dia
        document.body.style.background = '#DAA520';
    } else if (hora >= 12 && hora < 18) {
        img.src = 'img/tarde.jpg' //Imagem da Tarde
        document.body.style.background = '#FF0000';
    } else {
        img.src = 'img/noite.jpg' //Imaegm Noite
        document.body.style.background = '#7B68EE';
    }
}