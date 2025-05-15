let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

function calcularMediaValida(listaAtletas) {
  for (let i = 0; i < listaAtletas.length; i++) {
    let atleta = listaAtletas[i];
    let notas = atleta.notas.slice(); // faz uma cópia do array de notas
    notas.sort((a, b) => a - b); // ordena as notas em ordem crescente

    // remove a menor e a maior nota
    let notasComputadas = notas.slice(1, 4);

    // calcula a média
    let soma = 0;
    notasComputadas.forEach(nota => {
      soma += nota;
    });
    let media = soma / notasComputadas.length;

    // saída formatada
    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${atleta.notas.join(",")}`);
    console.log(`Média Válida: ${media.toFixed(6)}\n`);
  }
}

calcularMediaValida(atletas);