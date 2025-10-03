import PromptSync from "prompt-sync"
import {Pessoas,Funcionario, Gerente,Diretor,Dono} from "./export.js" 
const prompt = PromptSync()


let teste
do{
 teste = prompt( `
   Quais das opções deseja cadastrar - 
    1- Funcionário 
    2- Gerente
    3- Diretor
    4- Dono
    5- Sair
     `
)

switch(teste){
    case '1':
        prompt(`Cadastro de Funcionário \n`)
        // let func1 = new Funcionario()
        let nome = prompt(`Digite seu nome: `)
        let cpf = prompt(`Digite seu CPF: `)
        let dataNascimento = prompt(`Digite sua data de nascimento(__/__/__): `)
        let salario = Number(prompt(`Digite seu salário: `))
        let matricula = prompt(`Digite sua matrícula: `)
        let cargo = prompt(`Digite seu cargo: `)
        let func = new Funcionario(nome,cpf, dataNascimento,salario,matricula, cargo)
        console.log(`O valor total do salário com hora extra é de: R$${func.salario+func.print()}`)
        break
    case '2':
        prompt(`Cadastro de Gerente \n`)
        let nomeG = prompt(`Digite seu nome: `)
        let cpfG = prompt(`Digite seu CPF: `)
        let dataNascimentoG = prompt(`Digite sua data de nascimento(__/__/__): `)
        let salarioG = Number(prompt(`Digite seu salário: `))
        let matriculaG = prompt(`Digite sua matrícula: `)
        let cargoG = prompt(`Digite seu cargo: `)
        let setor = prompt(`Digite seu setor: `)
        let quantidadeEquipe = Number(prompt(`Digite a quantidade de pessoas na sua equipe: `))
        let salarioGerente = Number(prompt(`Digite o valor do seu salário para calcular o bônus: `))
        let ger = new Gerente(nomeG, cpfG, dataNascimentoG, salarioG, matriculaG, cargoG, setor, quantidadeEquipe,salarioGerente)
        console.log(`O valor total do salário do gerente com bônus é de: R$${ger.print()}`)
        break
    case '3':
        prompt(`Cadastro de Diretor \n`)
        let nomeD = prompt(`Digite seu nome: `)
        let cpfD = prompt(`Digite seu CPF: `)
        let dataNascimentoD = prompt(`Digite sua data de nascimento(__/__/__): `)
        let salarioD = Number(prompt(`Digite seu salário: `))
        let matriculaD = prompt(`Digite sua matrícula: `)
        let cargoD = prompt(`Digite seu cargo: `)
        let departamento = prompt(`Digite seu departamento: `)
        let tempoDirecao = Number(prompt(`Digite seu tempo de direção em anos: `))
        let participacaoLucros = Number(prompt(`Digite o valor da sua participação nos lucros para calcular o bônus: `))
        let dir = new Diretor
    case `4`:
        prompt(`Cadastro de Dono \n`)
        let nomeDo = prompt(`Digite seu nome: `)
        let cpfDo = prompt(`Digite seu CPF: `)
        let dataNascimentoDo = prompt(`Digite sua data de nascimento(__/__/__): `)
        let salarioDo = Number(prompt(`Digite seu salário: `))
        let matriculaDo = prompt(`Digite sua matrícula: `)
        let cargoDo = prompt(`Digite seu cargo: `)
        let qtdFuncionarios = Number(prompt(`Digite a quantidade de funcionários na empresa: `))
        let qtdDiretores = Number(prompt(`Digite a quantidade de diretores na empresa: `))
        let patrimonioEmpresa = Number(prompt(`Digite o valor do patrimônio da empresa para calcular o bônus: `))
        let dono = new Dono(nomeDo, cpfDo, dataNascimentoDo, salarioDo, matriculaDo, cargoDo, qtdFuncionarios, qtdDiretores, patrimonioEmpresa)
        console.log(`O valor total do salário do dono com bônus é de: R$${dono.print()}`)
        break


}
}while(teste!=5)


