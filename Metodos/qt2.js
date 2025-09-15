import PromptSync from "prompt-sync"
const prompt = PromptSync()

let nomes=["Maria", "José", "Ana", "João", "Francisco", "Carlos", "Paulo", "Pedro", "Lucas"]
let notas=[4.0,8.0,9.0,7.6,6.4,8.4,5.3,8.4,7.0]
let status=["ativo", "ativo", "inativo", "ativo", "inativo","ativo", "ativo", "inativo", "ativo"]


notas.forEach((nota,p)=>{
if( nota >= 7){
    console.log(`${nomes[p]} - ${nota} `)
}   
})
















// let alunos =notas.filter((nome,p) =>categoria[p]==="hortifruti" && precos[p]<5 )



// let alunos = nomes.map((nome, i) => {
//     let media = notas[i].reduce((soma, n) => soma + n, 0) / notas[i].length
//     return { nome, media, status: status[i] }
//   })
//   console.log("Lista de alunos com médias:", alunos)

// let aprovados = notas.filter(aluno => media >= 7)
// console.log("Alunos aprovados:", aprovados)
// let mediaGeral = alunos.reduce((soma, aluno) => soma + aluno.media, 0) / alunos.length
// console.log("Média geral da turma:", mediaGeral.toFixed(2))