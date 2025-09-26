import PromptSync from "prompt-sync"
const prompt = PromptSync()

class Memoria{
    #tipo
    #frequencia
    #capacidade
    constructor(tipo, frequencia, capacidade){
        this.#tipo= tipo
        this.#frequencia= frequencia
        this.#capacidade= 500
    }

    set tipo(tip){
        this.#tipo=tip
    }
    get tipo(){
        return this.#tipo
    }
    set frequencia(freq){
        this.#frequencia=freq
    }
    get frequencia (){
        return this.#frequencia
    }
    set capacidade(cap){
       
        this.#capacidade=cap
          
            
    }
    get capacidade(){
        return this.#capacidade
    }
    usarMemoria(){
        let quant = Number(prompt(`Digite a quantidade de mémoria utilizada: `))
        if(quant<this.#capacidade)
            this.#capacidade-=quant
            console.log(`Foi utilizada ${quant} da capacidade, sobrando ${this.#capacidade}`)

    }
    liberarMemoria(){

    }
}

let teste = new Memoria()
teste.usarMcdoria()
    