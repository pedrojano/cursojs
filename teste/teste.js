// document.getElementById("meuFormulario").addEventListener("submit", function(event) {
//     event.preventDefault(); // Impede o envio padrão do formulário

//     // Capturar os dados do formulário
//     const nome = document.getElementById("nome").value;
//     const sobrenome = document.getElementById("sobrenome").value;
//     // ... outros campos ...
//     const nota1 = parseFloat(document.getElementById("nota1").value);
//     // ... outras notas ...

//     // Calcular a média
//     const total = (nota1 + nota2 + nota3 + nota4) / 4;

//     // Criar o elemento HTML para exibir os resultados
//     const resultadoDiv = document.getElementById("resultado");
//     resultadoDiv.innerHTML = `
//         <p>Olá ${nome} ${sobrenome}! Seus dados são:</p>
//         <ul>
//             <li>Média: ${total}</li>
//             <li>Resultado: ${total >= 60 ? 'Aprovado' : 'Reprovado'}</li>
//         </ul>
//     `;
// });



function selecionar() {
    // Obtém os valores do formulário
    let selectorType = document.getElementById('selector').value;
    let selectorValue = document.getElementById('value').value;
    let newText = document.getElementById('newText').value;

    // Seleciona o elemento com base no tipo de seletor
    let element;
    switch (selectorType) {
        case 'tagName':
            element = document.getElementsByTagName(selectorValue)[0];
            break;
        case 'id':
            element = document.getElementById(selectorValue);
            break;
        case 'className':
            element = document.getElementsByClassName(selectorValue)[0];
            break;
        case 'querySelector':
            element = document.querySelector(selectorValue);
            break;
        case 'querySelectorAll':
            element = document.querySelectorAll(selectorValue)[0];
            break;
    }

    // Aplica as mudanças no elemento
    if (element) {
        element.style.background = 'lightblue';
        element.innerText = newText;
    } else {
        alert('Elemento não encontrado.');
    }
}