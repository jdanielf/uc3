import PromptSync from "prompt-sync"
const prompt = PromptSync()

let j1= prompt(`Digite o nome do primeiro jogador: `)
let j2=prompt(`Digite o nome do segundo jogador: `)

let p1=0
let p2=0
console.log(`\n------ Que comecem os jogos -------`)
for(let jogada=1;jogada<=3; jogada++ ){
    console.log(`Jogador  ${j1} lance o dado pela ${jogada}º vez: `)

    prompt(`Aperte enter para ${j1} lançar o dado - `)
    let d1 = Math.floor(Math.random() * 6) + 1
    p1+=d1
    console.log(`O jogador ${j1} tirou - ${d1}`)
    console.log(`-----------------------------\n`)

    console.log(`Jogador  ${j2} lance o dado pela ${jogada}º vez: `)
    prompt(`Aperte enter para ${j2} lançar o dado - `)
    let d2 = Math.floor(Math.random() * 6) + 1
    p2+=d2
    console.log(`O jogador ${j2} tirou - ${d2}`)
    console.log(`-----------------------------\n`)  

}

console.log(`\n------- FIM DO JOGO -------`) 
console.log(`O jogador ${j1} acumulou ${p1} pontos \nO jogador ${j2} acumulou ${p2} pontos`)
console.log(`\n------- VENCEDOR -------`)
    if(p1>p2){
        console.log(`         ${j1}       `)
    }else if(p1<p2){
        console.log(`         ${j2}        `)
    }else{
        console.log(`O jogo foi empate`)
    }
