import PromptSync from "prompt-sync"
const prompt = PromptSync()

let valor

let cons= Number(prompt("Digite o consumo em KWh: "))
let atra= String(prompt("O pagamento enta em dia? digite 1 para sim ou 2 para não: "))

if(cons<=100){
    valor=cons*1.2
}else{
    valor=cons*1.7
}if(atra.toLocaleLowerCase() === "não" ){
    valor*=1.05
} 
console.log("O valor da conta de energia é R$ "+valor.toFixed(2))
