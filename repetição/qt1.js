import PromptSync from "prompt-sync"
const prompt = PromptSync()

console.log("Quantidade         Preço")
for(let i = 1 ; i<=50 ; i++){
   
    let valor = i*6.99
    
    console.log("    "+i+"     -       R$ "   +   valor.toFixed(2) )
}