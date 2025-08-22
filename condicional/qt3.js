import PromptSync from "prompt-sync"
const prompt = PromptSync()

let valor, valor5, valor10, desc

console.log("Para saber quanto vai pagar na sua compra, digite as informações solicitadas.")
valor = Number(prompt("Qual o valor da compra R$ "))

if(valor<=100){
    valor
    console.log("A compra é de R$ "+valor+ "\nNão houve desconto\nO valor final é R$ "+valor)
}else if(valor>100 && valor<=500){
desc =valor*0.05
valor5= valor*0.95
console.log("A compra é de R$ "+valor+ "\nO valor do desconte é R$ "+desc.toFixed(2)+ "\nO valor final é R$ "+valor5.toFixed(2))
}else{
desc =valor*0.10
valor10=valor*0.90
console.log("A compra é de R$ "+valor+ "\nO valor do desconte é R$ "+desc.toFixed(2)+ "\nO valor final é R$ "+valor10.toFixed(2))
}if(valor>=300){

console.log("Você ganhou um cupom bônus para usar na próxima compra!")
}

