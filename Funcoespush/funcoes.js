import PromptSync from "prompt-sync"
const prompt = PromptSync()



export const calcalorias = (atv,tempo)=>{
    let cal=0
    if(atv==="caminhada"){
        cal = tempo*5
    }if(atv ==="bicicleta"){
        cal=tempo*8
    }if(atv ==="corrida"){
        cal=tempo*10
    }
    return cal
}

export const depositar = (saldo, valor)=>{
    return saldo+valor
}

export const sacar = (saldo,valor)=>{
    if(saldo<valor){
    //    return `Saldo insuficiente para este valor de saque!`
    }else{
        return (saldo-valor).toFixed(2)
    }
}

export function adicione(dsa,da,das){
let nomes = [] 
let valores = [] 
let qtes = []
console.log(`Digite as solicitações-`)

   let nome=prompt(`Digite o nome do produto : `)
    let valor=Number(prompt(`Digite o valor do produto : `))
    let qte=Number(prompt(`Digite a quantidade do produto : `))
nomes.push(nome)
valores.push(valor)
qtes.push(qte)


    return{nomes,valores, qtes}

}