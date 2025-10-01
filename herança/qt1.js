import PromptSync from "prompt-sync"
const prompt = PromptSync()


class Pessoas { 
    #cpf
    constructor(nome,cpf,dataNascimento){
        this.nome= nome
        this.#cpf= cpf
        this.dataNascimento= dataNascimento
    }

    get cpf(){
        return this.#cpf
    }
    set cpf (cpf){
        this.#cpf=cpf
    }
    print(){
        console.log(`Digite seu CPF: ${this.#cpf} n\ Digite sua data de nascimento(__/__/__): ${this.dataNascimento}`)
    }
}

class Funcionario extends Pessoas {
    #salario
    #matricula
    constructor(nome,cpf, dataNascimento,salario,matricula, cargo){
        super(nome,cpf, dataNascimento)
        this.#salario=salario
        this.#matricula=matricula
        this.cargo=cargo 

    }

    get salario(){
        return this.#salario
    }
    set salario(sal){
        this.#salario=sal
    }

    get matricula(){
        return this.#matricula
    }
    set matricula(mat){
        this.#matricula=mat 
    }
    print(){
        super.print()
        console.log(`Digite seu salário: ${this.#salario}\n Digite sua matrícula: ${this.#matricula}\n Digite seu cargo: ${this.cargo}`)
        let s = prompt(`Você fez hora extra? (s/n): `)
        if(s==='s'){
       
        let extra= Number(prompt(`Digite quantas horas extras você fez: `))
        let hextra = extra*15
        return hextra
        }
        else{
            console.log(`Não foi feito hora extra `) 

        }
       
        
    }
}


class Gerente extends Funcionario {
#salarioGerente
constructor(nome, cpf, dataNascimento, cargo, salario, matricula, setor, quantidadeEquipe, salariogerente){
        super(nome, cpf, dataNascimento, cargo, salario, matricula)
        this.setor = setor
        this.quantidadeEquipe = quantidadeEquipe
        this.#salarioGerente=salariogerente

}
get salarioGerente(){
    return this.#salarioGerente
}
set salarioGerente(salarioGerente){
    this.#salarioGerente=salarioGerente
}
print(){
    super.print()
    console.log(`Digite seu setor: ${this.setor}\n Digite a quantidade de pessoas na sua equipe: ${this.quantidadeEquipe}`)
   
    if(this.quantidadeEquipe>=10){ 
        let bonus15 = this.#salarioGerente*15
        return bonus15
    }else{
        let bonus7=this.quantidadeEquipe*7
        return bonus7
    }



}

}
class Diretor extends Funcionario{
    #participacaoLucros
    constructor(nome,cpf, dataNascimento,salario,matricula, cargo , partticipacaoLucros ){
        super(nome, cpf, dataNascimento, cargo, salario, matricula)
        this.setor = setor
        this.quantidadeEquipe = quantidadeEquipe


}

class Dono{

}