import PromptSync from "prompt-sync"
import {adicione} from "../Funcoespush/funcoes.js"
const prompt = PromptSync()

let produto=["biscoito"], quantidade=[2], valor=[1.5], estoque

adicione(produto,quantidade,valor)
console.log(`
        produto -- quantidade -- valor
        ${produto} -- ${quantidade} -- ${valor}
    
    
    `)