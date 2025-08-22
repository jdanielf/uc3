import PromptSync from "prompt-sync"
const prompt = PromptSync()
let cadaparc, salario30, juros, emptotal

let salario = Number(prompt("Digite seu salário R$ "))
let empres = Number(prompt("Digite o valor a ser emprestado R$ "))
let parc = Number(prompt("Digite o número de parcelas: "))

salario30 = salario*0.30
juros= empres*0.035
emptotal = empres+(juros*parc)
cadaparc = emptotal/parc

if( cadaparc>salario30){
    console.log("Empréstimo negado!")
}else{
    console.log("Empréstimo aprovado")
    console.log("O valor solicitado foi R$ "+empres.toFixed(2))
    console.log("O total de parcelas é "+parc)
    console.log("O valor do juros é R$ "+juros.toFixed(2))
    console.log("O valor do total do empréstimo é R$ "+emptotal.toFixed(2))
    console.log("O valor por parcela é R$ "+cadaparc.toFixed(2))


}