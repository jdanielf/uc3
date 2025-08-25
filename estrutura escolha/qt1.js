import PromptSync from "prompt-sync"
const prompt = PromptSync()


let valor= Number(prompt("Digite o valor em Real que deseja converter, com no máximo de duas casas decimais: "))
let moeda= prompt("Digite a moeda que deseja converter, escolha entre -Dolar, Euro, Peso, Libra ou Franco: ").toLowerCase()



switch(moeda){
case "dolar":
    console.log("O valor  R$ "+valor.toFixed(2)+ " convertido para "+moeda+ " é "+(valor*5.424).toFixed(2)+" USD.")
break

case "euro":
    console.log("O valor  R$ "+valor.toFixed(2)+ " convertido para "+moeda+ " é "+(valor*6.353).toFixed(2)+" EUR.")
break
case "peso":
    console.log("O valor  R$ "+valor.toFixed(2)+ " convertido para "+moeda+ " é ARS "+(valor*0.0042).toFixed(2))
break
case "libra":
    console.log("O valor  R$ "+valor.toFixed(2)+ " convertido para "+moeda+ " é "+(valor*7.326).toFixed(2)+" GBP.")
break
case "franco":
    console.log("O valor  R$ "+valor.toFixed(2)+ " convertido para "+moeda+ " é "+(valor*6.753).toFixed(2)+" CHF.")
break

default:
  console.log("Digite um valor e moeda validas!")
}