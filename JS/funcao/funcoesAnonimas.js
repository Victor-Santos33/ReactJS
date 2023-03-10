//Função anonima é uma função sem nome

const soma = function (x,y){
    return x+y
}

const imprimirResultado = function (a,b, operacao = soma){
    console.log(operacao(a,b))
}

imprimirResultado(3,4)
imprimirResultado(3,4, soma)

//Funcao anonima
imprimirResultado(3,4, function (x,y){
    return x-y
})


//Funcao anonima com arrow function
imprimirResultado(3,4,(x,y)=>x*y)

const pessoa = {
    falar: function(){ // A palavra function é opcional na nova versão JS
        console.log('Opa')
    }
}

pessoa.falar()