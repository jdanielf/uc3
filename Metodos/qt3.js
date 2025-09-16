import PromptSync from "prompt-sync"
const prompt = PromptSync()



// Receber nomes
const jogador1 = prompt("Digite o nome do Jogador 1: ");
const jogador2 = prompt("Digite o nome do Jogador 2: ");

let pontos1 = 0;
let pontos2 = 0;

console.log("\n=== JOGO DE DADOS ===\n");

for (let rodada = 1; rodada <= 3; rodada++) {
  console.log(`--- Rodada ${rodada} ---`);

  // Jogador 1 joga manualmente
  prompt(`Pressione ENTER para ${jogador1} lançar o dado...`);
  let dado1 = Math.floor(Math.random() * 6) + 1;
  pontos1 += dado1;
  console.log(`${jogador1} tirou: ${dado1}`);

  // Jogador 2 joga manualmente
  prompt(`Pressione ENTER para ${jogador2} lançar o dado...`);
  let dado2 = Math.floor(Math.random() * 6) + 1;
  pontos2 += dado2;
  console.log(`${jogador2} tirou: ${dado2}`);

  console.log("----------------------------\n");
}

// Resultado final
console.log("\n=== RESULTADO FINAL ===");
console.log(`${jogador1}: ${pontos1} pontos`);
console.log(`${jogador2}: ${pontos2} pontos`);

if (pontos1 > pontos2) {
  console.log(`\n🏆 ${jogador1} venceu o jogo!`);
} else if (pontos2 > pontos1) {
  console.log(`\n🏆 ${jogador2} venceu o jogo!`);
} else {
  console.log("\n🤝 O jogo terminou em EMPATE!");
}


// Solicita o nome do cliente
let nome = prompt("Digite seu nome: ")

// Primeira letra maiúscula
let primeiraLetra = nome.charAt(0).toUpperCase()

// Número aleatório entre 100 e 999
let numero = Math.floor(Math.random() * 900) + 100

// Desconto fixo entre 5% e 25% (múltiplo de 5 só para ficar mais realista)
let desconto = (Math.floor(Math.random() * 5) + 1) * 5
// ou poderia ser: Math.floor(Math.random() * 21) + 5

// Monta o cupom
let cupom = primeiraLetra + numero + "-" + desconto + "%"

// Mostra o resultado
console.log("\n=== CUPOM GERADO ===")
console.log("Cliente: " + nome)
console.log("Cupom: " + cupom)