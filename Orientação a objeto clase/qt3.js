import PromptSync from "prompt-sync"
const prompt = PromptSync()

class Data {
  constructor(dia, mes, ano) {
    this.dia = dia
    this.mes = mes
    this.ano = ano
  }

  escreverData() {
    console.log(
      `${this.dia.toString().padStart(2, "0")}/${this.mes
        .toString()
        .padStart(2, "0")}/${this.ano}`
    )
  }

  escreverMes() {
    const meses = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];

    if (this.mes >= 1 && this.mes <= 12) {
      console.log(meses[this.mes - 1])
    } else {
      console.log("Mês inválido!")
    }
  }

  quantoFaltaFimAno() {
    try {
      let dataAtual = new Date(this.ano, this.mes - 1, this.dia)
      let dataFim = new Date(this.ano, 11, 31)
      let diff = dataFim - dataAtual
      let dias = Math.floor(diff / (1000 * 60 * 60 * 24))
      console.log(`Faltam ${dias} dias para o fim do ano.`)
    } catch (e) {
      console.log("Data inválida!")
    }
  }
}



let dia = parseInt(prompt("Digite o dia: "))
let mes = parseInt(prompt("Digite o mês: "))
let ano = parseInt(prompt("Digite o ano: "))

let d = new Data(dia, mes, ano)

console.log("\n--- Primeira execução ---")
d.escreverData()
d.escreverMes()
d.quantoFaltaFimAno()


let novoMes = parseInt(prompt("\nDigite um novo mês: "))
d.mes = novoMes

console.log("\n--- Após alteração ---")
d.escreverData()
d.escreverMes()
d.quantoFaltaFimAno()
