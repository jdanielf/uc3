import PromptSync from "prompt-sync"
const prompt = PromptSync()

let tipo= prompt("Digite o tipo que deseja realizar - básica ou avançada: ").toLowerCase()

if (tipo ==="basica"){
    let oper= prompt("Agora,escolha entre as operações que deseja o resultado - Soma, subitração, multiplicação ou divisão: ").toLowerCase()
    let num1=Number(prompt("Digite o primeiro número: "))
    let num2=Number(prompt("Digite o segundo número: "))


    switch(oper){
        case "soma": 
        console.log("A soma dos números é " +(num1+num2).toFixed(2))
        break
        case "subtracao": 
        console.log("A subtração dos números é " +(num1-num2).toFixed(2))
        break
        case "multiplicacao": 
        console.log("A multiplicação dos números é " +(num1*num2).toFixed(2))
        break
        case "divisao":
            if(num2<=0){
               console.log("O denominador, deve ser maior que 0") 
            } else{
                console.log("A divisão dos números é " +(num1/num2).toFixed(2))
            }
        break
        default:
            console.log("Operação ou números inválidos'")
        break
  }
}else if(tipo==="avancada"){
     let oper= prompt("Agora,escolha entre as operações que deseja o resultado - Raiz quadrada ou potência: ").toLowerCase()
      switch(oper){
        case "raiz quadrada":
            let num1=Number(prompt("Digite o número para saber a riaz quadrada: "))
            if(num1<=0){
                console.log("Digite um número maior que zero!")
            }
            else{
                console.log("A raiz quadrada do número "+num1+ " é "+ Math.sqrt(num1).toFixed(2))
            }break
        case "potencia":
            let base=Number(prompt("Digite o valor da base: "))
            let exp=Number(prompt("Digite o valor do expoente: "))

            console.log("A base "+base+ " elevado ao expoente "+exp+ " é "+ Math.pow(base,exp).toFixed(2))
         break
         default:
            console.log("Operação ou números inválidos'")  

      }

  }else{
    console.log("Escolha entre básica ou avançada")
  }