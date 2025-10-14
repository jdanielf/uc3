import PromptSync from "prompt-sync"
import {Cliente, Quarto, Reserva, Hotel, QuartoOcupado, DataInvalida  } from "./classes.js"
const prompt = PromptSync()



   const hotel = new Hotel("Paraíso dos Sonhos")

let opcao
do {
    console.log("\n=== MENU HOTEL ===")
    console.log("1 - Adicionar quarto")
    console.log("2 - Reservar quarto")
    console.log("3 - Cancelar reserva")
    console.log("4 - Listar quartos disponíveis")
    console.log("5 - Listar todas as reservas")
    console.log("6 - Mostrar informações da reserva")
    console.log("0 - Sair")
    opcao = prompt("Escolha uma opção: ")

    try {
        switch (opcao) {
            case "1":
                const num = prompt("Número do quarto: ")
                const tipo = prompt("Tipo do quarto: ")
                hotel.adicionarQuarto(num, tipo)
                console.log("Quarto adicionado!")
                break

            case "2":
                const numero = prompt("Número do quarto: ")
                const data = prompt("Data da reserva (AAAA-MM-DD): ")
                const nome = prompt("Nome do cliente: ")
                const cpf = prompt("CPF: ")
                const contato = prompt("Contato: ")

                const cliente = new Cliente(nome, cpf, contato)
                hotel.reservarQuarto(numero, data, cliente)
                console.log("Reserva feita com sucesso!")
                break

            case "3":
                const numCanc = prompt("Número do quarto: ")
                const dataCanc = prompt("Data da reserva (AAAA-MM-DD): ")
                const cpfCanc = prompt("CPF do cliente: ")
                hotel.cancelarReserva(numCanc, dataCanc, cpfCanc)
                console.log("Reserva cancelada!")
                break

            case "4":
                const dataDisp = prompt("Data para verificar (AAAA-MM-DD): ")
                const disponiveis = hotel.listarQuartosDisponiveis(dataDisp)
                if (disponiveis.length === 0) {
                    console.log("Nenhum quarto disponível.")
                } else {
                    console.log("Quartos disponíveis:")
                    disponiveis.forEach(q => console.log(`- ${q.numero} (${q.tipoQuarto})`))
                }
                break

            case "5":
                const reservas = hotel.listarReservas()
                if (reservas.length === 0) {
                    console.log(" Nenhuma reserva encontrada.")
                } else {
                    reservas.forEach(r => {
                        console.log(`➡️ Quarto ${r.quarto.numero} | ${r.dataReserva.toLocaleDateString()} | ${r.cliente.nome}`)
                    })
                }
                break

            case "6":
                const numInfo = prompt("Número do quarto: ")
                const dataInfo = prompt("Data da reserva (AAAA-MM-DD): ")
                const info = hotel.informacoesReserva(numInfo, dataInfo)
                if (info) {
                    console.log(`ℹ Cliente: ${info.cliente.nome}`)
                    console.log(`CPF: ${info.cliente.cpf}`)
                    console.log(`Quarto: ${info.quarto.numero} (${info.quarto.tipoQuarto})`)
                    console.log(`Data: ${info.dataReserva.toLocaleDateString()}`)
                } else {
                    console.log(" Reserva não encontrada.")
                }
                break

            case "0":
                console.log(" Saindo do sistema...")
                break

            default:
                console.log("Opção inválida!")
        }
    } catch (erro) {
        console.log(` Erro: ${erro.message}`)
    }
} while (opcao !== "0")