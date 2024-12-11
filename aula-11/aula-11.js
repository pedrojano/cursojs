
function soma() {
    let txtn1 = document.getElementById('txtn1');
    let txtn2 = document.getElementById('txtn2');
    let resu = document.getElementById('resu')
    let n1 = Number(txtn1.value);
    let n2 = Number(txtn2.value);
    let soma = n1 + n2;
    resu.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${soma}`;
}