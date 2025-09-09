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

let busca = prompt("Qual peça deseja: ").toLowerCase()

let achei = catmesc.indexOf(busca)


    if(achei!=-1){     
        console.log(`Peça encontrada na posição ${achei+1}`)
      }
    else{
        console.log(`Produto não faz parte da coleção!`)       
    }
