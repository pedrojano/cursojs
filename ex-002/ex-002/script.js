function verification(){
    let date = new Date();
    let year = date.getFullYear();
    let formyear = document.getElementById('ano');
    let retur = document.getElementById('return');

    if (formyear.value.length == 0 || formyear < year){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        window.alert('Dados corretos')
    }

    
}
