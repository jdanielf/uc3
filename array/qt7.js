import PromptSync from "prompt-sync"
const prompt = PromptSync()


let qtd = parseInt(prompt("Quantos atletas participarão da competição? "))
let atletas = []

for (let i = 0; i < qtd; i++) {
    let nome = prompt(`\nInforme o nome do atleta ${i + 1}: `)
    let notas = []

    // Lendo as 7 notas
    for (let j = 0; j < 7; j++) {
        let nota = parseFloat(prompt(`Digite a nota ${j + 1}: `))
        notas.push(nota)
    }

    // Mostrando todas as notas digitadas
    console.log(`Notas de ${nome}: ${notas.join(", ")}`)

    // Descobre maior e menor
    let maior = Math.max(...notas)
    let menor = Math.min(...notas)

    console.log(`Maior nota: ${maior}`)
    console.log(`Menor nota: ${menor}`)

    // Calcula a média tirando maior e menor
    let soma = notas.reduce((a, b) => a + b, 0) - maior - menor
    let media = soma / 5

    console.log(`Média final de ${nome}: ${media.toFixed(2)}\n`)

    atletas.push({ nome: nome, media: media })
}

// Descobre o campeão
let vencedor = atletas.reduce((a, b) => (a.media > b.media ? a : b))

console.log("===== RESULTADO FINAL =====")
for (let atleta of atletas) {
    console.log(`${atleta.nome} - Média: ${atleta.media.toFixed(2)}`)
}
console.log(`\n🏆 O vencedor foi ${vencedor.nome} com média ${vencedor.media.toFixed(2)}!`)