import PromptSync from "prompt-sync"
const prompt = PromptSync()

let cat=["camisa", "calça", "saia", "vestido", "casaco", "calção","camisola","meias","pijama","uniforme"]
let novcat=["cinto", "boina","botas", "pulseira", "casaco", "brinco", "luvas","colar","gravata","carteira"]
let catmesc=[]

console.log("Primeiro catálogo: ")
console.log(cat)

cat.splice(3,3)

console.log("Catalogo atualizado: ")
console.log(cat)

catmesc = cat.concat(novcat)

console.log("Novo catálogo: ")
console.log(catmesc)

let busca= prompt("Qual peça deseja: ")

for(let i =0 ; i<catmesc.length; i++){
    if(catmesc[i]===busca)
        console(`Peça encontrada na posição ${i}`)
    else{
        console(`Produto não faz parte da coleção!`)
    }
}