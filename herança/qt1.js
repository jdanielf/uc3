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
       console.log(`Cadastro de Funcionário \n`)
        let func1 = new Funcionario()
        func1.nome = prompt(`Digite seu nome: `)
        func1.cpf = Number(prompt(`Digite seu CPF: `))
        func1.dataNascimento =Number(prompt(`Digite sua data de nascimento(__/__/__): `))
        func1.salario = Number(prompt(`Digite seu salário: `))
        func1.matricula = Number(prompt(`Digite sua matrícula: `))
        func1.cargo = prompt(`Digite seu cargo: `)
        console.log(`O valor total do salário com hora extra é de: R$${func1.salario+func1.print()}`)
    
        break
    case '2':
       console.log(`Cadastro de Gerente \n`)
       let ger1 = new Gerente()
         ger1.nome = prompt(`Digite seu nome: `)
         ger1.cpf = Number(prompt(`Digite seu CPF: `))
            ger1.dataNascimento =Number(prompt(`Digite sua data de nascimento(__/__/__): `))        
            ger1.salario = Number(prompt(`Digite seu salário: `))
            ger1.matricula = Number(prompt(`Digite sua matrícula: `))
            ger1.setor = prompt(`Digite seu setor: `)      
            console.log(`O valor total do salário do gerente com bônus é de: R$${ger1.salario+ger1.print()}`)
            
    
        break
    case '3':
        console.log(`Cadastro de Diretor \n`)
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
        console.log(`Cadastro de Dono \n`)
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


