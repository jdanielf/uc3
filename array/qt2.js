import PromptSync from "prompt-sync"
const prompt = PromptSync()

let con=[], todos

console.log(`Digite 15 letras para saber quais são vogais`)

for(let i=0 ; i<15; i++){
    todos=String(prompt(`Digite a ${i+1}º letra: `)).toLocaleLowerCase()
    if(todos>="a" && todos<="z"){
    if(todos!= "a" && todos!= "e" && todos!= "i" && todos!= "o" && todos!= "u"){
        con.push(todos)
    }}else{
        console.log("digite apenas letras")
        i--
    }
}
console.log(`Foram digitas ${con.length} consoantes
Foram elas - ${con} `)
    
