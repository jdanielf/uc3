import PromptSync from "prompt-sync"
const prompt = PromptSync()

let nome = prompt(`Digite seu nome: `)

let letra = nome.at(0).toUpperCase()

let num = Math.floor(Math.random() * 999) + 100

let desc = Math.floor(Math.random() * 25) + 5

let cupom= letra+num+"-"+desc+"%"

console.log(`Seu cupom de desconto é ${cupom}`)