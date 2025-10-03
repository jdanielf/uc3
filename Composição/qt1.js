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
teste.usarMemoria()
    

class Processador{

        #marca
        #modelo
        #nucleo     
        #velocidade 
        constructor(marca, modelo, nucleo, velocidade){
            this.#marca= marca
            this.#modelo= modelo
            this.#nucleo= nucleo
            this.#velocidade= velocidade
        }

        set marca(marc){
            this.#marca=marc
        }
        get marca(){
            return this.#marca
        }

        set nucleo(nuc){
            this.#nucleo=nuc 
        }
        get nucleo(){
            return this.#nucleo
        }

        set modelo(mod){
            this.#modelo=mod 
        }
        get modelo(){
            return this.#modelo
        }

        set velocidade(vel){
            this.#modelo=vel 
        }
        get velocidade(){
            return this.#velocidade
        }


}

class Armazenamento{
    #tipo 
    #capacidade 
    #espaco_utilizado 

    constructor(tipo,capacidade, espaco_utilizado){
        this.#tipo=tipo
        this.#capacidade=capacidade 
        this.#espaco_utilizado= 
    }
    espacoLivre(){
        
    }




}




