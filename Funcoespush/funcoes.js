export const calcalorias = (atv,tempo)=>{
    let cal=0
    if(atv==="caminhada"){
        cal = tempo*5
    }if(atv ==="bicicleta"){
        cal=tempo*8
    }if(atv ==="corrida"){
        cal=tempo*10
    }
    return cal
}

export const depositar = (saldo, valor)=>{
    return saldo+valor
}

export const sacar = (saldo,valor)=>{
    if(saldo<valor){
    //    return `Saldo insuficiente para este valor de saque!`
    }else{
        return (saldo-valor).toFixed(2)
    }
}