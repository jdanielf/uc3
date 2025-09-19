import PromptSync from "prompt-sync"
const prompt = PromptSync()

let nomes = []

while (true) {
  let digi = prompt(`Digite os nomes dos funcionários e 0 para encerrar: `)

  if (digi === "0") {
    break
  }
  digi = digi.trim()
    nomes.push(digi)
  
}

if (nomes.length > 0) {
  let sorteio = Math.floor(Math.random() * nomes.length)  b
  console.log("\n--- RESULTADO DO SORTEIO ---")
  console.log("Funcionário vencedor: " + nomes[sorteio])
} else {
  console.log("Nenhum nome válido informado!")
}