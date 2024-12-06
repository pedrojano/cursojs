// let nota1 = Number.parseFloat(window.prompt('Digite sua primeira nota:'));
// let nota2 = Number.parseFloat(window.prompt('Digite sua segunda nota:'));
// let nota3 = Number.parseFloat(window.prompt('Digite sua terceira nota:'));
// let nota4 = Number.parseFloat(window.prompt('Digite sua quarta nota:'));
// let media = (nota1 + nota2 + nota3 + nota4) / 4 ;

// window.alert("Sua média é de: "   + media);


function calcularMedia(quantidadeNotas) {
    let notas = [];
    for (let i = 1; i <= quantidadeNotas; i++) {
      let nota = parseFloat(prompt(`Digite a nota ${i}:`));
      while (isNaN(nota)) {
        nota = parseFloat(prompt(`Valor inválido. Digite a nota ${i} novamente:`));
      }
      notas.push(nota);
    }
  
    const media = notas.reduce((acc, nota) => acc + nota, 0) / quantidadeNotas;
    return media.toFixed(2); // Formata a média para duas casas decimais
  }
  
  const quantidadeNotas = 4;
  const media = calcularMedia(quantidadeNotas);
  alert(`Sua média é: ${media}`);