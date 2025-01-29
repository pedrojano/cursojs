function loading() {
    let msg = document.getElementById('msg');
    let img = document.getElementById('imagem');
    let date = new Date();
    let time = date.getHours();
    let min = date.getMinutes();
     
    msg.innerHTML = `Agora são ${time} horas e ${min} minutos.`

    if (time >= 0 && time <= 12) {
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#e2cd9f' 
    } else if (time >= 12 && time <= 18) {
        img.src = 'fototarde.jpg'
        document.body.style.background = '#b0846f'
    } else {
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#000'
    }
}