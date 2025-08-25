import PromptSync from "prompt-sync"
const prompt = PromptSync()

let _1 = 19.50, _2 = 21.50, _3 = 23.50, _4 = 24.50, _5 = 25.50, _6 = 25.50, _7 = 22.50

console.log("Para escolher o lanche, gigite o número correspondente e sua quantidade -")
console.log("1 - Burguer - pão hamburguer + carne 150g- R$ 19,50")
console.log("2 - X-Burguer - pão hamburguer + carne 150g + queijo - R$ 21,50")
console.log("3 - X-Salada - pão hamburguer + carne 150g + queijo + salada - R$ 23,50")
console.log("4 - X-Bacon - pão hamburguer + carne 150g + queijo + bacon - R$ 24,50")
console.log("5 - X-bacon Egg - pão hamburguer + carne 150g + queijo + bacon + ovo - R$ 25,50")
console.log("6 - X-tudo Egg - pão hamburguer + carne 150g + queijo + bacon + ovo + presunto + milho - R$ 25,50")
console.log("7 - Caipira - pão hamburguer + carne 150g + queijo + bacon + ovo - R$ 22,50")

let opc = Number(prompt("Digite o número referente ao hamburguer: "))
let quant = Number(prompt("DIgite a quantidade que deseja: "))

switch (opc) {
    case 1:
        console.log("O valor do lanche é R$ " + _1.toFixed(2) + " ,a quantidade solicitada é " + quant + " und e o valor total é R$ " + (quant * _1).toFixed(2))
        break
    case 2:
        console.log("O valor do lanche é R$ " + _2.toFixed(2) + " ,a quantidade solicitada é " + quant + " und e o valor total é R$ " + (quant * _2).toFixed(2))
        break
    case 3:
        console.log("O valor do lanche é R$ " + _3.toFixed(2) + " ,a quantidade solicitada é " + quant + " und e o valor total é R$ " + (quant * _3).toFixed(2))
        break
    case 4:
        console.log("O valor do lanche é R$ " + _4.toFixed(2) + " ,a quantidade solicitada é " + quant + " und e o valor total é R$ " + (quant * _4).toFixed(2))
        break
    case 5:
        console.log("O valor do lanche é R$ " + _5.toFixed(2) + " ,a quantidade solicitada é " + quant + " und e o valor total é R$ " + (quant * _5).toFixed(2))
        break
    case 6:
        console.log("O valor do lanche é R$ " + _6.toFixed(2) + " ,a quantidade solicitada é " + quant + " und e o valor total é R$ " + (quant * _6).toFixed(2))
        break
    case 7:
        console.log("O valor do lanche é R$ " + _7.toFixed(2) + " ,a quantidade solicitada é " + quant + " und e o valor total é R$ " + (quant * _7).toFixed(2))
        break
    default:
        console.log("Dados inválidos!")
}
