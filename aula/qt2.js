import PromptSync from "prompt-sync"
const prompt = PromptSync()
let valor, descfinal, des, valfinal, nome
nome= prompt("Digite o nome do produto: ")
valor= Number(prompt("Digite o valor do produto: "))
des= Number(prompt("Digite a porcentagem de desconto: "))
descfinal=valor*(des/100)
valfinal=valor-descfinal
console.log("O produto " + nome+ " tem o valor de R$ " + valor+ " com o desconto fica R$ "+valfinal)