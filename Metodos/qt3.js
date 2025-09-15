import PromptSync from "prompt-sync"
const prompt = PromptSync()


let alunos = nomes.map((nome, i) => {
  let media = notas[i].reduce((soma, n) => soma + n, 0) / notas[i].length
  return { nome, media, status: status[i] }
})
console.log("Lista de alunos com médias:", alunos)
[
  { nome: 'Ana', media: 8, status: 'ativo' },
  { nome: 'Bruno', media: 6, status: 'ativo' },
  { nome: 'Carla', media: 9, status: 'ativo' },
  { nome: 'Daniel', media: 3, status: 'ativo' },
  { nome: 'Eduardo', media: 6.67, status: 'ativo' }
]

let aprovados = alunos.filter(aluno => aluno.media >= 7)
console.log("Alunos aprovados:", aprovados)
let mediaGeral = alunos.reduce((soma, aluno) => soma + aluno.media, 0) / alunos.length
console.log("Média geral da turma:", mediaGeral.toFixed(2))


let nomeProcurado = "Carla"  // aqui poderia vir de prompt()
let alunoEncontrado = alunos.find(aluno => aluno.nome === nomeProcurado)

if (alunoEncontrado) {
  console.log("Aluno encontrado:", alunoEncontrado)
} else {
  console.log("Aluno não encontrado.")
}

let todosAtivos = alunos.every(aluno => aluno.status === "ativo")
console.log("Todos ativos?", todosAtivos)

let existeReprovado = alunos.some(aluno => aluno.media < 4)
console.log("Existe aluno com média abaixo de 4?", existeReprovado)