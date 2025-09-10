import PromptSync from "prompt-sync"
import {calcalorias} from "../Funcoespush/funcoes.js"
const prompt = PromptSync()
let atv, temp

do{
 atv = prompt(`Digite qual exercício você pratica ente as opções - Caminhada, corrida ou bicileta: `).toLowerCase()
if(atv==="caminhada" || atv==="corrida" || atv === "bicicleta"){
     temp = Number(prompt(`Digite por quantos minutos foi praticado o exercício: `))
    console.log(`A perca foi de ${calcalorias(atv,temp)} calorias.`)
    break
}else{
    console.log(`Digite a respostas entre as opções.`)
}
}
while(true)
