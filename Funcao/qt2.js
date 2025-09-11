import PromptSync from "prompt-sync"
import {depositar,sacar} from "../Funcoespush/funcoes.js"
const prompt = PromptSync()

let dinh , val=150, opc
do{
opc =  prompt(`Digite a operação que deseja realizar (sacar ou depositar): `).toLowerCase()
if(opc===`sacar` || opc===`depositar`){
if(opc==="depositar"){
    dinh=Number(prompt(`Digite o valor que deseja depositar: `))
    val=depositar(val,dinh)
    console.log(`Operação realizada com sucesso, seu saldo é R$ ${val.toFixed(2)}`)
    break
}if(opc==="sacar"){
    dinh=Number(prompt(`Digite o valor a ser sacado: `))
    if(dinh>val){
        console.log(`Saldo insuficiente para este valor de saque!\nSeu saldo é  R$ ${val}`)
        break
    }else{
    val=sacar(val,dinh)
    console.log(`Operação realizada, seu saldo é R$ \n${val}`)
    break}
}}
else{
    console.log(`Digite entre as opções - sacar ou depositar!`)
} 
}while(true)
