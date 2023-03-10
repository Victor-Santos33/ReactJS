const notas = [7.5, 8.3, 5.9, 7, 9, 3.5]

// Sem callback
let notasBaixa = []
    for (let i in notas){
        if(notas[i] < 7){
            notasBaixa.push(notas[i])
        }
}
console.log(notasBaixa)

// Com callback
const notasBaixa2 = notas.filter(function(nota){
    return nota < 7
})
console.log(notasBaixa2)

//Com callback e arrow
const notasBaixa3 = notas.filter( notas => notas < 7)
console.log(notasBaixa3)