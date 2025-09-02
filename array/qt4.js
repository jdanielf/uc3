import PromptSync from "prompt-sync"
const prompt = PromptSync()

let temp=[], soma=0, mes=["Janeiro", "Fevereiro", "Março","abril", "Maio", "Junho", 
"Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], c=0,m=0

console.log("Digite a média de tempetarura de cada mês.")

do{
   let graus=Number(prompt(`Digite a média de ${mes[c]}: `))
   temp.push(graus)
  
    soma+=graus
      c++
    
}
while(c<=11)

    let media=soma/12
    console.log(`A média de temperatura foi ${media.toFixed(2)}°C`)

console.log(`Os meses acima da média são -`)    
do{
    if(temp[m]>media){
    console.log(`${mes[m]} - ${temp[m]}°C`)
    }
    m++
}
while(m<12)


