import PromptSync from "prompt-sync"
const prompt = PromptSync()

let nome = 'Daniel'

let valor1 = Number(prompt('Digite um valor1: '))
let valor2 = Number(prompt('Digite um valor2: '))
let valor3 = Number(prompt('Digite um valor3: '))
let result = valor1  +  valor2
let media = (valor1+ valor2+ valor3)/3

console.log("Hello World")
console.log("\"Hello World\"", nome, '!')
console.log("\tHello World" + nome + '!')
console.log(`\\Hello World ${nome} !`)
console.log(`Resultado: ${valor1}+ ${valor2} = ${result}`)
console.log (typeof valor1)
console.log (`Média ${media.toFixed(2)}`)