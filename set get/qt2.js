import PromptSync from "prompt-sync"
import {ContaBancaria} from "../clases/setget.js"
const prompt = PromptSync()
console.log("Conta 1")
let nome1 = prompt("Digite seu nome: ")
let numConta1 = prompt("Digite o número da conta: ")
let numAgencia1 = prompt("Digite o número da agência: ")
let data1 = prompt("Digite a data de abertura (dd/mm/aaaa): ")

let conta1 = new ContaBancaria(nome1, numConta1, numAgencia1, data1)

let dep1 = Number(prompt("Valor para depósito inicial: "))
conta1.deposito(dep1)

let saq1 = Number(prompt("Valor para saque: "))
conta1.saque(saq1)
conta1.print()


console.log("Conta 2")
let nome2 = prompt("Digite seu nome: ")
let numConta2 = prompt("Digite o número da conta: ")
let numAgencia2 = prompt("Digite o número da agência: ")
let data2 = prompt("Digite a data de abertura (dd/mm/aaaa): ")

let conta2 = new ContaBancaria(nome2, numConta2, numAgencia2, data2)

let dep2 = Number(prompt("Valor para depósito inicial: "))
conta2.deposito(dep2)

let saq2 = parseFloat(prompt("Valor para saque: "))
conta2.saque(saq2)

conta2.print()