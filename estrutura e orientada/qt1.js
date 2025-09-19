import PromptSync from "prompt-sync"
const prompt = PromptSync()



let cardapio = []
let semana = ['sabado','domingo']
let turno = ['almoco', 'jantar']
for(let i = 0; i < 2; i++){// dias da semana
    cardapio[i] = []
    for(let j = 0; j < 2; j++ ){//turnos (café, almoço, jantar)
        cardapio[i][j] = prompt(`Insira a opção do ${semana[i]} para o ${turno[j]}: `)
      //  cardapio[i].push(prompt(`Digite sua opção ${semana[i]} - ${turno[j]}: `))
    }
}

console.table(cardapio) // mostra no formato tabela
let dia=prompt(`Digite o dia que deseja alterar: `)
let hor=prompt(`Digite o horário que deseja alterar: `)
let indsemana = semana.indexOf(dia)
let indturno = turno.indexOf(hor)

// cardapio[semana.indexOf(dia)].splice([turno.indexOf(hor)],1) mais uma forma de excluir
cardapio[indsemana].splice(indturno,1)

console.table(cardapio)


let alteradia = prompt("Em qual dia você deseja acrescentar:  ")
let alterahorario = prompt("Em qual turno você deseja acrescentar:  ")

let semanaid = semana.indexOf(alteradia)
let turnoid = turno.indexOf(alterahorario)

if(semanaid === -1 || turnoid === -1){
    console.log(`Dia ou turno inválido!`)
} else {
    console.log(`Você escolheu alterar: ${semana[semanaid]} - ${turno[turnoid]}`)
    cardapio[semanaid][turnoid] = prompt("Digite a nova opção do cardápio: ")
}

console.table(cardapio)