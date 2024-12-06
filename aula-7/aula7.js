function coletarInformacoes(){
    let nome = window.prompt("Informe o seu primeiro nome:");
    let sobrenome =window.prompt("Informe seu sobrenome:");
    let idade = parseInt(window.prompt("Informe sua idade:"));
    while (isNaN(idade) || idade <= 0) {
        idade = parseInt(window.prompt("Idade invalida. Por favor digite um número valido."));
    }

    let rua = window.prompt("Infrome a rua onde mora:");
    while (rua === ""){
        rua = window.prompt("Por favor, informe sua rua:");
    }

    let bairro = window.prompt("Informe o seu bairro:");
    while (bairro === ""){
        bairro = window.prompt("Por favor, informe o seu bairro:");
    }

    let cidade = window.prompt("Informe sua cidade:");
    while (cidade === "") {
        cidade = window.prompt("Por favor, informe sua cidade:");
    }
    let estado = window.prompt("Informe o seu estado:")
    while (estado === "") {
        estado = window.prompt("Por favor, informe sue estado:");
    }

    document.write(`
        <p>Olá ${nome} ${sobrenome}! Seus dados são:</p>
        <ul>
            <li>Idade: ${idade} Anos</li>
            <li>Endereço: Rua ${rua}, bairro ${bairro}, cidade ${cidade}, localizado no estado do ${estado} </li>
        </ul>
        `
    );
}
coletarInformacoes();

function somaDasMedias() {
    let nota1 = parseFloat(window.prompt("1° Bimestre:"));
    let nota2 = parseFloat(window.prompt("2° Bimestre:"));
    let nota3 = parseFloat(window.prompt("3° Bimestre:"));
    let nota4 = parseFloat(window.prompt("4° Bimestre:"));
    let total = (nota1 + nota2 + nota3 + nota4) / 4;
    return total;
}
    let media = somaDasMedias();
    if (media >= 60 ){
        document.write(`A sua média foi: ${media} <br>você foi Aprovado`);
    } else {
        document.write(` A sua média foi: ${media} <br>você foi Reprovado`);
    }

