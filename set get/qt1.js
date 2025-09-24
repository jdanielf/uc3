import PromptSync from "prompt-sync"
import {Cliente} from "../clases/setget.js"
const prompt = PromptSync()

 



let objetoCliente1= new Cliente(prompt("Digite seu nome: "), prompt("Digite seu endereço: "), Number(prompt("Digite sua renda: ")))
let objetoCliente2= new Cliente(prompt("Digite seu nome: "), prompt("Digite seu endereço: "), Number(prompt("Digite sua renda: ")))

objetoCliente1.imprimir()
console.log(`\n`)
objetoCliente2.imprimir()