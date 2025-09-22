import PromptSync from "prompt-sync"
const prompt = PromptSync()


export class Cliente{
    #nome
    #endereco
    #renda

    constructor(nome , endereco, renda){
        this.#nome= nome
        this.#endereco= endereco
        this.#renda= renda

    }
    set nome(nom){
      this.#nome=nom
    }
    get nome(){
        return this.#nome
    }

        set endereco(end){
      this.#endereco=end
    }
    get endereco(){
        return this.#endereco
    }

    set renda(ren){
        this.#renda=ren
      }
      get renda(){
          return this.#renda
      }
      imprimir(){
      console.log(`Nome: ${this.nome} \nEndereço: ${this.endereco} \nRenda R$ ${this.renda.toFixed(2)}`)
        }

}


export class ContaBancaria {
   #nomeTitular
    #saldo
    
  constructor(nomeTitular, numeroConta, numeroAgencia, dataAbertura) {
          this.#nomeTitular = nomeTitular
        this.#saldo = 0
       this.numeroConta = numeroConta
        this.numeroAgencia = numeroAgencia
        this.dataAbertura = dataAbertura
    }
     set NomeTitular(nome) {
        this.#nomeTitular = nome
    }
  
    get NomeTitular() {
        return this.#nomeTitular
    }

   set Saldo(val) {
        if (val >= 0) {
            this.#saldo = val
        } else {
            console.log("Saldo insuficiente.")
        }
    }
    get Saldo() {
        return this.#saldo
    }
    
   saque(val) {
        if (val > 0 && val <= this.#saldo) {
            this.#saldo -= val
            console.log(`Foi sacado R$ ${val.toFixed(2)} `)
        } else {
            console.log("Saldo insuficiente ou valor inválido.")
        }
    }
    deposito(val) {
        if (val > 0) {
            this.#saldo += val
            console.log(`Foi depositado R$ ${val.toFixed(2)} `)
        } else {
            console.log("Valor inválido para depósito.")
        }
    }

    calcularRendimento() {
        return this.#saldo * 0.10
    }

    print() {
   console.log("\nInformações da Conta ")
    console.log(`Titular: ${this.#nomeTitular}`)
    console.log(`Número da Conta: ${this.numeroConta}`)
    console.log(`Agência: ${this.numeroAgencia}`)
   console.log(`Data de Abertura: ${this.dataAbertura}`)
    console.log(`Saldo: R$ ${this.#saldo.toFixed(2)}`)
     console.log(`Rendimento (10%): R$ ${this.calcularRendimento().toFixed(2)}`)
    }
}