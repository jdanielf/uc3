import PromptSync from "prompt-sync"
const prompt = PromptSync()

let termo= Number(prompt("Digite quantos termos deseja vizualizar: "))
let ant=0, atu=1 ,c=1
while(termo>=c){
console.log(ant)
let prox = ant+atu
ant=atu
atu=prox
c++

}