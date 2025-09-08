import PromptSync from "prompt-sync"
const prompt = PromptSync()

let corrigida=[]
let tex, jorn=[], ofen=["merda", "droga", "bomba", "lula"], i, c=0


tex = prompt(`Digite o texto do artigo para publicação: `).toLocaleLowerCase
jorn=tex.split(" ")

for(i=0 ; i<= jorn.length ; i++){

if(ofen.includes(jorn[i])){
    jorn[i] = '*****'
    c++

}
}
corrigida=jorn.join(" ")

console.log(jorn)
console.log("Palavras ofencivas: ",c)
console.log(corrigida)