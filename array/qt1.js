import PromptSync from "prompt-sync"
const prompt = PromptSync()

let todos=[], par=[], imp=[] , num
console.log("Digite 20 números inteiros para saber se é par ou ímpar")

for(let i=0; i<20; i++){    
num=Number(prompt(`Digite ${i+1}º número: `))


if(Number.isInteger(num)){
 todos.push(num)
 if(num%2==0){
    par.push(num)
  } else{
        imp.push(num)
    }
 }
else{
console.log("Digite um número inteiro!")
i--
}


}
console.log(`Os números digitados foram: ${todos}`)
console.log(`Os números pares foram: ${par}`)
console.log(`Os números ìmpares foram: ${imp}`)