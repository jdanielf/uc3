import PromptSync from "prompt-sync"
const prompt = PromptSync()

let sal = 510, aum = 1.5, bon, sla2011

console.log("2010    ", aum, "     ",sal )
for(let i = 2010 ; i<=2025 ; i++ ){
    if(i==2011){
        console.log(i,"   ",((sal*aum)/100),"     ",sal+(sal*aum/100) )  
        sla2011 = sal+(sal*aum/100)
    }else if(i>2011 && i<=2025){
       aum+=1.5
       sla2011+=sla2011*(aum/100)
        bon =(sla2011*aum)/100
        
       
       console.log(i,"   ",aum,"     ",sla2011.toFixed(2) )
        
    }
  
}