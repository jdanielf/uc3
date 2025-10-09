import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt
import {contaBacaria, Contadeposito} from "./classe.js"


const cliente1 = new contaBacaria(prompt('Nome Titular:'),Number (prompt('Saldo da conta:')),prompt('Número da conta:'),prompt('Número da agencia:'),prompt('Data da abertura da conta:'))
const cliente2 = new contaBacaria//(prompt('Nome Titular:'),Number (prompt('Saldo da conta:')),prompt('Número da conta:'),prompt('Número da agencia:'),prompt('Data da abertura da conta:'))

// cliente2.NomeTitular = 'Emanul'
// cliente2.saldo = 1.518
// cliente2.numeroConta = 3232
// cliente2.numeroAgencia = 1
// cliente2.dataAbertura = '24/09/2025'

//  console.log(`Cliente: ${cliente2.NomeTitular = 'emanuel'}\nSaldo:${cliente2.saldo = 1.518}`)

console.log(`O nome do titular é: ${cliente1.NomeTitular}`)
// console.log(`O nome do titular é: ${cliente2.NomeTitular}`)

let opcao
do{
    opcao = prompt(`
    --- Menu Principal ---
    1 - Sacar
    2 - Depositar
    3 - Ver Saldo
    4 - Rendimento
    0 - Sair
    Escolha uma opção:`)
    switch(opcao){
        case '1':
           try{
           
            cliente1.sacar()
           }catch(valor){
            console.error(`Erro: ${valor.message}`)
           }    
        break
        case '2':
            
            try{
               cliente1.depositar()
               }catch(valor){
                console.error(`Erro: ${valor.message}`)
               }  
        break
        case '3':
            cliente1.versaldo()
        break
        case '4':
             try{
                cliente1.calcularrendimento()
                }catch(valor){
                 console.error(`Erro: ${valor.message}`)
                }
        break           
    }    
}while(opcao != '0')