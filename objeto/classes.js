import PromptSync from "prompt-sync"
const prompt = PromptSync()



export class Cliente {
    #cpf
    #contato
    constructor(nome, cpf, contato) {
        this.nome = nome
        this.#cpf = cpf
        this.#contato = contato
    }

    get cpf() {
        return this.#cpf
    }

    get contato() {
        return this.#contato
    }
}

export class Quarto {
    constructor(numero, tipoQuarto) {
        this.numero = numero
        this.tipoQuarto = tipoQuarto
    }
}

export class Reserva {
    constructor(quarto, dataReserva, cliente) {
        this.quarto = quarto
        this.dataReserva = dataReserva
        this.cliente = cliente
    }
}

export class Hotel {
    constructor(nome) {
        this.nome = nome
        this.quartos = []
        this.reservas = []
    }

    adicionarQuarto(numero, tipoQuarto) {
        const existe = this.quartos.find(q => q.numero === numero)
        if (existe) throw new Error(" Quarto já existe!")
        this.quartos.push(new Quarto(numero, tipoQuarto))
    }

    reservarQuarto(numero, data, cliente) {
        const dataReserva = new Date(data)
        const hoje = new Date()

        if (dataReserva < hoje) throw new DataInvalida("Data no passado!")

        const quarto = this.quartos.find(q => q.numero === numero)
        if (!quarto) throw new Error("Quarto não encontrado!")

        const reservaExistente = this.reservas.find(
            r => r.quarto.numero === numero &&
                 r.dataReserva.toDateString() === dataReserva.toDateString()
        )

        if (reservaExistente) throw new QuartoOcupado("Quarto já reservado!")

        const reserva = new Reserva(quarto, dataReserva, cliente)
        this.reservas.push(reserva)
    }

    cancelarReserva(numero, data, cpf) {
        const dataReserva = new Date(data)
        const indice = this.reservas.findIndex(
            r => r.quarto.numero === numero &&
                 r.dataReserva.toDateString() === dataReserva.toDateString() &&
                 r.cliente.cpf === cpf
        )

        if (indice === -1) throw new Error("Reserva não encontrada!")
        this.reservas.splice(indice, 1)
    }

    listarQuartosDisponiveis(data) {
        const dataConsulta = new Date(data)
        const ocupados = this.reservas
            .filter(r => r.dataReserva.toDateString() === dataConsulta.toDateString())
            .map(r => r.quarto.numero)

        return this.quartos.filter(q => !ocupados.includes(q.numero))
    }

    listarReservas() {
        return this.reservas
    }

    informacoesReserva(numero, data) {
        const dataReserva = new Date(data)
        return this.reservas.find(
            r => r.quarto.numero === numero &&
                 r.dataReserva.toDateString() === dataReserva.toDateString()
        )
    }
}

export class QuartoOcupado extends Error {
    constructor(message) {
        super(message)
        this.name = "Quarto Ocupado"
    }
}

export class DataInvalida extends Error {
    constructor(message) {
        super(message)
        this.name = "Data Invalida"
    }
}