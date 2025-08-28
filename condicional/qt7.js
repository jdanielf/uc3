import PromptSync from "prompt-sync"
const prompt = PromptSync()

<<<<<<< HEAD
let ano= Number(prompt("Digite o ano que deseja saber se é bisexto, com 4 digitos: "))

if(ano/4==0){
    

=======
let ano=Number(prompt("Digite o ano, com 4 digitos, para saber se é bissexto: "))

if((ano%4===0 && ano%100!==0) || (ano%400===0)){
    console.log("O ano "+ano+" é bissexto.")
}else{
    console.log("O ano "+ano+" não é bissexto.")
>>>>>>> 90d878f95e2982e9ba253ad638147a82518f9446
}