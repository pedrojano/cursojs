// selecionando por marca 

let p1 = document.getElementsByTagName('p')[0]
window.document.write('Está escrito assim: ' + p1.innerText);

let p2 = document.getElementsByTagName('p')[1]
window.document.write('Está escrito assim: ' + p2.
innerText);
p2.style.background = 'brown'
// selecionando por id 

let d = document.getElementById('msg')
d. style.background = 'black'
d.innerText = 'Estou aguardando...'

// selecionando por nome

let e = document.getElementsByClassName('nm')[0]
e.style.background = 'aqua'
e.innerText = 'Selecionando por nome'

// selecionando por classe

let f = document.getElementsByClassName('class')[0]
f.style.background = 'red'
e.innerText = 'Selecionando por classe'

// selecionando por seletor (querySelector())

let g = document.querySelector('#querys')
g.style.background = 'grey'
g.innerText = 'Selecionando por querySelector()'

// selecionando por seletor (querySelectorAll())


let h = document.querySelectorAll('.queryall')[0]
h.style.background = 'blue'
h.innerText = "Selecionando por querySelectorAll()"
