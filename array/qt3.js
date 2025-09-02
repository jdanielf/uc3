import PromptSync from "prompt-sync"
const prompt = PromptSync()

let pasta1=[] , pasta2=[], pasta3=[],i=0, c=0

console.log(`Digite 20 palavras para duas turmas`)
// for(let i=0; i<6 ; i++){
//     pasta1[i]= prompt(`Digite os nomes da primeira turma, ${i+1}º palavras: `)
// }
// for(let i=0; i<6 ; i++){
//     pasta2[i]= prompt(`Digite os nomes da segunda turma ${i+1}º palavras: `)
// }
// for(let i=0; i<6 ; i++){
//    pasta3.push(pasta1[i])
//    pasta3.push(pasta2[i])

// }


// console.log(`pasta 1:`, pasta1)
// console.log(`pasta 2:`,pasta2)
// console.log(`pasta 3:`,pasta3)
console.log("Digite os nomes da primeira turma")
do{
    pasta1[i]= prompt(` ${i+1}º palavras: `)
i++
}while(i<6)

console.log("Digite os nomes da segunda turma")
do{
    pasta2[c]= prompt(` ${c+1}º palavras: `) 
    c++  
}
while(c<6)

    for(let i=0; i<6 ; i++){
           pasta3.push(pasta1[i])
           pasta3.push(pasta2[i])
        
        }

        console.log(`pasta 1:`, pasta1)
        console.log(`pasta 2:`,pasta2)
        console.log(`pasta 3:`,pasta3)

