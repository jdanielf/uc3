import PromptSync from "prompt-sync"
const prompt = PromptSync()

class Lampada {
  constructor(potencia) {
    this.acesa = false
    this.potencia = potencia
  }

  acender() {
    this.acesa = true
    console.log("A lâmpada foi acesa.")
  }

  apagar() {
    this.acesa = false
    console.log("A lâmpada foi apagada.")
  }

  informarSituacao() {
    if (this.acesa) {
      console.log("A luz está acesa!")
    } else {
      console.log("A luz está apagada!")
    }
  }

  informarPotencia() {
    console.log(`A potência da lâmpada é ${this.potencia}W.`)
  }
}


let lampada = new Lampada(60)

lampada.acender()
lampada.informarSituacao()
lampada.apagar()
lampada.informarSituacao()
lampada.informarPotencia()



while (true) {
  console.log("\nMenu:")
  console.log("[1] Acender lâmpada")
  console.log("[2] Apagar lâmpada")
  console.log("[3] Informar situação")
  console.log("[4] Informar potência")
  console.log("[5] Sair")

  let opcao = prompt("Escolha uma opção: ")

  switch (opcao) {
    case "1":
      lampada.acender()
      break
    case "2":
      lampada.apagar()
      break
    case "3":
      lampada.informarSituacao()
      break
    case "4":
      lampada.informarPotencia()
      break
    case "5":
      console.log("Programa encerrado.")
      process.exit()
    default:
      console.log("Opção inválida! Tente novamente.")
  }
}