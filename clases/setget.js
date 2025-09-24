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