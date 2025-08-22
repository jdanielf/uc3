import PromptSync from "prompt-sync"
const prompt = PromptSync()
let total, extrcarmot = 3, extracam = 5
let tipo = prompt("Digite o tipo de veículo - carro, moto ou caminhão: ").toLowerCase()
let tempo = Number(prompt("Digite o tempo permanecido em H: ")).toFixed(0)

let carro = 12
let moto = 7
let caminhao = 25

if (tipo === "carro" && tempo > 2) {
    total = carro + ((tempo - 2) * extrcarmot)
    console.log("O total a ser pago é R$ " + total)
} else if (tipo === "carro" && tempo <= 2) {
    console.log("O total a ser pago é R$ " + carro)
} else if (tipo === "moto" && tempo > 2) {
    total = moto + ((tempo - 2) * extrcarmot)
    console.log("O total a ser pago é R$ " + total)
} else if (tipo === "moto" && tempo <= 2) {
    console.log("O total a ser pago é R$ " + moto)
} else if (tipo === "caminhão" && tempo > 2) {
    total = caminhao + ((tempo - 2) * extracam)
    console.log("O total a ser pago é R$ " + total)
} else if (tipo === "caminhão" && tempo <= 2) {
    console.log("O total a ser pago é R$ " + caminhao)
}