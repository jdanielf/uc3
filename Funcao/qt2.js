import PromptSync from "prompt-sync"
import {depositar,sacar} from "../Funcoespush/funcoes.js"
const prompt = PromptSync()

let dinh , val=0, opc

opc =  prompt(`Digite a operação que deseja realizar (sacar ou depositar): `).toLowerCase()
if(opc==="depositar"){
    dinh=Number(prompt(`Digite o valor que deseja depositar: `))
    val=depositar(val,dinh)
    console.log(`Depósito realizado com sucesso, seu saldo é R$ ${val.toFixed(2)}`)
}else if(opc==="sacar"){
    dinh=Number(prompt(`Digite o valor a ser sacado: `))
    val=sacar(val,dinh)
    console.log(`Saque realizado, seu saldo é R$ ${val.toFixed(2)}`)
}else{
    console.log(`Digite estre as opções - sacar ou depositar!`)
} 

