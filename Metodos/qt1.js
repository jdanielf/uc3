import PromptSync from "prompt-sync"
const prompt = PromptSync()

let nomes=["alface", "carne" , "couve","arroz","rucula","espinafre","queijo","cenoura", "beterraba", "batata"]
let precos=[2.50,75.40,2.00, 5.80,1.00,1.50,42.50,4.00,3.75,2.50,]
let  categoria=["hortifruti","açogue","hortifruti","cereal","hortifruti","hortifruti","laticinio","hortifruti", "hortifruti","hortifruti"]

let hort=nomes.filter((nome,p)=>categoria[p]==="hortifruti" )
console.log (`Os produtos da hortifruti são: ${hort}`)

// let valor=precos.filter((nome,p)=>categoria[p]==="hortifruti" )
let total=hort.reduce((valor,total)=>hort+total)
console.log (`O valor total só das hotifrutis é: R$ ${total}`)

let menor=nomes.filter((nome,p) =>categoria[p]==="hortifruti" && precos[p]<5 )
    
    if(menor.length>0){
console.log (`Os produtos da hortifruti com os valores abaixo de R$5,00 são: ${menor}`)
    }else{
        console.log (`Não existe produtos da hortifruti com os valores acima de R$5,00`)
    }
 
let menorquezero=precos.every((nome,p)=>precos[p]>0 )
if(menorquezero){
    console.log(`Não existe produtos com o valor menor que R$ 0`)
}else{
    console.log(`Existe produtos com o valor menor que R$ 0`)
}

