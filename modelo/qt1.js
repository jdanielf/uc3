import PromptSync from "prompt-sync"
const prompt = PromptSync()



let cardapio = []
let semana = ['sabado','domingo']
let turno = ['almoco', 'jantar']
for(let i = 0; i < 2; i++){// dias da semana
    cardapio[i] = []
    for(let j = 0; j < 2; j++ ){//turnos (café, almoço, jantar)
        cardapio[i][j] = prompt(`Insira a opção da ${semana[i]} para o ${turno[j]}: `)
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
// let encontrado = cardapio[semana.indexOf(dia)][turno.indexOf(hor)]
// console.log(encontrado)
// cardapio.splice(encontrado)
console.table(cardapio)


// cardapio[0].splice(0, 1) // remoção com busca

// cardapio[0].splice(cardapio[0].indexOf('pao'), 1) // remoção com busca

// console.log(cardapio)

// cardapio[1][1] = 'Feijao e Arroz' // alteração de valor

// console.log(cardapio)

// CRUD - CREATE READ UPDATE DELETE