import PromptSync from "prompt-sync"
const prompt = PromptSync()

let velcarr= Number(prompt("Digite a velocidade do carro: "))
let velvia= Number(prompt("Digite a velocidade permitida na via: "))

let velvia10= velvia+(velvia*0.10)

if(velcarr>velvia && velcarr<=velvia10){
console.log("Atenção: acima do permitido, multa leve!")

}if(velcarr>velvia10){
    console.log("Atenção: acima do permitido, multa grave!")
}else{
    console.log("Velocidade dentro do limite.")
}