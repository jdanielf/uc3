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
constructor(nome, cpf, dataNascimento, salario, matricula, cargo, setor, quantidadeEquipe,salarioGerente){
        super(nome,cpf, dataNascimento,salario,matricula, cargo)
        this.setor = setor
        this.quantidadeEquipe = quantidadeEquipe
        this.#salarioGerente=salarioGerente

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
        let bonus15 = this.#salarioGerente+= this.#salarioGerente*0.15
        return bonus15
    }else{
        let bonus7=this.#salarioGerente+= this.quantidadeEquipe*0.07
        return bonus7
    }



}

}
class Diretor extends Funcionario{
    #participacaoLucros
    constructor(nome,cpf, dataNascimento,salario,matricula, cargo, departamento, tempoDirecao,participacaoLucros ){
        super(nome, cpf, dataNascimento,salario, matricula, cargo)
        this.departamento= departamento
        this.tempoDirecao= tempoDirecao
        this.#participacaoLucros=participacaoLucros
    }
        get participacaoLucros(){
            return this.#participacaoLucros
        }
        set participacaoLucros(participacaoLucros){
            this.#participacaoLucros=participacaoLucros
        }   

        print (){ 
            super this.print()
            let partici = prompt(`Você tem participação nos lucros? (s/n): `)
            let tempoDirecao = Number(prompt(`Digite seu tempo de direção em anos: `))
            if(partici==='s' && tempoDirecao>5){
              
                console.log(`Digite seu departamento: ${this.departamento}\n Digite seu tempo de direção: ${this.tempoDirecao}`)
                let bonus = this.#participacaoLucros+= this.#participacaoLucros*0.25
                return bonus

        }

}

class Dono{

}