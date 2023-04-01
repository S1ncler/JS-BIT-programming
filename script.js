// FUNCIONES EN JS

// function ejecutar(){

// }

// funciones en variables

// let ejecutar = () {

// }

// const ejecutar = (){

// }

// llamar a una funcion

//ejecutar()

function suma(num1, num2) {
    console.log(num1 + num2)
}

// dado un numero el estudiante debe construir un algorimo que imprima el siguiente numero primo a ese numero
// restricciones
// el usuario debe escribir el numero por consola o promp y este debe responderle con el numero primo siguiente
// si el numero ingresado por el usuario no es primo este debe indicarle al usuario que el numero no es primo
// no usar chat gpt

function siguientePrimo() {
    let numUsuario = parseInt(prompt("Por favor escriba un numero"))
    let divisores = 0
    for (let i = numUsuario; i > 0; i--) {
        if (numUsuario % i === 0) divisores++
    }
    if (divisores > 2) console.log("el numero ingresado no es primo")
    let bandera = true
    let sigPrimo = numUsuario
    while (bandera){
        divisores = 0
        sigPrimo += 1
        for (let i = sigPrimo; i > 0; i--) {
            if (sigPrimo % i === 0) divisores++
        }
        if (divisores === 2){ 
            console.log(`el siguiente numero primo despues de ${numUsuario} es: ${sigPrimo}`)
            bandera = false
        }
    }
}