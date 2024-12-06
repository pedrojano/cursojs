
function soma() {
    let tn1 = document.getElementById('txtn1');
    let tn2 = document.getElementById('txtn2');
    let resu = document.getElementById('res');
    let n1 = Number(tn1);
    let n2 = Number(tn2);
    let s = n1 + n2;
    resu.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${s}`;
}