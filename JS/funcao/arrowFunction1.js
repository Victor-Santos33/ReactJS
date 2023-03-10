let dobro = function (a){
    return 2*a
}

dobro = (a) => {
    return 2 *a
}

dobro = a => 2*a //unico parametro, retorno implicito 
console.log(dobro(20))

triplo = b => 3*b
console.log(triplo(30))

metade = c => c/2
console.log(metade(10))

quadrado = d => d*d
console.log(quadrado(5))

ola = () => 'olá'
ola = _ => 'olá' //possui param
console.log(ola())