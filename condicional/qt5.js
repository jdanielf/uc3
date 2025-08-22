import PromptSync from "prompt-sync"
const prompt = PromptSync()

console.log("para saber se tem direito a slgum benefício no transporte, digite as informações solicitadas.")
 let idade = Number(prompt("Digite sua idade: "))
 let estudante= String( prompt("É estudante? digite sim ou não: ")).toLowerCase()

 if(idade<6){
    console.log("Entrada gratuita")
 }else if(idade>=6 && idade<=17){
      if(estudante==="sim"){
         console.log("Meia tarifa")
      }else{console.log("Meia tarifa")}
 }else if( idade>=18 && idade<=59){
    console.log("Tarifa inteira")
 }else if(idade>=60){
    console.log("Tarifa gratuita")
 }