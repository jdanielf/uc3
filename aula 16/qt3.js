import PromptSync from "prompt-sync"
const prompt = PromptSync()
let alt, larg, area, peri
console.log("Para saber a área e perímetro do retângulo, digite os dados solicitados")
alt=Number(prompt("Digite a altura: "))
larg=Number(prompt("Digite a largura: "))
area=alt*larg
peri=2*(alt+larg)
console.log("A área do retângulo é " + area+"m²")
console.log("O perímetro do retângulo é "+peri)