import PromptSync from "prompt-sync"
const prompt = PromptSync()

console.log("Responda as perguntas apenas com sim ou não - ")
let re1 = prompt("Telefonou para a vítima? ").toLowerCase()
let re2 = prompt("Esteve no local do crime? ").toLowerCase()
let re3 = prompt("Mora perto da vítima? ").toLowerCase()
let re4 = prompt("Devia para a vítima? ").toLowerCase()
let re5 = prompt("Já trabalhou com a vítima? ").toLowerCase()

if ((re1   "sim" && re1 != "nao") || (re2 != "sim" && re2 != "nao") || (re3 != "sim" && re3 != "nao") ||
    (re4 != "sim" && re4 != "nao") || (re5 != "sim" && re5 != "nao")) {
    console.log("Digite apenas sim ou não para as perguntas!")
} else {
    switch (true) {
        case re1 === "sim" && re2 === "sim" && re3 === "sim" && re4 === "sim" && re5 === "sim":
            console.log("Assassino")
            break
        case (re1 === "sim" && re2 === "sim" && re3 === "sim") || (re1 === "sim" && re2 === "sim" && re4 === "sim") ||
            (re1 === "sim" && re2 === "sim" && re5 === "sim") || (re2 === "sim" && re3 === "sim" && re4 === "sim") ||
            (re2 === "sim" && re3 === "sim" && re5 === "sim") || (re3 === "sim" && re4 === "sim" && re5 === "sim"):
            console.log("Cúmplice")
            break
        case (re1 === "sim" && re2 === "sim") || (re1 === "sim" && re3 === "sim") || (re1 === "sim" && re4 === "sim") ||
            (re1 === "sim" && re5 === "sim") || (re2 === "sim" && re3 === "sim") || (re2 === "sim" && re4 === "sim") ||
            (re2 === "sim" && re5 === "sim") || (re3 === "sim" && re4 === "sim") || (re3 === "sim" && re5 === "sim") ||
            (re4 === "sim" && re5 === "sim"):
            console.log("Suspeito(a)")
            break
        default:
            console.log("Inocente")
    }
}