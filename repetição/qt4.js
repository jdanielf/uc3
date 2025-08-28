import PromptSync from "prompt-sync"
const prompt = PromptSync()

let continuar = 1

while (continuar != 0) {
    console.log("Próxima compra")

let total = 0
 let quantidade = 0
let preco = Number(prompt("Valor do produto (digite 0 para terminar): "))

while(preco != 0){
total = total + preco
quantidade = quantidade + 1
preco = Number(prompt("Valor do produto (digite 0 para terminar): "))
 }
if(quantidade == 0){
    console.log("Caixa finalizado")
    continuar = 0
}else{
    console.log("Total da compra: R$ " + total.toFixed(2))
    let din = Number(prompt("Valor pago: "))
    let tro = din - total

console.log("Quantidade de produtos: " + quantidade)
console.log("Valor da compra: R$ " + total.toFixed(2))
console.log("Valor pago: R$ " + din.toFixed(2))
console.log("Troco: R$ " + tro.toFixed(2))
}
}