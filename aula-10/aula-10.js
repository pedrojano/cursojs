let a = document.getElementById('area');

a.addEventListener('click', clicar);
a.addEventListener('mouseenter', entrar);
a.addEventListener('mouseout', sair);

function clicar(){
    a.innerText = 'Clicou' ;
    a.style.background = 'red';
    a.style.color = 'grey'
}

function entrar(){
    a.innerText = 'Entrou!'
    a.style.background = 'yellow'
    a.style.color = "blue";
}

function sair(){
    a.innerText = 'Saiu!'
    a.style.background = 'green';
    a.style.color = ' brown'
}