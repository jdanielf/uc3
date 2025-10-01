import PromptSync from "prompt-sync"
const prompt = PromptSync()


class Pessoas { 
    #cpf
    constructor(cpf,dataNascimento){
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
    constructor(cpf, dataNascimento,salario,matricula, cargo){
        super(cpf, dataNascimento)
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


class Gerente {


}

class Diretor{


}

class Dono{

}