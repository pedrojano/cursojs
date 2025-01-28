function loading() {
    let msg = document.getElementById('msg');
    let img = document.getElementById('foto');
    let date = new Date();
    // let time = date.getHours();
    let time = 20
    msg.innerHTML = `Agora são ${time} horas.`

    if (time >= 0 && time <= 12) {
        img.src = 'fotomanha'
        document.body.style.background = '#e2cd9f' 
    } else if (time >= 12 && time <= 18) {
        img.src = 'fototarde'
        document.body.style.background = '#b0846f'
    } else {
        img.src = 'fotonoite'
        document.body.style.background = '#000'
    }
}