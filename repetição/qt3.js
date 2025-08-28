import PromptSync from "prompt-sync"
const prompt = PromptSync()

let numero = Number(prompt("Digite um número inteiro para saber se ele é primo: "))

let c=0

for(let i = 1 ; i<=numero ; i++){
    if(numero%i===0){
      console.log("O número "+numero+ " é divisível por "+i)  
    c++
    }
}
if(c===2){
    console.log("O número "+numero+ " é primo.")
}else{
    console.log("O número "+numero+ " é composto.")
}
// console.log(c)